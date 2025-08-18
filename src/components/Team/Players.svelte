<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import Footer from "../Footer.svelte";
  import Header from "../Header.svelte";

  type Position = "GOALKEEPER" | "DEFENDER" | "MIDFIELDER" | "FORWARD";

  type Player = {
    id: string;
    firstName: string;
    lastName: string;
    number: number;
    position: Position;
    birthDate: string;
    nationality: string;
    height: number;
    info?: string | null;
    instagram?: string | null;
    imageUrl?: string | null;
  };

  const POS_LABEL: Record<Position, string> = {
    GOALKEEPER: "Goalkeeper",
    DEFENDER: "Defender",
    MIDFIELDER: "Midfielder",
    FORWARD: "Forward",
  };

  const PLACEHOLDER_IMAGE = "/assets/images/placeholder-player.jpg";

  let loading = true;
  let error: string | null = null;

  let goalkeepers: Player[] = [];
  let defenders: Player[] = [];
  let midfielders: Player[] = [];
  let forwards: Player[] = [];

  const fullName = (p: Player) => `${p.firstName} ${p.lastName}`.trim();
  const num = (n: number) => String(n).padStart(2, "0");
  const playerPath = (p: Player) => `/team/player/${encodeURIComponent(p.firstName)}`;

  function splitGroups(list: Player[]) {
    const byNum = (a: Player, b: Player) => a.number - b.number;
    goalkeepers = list.filter(p => p.position === "GOALKEEPER").sort(byNum);
    defenders   = list.filter(p => p.position === "DEFENDER").sort(byNum);
    midfielders = list.filter(p => p.position === "MIDFIELDER").sort(byNum);
    forwards    = list.filter(p => p.position === "FORWARD").sort(byNum);
  }

  onMount(async () => {
    try {
      const res = await fetch("/api/players");
      if (!res.ok) throw new Error("Failed to load players");
      const data: Player[] = await res.json();
      splitGroups(data);
    } catch (e: any) {
      error = e?.message ?? "Unknown error";
    } finally {
      loading = false;
    }
  });
</script>

<a href="#" class="scroll-top">
  <i class="fa-solid fa-arrow-up-long"></i>
</a>

<Header />

<div class="page-title-team">
  <div class="title">
    <h2>Team</h2>
  </div>

  <div class="link">
    <a href="/">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Team</span>
  </div>
</div>

<section class="team">
  <div class="heading">
    <h2>our <span>team</span></h2>
  </div>

  <ul class="tab-buttons">
    <li><a class="button" href="#goalkeepers">Goalkeepers</a></li>
    <li><a class="button" href="#defenders">Defenders</a></li>
    <li><a class="button" href="#midfielders">Midfielders</a></li>
    <li><a class="button" href="#forwards">Forwards</a></li>
  </ul>

  {#if loading}
    <div class="team-gallery"><p>Loading…</p></div>
  {:else if error}
    <div class="team-gallery"><p class="error">{error}</p></div>
  {:else}
    <!-- Goalkeepers -->
    <div class="team-gallery" id="goalkeepers">
      <div class="sub-heading"><h3>Goalkeepers</h3></div>
      <div class="box-container">
        {#each goalkeepers as p}
          <div
            class="team-item"
            role="button"
            tabindex="0"
            on:click={() => goto(playerPath(p))}
            on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && goto(playerPath(p))}
          >
            <div class="team-image">
              <img
                src={encodeURI(p.imageUrl || PLACEHOLDER_IMAGE)}
                alt={`Photo of ${fullName(p)}`}
              />
              <div class="icon-container">
                {#if p.instagram}
                  <a href={p.instagram} target="_blank" rel="noopener" on:click|stopPropagation>
                    <i class="fab fa-instagram"></i>
                  </a>
                {/if}
              </div>
            </div>
            <div class="team-content">
              <span>{num(p.number)}</span>
              <a href={playerPath(p)} on:click|preventDefault><h3>{fullName(p)}</h3></a>
              <p>{POS_LABEL[p.position]}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Defenders -->
    <div class="team-gallery" id="defenders">
      <div class="sub-heading"><h3>Defenders</h3></div>
      <div class="box-container">
        {#each defenders as p}
          <div
            class="team-item"
            role="button"
            tabindex="0"
            on:click={() => goto(playerPath(p))}
            on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && goto(playerPath(p))}
          >
            <div class="team-image">
              <img src={encodeURI(p.imageUrl || PLACEHOLDER_IMAGE)} alt={`Photo of ${fullName(p)}`} />
              <div class="icon-container">
                {#if p.instagram}
                  <a href={p.instagram} target="_blank" rel="noopener" on:click|stopPropagation>
                    <i class="fab fa-instagram"></i>
                  </a>
                {/if}
              </div>
            </div>
            <div class="team-content">
              <span>{num(p.number)}</span>
              <a href={playerPath(p)} on:click|preventDefault><h3>{fullName(p)}</h3></a>
              <p>{POS_LABEL[p.position]}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Midfielders -->
    <div class="team-gallery" id="midfielders">
      <div class="sub-heading"><h3>Midfielders</h3></div>
      <div class="box-container">
        {#each midfielders as p}
          <div
            class="team-item"
            role="button"
            tabindex="0"
            on:click={() => goto(playerPath(p))}
            on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && goto(playerPath(p))}
          >
            <div class="team-image">
              <img src={encodeURI(p.imageUrl || PLACEHOLDER_IMAGE)} alt={`Photo of ${fullName(p)}`} />
              <div class="icon-container">
                {#if p.instagram}
                  <a href={p.instagram} target="_blank" rel="noopener" on:click|stopPropagation>
                    <i class="fab fa-instagram"></i>
                  </a>
                {/if}
              </div>
            </div>
            <div class="team-content">
              <span>{num(p.number)}</span>
              <a href={playerPath(p)} on:click|preventDefault><h3>{fullName(p)}</h3></a>
              <p>{POS_LABEL[p.position]}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>

    <!-- Forwards -->
    <div class="team-gallery" id="forwards">
      <div class="sub-heading"><h3>Forwards</h3></div>
      <div class="box-container">
        {#each forwards as p}
          <div
            class="team-item"
            role="button"
            tabindex="0"
            on:click={() => goto(playerPath(p))}
            on:keydown={(e) => (e.key === 'Enter' || e.key === ' ') && goto(playerPath(p))}
          >
            <div class="team-image">
              <img src={encodeURI(p.imageUrl || PLACEHOLDER_IMAGE)} alt={`Photo of ${fullName(p)}`} />
              <div class="icon-container">
                {#if p.instagram}
                  <a href={p.instagram} target="_blank" rel="noopener" on:click|stopPropagation>
                    <i class="fab fa-instagram"></i>
                  </a>
                {/if}
              </div>
            </div>
            <div class="team-content">
              <span>{num(p.number)}</span>
              <a href={playerPath(p)} on:click|preventDefault><h3>{fullName(p)}</h3></a>
              <p>{POS_LABEL[p.position]}</p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  {/if}
</section>

<Footer />
