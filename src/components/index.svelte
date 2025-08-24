<script lang="ts">
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import { onMount } from "svelte";

  interface Match {
    id: number;
    league: string;
    round?: string;
    date: string;
    venue?: string;
    homeTeam: string;
    awayTeam: string;
    homeLogo: string;
    awayLogo: string;
    homeScore?: number | null;
    awayScore?: number | null;
  }

  interface TableRow {
    rank: number;
    name: string;
    logo: string;
    points: number;
    played: number;
    win: number;
    draw: number;
    lose: number;
    goalsFor: number;
    goalsAgainst: number;
    goalsDiff: number;
  }

  const TEAM_ID = 3424;
  const TEAM_NAME_SITE = "FC Freedom24 Krasava ENY";
  const API_KEY = "8ba875d194dca14499319ae757224ee3";
  const LEAGUE_ID = 318;
  const SEASON = 2025;

  let matches: Match[] = [];
  let lastMatches: Match[] = [];
  let table: TableRow[] = [];

  const teamNameMap: Record<string, string> = {
    "Digenis Ypsonas": TEAM_NAME_SITE,
  };

  onMount(async () => {
    try {
      const resUpcoming = await fetch(
        `https://v3.football.api-sports.io/fixtures?team=${TEAM_ID}&next=2`,
        { headers: { "x-apisports-key": API_KEY } }
      );
      const dataUpcoming = await resUpcoming.json();
      if (dataUpcoming.response) {
        matches = dataUpcoming.response.map((m: any) => ({
          id: m.fixture.id,
          league: m.league.name,
          round: m.league.round,
          date: m.fixture.date,
          venue: m.fixture.venue?.name,
          homeTeam: teamNameMap[m.teams.home.name] || m.teams.home.name,
          awayTeam: teamNameMap[m.teams.away.name] || m.teams.away.name,
          homeLogo: m.teams.home.logo,
          awayLogo: m.teams.away.logo,
        }));
      }

      const resPast = await fetch(
        `https://v3.football.api-sports.io/fixtures?team=${TEAM_ID}&last=1`, // amount of matches
        { headers: { "x-apisports-key": API_KEY } }
      );
      const dataPast = await resPast.json();
      if (dataPast.response) {
        lastMatches = dataPast.response.map((m: any) => ({
          id: m.fixture.id,
          league: m.league.name,
          date: m.fixture.date,
          venue: m.fixture.venue?.name,
          homeTeam: teamNameMap[m.teams.home.name] || m.teams.home.name,
          awayTeam: teamNameMap[m.teams.away.name] || m.teams.away.name,
          homeLogo: m.teams.home.logo,
          awayLogo: m.teams.away.logo,
          homeScore: m.goals.home,
          awayScore: m.goals.away,
        }));
      }

      const resTable = await fetch(
        `https://v3.football.api-sports.io/standings?league=${LEAGUE_ID}&season=${SEASON}`,
        { headers: { "x-apisports-key": API_KEY } }
      );
      const dataTable = await resTable.json();
      if (dataTable.response) {
        table = dataTable.response[0].league.standings[0].map((row: any) => ({
          rank: row.rank,
          name: teamNameMap[row.team.name] || row.team.name,
          logo: row.team.logo,
          points: row.points,
          played: row.all.played,
          win: row.all.win,
          draw: row.all.draw,
          lose: row.all.lose,
          goalsFor: row.all.goals.for,
          goalsAgainst: row.all.goals.against,
          goalsDiff: row.goalsDiff,
        }));
      }
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
    }
  });

  function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  
</script>

<a href="#" class="scroll-top">
  <i class="fa-solid fa-arrow-up-long"></i>
</a>

<Header />

<section class="home">
  <div class="swiper-container home-slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide home-item">
        <img src="/assets/images/Krasava/ticketsmain.png" alt="Home Image" />
        <div class="content">
          <div class="text">
            <h5>
              <span>Be part of Season 25/26</span><i class="fa-solid fa-futbol"
              ></i>
            </h5>
            <h3>get your season ticket now!</h3>
            <a href="https://tickets.krasavafc.com/" class="btn"
              >Buy season tickets
            </a>
          </div>
        </div>
      </div>

      <div class="swiper-slide home-item">
        <img src="/assets/images/Krasava/hp_banner_ .png" alt="Home Image" />
        <div class="content">
          <div class="text">
            <h5>
              <span>WELCOME TO KRASAVA FOOTBALL CLUB</span><i
                class="fa-solid fa-futbol"
              ></i>
            </h5>
            <h3>Fueled by Freedom</h3>
            <a href="https://tickets.krasavafc.com/" class="btn"
              >Buy season tickets
            </a>
          </div>
        </div>
      </div>

      <!-- <div class="swiper-slide home-item">
        <img src="/assets/images/Krasava/about3.png" alt="Home Image" />
        <div class="content">
          <div class="text">
            <h5>
              <span>WELCOME TO KRASAVA FOOTBALL CLUB</span><i
                class="fa-solid fa-futbol"
              ></i>
            </h5>
                 <h3>Fueled by Freedom</h3>
            <a href="https://tickets.krasavafc.com/" class="btn">Buy season tickets </a>
          </div>
        </div>
      </div> -->

      <div class="swiper-slide home-item">
        <img src="/assets/images/Krasava/about2.png" alt="Home Image" />
        <div class="content">
          <div class="text">
            <h5>
              <span>WELCOME TO KRASAVA FOOTBALL CLUB</span><i
                class="fa-solid fa-futbol"
              ></i>
            </h5>
            <h3>Fueled by Freedom</h3>
            <a href="https://tickets.krasavafc.com/" class="btn"
              >Buy season tickets
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="swiper-pagination swiper-pagination1"></div>

    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</section>

<section class="about">
  <div class="box-container">
    <div class="image">
      <div class="sub-image one">
        <img src="./assets/images/About/about.JPG" alt="About-Image1" />
      </div>
      <div class="sub-image two">
        <img src="./assets/images/About/about2.JPG" alt="About-Image2" />
        <img src="./assets/images/Krasava/happy.JPG" alt="About-Image3" />
      </div>
    </div>

    <!-- About Content -->
    <div class="content">
      <div class="heading">
        <h2>
          TERRITORY OF <span>FREEDOM</span> <span> </span>
        </h2>
      </div>
      <p>
        We value freedom, independence, and accessibility for everyone who plays
        and loves football.
      </p>
      <p>
        Founded in 2021, FC Krasava quickly became a unique football project
        built on openness and private support. From the start, the club gave
        young players real opportunities and inspired a strong community of
        fans.
      </p>
      <p>
        Keeping its spirit of freedom and independence, FC Krasava relocated to
        Cyprus — purchasing a club in Ypsonas and starting a new chapter with a
        new name, logo, and colors.
      </p>
      <p>
        In just three seasons, Krasava rose from the Second Division to the
        Cypriot First Division — becoming the only club in the country’s history
        to achieve this journey as newcomers from abroad.
      </p>
      <p>
        FC Krasava is a football club for people who love the game — and their
        freedom.
      </p>

      <ul class="features">
        <li>
          <i class="fas fa-futbol"></i><span>Supporting young players</span>
        </li>
        <li>
          <i class="fas fa-futbol"></i><span>A strong football community</span>
        </li>
        <li>
          <i class="fas fa-futbol"></i><span>Openness and honesty</span>
        </li>
      </ul>

      <a href="/about" class="btn">Learn more</a>
    </div>
  </div>
</section>
<!-- ==================== About Area (End) ==================== -->

<!-- ==================== Result PointTable Area (Start) ==================== -->
<section class="home-result-table linear-bg">
  <!-- ==================== Latest Result Area (End) ==================== -->
  <div class="home-results">
    <div class="heading">
      <h2>Latest <span>Results</span></h2>
    </div>

    <div class="upcoming-container">
      {#each lastMatches as match}
        <div class="match-item">
          <div class="match-detail">
            <div class="league">{match.league}</div>
            <div class="time">{formatDate(match.date)}</div>
            <div class="venue">{match.venue}</div>
          </div>
          <div class="match-intro">
            <div class="team-logo">
              <img src={match.homeLogo} alt="logo" />
              <h3>{match.homeTeam}</h3>
            </div>
            <div class="result">
              <span>{match.homeScore ?? "-"}</span>
              <span>-</span>
              <span>{match.awayScore ?? "-"}</span>
            </div>
            <div class="team-logo">
              <img src={match.awayLogo} alt="logo" />
              <h3>{match.awayTeam}</h3>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
  <!-- ==================== Latest Result Area (End) ==================== -->

  <!-- ==================== Point Table Area (End) ==================== -->
  <div class="home-point point-table">
    <div class="heading">
      <h2><span>point table</span></h2>
    </div>

    <div class="point-table-container">
      <div class="container">
        <!-- Table Title Row -->
        <div class="table-title">
          <h3>#</h3>
          <h3 class="name">Team</h3>
          <h3>P</h3>
          <h3>W</h3>
          <h3>D</h3>
          <h3>L</h3>
          <h3>F</h3>
          <h3>A</h3>
          <h3>GD</h3>
          <h3>Pts</h3>
        </div>

        <!-- Points Section -->
        <div class="points">
          {#each table as row}
            <div class="point-item">
              <div class="box">{row.rank}</div>
              <div class="box name">
                <img src={row.logo} alt={row.name} />
                <span>{row.name}</span>
              </div>
              <div class="box">{row.played}</div>
              <div class="box">{row.win}</div>
              <div class="box">{row.draw}</div>
              <div class="box">{row.lose}</div>
              <div class="box">{row.goalsFor}</div>
              <div class="box">{row.goalsAgainst}</div>
              <div class="box">{row.goalsDiff}</div>
              <div class="box">{row.points}</div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <!-- ==================== Point Table Area (End) ==================== -->
</section>
<!-- ==================== Result PointTable Area (End) ==================== -->

<!-- ==================== Upcoming Matches Area (Start) ==================== -->
<section class="home-matches">
  <div class="heading">
    <h2>Upcoming <span>Matches</span></h2>
  </div>

  <div class="box-container">
    {#each matches as match}
      <div class="match-item">
        <div class="match-detail">
          <div class="league">{match.league}, {match.round}</div>
          <div class="time">{formatDate(match.date)}</div>
        </div>

        <div class="match-intro">
          <div class="team-logo">
            <img src={match.homeLogo} alt={match.homeTeam} />
            <h3>{match.homeTeam}</h3>
          </div>
          <div class="result"><span>VS</span></div>
          <div class="team-logo">
            <img src={match.awayLogo} alt={match.awayTeam} />
            <h3>{match.awayTeam}</h3>
          </div>
        </div>

        <!-- Блок с кнопками -->
        <div class="action-container">
          <a href="https://tickets.krasavafc.com/">
            <i class="fas fa-ticket-alt"></i> <span>Buy ticket</span>
          </a>
          <a href="https://soccer365.ru/">
            <i class="fa-solid fa-pen-to-square"></i>
            <span>Match Report</span>
          </a>
        </div>
      </div>
    {/each}
  </div>
</section>

<!-- ==================== Upcoming Matches Area (End) ==================== -->

<!-- ==================== Count Area (Start) ==================== -->
<!-- <div class="counting">
  <div class="box">
    <div class="info">
      <i class="fas fa-futbol"></i>
      <div class="content">
        <h1 class="count" data-count="800">800+</h1>
        <h3>Goals Scored</h3>
      </div>
    </div>
  </div>

  <div class="box">
    <div class="info">
      <i class="fas fa-trophy"></i>
      <div class="content">
        <h1 class="count" data-count="400">400+</h1>
        <h3>Wins</h3>
      </div>
    </div>
  </div>

  <div class="box">
    <div class="info">
      <i class="fas fa-users"></i>
      <div class="content">
        <h1 class="count" data-count="100">100+</h1>
        <h3>Players Trained</h3>
      </div>
    </div>
  </div>

  <div class="box">
    <div class="info">
      <i class="fas fa-medal"></i>
      <div class="content">
        <h1 class="count" data-count="10">10+</h1>
        <h3>Championships Won</h3>
      </div>
    </div>
  </div>
</div> -->
<!-- ==================== Count Area (End) ==================== -->

<!-- ==================== Players Slider Area (Start) ==================== -->

<!-- REMOVE TEAM -->
<!-- ==================== Players Slider Area (End) ==================== -->

<!-- ==================== Banner Area (Start) ==================== -->
<section class="banner">
  <div class="content">
    <h2>Celebrate Victory with Our Football Club</h2>
    <a href="/tickets" class="btn">Get Tickets</a>
  </div>
</section>
<!-- ==================== Banner Area (End) ==================== -->

<!-- ==================== Portfolio Area (Start) ==================== -->
<section class="portfolio">
  <!-- Section Heading -->
  <div class="heading">
    <h2>Our <span>Portfolio</span></h2>
  </div>

  <!-- Portfolio Tab Buttons -->
  <ul class="tab-buttons">
    <li class="button active" data-filter="*">all</li>
    <li class="button" data-filter=".player">About</li>
    <li class="button" data-filter=".trophy">Academy</li>
    <li class="button" data-filter=".community">Community</li>
  </ul>

  <!-- Portfolio Items Container -->
  <div class="box-container">
    <!-- Portfolio Item 1 - Young Talents -->
    <div class="portfolio-item player">
      <div class="portfolio-content">
        <img src="./assets/images/Krasava/team-champ.jpg" alt="Young Talents" />
        <!-- Portfolio Image -->
        <div class="content">
          <!-- Buttons container -->
          <div class="btn-container">
            <!-- <a
              class="view"
              href="./assets/images/Portfolio/Portfolio/Portfolio-1.jpg"
              ><i class="fa-solid fa-camera-retro"></i></a
            > -->
            <!-- View image button -->
            <a href="/about"><i class="fa-solid fa-link"></i></a>
            <!-- Link to portfolio single page -->
          </div>
          <!-- Text content -->
          <div class="text">
            <!-- <p>Player</p> -->
            <!-- Portfolio Category -->
            <a href="./pages/Pages/Portfolio-Single.html"><h3>About</h3></a>
            <!-- Portfolio Title -->
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Item 2 - International Wins -->
    <div class="portfolio-item trophy">
      <div class="portfolio-content">
        <img
          src="./assets/images/Portfolio/Portfolio/academy5.JPG"
          alt="International Wins"
        />
        <div class="content">
          <div class="btn-container">
            <!-- <a
              class="view"
              href="./assets/images/Portfolio/Portfolio/academy5.JPG"
              ><i class="fa-solid fa-camera-retro"></i></a
            > -->
            <a href="/academy"><i class="fa-solid fa-link"></i></a>
          </div>
          <div class="text">
            <!-- <p>Trophy</p> -->
            <a href="/academy"><h3>Academy</h3></a>
          </div>
        </div>
      </div>
    </div>

    <div class="portfolio-item community">
      <div class="portfolio-content">
        <img
          src="./assets/images/Portfolio/Portfolio/fan.png"
          alt="Fan Engagement"
        />
        <div class="content">
          <div class="btn-container">
            <!-- <a
              class="view"
              href="/tickets"
              ><i class="fa-solid fa-camera-retro"></i></a
            > -->
            <a href="/tickets"><i class="fa-solid fa-link"></i></a>
          </div>
          <div class="text">
            <p>Community</p>
            <a href="/tickets"><h3>Fan Engagement</h3></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ==================== Portfolio Area (End) ==================== -->

<!-- ==================== Awards Area (Start) ==================== -->
<!-- <section class="awards linear-bg">
  <div class="heading">
    <h2>our <span>awards</span></h2>
  </div>

  <div class="swiper-container award-slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide award-item">
        <img src="/assets/images/Krasava/trophy.JPG" alt="Award Image" />
        <h4>Cypriot 2nd tier champion<br /> 2025</h4>
      </div>
    </div>
  </div>
</section> -->
<!-- ==================== Awards Area (End) ==================== -->

<!-- ==================== Products Area (Start) ==================== -->
<!-- <section class="home-shop">
  <div class="heading">
    <h2>Our <span>Market</span></h2>
  </div>

  <div class="box-container">
    <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/tshirt.png"
          alt="Product-Image"
        />
        <div class="options">
          <a href="./pages/Shop/Wishlist.html" class="icon"
            ><i class="far fa-heart"></i></a
          >
          <a href="./pages/Shop/Cart.html" class="icon"
            ><i class="fa-solid fa-cart-shopping"></i></a
          >
          <a href="./pages/Shop/Product-Single.html" class="icon"
            ><i class="fa-solid fa-magnifying-glass"></i></a
          >
        </div>
      </div>
      <div class="content">
        <a href="./pages/Shop/Product-Single.html"
          ><h3>Away T-Shirt 2024/25</h3></a
        >
        
        <div class="price">$40.00</div>
      </div>
    </div>
    <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/tshirt.png"
          alt="Product-Image"
        />
        <div class="options">
          <a href="./pages/Shop/Wishlist.html" class="icon"
            ><i class="far fa-heart"></i></a
          >
          <a href="./pages/Shop/Cart.html" class="icon"
            ><i class="fa-solid fa-cart-shopping"></i></a
          >
          <a href="./pages/Shop/Product-Single.html" class="icon"
            ><i class="fa-solid fa-magnifying-glass"></i></a
          >
        </div>
      </div>
      <div class="content">

        <a href="./pages/Shop/Product-Single.html"
          ><h3>Away T-Shirt 2024/25</h3></a
        >
        <div class="price">$40.00</div>
      </div>
    </div>
    <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/tshirt.png"
          alt="Product-Image"
        />
        <div class="options">
          <a href="./pages/Shop/Wishlist.html" class="icon"
            ><i class="far fa-heart"></i></a
          >
          <a href="./pages/Shop/Cart.html" class="icon"
            ><i class="fa-solid fa-cart-shopping"></i></a
          >
          <a href="./pages/Shop/Product-Single.html" class="icon"
            ><i class="fa-solid fa-magnifying-glass"></i></a
          >
        </div>
      </div>
      <div class="content">

        <a href="./pages/Shop/Product-Single.html"
          ><h3>Away T-Shirt 2024/25</h3></a
        >
        <div class="price">$40.00 </div>
      </div>
    </div>
   
    <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/tshirt.png"
          alt="Product-Image"
        />
        <div class="options">
          <a href="./pages/Shop/Wishlist.html" class="icon"
            ><i class="far fa-heart"></i></a
          >
          <a href="./pages/Shop/Cart.html" class="icon"
            ><i class="fa-solid fa-cart-shopping"></i></a
          >
          <a href="./pages/Shop/Product-Single.html" class="icon"
            ><i class="fa-solid fa-magnifying-glass"></i></a
          >
        </div>
      </div>
      <div class="content">
        <a href="./pages/Shop/Product-Single.html"><h3>Kids Uniform</h3></a>
        <div class="price">€40.00 <span>€50.00</span></div>
      </div>
    </div>
  </div>
</section> -->
<!-- ==================== Products Area (End) ==================== -->

<!-- ==================== Testimonials Area (Start) ==================== -->
<!-- <section class="testimonial-bg linear-bg">
  <div class="heading">
    <h2>Fan <span>Testimonials</span></h2>
  </div>

  <div class="swiper-container testimonial-slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide testi-item">
        <img src="./assets/images/Testimonials/Pic-1.jpg" alt="Author-Pic" />
        <i class="fas fa-quote-left"></i>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in
          ea expedita libero error aut itaque quia praesentium? Consectetur nam,
          maxime atque sit eius corporis voluptate? Exercitationem dolorem
          consequatur voluptatibus?
        </p>
        <div class="text">
          <h6>Season Ticket Holder</h6>
          <h4>Chris Turner</h4>
        </div>
      </div>

      <div class="swiper-slide testi-item">
        <img src="./assets/images/Testimonials/Pic-2.jpg" alt="Author-Pic" />
        <i class="fas fa-quote-left"></i>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in
          ea expedita libero error aut itaque quia praesentium? Consectetur nam,
          maxime atque sit eius corporis voluptate? Exercitationem dolorem
          consequatur voluptatibus?
        </p>
        <div class="text">
          <h6>Supporter</h6>
          <h4>Amy Roberts</h4>
        </div>
      </div>

      <div class="swiper-slide testi-item">
        <img src="./assets/images/Testimonials/Pic-3.jpg" alt="Author-Pic" />
        <i class="fas fa-quote-left"></i>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in
          ea expedita libero error aut itaque quia praesentium? Consectetur nam,
          maxime atque sit eius corporis voluptate? Exercitationem dolorem
          consequatur voluptatibus?
        </p>
        <div class="text">
          <h6>Season Ticket Holder</h6>
          <h4>Jack Thompson</h4>
        </div>
      </div>

      <div class="swiper-slide testi-item">
        <img src="./assets/images/Testimonials/Pic-4.jpg" alt="Author-Pic" />
        <i class="fas fa-quote-left"></i>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in
          ea expedita libero error aut itaque quia praesentium? Consectetur nam,
          maxime atque sit eius corporis voluptate? Exercitationem dolorem
          consequatur voluptatibus?
        </p>
        <div class="text">
          <h6>Club Member</h6>
          <h4>Emma Wilson</h4>
        </div>
      </div>
    </div>

    <div class="swiper-pagination swiper-pagination3"></div>
  </div>
</section> -->
<!-- ==================== Testimonials Area (End) ==================== -->

<!-- ==================== Blogs Area (Start) ==================== -->
<!-- <section class="blog main">
  <div class="heading">
    <h2>our <span>blogs</span></h2>
  </div>

  <div class="box-container">
    <div class="blog-item">
      <div class="image">
        <img src="./assets/images/Blog/Blogs/Blog-1.jpg" alt="Blog-Image" />
        <div class="date"><span>02</span> Dec</div>
      </div>
      <div class="content">
        <a class="main-heading" href="./pages/Blog/Blog-Single.html"
          >Complete List of Football Equipment</a
        >
        <div class="details">
          <h3><i class="fa-solid fa-circle-user"></i><span>By Admin</span></h3>
          <h3>
            <i class="fa-regular fa-folder-open"></i><span>Sport Center</span>
          </h3>
        </div>
      </div>
    </div>

    <div class="blog-item">
      <div class="image">
        <img src="./assets/images/Blog/Blogs/Blog-2.jpg" alt="Blog-Image" />
        <div class="date"><span>25</span> nov</div>
      </div>
      <div class="content">
        <a class="main-heading" href="./pages/Blog/Blog-Single.html"
          >A Brief History of Royal Rebels</a
        >
        <div class="details">
          <h3><i class="fa-solid fa-circle-user"></i><span>By Admin</span></h3>
          <h3>
            <i class="fa-regular fa-folder-open"></i><span>Analysis</span>
          </h3>
        </div>
      </div>
    </div>

    <div class="blog-item">
      <div class="image">
        <img src="./assets/images/Blog/Blogs/Blog-3.jpg" alt="Blog-Image" />
        <div class="date"><span>17</span> Nov</div>
      </div>
      <div class="content">
        <a class="main-heading" href="./pages/Blog/Blog-Single.html"
          >We Are a Family, Not Just a Team</a
        >
        <div class="details">
          <h3><i class="fa-solid fa-circle-user"></i><span>By Admin</span></h3>
          <h3>
            <i class="fa-regular fa-folder-open"></i><span>Interviews</span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</section> -->
<!-- ==================== Blogs Area (End) ==================== -->

<!-- ==================== Newsletter Area (Start) ==================== -->
<!-- <section class="newsletter-subscribe">
  <div class="content">
    <h2>Subscribe To Our Newsletter</h2>
    <p>
      Stay updated with the latest football news, match highlights, and
      exclusive offers from our football community.
    </p>
    <form class="newsletter-form">
      <input
        type="email"
        id="sub-email"
        name="email"
        placeholder="Your email address"
        required
      />
      <button type="submit" class="btn">Subscribe</button>
    </form>
  </div>
</section> -->
<!-- ==================== Newsletter Area (End) ==================== -->

<!-- ========== Sponsors Area (Start) ========== -->
<section class="sponsors">
  <!-- Sponsor Slider Container -->
  <div class="swiper-container sponsor-slider">
    <!-- Sponsors Logo -->
    <div class="swiper-wrapper">
      <div class="swiper-slide sponsor-item">
        <a href="https://freedom24.com/"
          ><img
            src="./assets/images/Sponsors/freedom.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="https://bc.game/"
          ><img
            src="./assets/images/Sponsors/bcgame.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="https://utorg.pro/"
          ><img
            src="./assets/images/Sponsors/utorg.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="https://freedom24.com/"
          ><img
            src="./assets/images/Sponsors/freedom.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="https://bc.game/"
          ><img
            src="./assets/images/Sponsors/bcgame.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="https://utorg.pro/"
          ><img
            src="./assets/images/Sponsors/utorg.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="https://freedom24.com/"
          ><img
            src="./assets/images/Sponsors/freedom.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="https://bc.game/"
          ><img
            src="./assets/images/Sponsors/bcgame.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="https://utorg.pro/"
          ><img
            src="./assets/images/Sponsors/utorg.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="https://freedom24.com/"
          ><img
            src="./assets/images/Sponsors/freedom.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="https://bc.game/"
          ><img
            src="./assets/images/Sponsors/bcgame.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="https://utorg.pro/"
          ><img
            src="./assets/images/Sponsors/utorg.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
    </div>
  </div>
</section>
<!-- ========== Sponsors Area Area (End) ========== -->

<!-- ==================== Sponsors Area (Start) ==================== -->
<!-- <section class="sponsors">
  <div class="swiper-container sponsor-slider">
    <div class="swiper-wrapper">
      <div class="swiper-slide sponsor-item">
        <a href="#"
          ><img
            src="./assets/images/Sponsors/freedom.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div> -->
<!-- <div class="swiper-slide sponsor-item">
        <a href="#"
          ><img
            src="./assets/images/Sponsors/Sponsor-2.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="#"
          ><img
            src="./assets/images/Sponsors/Sponsor-3.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="#"
          ><img
            src="./assets/images/Sponsors/Sponsor-4.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="#"
          ><img
            src="./assets/images/Sponsors/Sponsor-5.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="#"
          ><img
            src="./assets/images/Sponsors/Sponsor-6.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="#"
          ><img
            src="./assets/images/Sponsors/Sponsor-7.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="#"
          ><img
            src="./assets/images/Sponsors/Sponsor-8.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="#"
          ><img
            src="./assets/images/Sponsors/Sponsor-9.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
        <a href="#"
          ><img
            src="./assets/images/Sponsors/Sponsor-10.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div> -->
<!-- </div>
  </div>
</section> -->
<!-- ==================== Sponsors Area Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->
