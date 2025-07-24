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
              <span>Welcome to Krasava Footbal Club</span><i
                class="fa-solid fa-futbol"
              ></i>
            </h5>
            <!-- Slide Subheading -->
            <h3>Experience the Thrill of Our Football Club</h3>
            <!-- Slide Heading -->
            <a href="/contact" class="btn">Join Now</a>
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
        <img src="./assets/images/About/About-1.jpg" alt="About-Image1" />
      </div>
      <div class="sub-image two">
        <img src="./assets/images/About/About-2.jpg" alt="About-Image2" />
        <img src="./assets/images/About/About-3.jpg" alt="About-Image3" />
      </div>
    </div>

    <!-- About Content -->
    <div class="content">
      <div class="heading">
        <h2>
          <span>passion</span> for the Game, Dedication to
          <span>Excellence</span>
        </h2>
        <!-- Main Heading -->
      </div>

      <p>
        Join us in celebrating the spirit of football. Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Eum voluptatibus dolores. Join us in
        celebrating the spirit of football. Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Eum voluptatibus dolores.
      </p>
      <!-- Description -->

      <!-- Key Features -->
      <ul class="features">
        <li>
          <i class="fas fa-futbol"></i><span
            >Fostering Talent and Team Spirit</span
          >
        </li>
        <!-- Feature 1 -->
        <li>
          <i class="fas fa-futbol"></i><span
            >Building a Strong Football Community</span
          >
        </li>
        <!-- Feature 2 -->
        <li>
          <i class="fas fa-futbol"></i><span
            >Training and Development Programs</span
          >
        </li>
        <!-- Feature 3 -->
        <li>
          <i class="fas fa-futbol"></i><span
            >Competing with Integrity and Passion</span
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
        <a href="./pages/Result/Result-Single.html">
          <div class="match-detail">
            <div class="league">Champions League</div>
            <div class="time">03 Dec 2023 - 8:30 p.m.</div>
            <div class="venue">City Stadium, Pakistan</div>
          </div>
          <div class="match-intro">
            <div class="team-logo">
              <img src="./assets/images/Club-Teams/Royal.png" alt="logo" />
              <h3>Royal Rebels</h3>
            </div>
            <div class="result"><span>2</span><span>-</span><span>1</span></div>
            <div class="team-logo">
              <img src="./assets/images/Club-Teams/Eagle.png" alt="logo" />
              <h3>Eagles United</h3>
            </div>
          </div>
        </a>
      </div>

      <!-- Match 2 -->
      <div class="match-item">
        <a href="./pages/Result/Result-Single.html">
          <div class="match-detail">
            <div class="league">Champions League</div>
            <div class="time">01 Dec 2023 - 6:45 p.m.</div>
            <div class="venue">City Stadium, Pakistan</div>
          </div>
          <div class="match-intro">
            <div class="team-logo">
              <img src="./assets/images/Club-Teams/Knights.png" alt="logo" />
              <h3>Nova Knights</h3>
            </div>
            <div class="result"><span>2</span><span>-</span><span>2</span></div>
            <div class="team-logo">
              <img src="./assets/images/Club-Teams/Royal.png" alt="logo" />
              <h3>Royal Rebels</h3>
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
              <img src="./assets/images/Club-Teams/Royal.png" alt="team-logo" />
              <span>royal rebels</span>
            </div>
            <div class="box">5</div>
            <div class="box">4</div>
            <div class="box">1</div>
            <div class="box">0</div>
            <div class="box">10</div>
            <div class="box">5</div>
            <div class="box">5</div>
            <div class="box">13</div>
          </div>

          <!-- Team-2 Point Item -->
          <div class="point-item">
            <div class="box">2</div>
            <div class="box name">
              <img src="./assets/images/Club-Teams/Eagle.png" alt="team-logo" />
              <span>Eagles United</span>
            </div>
            <div class="box">5</div>
            <div class="box">3</div>
            <div class="box">1</div>
            <div class="box">1</div>
            <div class="box">8</div>
            <div class="box">4</div>
            <div class="box">4</div>
            <div class="box">10</div>
          </div>

          <!-- Team-3 Point Item -->
          <div class="point-item">
            <div class="box">3</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/Knights.png"
                alt="team-logo"
              />
              <span>Nova Knights</span>
            </div>
            <div class="box">5</div>
            <div class="box">3</div>
            <div class="box">0</div>
            <div class="box">2</div>
            <div class="box">9</div>
            <div class="box">7</div>
            <div class="box">2</div>
            <div class="box">9</div>
          </div>

          <!-- Team-4 Point Item -->
          <div class="point-item">
            <div class="box">4</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/Aurora.png"
                alt="team-logo"
              />
              <span>Aurora Club</span>
            </div>
            <div class="box">5</div>
            <div class="box">2</div>
            <div class="box">2</div>
            <div class="box">1</div>
            <div class="box">7</div>
            <div class="box">6</div>
            <div class="box">1</div>
            <div class="box">8</div>
          </div>

          <!-- Team-5 Point Item -->
          <div class="point-item">
            <div class="box">5</div>
            <div class="box name">
              <img src="./assets/images/Club-Teams/Lions.png" alt="team-logo" />
              <span>Liberty Lions</span>
            </div>
            <div class="box">5</div>
            <div class="box">2</div>
            <div class="box">2</div>
            <div class="box">1</div>
            <div class="box">6</div>
            <div class="box">5</div>
            <div class="box">1</div>
            <div class="box">8</div>
          </div>

          <!-- Team-6 Point Item -->
          <div class="point-item">
            <div class="box">6</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/Arrows.png"
                alt="team-logo"
              />
              <span>Silver Arrows</span>
            </div>
            <div class="box">5</div>
            <div class="box">2</div>
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">8</div>
            <div class="box">9</div>
            <div class="box">-1</div>
            <div class="box">7</div>
          </div>

          <!-- Team-7 Point Item -->
          <div class="point-item">
            <div class="box">7</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/Rovers.png"
                alt="team-logo"
              />
              <span>Royal Rovers</span>
            </div>
            <div class="box">5</div>
            <div class="box">1</div>
            <div class="box">3</div>
            <div class="box">1</div>
            <div class="box">5</div>
            <div class="box">5</div>
            <div class="box">0</div>
            <div class="box">6</div>
          </div>

          <!-- Team-8 Point Item -->
          <div class="point-item">
            <div class="box">8</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/Infinite.png"
                alt="team-logo"
              />
              <span>Infinite Club</span>
            </div>
            <div class="box">5</div>
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">2</div>
            <div class="box">6</div>
            <div class="box">7</div>
            <div class="box">-1</div>
            <div class="box">5</div>
          </div>

          <!-- Team-9 Point Item -->
          <div class="point-item">
            <div class="box">9</div>
            <div class="box name">
              <img
                src="./assets/images/Club-Teams/Phoenix.png"
                alt="team-logo"
              />
              <span>Phoenix Titans</span>
            </div>
            <div class="box">5</div>
            <div class="box">1</div>
            <div class="box">2</div>
            <div class="box">2</div>
            <div class="box">5</div>
            <div class="box">7</div>
            <div class="box">-2</div>
            <div class="box">5</div>
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
          <div class="league">Champions League</div>
          <div class="time">15 Dec 2023 - 8:30 p.m.</div>
          <div class="venue">City Stadium, Pakistan</div>
        </div>
        <div class="match-intro">
          <div class="team-logo">
            <img src="./assets/images/Club-Teams/Royal.png" alt="logo" />
            <h3>Royal Rebels</h3>
          </div>
          <div class="result"><span>VS</span></div>
          <div class="team-logo">
            <img src="./assets/images/Club-Teams/Aurora.png" alt="logo" />
            <h3>Aurora Club</h3>
          </div>
        </div>
      </a>
      <div class="action-container">
        <a href="#"
          ><i class="fas fa-ticket-alt"></i> <span>Buy ticket</span>
        </a>
        <a href="./pages/Pages/Fixture-Single.html"
          ><i class="fa-solid fa-pen-to-square"></i>
          <span>Match Report</span></a
        >
      </div>
    </div>

    <!-- Match 2 -->
    <div class="match-item">
      <a href="./pages/Pages/Fixture-Single.html">
        <div class="match-detail">
          <div class="league">Champions League</div>
          <div class="time">27 Dec 2023 - 6:45 p.m.</div>
          <div class="venue">City Stadium, Pakistan</div>
        </div>
        <div class="match-intro">
          <div class="team-logo">
            <img src="./assets/images/Club-Teams/Phoenix.png" alt="logo" />
            <h3>Phoenix Titans</h3>
          </div>
          <div class="result"><span>VS</span></div>
          <div class="team-logo">
            <img src="./assets/images/Club-Teams/Royal.png" alt="logo" />
            <h3>Royal Rebels</h3>
          </div>
        </div>
      </a>
      <div class="action-container">
        <a href="#"
          ><i class="fas fa-ticket-alt"></i> <span>Buy ticket</span>
        </a>
        <a href="./pages/Pages/Fixture-Single.html"
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
          <img src="./assets/images/Team/Goalkeepers/1.jpg" alt="Team-Image" />
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
          <a href="./pages/Team/Player-Single.html"><h3>John Smith</h3></a>
          <!-- Team Member Name -->
          <p>GoalKeeper</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 2 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Goalkeepers/2.jpg" alt="Team-Image" />
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
          <span>12</span>
          <a href="./pages/Team/Player-Single.html"><h3>Michael Johnson</h3></a>
          <!-- Team Member Name -->
          <p>GoalKeeper</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 3 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Goalkeepers/3.jpg" alt="Team-Image" />
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
          <span>18</span>
          <a href="./pages/Team/Player-Single.html"
            ><h3>Christopher Brown</h3></a
          >
          <!-- Team Member Name -->
          <p>GoalKeeper</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 4 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Defenders/1.jpg" alt="Team-Image" />
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
          <span>03</span>
          <a href="./pages/Team/Player-Single.html"><h3>Daniel Davis</h3></a>
          <!-- Team Member Name -->
          <p>Defender</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 5 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Defenders/2.jpg" alt="Team-Image" />
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
          <span>27</span>
          <a href="./pages/Team/Player-Single.html"><h3>Matthew White</h3></a>
          <!-- Team Member Name -->
          <p>Defender</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 6 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Defenders/3.jpg" alt="Team-Image" />
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
          <span>09</span>
          <a href="./pages/Team/Player-Single.html"><h3>Alexander Turner</h3></a
          >
          <!-- Team Member Name -->
          <p>Defender</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 7 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Defenders/4.jpg" alt="Team-Image" />
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
          <span>15</span>
          <a href="./pages/Team/Player-Single.html"><h3>Robert Harris</h3></a>
          <!-- Team Member Name -->
          <p>Defender</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 8 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Defenders/5.jpg" alt="Team-Image" />
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
          <span>21</span>
          <a href="./pages/Team/Player-Single.html"><h3>William Martin</h3></a>
          <!-- Team Member Name -->
          <p>Defender</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 9 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Defenders/6.jpg" alt="Team-Image" />
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
          <span>36</span>
          <a href="./pages/Team/Player-Single.html"><h3>Thomas Clark</h3></a>
          <!-- Team Member Name -->
          <p>Defender</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 10 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Defenders/7.jpg" alt="Team-Image" />
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
          <span>06</span>
          <a href="./pages/Team/Player-Single.html"><h3>Richard Hall</h3></a>
          <!-- Team Member Name -->
          <p>Defender</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 11 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Defenders/8.jpg" alt="Team-Image" />
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
          <span>28</span>
          <a href="./pages/Team/Player-Single.html"><h3>Joseph Young</h3></a>
          <!-- Team Member Name -->
          <p>Defender</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 12 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Midfielders/1.jpg" alt="Team-Image" />
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
          <span>14</span>
          <a href="./pages/Team/Player-Single.html"><h3>David Scott</h3></a>
          <!-- Team Member Name -->
          <p>midfielder</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 13 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Midfielders/2.jpg" alt="Team-Image" />
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
          <a href="./pages/Team/Player-Single.html"><h3>Benjamin Lewis</h3></a>
          <!-- Team Member Name -->
          <p>midfielder</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 14 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Midfielders/3.jpg" alt="Team-Image" />
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
          <span>02</span>
          <a href="./pages/Team/Player-Single.html"><h3>James King</h3></a>
          <!-- Team Member Name -->
          <p>midfielder</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 15 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Midfielders/4.jpg" alt="Team-Image" />
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
          <span>19</span>
          <a href="./pages/Team/Player-Single.html"><h3>Charles Taylor</h3></a>
          <!-- Team Member Name -->
          <p>midfielder</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 16 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Midfielders/5.jpg" alt="Team-Image" />
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
          <span>22</span>
          <a href="./pages/Team/Player-Single.html"><h3>Andrew Wilson</h3></a>
          <!-- Team Member Name -->
          <p>midfielder</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 17 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Midfielders/6.jpg" alt="Team-Image" />
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
          <span>08</span>
          <a href="./pages/Team/Player-Single.html"><h3>Edward Moore</h3></a>
          <!-- Team Member Name -->
          <p>midfielder</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 18 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Midfielders/7.jpg" alt="Team-Image" />
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
          <a href="./pages/Team/Player-Single.html"><h3>Henry Adams</h3></a>
          <!-- Team Member Name -->
          <p>midfielder</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 19 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Midfielders/8.jpg" alt="Team-Image" />
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
          <a href="./pages/Team/Player-Single.html"><h3>George Walker</h3></a>
          <!-- Team Member Name -->
          <p>midfielder</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 20 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Forwards/1.jpg" alt="Team-Image" />
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
          <span>07</span>
          <a href="./pages/Team/Player-Single.html"><h3>Oliver White</h3></a>
          <!-- Team Member Name -->
          <p>forward</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 21 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Forwards/2.jpg" alt="Team-Image" />
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
          <a href="./pages/Team/Player-Single.html"><h3>Harry Turner</h3></a>
          <!-- Team Member Name -->
          <p>forward</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 22 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Forwards/3.jpg" alt="Team-Image" />
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
          <span>13</span>
          <a href="./pages/Team/Player-Single.html"><h3>Jack Harris</h3></a>
          <!-- Team Member Name -->
          <p>forward</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Team Member 23 -->
      <div class="swiper-slide team-item">
        <div class="team-image">
          <img src="./assets/images/Team/Forwards/4.jpg" alt="Team-Image" />
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
          <span>04</span>
          <a href="./pages/Team/Player-Single.html"><h3>Samuel Martin</h3></a>
          <!-- Team Member Name -->
          <p>forward</p>
          <!-- Team Member Designation -->
        </div>
      </div>
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
    <!-- Button for displaying all portfolio items -->
    <li class="button" data-filter=".player">Player</li>
    <!-- Button for filtering by player -->
    <li class="button" data-filter=".trophy">Trophy</li>
    <!-- Button for filtering by trophy -->
    <li class="button" data-filter=".community">Community</li>
    <!-- Button for filtering by community -->
  </ul>

  <!-- Portfolio Items Container -->
  <div class="box-container">
    <!-- Portfolio Item 1 - Young Talents -->
    <div class="portfolio-item player">
      <div class="portfolio-content">
        <img
          src="./assets/images/Portfolio/Portfolio/Portfolio-1.jpg"
          alt="Young Talents"
        />
        <!-- Portfolio Image -->
        <div class="content">
          <!-- Buttons container -->
          <div class="btn-container">
            <a
              class="view"
              href="./assets/images/Portfolio/Portfolio/Portfolio-1.jpg"
              ><i class="fa-solid fa-camera-retro"></i></a
            >
            <!-- View image button -->
            <a href="./pages/Pages/Portfolio-Single.html"
              ><i class="fa-solid fa-link"></i></a
            >
            <!-- Link to portfolio single page -->
          </div>
          <!-- Text content -->
          <div class="text">
            <p>Player</p>
            <!-- Portfolio Category -->
            <a href="./pages/Pages/Portfolio-Single.html"
              ><h3>Young Talents</h3></a
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
          src="./assets/images/Portfolio/Portfolio/Portfolio-2.jpg"
          alt="International Wins"
        />
        <!-- Portfolio Image -->
        <div class="content">
          <!-- Buttons container -->
          <div class="btn-container">
            <a
              class="view"
              href="./assets/images/Portfolio/Portfolio/Portfolio-2.jpg"
              ><i class="fa-solid fa-camera-retro"></i></a
            >
            <!-- View image button -->
            <a href="./pages/Pages/Portfolio-Single.html"
              ><i class="fa-solid fa-link"></i></a
            >
            <!-- Link to portfolio single page -->
          </div>
          <!-- Text content -->
          <div class="text">
            <p>Trophy</p>
            <!-- Portfolio Category -->
            <a href="./pages/Pages/Portfolio-Single.html"
              ><h3>International Wins</h3></a
            >
            <!-- Portfolio Title -->
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Item 2 - Fan Engagement -->
    <div class="portfolio-item community">
      <div class="portfolio-content">
        <img
          src="./assets/images/Portfolio/Portfolio/Portfolio-3.jpg"
          alt="Fan Engagement"
        />
        <!-- Portfolio Image -->
        <div class="content">
          <!-- Buttons container -->
          <div class="btn-container">
            <a
              class="view"
              href="./assets/images/Portfolio/Portfolio/Portfolio-3.jpg"
              ><i class="fa-solid fa-camera-retro"></i></a
            >
            <!-- View image button -->
            <a href="./pages/Pages/Portfolio-Single.html"
              ><i class="fa-solid fa-link"></i></a
            >
            <!-- Link to portfolio single page -->
          </div>
          <!-- Text content -->
          <div class="text">
            <p>Community</p>
            <!-- Portfolio Category -->
            <a href="./pages/Pages/Portfolio-Single.html"
              ><h3>Fan Engagement</h3></a
            >
            <!-- Portfolio Title -->
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Item 4 - Championship Victories -->
    <div class="portfolio-item trophy">
      <div class="portfolio-content">
        <img
          src="./assets/images/Portfolio/Portfolio/Portfolio-4.jpg"
          alt="Championship Victories"
        />
        <!-- Portfolio Image -->
        <div class="content">
          <!-- Buttons container -->
          <div class="btn-container">
            <a
              class="view"
              href="./assets/images/Portfolio/Portfolio/Portfolio-4.jpg"
              ><i class="fa-solid fa-camera-retro"></i></a
            >
            <!-- View image button -->
            <a href="./pages/Pages/Portfolio-Single.html"
              ><i class="fa-solid fa-link"></i></a
            >
            <!-- Link to portfolio single page -->
          </div>
          <!-- Text content -->
          <div class="text">
            <p>Trophy</p>
            <!-- Portfolio Category -->
            <a href="./pages/Pages/Portfolio-Single.html"
              ><h3>Championship Victories</h3></a
            >
            <!-- Portfolio Title -->
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Item 5 - Goal Machines -->
    <div class="portfolio-item player">
      <div class="portfolio-content">
        <img
          src="./assets/images/Portfolio/Portfolio/Portfolio-5.jpg"
          alt="Goal Machines"
        />
        <!-- Portfolio Image -->
        <div class="content">
          <!-- Buttons container -->
          <div class="btn-container">
            <a
              class="view"
              href="./assets/images/Portfolio/Portfolio/Portfolio-5.jpg"
              ><i class="fa-solid fa-camera-retro"></i></a
            >
            <!-- View image button -->
            <a href="./pages/Pages/Portfolio-Single.html"
              ><i class="fa-solid fa-link"></i></a
            >
            <!-- Link to portfolio single page -->
          </div>
          <!-- Text content -->
          <div class="text">
            <p>Player</p>
            <!-- Portfolio Category -->
            <a href="./pages/Pages/Portfolio-Single.html"
              ><h3>Goal Machines</h3></a
            >
            <!-- Portfolio Title -->
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Item 6 - Youth Development -->
    <div class="portfolio-item community">
      <div class="portfolio-content">
        <img
          src="./assets/images/Portfolio/Portfolio/Portfolio-6.jpg"
          alt="Youth Development"
        />
        <!-- Portfolio Image -->
        <div class="content">
          <!-- Buttons container -->
          <div class="btn-container">
            <a
              class="view"
              href="./assets/images/Portfolio/Portfolio/Portfolio-6.jpg"
              ><i class="fa-solid fa-camera-retro"></i></a
            >
            <!-- View image button -->
            <a href="./pages/Pages/Portfolio-Single.html"
              ><i class="fa-solid fa-link"></i></a
            >
            <!-- Link to portfolio single page -->
          </div>
          <!-- Text content -->
          <div class="text">
            <p>Community</p>
            <!-- Portfolio Category -->
            <a href="./pages/Pages/Portfolio-Single.html"
              ><h3>Youth Development</h3></a
            >
            <!-- Portfolio Title -->
          </div>
        </div>
      </div>
    </div>
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
        <img src="/assets/images/Krasava/trophy.png" alt="Award Image" />
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
    <h2>Our <span>Products</span></h2>
  </div>

  <div class="box-container">
    <!-- Product-1 -->
    <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/Product-1.jpg"
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
        <div class="rating">
          <!-- Product Rating -->
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <a href="./pages/Shop/Product-Single.html"><h3>Football</h3></a>
        <!-- Product Title -->
        <div class="price">$40.00 <span>$50.00</span></div>
        <!-- Product Price -->
      </div>
    </div>

    <!-- Product-2 -->
    <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/Product-2.jpg"
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
        <div class="rating">
          <!-- Product Rating -->
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <a href="./pages/Shop/Product-Single.html"><h3>Home Jersey</h3></a>
        <!-- Product Title -->
        <div class="price">$40.00 <span>$50.00</span></div>
        <!-- Product Price -->
      </div>
    </div>

    <!-- Product-3 -->
    <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/Product-3.jpg"
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
        <div class="rating">
          <!-- Product Rating -->
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <a href="./pages/Shop/Product-Single.html"><h3>Hoodie</h3></a>
        <!-- Product Title -->
        <div class="price">$40.00 <span>$50.00</span></div>
        <!-- Product Price -->
      </div>
    </div>

    <!-- Product-4 -->
    <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/Product-4.jpg"
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
        <div class="rating">
          <!-- Product Rating -->
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <a href="./pages/Shop/Product-Single.html"><h3>Soccer Cap</h3></a>
        <!-- Product Title -->
        <div class="price">$40.00 <span>$50.00</span></div>
        <!-- Product Price -->
      </div>
    </div>

    <!-- Product-5 -->
    <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/Product-5.jpg"
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
        <div class="rating">
          <!-- Product Rating -->
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <a href="./pages/Shop/Product-Single.html"><h3>Sneakers</h3></a>
        <!-- Product Title -->
        <div class="price">$40.00 <span>$50.00</span></div>
        <!-- Product Price -->
      </div>
    </div>

    <!-- Product-6 -->
    <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/Product-6.jpg"
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
        <div class="rating">
          <!-- Product Rating -->
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <a href="./pages/Shop/Product-Single.html"><h3>Socks</h3></a>
        <!-- Product Title -->
        <div class="price">$40.00 <span>$50.00</span></div>
        <!-- Product Price -->
      </div>
    </div>

    <!-- Product-7 -->
    <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/Product-7.jpg"
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
        <div class="rating">
          <!-- Product Rating -->
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <a href="./pages/Shop/Product-Single.html"><h3>Backpack</h3></a>
        <!-- Product Title -->
        <div class="price">$40.00 <span>$50.00</span></div>
        <!-- Product Price -->
      </div>
    </div>

    <!-- Product-8 -->
    <div class="product-item">
      <div class="image">
        <img
          src="./assets/images/Shop/Products/Product-8.jpg"
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
        <div class="rating">
          <!-- Product Rating -->
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <a href="./pages/Shop/Product-Single.html"><h3>Helmet</h3></a>
        <!-- Product Title -->
        <div class="price">$40.00 <span>$50.00</span></div>
        <!-- Product Price -->
      </div>
    </div>
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
            src="./assets/images/Sponsors/Sponsor-1.png"
            alt="Sponsor-Logo"
          /></a
        >
      </div>
      <div class="swiper-slide sponsor-item">
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
      </div>
    </div>
  </div>
</section>
<!-- ==================== Sponsors Area Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->
