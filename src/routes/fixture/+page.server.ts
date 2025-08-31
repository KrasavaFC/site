import type { PageServerLoad } from './$types';

const EN = 'en-GB';
const TZ = 'Europe/Nicosia';
const TEAM_NAME_SITE = 'FC Freedom24 Krasava ENY';
const APISPORTS_KEY = '8ba875d194dca14499319ae757224ee3';

function mapTeamName(name?: string | null) {
  if (!name) return '';
  return name.trim().toLowerCase() === 'digenis ypsonas' ? TEAM_NAME_SITE : name;
}

function fmtDate(ts?: number, iso?: string): string {
  const d = ts ? new Date(ts * 1000) : (iso ? new Date(iso) : new Date());
  const day = d.getDate().toString().padStart(2, '0');
  const mon = d.toLocaleString(EN, { month: 'short', timeZone: TZ });
  const y = d.getFullYear();
  const h24 = Number(new Intl.DateTimeFormat('en-US', { hour: 'numeric', hour12: false, timeZone: TZ }).format(d));
  const ampm = h24 >= 12 ? 'p.m.' : 'a.m.';
  const h12 = ((h24 % 12) || 12).toString();
  const mm = d.toLocaleString(EN, { minute: '2-digit', timeZone: TZ });
  return `${day} ${mon} ${y} - ${h12}:${mm} ${ampm}`;
}

function prettyRound(round?: string | null): string | null {
  if (!round) return null;
  const m = /(\d+)/.exec(round);
  return m ? `Matchday ${m[1]}` : round;
}

type ApiEvent = {
  time: { elapsed: number; extra: number | null };
  team: { id: number; name: string; logo: string };
  player?: { id: number | null; name: string | null };
  assist?: { id: number | null; name: string | null };
  type: 'Goal' | 'Card' | 'subst' | 'Var' | string;
  detail: string | null;
  comments?: string | null;
};

export const load: PageServerLoad = async ({ url, fetch }) => {
  const id = url.searchParams.get('id');
  if (!id) {
    return { status: 400, error: 'Missing ?id param' };
  }

  // 1) Основной матч
  const res = await fetch(`https://v3.football.api-sports.io/fixtures?id=${id}`, {
    headers: { 'x-apisports-key': APISPORTS_KEY }
  });
  if (!res.ok) {
    return { status: res.status, error: `Failed to fetch fixture ${id}` };
  }
  const data = await res.json();
  const fx = data?.response?.[0];
  if (!fx) {
    return { status: 404, error: 'Fixture not found' };
  }

  const when = fmtDate(fx.fixture?.timestamp, fx.fixture?.date);
  const venue = [fx.fixture?.venue?.name, fx.fixture?.venue?.city].filter(Boolean).join(', ') || 'TBA';

  // 2) События матча (таймлайн)
  let eventsTimeline: Array<{
    minute: string;             // e.g. "66’" или "90+3’"
    rawMinute: number;          // для сортировки
    rawExtra: number;           // для сортировки
    type: string;               // Goal/Card/subst/Var
    detail: string | null;
    teamId: number;
    teamName: string;
    teamLogo: string;
    playerName: string | null;
    assistName: string | null;
  }> = [];

  try {
    const evRes = await fetch(`https://v3.football.api-sports.io/fixtures/events?fixture=${id}`, {
      headers: { 'x-apisports-key': APISPORTS_KEY }
    });
    if (evRes.ok) {
      const evJson = await evRes.json();
      const events: ApiEvent[] = evJson?.response ?? [];
      eventsTimeline = events.map((e) => {
        const extra = e.time?.extra ?? null;
        const rawMinute = e.time?.elapsed ?? 0;
        const rawExtra = extra ?? 0;
        const minuteLabel = extra ? `${rawMinute}+${extra}’` : `${rawMinute}’`;
        return {
          minute: minuteLabel,
          rawMinute,
          rawExtra,
          type: e.type,
          detail: e.detail ?? null,
          teamId: e.team?.id,
          teamName: mapTeamName(e.team?.name),
          teamLogo: e.team?.logo,
          playerName: e.player?.name ?? null,
          assistName: e.assist?.name ?? null
        };
      }).sort((a, b) => a.rawMinute - b.rawMinute || a.rawExtra - b.rawExtra);
    }
  } catch {
    // молча пропускаем — просто не будет таймлайна
  }

  return {
    id,
    league: fx.league?.name ?? 'League',
    round: fx.league?.round ?? null,
    roundPretty: prettyRound(fx.league?.round),
    when,
    venue,
    referee: fx.fixture?.referee ?? null,

    statusShort: fx.fixture?.status?.short,
    statusLong: fx.fixture?.status?.long,

    goalsHome: fx.goals?.home ?? fx.score?.fulltime?.home ?? null,
    goalsAway: fx.goals?.away ?? fx.score?.fulltime?.away ?? null,

    home: {
      id: fx.teams?.home?.id,
      name: mapTeamName(fx.teams?.home?.name),
      logo: fx.teams?.home?.logo,
      winner: fx.teams?.home?.winner
    },
    away: {
      id: fx.teams?.away?.id,
      name: mapTeamName(fx.teams?.away?.name),
      logo: fx.teams?.away?.logo,
      winner: fx.teams?.away?.winner
    },

    // Таймлайн событий с минутой
    eventsTimeline
  };
};
