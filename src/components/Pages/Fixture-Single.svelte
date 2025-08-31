<script lang="ts">
  import Footer from "../Footer.svelte";
  import Header from "../Header.svelte";

  type TimelineEvent = {
    minute: string;
    type: string;
    detail: string | null;
    teamId: number;
    teamName: string;
    teamLogo: string;
    playerName: string | null;
    assistName: string | null;
  };

  export let data: {
    id?: string;
    league?: string;
    round?: string | null;
    roundPretty?: string | null;
    when?: string;
    venue?: string;
    referee?: string | null;

    statusShort?: string;
    statusLong?: string;

    goalsHome?: number | null;
    goalsAway?: number | null;

    home?: { id?: number; name?: string; logo?: string | null };
    away?: { id?: number; name?: string; logo?: string | null };

    eventsTimeline?: TimelineEvent[];
  };

  const homeId: number | undefined = data?.home?.id;
  const awayId: number | undefined = data?.away?.id;

  function statusBadge(short?: string, long?: string) {
    if (short === "NS") return "Upcoming";
    if (short === "TBD") return "TBD";
    if (short === "FT") return "Full time";
    if (["1H", "HT", "2H", "ET", "P"].includes(short || ""))
      return `Live: ${long || short}`;
    return long || "—";
  }

  function iconFor(type: string, detail?: string | null) {
    const t = (type || "").toLowerCase();
    if (t === "goal") return "⚽";
    if (t === "card")
      return (detail || "").toLowerCase().includes("red") ? "🟥" : "🟨";
    if (t === "subst") return "🔄";
    if (t === "var") return "🎥";
    return "•";
  }

  function groupByMinute(events: TimelineEvent[]) {
    const map = new Map<
      string,
      { minuteLabel: string; left: TimelineEvent[]; right: TimelineEvent[] }
    >();
    for (const e of events || []) {
      const key = e.minute;
      if (!map.has(key))
        map.set(key, { minuteLabel: key, left: [], right: [] });
      const bucket = map.get(key)!;
      const side = e.teamId === homeId ? "left" : "right";
      bucket[side].push(e);
    }
    return Array.from(map.values());
  }

  const timeline = groupByMinute(data?.eventsTimeline || []);
</script>

<a href="#" class="scroll-top">
  <i class="fa-solid fa-arrow-up-long"></i>
</a>

<Header />

<div class="page-title-match">
  <div class="title"><h2>Match Info</h2></div>
  <div class="link">
    <a href="/">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Match</span>
  </div>
</div>

<section class="match-single fixture-single page-single">
  <div class="match-info page-info">
    <div class="match-single-intro">
      <div class="match-detail">
        <div class="league">{data?.league} {data?.roundPretty}</div>

        <div class="time">{data?.when}</div>
        <div class="venue">{data?.venue}</div>
      </div>

      <div class="match-intro">
        <div class="team-logo">
          <h3>{data?.home?.name}</h3>
          {#if data?.home?.logo}
            <img src={data.home.logo} alt="home logo" />
          {/if}
        </div>
        <div class="result">
          {#if data?.goalsHome !== null && data?.goalsAway !== null}
            <span>{data.goalsHome} : {data.goalsAway}</span>
          {:else}
            <span>VS</span>
          {/if}
        </div>
        <div class="team-logo">
          {#if data?.away?.logo}
            <img src={data.away.logo} alt="away logo" />
          {/if}
          <h3>{data?.away?.name}</h3>
        </div>
      </div>
    </div>

    {#if timeline.length}
      <div class="fixture-details-sidebar page-sidebar timeline-box">
        <div class="timeline">
          {#each timeline as block}
            <div class="timeline-row">
              <div class="timeline-side left">
                {#each block.left as ev}
                  <div class="event pill {ev.type?.toLowerCase()}">
                    <span class="ev-icon">{iconFor(ev.type, ev.detail)}</span>
                    <span class="ev-team">{ev.teamName}</span>
                    <span class="ev-desc">
                      {#if ev.type.toLowerCase() === "goal"}
                        — {ev.playerName || "Unknown"}{#if ev.assistName}
                          (assist: {ev.assistName}){/if}
                      {:else if ev.type.toLowerCase() === "card"}
                        — {ev.playerName || "Unknown"} ({ev.detail})
                      {:else if ev.type.toLowerCase() === "subst"}
                        — {ev.detail || "Substitution"}
                      {:else if ev.type.toLowerCase() === "var"}
                        — {ev.detail || "VAR"}
                      {:else}
                        — {ev.detail || ev.playerName || "Event"}
                      {/if}
                    </span>
                  </div>
                {/each}
              </div>

              <div class="timeline-center">
                <div class="minute">{block.minuteLabel}</div>
                <div class="line"></div>
              </div>

              <div class="timeline-side right">
                {#each block.right as ev}
                  <div class="event pill {ev.type?.toLowerCase()}">
                    <span class="ev-icon">{iconFor(ev.type, ev.detail)}</span>
                    <span class="ev-team">{ev.teamName}</span>
                    <span class="ev-desc">
                      {#if ev.type.toLowerCase() === "goal"}
                        — {ev.playerName || "Unknown"}{#if ev.assistName}
                          (assist: {ev.assistName}){/if}
                      {:else if ev.type.toLowerCase() === "card"}
                        — {ev.playerName || "Unknown"} ({ev.detail})
                      {:else if ev.type.toLowerCase() === "subst"}
                        — {ev.detail || "Substitution"}
                      {:else if ev.type.toLowerCase() === "var"}
                        — {ev.detail || "VAR"}
                      {:else}
                        — {ev.detail || ev.playerName || "Event"}
                      {/if}
                    </span>
                  </div>
                {/each}
              </div>
            </div>
          {/each}
        </div>
      </div>
    {:else}
      <div class="fixture-details-sidebar page-sidebar timeline-box">
        <h3 class="sub-heading">Match Timeline</h3>
        <p class="muted">No events available.</p>
      </div>
    {/if}
  </div>

  <div class="fixture-details-sidebar page-sidebar">
    <h3 class="sub-heading">Match Info</h3>
    <div class="container">
      <div class="detail-item">
        <i class="fa-regular fa-calendar-days"></i>
        <div class="detail-content">
          <h3>Date</h3>
          <p>{data?.when?.split(" - ")[0] || "—"}</p>
        </div>
      </div>
      <div class="detail-item">
        <i class="fa-regular fa-clock"></i>
        <div class="detail-content">
          <h3>Time</h3>
          <p>{data?.when?.split(" - ")[1] || "—"}</p>
        </div>
      </div>
      <div class="detail-item">
        <i class="fa-regular fa-map"></i>
        <div class="detail-content">
          <h3>Stadium</h3>
          <p>{data?.venue || "—"}</p>
        </div>
      </div>
      <div class="detail-item">
        <i class="fa-solid fa-trophy"></i>
        <div class="detail-content">
          <h3>Competition</h3>
          <p>{data?.league || "—"}</p>
        </div>
      </div>
      <div class="detail-item">
        <i class="fa-solid fa-user"></i>
        <div class="detail-content">
          <h3>Referee</h3>
          <p>{data?.referee || "—"}</p>
        </div>
      </div>
      <div class="detail-item">
        <i class="fa-solid fa-info-circle"></i>
        <div class="detail-content">
          <h3>Status</h3>
          <p>{statusBadge(data?.statusShort, data?.statusLong)}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer />

<style>
  .timeline-box {
    margin-top: 20px;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 18px;
  }

  .timeline-row {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: stretch;
    gap: 14px;
  }

  .timeline-side {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .timeline-side.left {
    align-items: flex-end;
  }
  .timeline-side.right {
    align-items: flex-start;
  }

  .timeline-center {
    position: relative;
    width: 92px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .timeline-center .minute {
    background: #1b2433;
    color: #fff;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    padding: 8px 12px;
    font-weight: 800;
    font-size: 1.05rem;
    letter-spacing: 0.2px;
    z-index: 2;
  }
  .timeline-center .line {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 2px;
    transform: translateX(-50%);
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.22),
      rgba(255, 255, 255, 0.08)
    );
    z-index: 1;
  }

  .event {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 6px 10px;
    max-width: 100%;
    border: 1px solid transparent;
    border-radius: 20px;
    padding: 10px 14px;
    background: #131b29;
    border-color: rgba(255, 255, 255, 0.06);
    font-size: 1.05rem;
    line-height: 1.4;
  }

  .ev-icon {
    flex: 0 0 auto;
    width: 22px;
    text-align: center;
    font-size: 1.5rem;
  }

  .ev-team {
    flex: 0 0 auto;
    font-weight: 800;
    white-space: nowrap;
    color: white;
    font-size: small;
  }

  .ev-desc {
    flex: 1 1 100%;
    white-space: normal;
    word-break: break-word;
    overflow-wrap: break-word;
    opacity: 0.92;
    color: white;
    font-size: small;
  }

  .event.goal {
    background: #122414;
    border-color: rgba(86, 226, 114, 0.22);
  }
  .event.card {
    background: #2a1f15;
    border-color: rgba(255, 193, 7, 0.25);
  }
  .event.subst {
    background: #121f2a;
    border-color: rgba(91, 192, 235, 0.25);
  }
  .event.var {
    background: #1f1a2a;
    border-color: rgba(170, 132, 255, 0.25);
  }

  @media (max-width: 680px) {
    .timeline-row {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .timeline-center {
      width: auto;
      align-self: center;
      margin: 4px 0 2px;
    }
    .timeline-center .line {
      display: none;
    }

    .timeline-side.left,
    .timeline-side.right {
      align-items: stretch;
    }

    .event {
      width: 100%;
      font-size: 1.06rem;
    }
    .timeline {
      gap: 14px;
    }
  }

  .timeline-box .sub-heading {
    font-size: 1.2rem;
  }
</style>
