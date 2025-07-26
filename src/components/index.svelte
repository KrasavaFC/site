<script lang="ts">
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
</script>

<!-- ==================== Scroll-Top Area (Start) ==================== -->
<a href="#" class="scroll-top">
  <i class="fa-solid fa-arrow-up-long"></i>
</a>
<!-- ==================== Scroll-Top Area (End) ==================== -->

<!-- ==================== Header Area (Start) ==================== -->
<Header />
<!-- ==================== Header Area (End) ==================== -->

<!-- ==================== Home-Slider Area (Start) ==================== -->
<section class="home">
  <!-- Home Slider -->
  <div class="swiper-container home-slider">
    <div class="swiper-wrapper">
      <!-- Home Slide-1 -->
      <div class="swiper-slide home-item">
        <img src="/assets/images/Krasava/hp_banner_.jpg" alt="Home Image" />
        <!-- Slide Image -->
        <div class="content">
          <div class="text">
            <h5>
              <span>WELCOME TO KRASAVA FOOTBALL CLUB</span><i
                class="fa-solid fa-futbol"
              ></i>
            </h5>
            <!-- Slide Subheading -->
            <h3>Fearless. Independent. United by Football.</h3>
            <!-- Slide Heading -->
            <a href="/contact" class="btn">Join the journey</a>
            <!-- Contact Button -->
          </div>
        </div>
      </div>

      <!-- Home Slide-2 -->
      <!-- <div class="swiper-slide home-item">
        <img src="./assets/images/Home/Home-2.jpg" alt="Home Image" />
        <div class="content">
          <div class="text">
            <h5>
              <span>Welcome to Royal Rebels</span><i class="fa-solid fa-futbol"
              ></i>
            </h5>
            <h3>Unleash Your Passion for Football with Us</h3>
            <a href="./pages/Contact/Contact.html" class="btn">Join Now</a>
          </div>
        </div>
      </div> -->

      <!-- Home Slide-3 -->
      <!-- <div class="swiper-slide home-item">
        <img src="./assets/images/Home/Home-3.jpg" alt="Home Image" />
        <div class="content">
          <div class="text">
            <h5>
              <span>Welcome to Royal Rebels</span><i class="fa-solid fa-futbol"
              ></i>
            </h5>
            <h3>Elevate Your Football Experience with Us!</h3>
            <a href="./pages/Contact/Contact.html" class="btn">Join Now</a>
          </div>
        </div>
      </div> -->
    </div>

    <!-- Home Slider Pagination -->
    <div class="swiper-pagination swiper-pagination1"></div>

    <!-- Home Slider Navigation arrows -->
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</section>
<!-- ==================== Home-Slider Area (End) ==================== -->

<!-- ==================== About Area (Start) ==================== -->
<section class="about">
  <!-- About Information -->
  <div class="box-container">
    <!-- About Image -->
    <div class="image">
      <div class="sub-image one">
        <img src="./assets/images/About/about.JPG" alt="About-Image1" />
      </div>
      <div class="sub-image two">
        <img src="./assets/images/About/about2.JPG" alt="About-Image2" />
        <img src="./assets/images/About/about3.JPG" alt="About-Image3" />
      </div>
    </div>

    <!-- About Content -->
    <div class="content">
      <div class="heading">
        <h2>
          <span>passion</span> for the Game. <span>Commitment</span> to Values.
          The Road to
          <span>Success.</span>
        </h2>
        <!-- Main Heading -->
      </div>

      <p>
        FC Krasava was founded as an honest and independent alternative in the
        football world. Today, the team is based in Cyprus and continues to grow
        with a spirit of openness, accessibility, and transparency. Built
        entirely on private investment, the club is open to young talent and
        united by a strong digital and football community.
      </p>
      <p>
        In just three years, we’ve gone from newcomers to champions — earning
        promotion to the Cypriot First Division. And this is only the beginning.
      </p>
      <!-- Description -->

      <!-- Key Features -->
      <ul class="features">
        <li>
          <i class="fas fa-futbol"></i><span>Developing young talent</span>
        </li>
        <!-- Feature 1 -->
        <li>
          <i class="fas fa-futbol"></i><span>Transparency and integrity</span>
        </li>
        <!-- Feature 2 -->
        <li>
          <i class="fas fa-futbol"></i><span>A strong football community</span>
        </li>
        <!-- Feature 3 -->
        <li>
          <i class="fas fa-futbol"></i><span
            >Winning with passion and purpose</span
          >
        </li>
        <!-- Feature 4 -->
      </ul>

      <a href="./pages/About/About.html" class="btn">learn more</a>
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
      <!-- Match 1 -->
      <div class="match-item">
        <a href="https://soccer365.net/games/2217314/">
          <div class="match-detail">
            <div class="league">Cyprus Second Division 2024/25</div>
            <div class="time">26 Apr 2025 - 16:00 p.m.</div>
            <div class="venue">Koinotiko Stadio Erimis (Erimi)</div>
          </div>
          <div class="match-intro">
            <div class="team-logo">
              <img src="./assets/images/Club-Teams/FCKrasava.png" alt="logo" />
              <h3>Krasava ENY Ypsonas</h3>
            </div>
            <div class="result"><span>1</span><span>-</span><span>0</span></div>
            <div class="team-logo">
              <img
                src="./assets/images/Club-Teams/Ahironas-Onisilos.png"
                alt="logo"
              />
              <h3>Ahironas-Onisilos</h3>
            </div>
          </div>
        </a>
      </div>

      <!-- Match 2 -->
      <div class="match-item">
        <a href="https://soccer365.net/games/2217307/">
          <div class="match-detail">
            <div class="league">Cyprus Second Division 2024/25</div>
            <div class="time">12 Apr 2025 - 16:00 p.m.</div>
            <div class="venue">Koinotiko Stadio Parekklisias (Parekklisia)</div>
          </div>
          <div class="match-intro">
            <div class="team-logo">
              <img src="./assets/images/Club-Teams/AEZakakiou.png" alt="logo" />
              <h3>AE Zakakiou</h3>
            </div>
            <div class="result"><span>0</span><span>-</span><span>1</span></div>
            <div class="team-logo">
              <img src="./assets/images/Club-Teams/FCKrasava.png" alt="logo" />
              <h3>Krasava ENY Ypsonas</h3>
            </div>
          </div>
        </a>
      </div>

      <!-- Match 3 -->
      <div class="match-item">
        <a href="https://soccer365.net/games/2217299/">
          <div class="match-detail">
            <div class="league">Cyprus Second Division 2024/25</div>
            <div class="time">06 Apr 2025 - 15:30 p.m.</div>
            <div class="venue">Koinotiko Stadio Erimis (Erimi)</div>
          </div>
          <div class="match-intro">
            <div class="team-logo">
              <img src="./assets/images/Club-Teams/FCKrasava.png" alt="logo" />
              <h3>Krasava ENY Ypsonas</h3>
            </div>
            <div class="result"><span>3</span><span>-</span><span>0</span></div>
            <div class="team-logo">
              <img src="./assets/images/Club-Teams/ASIL.png" alt="logo" />
              <h3>ASIL Lysi</h3>
            </div>
          </div>
        </a>
      </div>
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
          <!-- Team-1 Point Item -->
          <div class="point-item">
            <div class="box">1</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/AEKLarnaka.png"
                alt="team-logo"
              />
              <span>AEK Larnaca</span>
            </div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
          </div>

          <!-- Team-2 Point Item -->
          <div class="point-item">
            <div class="box">2</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/AELLimassol.png"
                alt="team-logo"
              />
              <span>AEL Limassol</span>
            </div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
          </div>

          <!-- Team-3 Point Item -->
          <div class="point-item">
            <div class="box">3</div>
            <div class="box name">
              <img src="./assets/images/Club-Teams/APOEL.png" alt="team-logo" />
              <span>APOEL Nicosia</span>
            </div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
          </div>

          <!-- Team-4 Point Item -->
          <div class="point-item">
            <div class="box">4</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/Akritas.png"
                alt="team-logo"
              />
              <span>Akritas</span>
            </div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
          </div>

          <!-- Team-5 Point Item -->
          <div class="point-item">
            <div class="box">5</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/Anorthosis.png"
                alt="team-logo"
              />
              <span>Anorthosis Famagusta</span>
            </div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
          </div>

          <!-- Team-6 Point Item -->
          <div class="point-item">
            <div class="box">6</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/ApollonLimassol.png"
                alt="team-logo"
              />
              <span>Apollon Limassol</span>
            </div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
          </div>

          <!-- Team-7 Point Item -->
          <div class="point-item">
            <div class="box">7</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/ArisLimassol.png"
                alt="team-logo"
              />
              <span>Aris Limassol</span>
            </div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
          </div>

          <!-- Team-8 Point Item -->
          <div class="point-item">
            <div class="box">8</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/EnosisNeon.png"
                alt="team-logo"
              />
              <span>Enosis Neon Paralimniou</span>
            </div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
          </div>

          <!-- Team-9 Point Item -->
          <div class="point-item">
            <div class="box">9</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/EthnikosAchnas.png"
                alt="team-logo"
              />
              <span>Ethnikos Achnas</span>
            </div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
          </div>

          <!-- Team-10 Point Item -->
          <div class="point-item">
            <div class="box">10</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/FCKrasava.png"
                alt="team-logo"
              />
              <span>FC Krasava ENY</span>
            </div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
          </div>

          <!-- Team-11 Point Item -->
          <div class="point-item">
            <div class="box">11</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/OlympiakosNicosia.png"
                alt="team-logo"
              />
              <span>Olympiakos Nicosia</span>
            </div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
          </div>

          <!-- Team-12 Point Item -->
          <div class="point-item">
            <div class="box">12</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/OmoniaAradippou.png"
                alt="team-logo"
              />
              <span>Omonia Aradippou</span>
            </div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
          </div>

          <!-- Team-13 Point Item -->
          <div class="point-item">
            <div class="box">13</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/OmoniaNicosia.png"
                alt="team-logo"
              />
              <span>Omonia Nicosia</span>
            </div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
          </div>

          <!-- Team-14 Point Item -->
          <div class="point-item">
            <div class="box">14</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/PafosFC.png"
                alt="team-logo"
              />
              <span>Pafos FC</span>
            </div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
            <div class="box">0</div>
          </div>
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
    <!-- Match 1 -->
    <div class="match-item">
      <a href="./pages/Pages/Fixture-Single.html">
        <div class="match-detail">
          <div class="league">Cypriot First Division, 1-round</div>
          <div class="time">23 Aug 2025 - 18:00 p.m.</div>
          <!--<div class="venue">City Stadium, Pakistan</div>-->
        </div>
        <div class="match-intro">
          <div class="team-logo">
            <img src="./assets/images/Club-Teams/FCKrasava.png" alt="logo" />
            <h3>Krasava ENY Ypsonas</h3>
          </div>
          <div class="result"><span>VS</span></div>
          <div class="team-logo">
            <img src="./assets/images/Club-Teams/APOEL.png" alt="logo" />
            <h3>APOEL Nicosia</h3>
          </div>
        </div>
      </a>
      <div class="action-container">
        <a href="#"
          ><i class="fas fa-ticket-alt"></i> <span>Buy ticket</span>
        </a>
        <a href="https://soccer365.net/games/2295242/"
          ><i class="fa-solid fa-pen-to-square"></i>
          <span>Match Report</span></a
        >
      </div>
    </div>

    <!-- Match 2 -->
    <div class="match-item">
      <a href="./pages/Pages/Fixture-Single.html">
        <div class="match-detail">
          <div class="league">Cypriot First Division, 2-round</div>
          <div class="time">30 Aug 2025 - 18:00 p.m.</div>
          <!-- <div class="venue">City Stadium, Pakistan</div> -->
        </div>
        <div class="match-intro">
          <div class="team-logo">
            <img
              src="./assets/images/Club-Teams/ApollonLimassol.png"
              alt="logo"
            />
            <h3>Apollon Limassol</h3>
          </div>
          <div class="result"><span>VS</span></div>
          <div class="team-logo">
            <img src="./assets/images/Club-Teams/FCKrasava.png" alt="logo" />
            <h3>Krasava ENY Ypsonas</h3>
          </div>
        </div>
      </a>
      <div class="action-container">
        <a href="#"
          ><i class="fas fa-ticket-alt"></i> <span>Buy ticket</span>
        </a>
        <a href="https://soccer365.ru/games/2295246/"
          ><i class="fa-solid fa-pen-to-square"></i>
          <span>Match Report</span></a
        >
      </div>
    </div>
  </div>
</section>
<!-- ==================== Upcoming Matches Area (End) ==================== -->

<!-- ==================== Count Area (Start) ==================== -->
<div class="counting">
  <!-- Statistic Box 1: Goals Scored Count -->
  <div class="box">
    <div class="info">
      <i class="fas fa-futbol"></i>
      <!-- Football icon -->
      <div class="content">
        <h1 class="count" data-count="800">800+</h1>
        <!-- Count of goals scored -->
        <h3>Goals Scored</h3>
        <!-- Statistic description -->
      </div>
    </div>
  </div>

  <!-- Statistic Box 2: Wins Count -->
  <div class="box">
    <div class="info">
      <i class="fas fa-trophy"></i>
      <!-- Trophy icon -->
      <div class="content">
        <h1 class="count" data-count="400">400+</h1>
        <!-- Count of wins -->
        <h3>Wins</h3>
        <!-- Statistic description -->
      </div>
    </div>
  </div>

  <!-- Statistic Box 3: Players Trained Count -->
  <div class="box">
    <div class="info">
      <i class="fas fa-users"></i>
      <!-- Users icon representing players -->
      <div class="content">
        <h1 class="count" data-count="100">100+</h1>
        <!-- Count of players trained -->
        <h3>Players Trained</h3>
        <!-- Statistic description -->
      </div>
    </div>
  </div>

  <!-- Statistic Box 4: Championships Won Count -->
  <div class="box">
    <div class="info">
      <i class="fas fa-medal"></i>
      <!-- Medal icon -->
      <div class="content">
        <h1 class="count" data-count="10">10+</h1>
        <!-- Count of championships won -->
        <h3>Championships Won</h3>
        <!-- Statistic description -->
      </div>
    </div>
  </div>
</div>
<!-- ==================== Count Area (End) ==================== -->

<!-- ==================== Players Slider Area (Start) ==================== -->
<section class="team">
  <!-- Section Heading -->
  <div class="heading">
    <h2>our <span>players</span></h2>
  </div>

  <!-- Service Slider -->
  <div class="swiper-container player-slider">
    <div class="swiper-wrapper">
      <!-- Team Member 1 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Goalkeepers/IoannisPieriteam.jpeg"
            alt="Team-Image"
          />
          <!-- Team Member Image -->
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <!-- Facebook Icon -->
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <!-- LinkedIn Icon -->
            <a href="#"><i class="fab fa-twitter"></i></a>
            <!-- Twitter Icon -->
            <a href="#"><i class="fab fa-instagram"></i></a>
            <!-- Instagram Icon -->
          </div>
        </div>
        <!-- Team Member Details -->
        <div class="team-content">
          <span>1</span>
          <!-- Team Member Jersey Number -->
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Ioannis Pieri</h3></a
          >
          <!-- Team Member Name -->
          <p>GoalKeeper</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 2 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Goalkeepers/PatrykProcekteam.jpg"
            alt="Team-Image"
          />
          <!-- Team Member Image -->
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <!-- Facebook Icon -->
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <!-- LinkedIn Icon -->
            <a href="#"><i class="fab fa-twitter"></i></a>
            <!-- Twitter Icon -->
            <a href="#"><i class="fab fa-instagram"></i></a>
            <!-- Instagram Icon -->
          </div>
        </div>
        <div class="team-content">
          <span>95</span>
          <a href="./pages/Team/Player-Single.html"><h3>Patryk Procek</h3></a>
          <!-- Team Member Name -->
          <p>GoalKeeper</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 3 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Defenders/DimitrisKyprianou.jpeg"
            alt="Team-Image"
          />
          <!-- Team Member Image -->
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <!-- Facebook Icon -->
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <!-- LinkedIn Icon -->
            <a href="#"><i class="fab fa-twitter"></i></a>
            <!-- Twitter Icon -->
            <a href="#"><i class="fab fa-instagram"></i></a>
            <!-- Instagram Icon -->
          </div>
        </div>
        <div class="team-content">
          <span>25</span>
          <a href="./pages/Team/Player-Single.html"
            ><h3>Dimitris Kyprianou</h3></a
          >
          <!-- Team Member Name -->
          <p>Defender</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 4 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Defenders/VangelisKyriacouteam.jpeg"
            alt="Team-Image"
          />
          <!-- Team Member Image -->
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <!-- Facebook Icon -->
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <!-- LinkedIn Icon -->
            <a href="#"><i class="fab fa-twitter"></i></a>
            <!-- Twitter Icon -->
            <a href="#"><i class="fab fa-instagram"></i></a>
            <!-- Instagram Icon -->
          </div>
        </div>
        <div class="team-content">
          <span>32</span>
          <a href="./pages/Team/Player-Single.html"
            ><h3>Vangelis Kyriacou</h3></a
          >
          <!-- Team Member Name -->
          <p>Defender</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 5 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Defenders/ConstantinosDemetriouteam.jpeg"
            alt="Team-Image"
          />
          <!-- Team Member Image -->
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <!-- Facebook Icon -->
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <!-- LinkedIn Icon -->
            <a href="#"><i class="fab fa-twitter"></i></a>
            <!-- Twitter Icon -->
            <a href="#"><i class="fab fa-instagram"></i></a>
            <!-- Instagram Icon -->
          </div>
        </div>
        <div class="team-content">
          <span>77</span>
          <a href="./pages/Team/Player-Single.html"
            ><h3>Constantinos Demetrio</h3></a
          >
          <!-- Team Member Name -->
          <p>Defender</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 6 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/AndreasKomodikisteam.jpeg"
            alt="Team-Image"
          />
          <!-- Team Member Image -->
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <!-- Facebook Icon -->
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <!-- LinkedIn Icon -->
            <a href="#"><i class="fab fa-twitter"></i></a>
            <!-- Twitter Icon -->
            <a href="#"><i class="fab fa-instagram"></i></a>
            <!-- Instagram Icon -->
          </div>
        </div>
        <div class="team-content">
          <span>7</span>
          <a href="./pages/Team/Player-Single.html"
            ><h3>Andreas Komodikis</h3></a
          >
          <!-- Team Member Name -->
          <p>Midfielder</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 7 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/CurtisYebliteam.jpeg"
            alt="Team-Image"
          />
          <!-- Team Member Image -->
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <!-- Facebook Icon -->
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <!-- LinkedIn Icon -->
            <a href="#"><i class="fab fa-twitter"></i></a>
            <!-- Twitter Icon -->
            <a href="#"><i class="fab fa-instagram"></i></a>
            <!-- Instagram Icon -->
          </div>
        </div>
        <div class="team-content">
          <span>8</span>
          <a href="./pages/Team/Player-Single.html"><h3>Curtis Yebli</h3></a>
          <!-- Team Member Name -->
          <p>Midfielder</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 8 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/MarcioMeirateam.jpeg"
            alt="Team-Image"
          />
          <!-- Team Member Image -->
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <!-- Facebook Icon -->
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <!-- LinkedIn Icon -->
            <a href="#"><i class="fab fa-twitter"></i></a>
            <!-- Twitter Icon -->
            <a href="#"><i class="fab fa-instagram"></i></a>
            <!-- Instagram Icon -->
          </div>
        </div>
        <div class="team-content">
          <span>10</span>
          <a href="./pages/Team/Player-Single.html"><h3>Márcio Meira</h3></a>
          <!-- Team Member Name -->
          <p>Midfielder</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 9 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/TheodosisKyprouteam.jpeg"
            alt="Team-Image"
          />
          <!-- Team Member Image -->
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <!-- Facebook Icon -->
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <!-- LinkedIn Icon -->
            <a href="#"><i class="fab fa-twitter"></i></a>
            <!-- Twitter Icon -->
            <a href="#"><i class="fab fa-instagram"></i></a>
            <!-- Instagram Icon -->
          </div>
        </div>
        <div class="team-content">
          <span>17</span>
          <a href="./pages/Team/Player-Single.html"><h3>Theodosis Kyprou</h3></a
          >
          <!-- Team Member Name -->
          <p>Midfielder</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 10 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/NikolasTarapoulouzisteam.jpeg"
            alt="Team-Image"
          />
          <!-- Team Member Image -->
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <!-- Facebook Icon -->
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <!-- LinkedIn Icon -->
            <a href="#"><i class="fab fa-twitter"></i></a>
            <!-- Twitter Icon -->
            <a href="#"><i class="fab fa-instagram"></i></a>
            <!-- Instagram Icon -->
          </div>
        </div>
        <div class="team-content">
          <span>30</span>
          <a href="./pages/Team/Player-Single.html"
            ><h3>Nikolas Tarapoulouzis</h3></a
          >
          <!-- Team Member Name -->
          <p>Midfielder</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 11 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/OsmanKoroma.jpeg"
            alt="Team-Image"
          />
          <!-- Team Member Image -->
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <!-- Facebook Icon -->
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <!-- LinkedIn Icon -->
            <a href="#"><i class="fab fa-twitter"></i></a>
            <!-- Twitter Icon -->
            <a href="#"><i class="fab fa-instagram"></i></a>
            <!-- Instagram Icon -->
          </div>
        </div>
        <div class="team-content">
          <span>33</span>
          <a href="./pages/Team/Player-Single.html"><h3>Osman Koroma</h3></a>
          <!-- Team Member Name -->
          <p>Midfielder</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 12 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Forwards/MarianSutoteam.jpeg"
            alt="Team-Image"
          />
          <!-- Team Member Image -->
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <!-- Facebook Icon -->
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <!-- LinkedIn Icon -->
            <a href="#"><i class="fab fa-twitter"></i></a>
            <!-- Twitter Icon -->
            <a href="#"><i class="fab fa-instagram"></i></a>
            <!-- Instagram Icon -->
          </div>
        </div>
        <div class="team-content">
          <span>9</span>
          <a href="./pages/Team/Player-Single.html"><h3>Marian Suto</h3></a>
          <!-- Team Member Name -->
          <p>Forward</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 13 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Forwards/Theodoroslosifidisteam.jpeg"
            alt="Team-Image"
          />
          <!-- Team Member Image -->
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <!-- Facebook Icon -->
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <!-- LinkedIn Icon -->
            <a href="#"><i class="fab fa-twitter"></i></a>
            <!-- Twitter Icon -->
            <a href="#"><i class="fab fa-instagram"></i></a>
            <!-- Instagram Icon -->
          </div>
        </div>
        <div class="team-content">
          <span>26</span>
          <a href="./pages/Team/Player-Single.html"
            ><h3>Theodoros Losifidis</h3></a
          >
          <!-- Team Member Name -->
          <p>Forward</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 23 
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Forwards/4.jpg" alt="Team-Image" />-->
      <!-- Team Member Image -->
      <!--  <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>-->
      <!-- Facebook Icon -->
      <!-- <a href="#"><i class="fab fa-linkedin-in"></i></a>-->
      <!-- LinkedIn Icon -->
      <!-- <a href="#"><i class="fab fa-twitter"></i></a>-->
      <!-- Twitter Icon -->
      <!-- <a href="#"><i class="fab fa-instagram"></i></a>-->
      <!-- Instagram Icon -->
      <!--  </div>
        </div>
        <div class="team-content">
          <span>04</span>
          <a href="./pages/Team/Player-Single.html"><h3>Samuel Martin</h3></a>-->
      <!-- Team Member Name -->
      <!-- <p>forward</p>-->
      <!-- Team Member Designation -->
      <!--</div>
      </div>
    </div>
  </div>-->
    </div>
  </div>
</section>
<!-- ==================== Players Slider Area (End) ==================== -->

<!-- ==================== Banner Area (Start) ==================== -->
<section class="banner">
  <div class="content">
    <h2>Celebrate Victory with Our Football Club</h2>
    <a href="#" class="btn">Get Tickets</a>
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
    <!-- <li class="button" data-filter=".community">Community</li> -->
  </ul>

  <!-- Portfolio Items Container -->
  <div class="box-container">
    <!-- Portfolio Item 1 - Young Talents -->
    <div class="portfolio-item player">
      <div class="portfolio-content">
        <img
          src="./assets/images/Krasava/Photo-400_resized.jpg"
          alt="Young Talents"
        />
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
            <a href="./pages/Pages/Portfolio-Single.html"
              ><i class="fa-solid fa-link"></i></a
            >
            <!-- Link to portfolio single page -->
          </div>
          <!-- Text content -->
          <div class="text">
            <!-- <p>Player</p> -->
            <!-- Portfolio Category -->
            <a href="./pages/Pages/Portfolio-Single.html"
              ><h3>About</h3></a
            >
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
            <a href="/academy"
              ><i class="fa-solid fa-link"></i></a
            >
          </div>
          <div class="text">
            <!-- <p>Trophy</p> -->
            <a href="/academy"
              ><h3>Academy</h3></a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="portfolio-item community">
      <div class="portfolio-content">
        <img
          src="./assets/images/Portfolio/Portfolio/Portfolio-3.jpg"
          alt="Fan Engagement"
        />
        <div class="content">
          <div class="btn-container">
            <a
              class="view"
              href="./assets/images/Portfolio/Portfolio/Portfolio-3.jpg"
              ><i class="fa-solid fa-camera-retro"></i></a
            >
            <a href="./pages/Pages/Portfolio-Single.html"
              ><i class="fa-solid fa-link"></i></a
            >
          </div>
          <div class="text">
            <p>Community</p>
            <a href="./pages/Pages/Portfolio-Single.html"
              ><h3>Fan Engagement</h3></a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="portfolio-item trophy">
      <div class="portfolio-content">
        <img
          src="./assets/images/Portfolio/Portfolio/Portfolio-4.jpg"
          alt="Championship Victories"
        />
        <div class="content">
          <div class="btn-container">
            <a
              class="view"
              href="./assets/images/Portfolio/Portfolio/Portfolio-4.jpg"
              ><i class="fa-solid fa-camera-retro"></i></a
            >
            <a href="./pages/Pages/Portfolio-Single.html"
              ><i class="fa-solid fa-link"></i></a
            >
          </div>
          <div class="text">
            <p>Trophy</p>
            <a href="./pages/Pages/Portfolio-Single.html"
              ><h3>Championship Victories</h3></a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="portfolio-item player">
      <div class="portfolio-content">
        <img
          src="./assets/images/Portfolio/Portfolio/Portfolio-5.jpg"
          alt="Goal Machines"
        />
        <div class="content">
          <div class="btn-container">
            <a
              class="view"
              href="./assets/images/Portfolio/Portfolio/Portfolio-5.jpg"
              ><i class="fa-solid fa-camera-retro"></i></a
            >
            <a href="./pages/Pages/Portfolio-Single.html"
              ><i class="fa-solid fa-link"></i></a
            >
          </div>
          <div class="text">
            <p>Player</p>
            <a href="./pages/Pages/Portfolio-Single.html"
              ><h3>Goal Machines</h3></a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="portfolio-item community">
      <div class="portfolio-content">
        <img
          src="./assets/images/Portfolio/Portfolio/Portfolio-6.jpg"
          alt="Youth Development"
        />
        <div class="content">
          <div class="btn-container">
            <a
              class="view"
              href="./assets/images/Portfolio/Portfolio/Portfolio-6.jpg"
              ><i class="fa-solid fa-camera-retro"></i></a
            >
            <a href="./pages/Pages/Portfolio-Single.html"
              ><i class="fa-solid fa-link"></i></a
            >
          </div>
          <div class="text">
            <p>Community</p>
            <a href="./pages/Pages/Portfolio-Single.html"
              ><h3>Youth Development</h3></a
            >
          </div>
        </div>
      </div>
    </div> -->
  </div>
</section>
<!-- ==================== Portfolio Area (End) ==================== -->

<!-- ==================== Awards Area (Start) ==================== -->
<section class="awards linear-bg">
  <!-- Awards Heading -->
  <div class="heading">
    <h2>our <span>awards</span></h2>
  </div>

  <!-- Awards Slider Container -->
  <div class="swiper-container award-slider">
    <div class="swiper-wrapper">
      <!-- Award 1 -->
      <div class="swiper-slide award-item">
        <img src="/assets/images/Krasava/trophy.JPG" alt="Award Image" />
        <!-- Award Image -->
        <h4>Cypriot 2nd tier champion<br /> 2025</h4>
        <!-- Award Title and Year -->
      </div>
      <!-- Award 2 -->
      <!-- <div class="swiper-slide award-item">
        <img src="./assets/images/Awards/Award-2.png" alt="Award Image" />
        <h4>National League <br /> 2004</h4>
      </div> -->

      <!-- Award 3 -->
      <!-- <div class="swiper-slide award-item">
        <img src="./assets/images/Awards/Award-3.png" alt="Award Image" />
        <h4>Premier League <br /> 2008</h4>
      </div> -->

      <!-- Award 4 -->
      <!-- <div class="swiper-slide award-item">
        <img src="./assets/images/Awards/Award-4.png" alt="Award Image" />
        <h4>National Cup <br /> 2012</h4>
      </div> -->

      <!-- Award 5 -->
      <!-- <div class="swiper-slide award-item">
        <img src="./assets/images/Awards/Award-5.png" alt="Award Image" />
        <h4>Champion League <br /> 2016</h4>
      </div> -->

      <!-- Award 6 -->
      <!-- <div class="swiper-slide award-item">
        <img src="./assets/images/Awards/Award-6.png" alt="Award Image" />
        <h4>Premier League <br /> 2020</h4>
      </div> -->

      <!-- Award 1 -->
      <!-- <div class="swiper-slide award-item">
        <img src="./assets/images/Awards/Award-1.png" alt="Award Image" />
        <h4>Champion League <br /> 2000</h4>
      </div> -->

      <!-- Award 2 -->
      <!-- <div class="swiper-slide award-item">
        <img src="./assets/images/Awards/Award-2.png" alt="Award Image" />
        <h4>National League <br /> 2004</h4>
      </div> -->

      <!-- Award 3 -->
      <!-- <div class="swiper-slide award-item">
        <img src="./assets/images/Awards/Award-3.png" alt="" />
        <h4>Premier League <br /> 2008</h4>
      </div> -->

      <!-- Award 4 -->
      <!-- <div class="swiper-slide award-item">
        <img src="./assets/images/Awards/Award-4.png" alt="Award Image" />
        <h4>National Cup <br /> 2012</h4>
      </div> -->

      <!-- Award 5 -->
      <!-- <div class="swiper-slide award-item">
        <img src="./assets/images/Awards/Award-5.png" alt="Award Image" />
        <h4>Champion League <br /> 2016</h4>
      </div> -->

      <!-- Award 6 -->
      <!-- <div class="swiper-slide award-item">
        <img src="./assets/images/Awards/Award-6.png" alt="Award Image" />
        <h4>Premier League <br /> 2020</h4>
      </div> -->
    </div>
  </div>
</section>
<!-- ==================== Awards Area (End) ==================== -->

<!-- ==================== Products Area (Start) ==================== -->
<section class="home-shop">
  <div class="heading">
    <h2>Our <span>Market</span></h2>
  </div>

  <div class="box-container">
    <!-- Product-1 -->
    <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/tshirt.png"
          alt="Product-Image"
        />
        <!-- Product Image -->
        <div class="options">
          <a href="./pages/Shop/Wishlist.html" class="icon"
            ><i class="far fa-heart"></i></a
          ><!-- Add to Wishlist Button -->
          <a href="./pages/Shop/Cart.html" class="icon"
            ><i class="fa-solid fa-cart-shopping"></i></a
          ><!-- Add to Cart Button -->
          <a href="./pages/Shop/Product-Single.html" class="icon"
            ><i class="fa-solid fa-magnifying-glass"></i></a
          ><!-- Product Detail Page Button -->
        </div>
      </div>
      <div class="content">
        <!--<div class="rating">
          Product Rating
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>-->
        <a href="./pages/Shop/Product-Single.html"
          ><h3>Away T-Shirt 2024/25</h3></a
        >
        <!-- Product Title -->
        <div class="price">$40.00 <!-- <span>€45.00</span>--></div>
        <!-- Product Price -->
      </div>
    </div>
    <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/tshirt.png"
          alt="Product-Image"
        />
        <!-- Product Image -->
        <div class="options">
          <a href="./pages/Shop/Wishlist.html" class="icon"
            ><i class="far fa-heart"></i></a
          ><!-- Add to Wishlist Button -->
          <a href="./pages/Shop/Cart.html" class="icon"
            ><i class="fa-solid fa-cart-shopping"></i></a
          ><!-- Add to Cart Button -->
          <a href="./pages/Shop/Product-Single.html" class="icon"
            ><i class="fa-solid fa-magnifying-glass"></i></a
          ><!-- Product Detail Page Button -->
        </div>
      </div>
      <div class="content">
        <!--<div class="rating">
          Product Rating
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>-->
        <a href="./pages/Shop/Product-Single.html"
          ><h3>Away T-Shirt 2024/25</h3></a
        >
        <!-- Product Title -->
        <div class="price">$40.00 <!-- <span>€45.00</span>--></div>
        <!-- Product Price -->
      </div>
    </div>
    <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/tshirt.png"
          alt="Product-Image"
        />
        <!-- Product Image -->
        <div class="options">
          <a href="./pages/Shop/Wishlist.html" class="icon"
            ><i class="far fa-heart"></i></a
          ><!-- Add to Wishlist Button -->
          <a href="./pages/Shop/Cart.html" class="icon"
            ><i class="fa-solid fa-cart-shopping"></i></a
          ><!-- Add to Cart Button -->
          <a href="./pages/Shop/Product-Single.html" class="icon"
            ><i class="fa-solid fa-magnifying-glass"></i></a
          ><!-- Product Detail Page Button -->
        </div>
      </div>
      <div class="content">
        <!--<div class="rating">
          Product Rating
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>-->
        <a href="./pages/Shop/Product-Single.html"
          ><h3>Away T-Shirt 2024/25</h3></a
        >
        <!-- Product Title -->
        <div class="price">$40.00 <!-- <span>€45.00</span>--></div>
        <!-- Product Price -->
      </div>
    </div>
    <!-- Product-2 -->
    <!-- <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/Product-2.jpg"
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
        <div class="rating">
          Product Rating
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <a href="./pages/Shop/Product-Single.html"><h3>Monthly Academy Membership</h3></a>
        <div class="price">€190,00</div>
      </div>
    </div> -->

    <!-- Product-3 -->
    <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/tshirt.png"
          alt="Product-Image"
        />
        <!-- Product Image -->
        <div class="options">
          <a href="./pages/Shop/Wishlist.html" class="icon"
            ><i class="far fa-heart"></i></a
          ><!-- Add to Wishlist Button -->
          <a href="./pages/Shop/Cart.html" class="icon"
            ><i class="fa-solid fa-cart-shopping"></i></a
          ><!-- Add to Cart Button -->
          <a href="./pages/Shop/Product-Single.html" class="icon"
            ><i class="fa-solid fa-magnifying-glass"></i></a
          ><!-- Product Detail Page Button -->
        </div>
      </div>
      <div class="content">
        <a href="./pages/Shop/Product-Single.html"><h3>Kids Uniform</h3></a>
        <!-- Product Title -->
        <div class="price">€40.00 <span>€50.00</span></div>
        <!-- Product Price -->
      </div>
    </div>
    <!-- 
    <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/Product-8.jpg"
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
        <div class="rating">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <a href="./pages/Shop/Product-Single.html"><h3>Helmet</h3></a>
        <div class="price">$40.00 <span>$50.00</span></div>
      </div>
    </div> -->
  </div>
</section>
<!-- ==================== Products Area (End) ==================== -->

<!-- ==================== Testimonials Area (Start) ==================== -->
<section class="testimonial-bg linear-bg">
  <!-- Section Heading -->
  <div class="heading">
    <h2>Fan <span>Testimonials</span></h2>
  </div>

  <!-- Testimonial Slider Container -->
  <div class="swiper-container testimonial-slider">
    <div class="swiper-wrapper">
      <!-- Testimonial Item 1 -->
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

      <!-- Testimonial Item 2 -->
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

      <!-- Testimonial Item 3 -->
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

      <!-- Testimonial Item 4 -->
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

    <!-- Testimonial Pagination -->
    <div class="swiper-pagination swiper-pagination3"></div>
  </div>
</section>
<!-- ==================== Testimonials Area (End) ==================== -->

<!-- ==================== Blogs Area (Start) ==================== -->
<section class="blog main">
  <!-- Section Heading -->
  <div class="heading">
    <h2>our <span>blogs</span></h2>
  </div>

  <!-- Latest Blogs -->
  <div class="box-container">
    <!-- Blog-1 -->
    <div class="blog-item">
      <div class="image">
        <img src="./assets/images/Blog/Blogs/Blog-1.jpg" alt="Blog-Image" />
        <!-- Blog Image -->
        <div class="date"><span>02</span> Dec</div>
        <!-- Blog Date -->
      </div>
      <div class="content">
        <a class="main-heading" href="./pages/Blog/Blog-Single.html"
          >Complete List of Football Equipment</a
        >
        <!-- Blog Title -->
        <div class="details">
          <h3><i class="fa-solid fa-circle-user"></i><span>By Admin</span></h3>
          <!-- Author -->
          <h3>
            <i class="fa-regular fa-folder-open"></i><span>Sport Center</span>
          </h3>
          <!-- Category -->
        </div>
      </div>
    </div>

    <!-- Blog-2 -->
    <div class="blog-item">
      <div class="image">
        <img src="./assets/images/Blog/Blogs/Blog-2.jpg" alt="Blog-Image" />
        <!-- Blog Image -->
        <div class="date"><span>25</span> nov</div>
        <!-- Blog Date -->
      </div>
      <div class="content">
        <a class="main-heading" href="./pages/Blog/Blog-Single.html"
          >A Brief History of Royal Rebels</a
        >
        <!-- Blog Title -->
        <div class="details">
          <h3><i class="fa-solid fa-circle-user"></i><span>By Admin</span></h3>
          <!-- Author -->
          <h3>
            <i class="fa-regular fa-folder-open"></i><span>Analysis</span>
          </h3>
          <!-- Category -->
        </div>
      </div>
    </div>

    <!-- Blog-3 -->
    <div class="blog-item">
      <div class="image">
        <img src="./assets/images/Blog/Blogs/Blog-3.jpg" alt="Blog-Image" />
        <!-- Blog Image -->
        <div class="date"><span>17</span> Nov</div>
        <!-- Blog Date -->
      </div>
      <div class="content">
        <a class="main-heading" href="./pages/Blog/Blog-Single.html"
          >We Are a Family, Not Just a Team</a
        >
        <!-- Blog Title -->
        <div class="details">
          <h3><i class="fa-solid fa-circle-user"></i><span>By Admin</span></h3>
          <!-- Author -->
          <h3>
            <i class="fa-regular fa-folder-open"></i><span>Interviews</span>
          </h3>
          <!-- Category -->
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ==================== Blogs Area (End) ==================== -->

<!-- ==================== Newsletter Area (Start) ==================== -->
<section class="newsletter-subscribe">
  <div class="content">
    <h2>Subscribe To Our Newsletter</h2>
    <!-- Newsletter Heading -->
    <p>
      Stay updated with the latest football news, match highlights, and
      exclusive offers from our football community.
    </p>
    <!-- Newsletter Description -->
    <form class="newsletter-form">
      <input
        type="email"
        id="sub-email"
        name="email"
        placeholder="Your email address"
        required
      />
      <!-- Email Input Field -->
      <button type="submit" class="btn">Subscribe</button>
      <!-- Join Now Button -->
    </form>
  </div>
</section>
<!-- ==================== Newsletter Area (End) ==================== -->

<!-- ==================== Sponsors Area (Start) ==================== -->
<section class="sponsors">
  <!-- Sponsors Slider Container -->
  <div class="swiper-container sponsor-slider">
    <!-- Sponsors Logo -->
    <div class="swiper-wrapper">
      <div class="swiper-slide sponsor-item">
        <a href="#"
          ><img
            src="./assets/images/Sponsors/freedom.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
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
    </div>
  </div>
</section>
<!-- ==================== Sponsors Area Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->
