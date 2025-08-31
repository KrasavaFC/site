<script lang="ts">
  import { onMount } from "svelte";
  import Footer from "../Footer.svelte";
  import Header from "../Header.svelte";

  const TEAM_ID = 3424;
  const TEAM_NAME_SITE = "FC Freedom24 Krasava ENY";
  const API_KEY = "8ba875d194dca14499319ae757224ee3";
  const LEAGUE_ID = 318;
  const SEASON = 2025;

  type ApiFixture = {
    fixture: {
      id: number;
      timestamp: number;
      date: string;
      venue: { name: string | null; city: string | null };
      status: { short: string; long: string };
    };
    league: { id: number; name: string; season: number; round?: string | null };
    teams: {
      home: { id: number; name: string; logo: string | null };
      away: { id: number; name: string; logo: string | null };
    };
  };

  type MatchView = {
    id: number;
    league: string;
    round?: string | null;
    timeLabel: string;
    venue: string;
    homeName: string;
    homeLogo: string | null;
    awayName: string;
    awayLogo: string | null;
    monthKey: string;
    dateObj: Date;
  };

  let loading = true;
  let error: string | null = null;
  let grouped: Record<string, MatchView[]> = {};

  // ——— helpers ———

  // Жёстко используем английскую локаль
  const EN_LOCALE = "en-GB";

  function formatTime(d: Date): string {
    // "15 Dec 2025 - 8:30 p.m."
    const day = d.getDate().toString().padStart(2, "0");
    const month = d.toLocaleString(EN_LOCALE, { month: "short" });
    const year = d.getFullYear();
    let hours = d.getHours();
    const minutes = d.getMinutes().toString().padStart(2, "0");
    const ampm = hours >= 12 ? "p.m." : "a.m.";
    hours = hours % 12 || 12;
    return `${day} ${month} ${year} - ${hours}:${minutes} ${ampm}`;
  }

  function monthKey(d: Date): string {
    return d.toLocaleString(EN_LOCALE, { month: "long", year: "numeric" });
  }

  function groupByMonth(matches: MatchView[]): Record<string, MatchView[]> {
    const acc: Record<string, MatchView[]> = {};
    for (const m of matches) {
      if (!acc[m.monthKey]) acc[m.monthKey] = [];
      acc[m.monthKey].push(m);
    }
    for (const k of Object.keys(acc)) {
      acc[k].sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime());
    }
    return acc;
  }

  // Маппинг имени команды из API в отображаемое имя на сайте
  function mapTeamName(name: string | null | undefined): string {
    if (!name) return "";
    // case-insensitive сравнение
    if (name.trim().toLowerCase() === "digenis ypsonas") {
      return TEAM_NAME_SITE;
    }
    return name;
  }

  async function loadFixtures() {
    try {
      const params = new URLSearchParams({
        team: String(TEAM_ID),
        league: String(LEAGUE_ID),
        season: String(SEASON),
      });

      const res = await fetch(
        `https://v3.football.api-sports.io/fixtures?${params.toString()}`,
        {
          headers: { "x-apisports-key": API_KEY },
        }
      );
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = (await res.json()) as { response: ApiFixture[] };

      const nowMs = Date.now();

      const upcoming = (data.response || [])
        .filter((fx) => fx.fixture.timestamp * 1000 >= nowMs)
        .filter(
          (fx) => fx.league?.id === LEAGUE_ID && fx.league?.season === SEASON
        )
        .map<MatchView>((fx) => {
          const d = new Date(fx.fixture.timestamp * 1000);
          return {
            id: fx.fixture.id,
            league: fx.league?.name ?? "League",
            round: fx.league?.round ?? null,
            timeLabel: formatTime(d),
            venue:
              [fx.fixture.venue?.name, fx.fixture.venue?.city]
                .filter(Boolean)
                .join(", ") || "TBA",
            homeName: mapTeamName(fx.teams.home?.name),
            homeLogo: fx.teams.home?.logo ?? null,
            awayName: mapTeamName(fx.teams.away?.name),
            awayLogo: fx.teams.away?.logo ?? null,
            monthKey: monthKey(d),
            dateObj: d,
          };
        });

      grouped = groupByMonth(upcoming);
    } catch (e: any) {
      error = e?.message ?? "Unknown error";
    } finally {
      loading = false;
    }
  }

  onMount(loadFixtures);
</script>

<a href="#" class="scroll-top">
  <i class="fa-solid fa-arrow-up-long"></i>
</a>

<Header />

<div class="page-title-upcome">
  <div class="title">
    <h2>Upcoming matches</h2>
  </div>

  <div class="link">
    <a href="/">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Upcoming matches</span>
  </div>
</div>

<section class="matches">
  <div class="heading">
    <h2>Upcoming matches</h2>
  </div>

  {#if loading}
    <p>Loading fixtures…</p>
  {:else if error}
    <p style="color:crimson">Failed to load fixtures: {error}</p>
  {:else}
    <div class="box-container">
      {#if Object.keys(grouped).length === 0}
        <p>No upcoming matches found.</p>
      {:else}
        {#each Object.keys(grouped).sort((a, b) => grouped[a][0].dateObj.getTime() - grouped[b][0].dateObj.getTime()) as month}
          <div class="monthly-matches">
            <div class="sub-heading">
              <h3>{month}</h3>
            </div>

            {#each grouped[month] as m}
              <div class="match-item">
                <a href={`/fixture?id=${m.id}`}>
                  <div class="match-detail">
                    <div class="league">{m.league}</div>
                    {#if m.round}
                      <div class="league" style="opacity:.8">
                        Round: {m.round}
                      </div>
                    {/if}
                    <div class="time">{m.timeLabel}</div>
                    <div class="venue">{m.venue}</div>
                  </div>
                  <div class="match-intro">
                    <div class="team-logo">
                      <h3>{m.homeName}</h3>
                      {#if m.homeLogo}
                        <img src={m.homeLogo} alt="logo" />
                      {/if}
                    </div>
                    <div class="result"><span>VS</span></div>
                    <div class="team-logo">
                      {#if m.awayLogo}
                        <img src={m.awayLogo} alt="logo" />
                      {/if}
                      <h3>{m.awayName}</h3>
                    </div>
                  </div>
                </a>
                <div class="action-container">
                  <a href="https://tickets.krasavafc.com/"
                    ><i class="fas fa-ticket-alt"></i>
                    <span>Buy ticket</span></a
                  >
                  <!-- <a href={`/pages/Pages/Fixture-Single.html?fixture=${m.id}`}>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <span>Match Report</span>
                  </a> -->
                </div>
              </div>
            {/each}
          </div>
        {/each}
      {/if}
    </div>
  {/if}
</section>

<Footer />
