<script lang="ts">
  import Footer from "../Footer.svelte";
  import Header from "../Header.svelte";
</script>

<!-- ==================== Scroll-Top Area (Start) ==================== -->
<a href="#" class="scroll-top">
  <i class="fa-solid fa-arrow-up-long"></i>
</a>
<!-- ==================== Scroll-Top Area (End) ==================== -->

<!-- ==================== Header Area (Start) ==================== -->
<Header />
<!-- ==================== Header Area (End) ==================== -->

<!-- ==================== Page-Title (Start) ==================== -->
<div class="page-title">
  <div class="title">
    <h2>about us</h2>
  </div>

  <div class="link">
    <a href="../../index.html">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">about us</span>
  </div>
</div>
<!-- ==================== Page-Title Area (End) ==================== -->

<!-- ==================== About-Us Area (Start) ==================== -->
<section class="about-us">
  <!-- ========== About Area (Start) ========== -->
  <section class="about">
    <!-- About Information -->
    <div class="box-container">
      <!-- About Image -->
      <div class="image">
        <div class="sub-image one">
          <img src="../../assets/images/About/About-1.jpg" alt="About-Image1" />
        </div>
        <div class="sub-image two">
          <img src="../../assets/images/About/About-2.jpg" alt="About-Image2" />
          <img src="../../assets/images/About/About-3.jpg" alt="About-Image3" />
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
          amet consectetur adipisicing elit. Eum voluptatibus dolores. Join us
          in celebrating the spirit of football. Lorem ipsum dolor sit amet
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
      </div>
    </div>
  </section>
  <!-- ========== About Area (End) ========== -->

  <!-- ========== Count Area (Start) ========== -->
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
  <!-- ========== Count Area (End) ========== -->

  <!-- ========== Coaches Area (Start) ========== -->
  <section class="team">
    <!-- Section Heading -->
    <div class="heading">
      <h2>our <span>Coaches</span></h2>
    </div>

    <div class="box-container">
      <!-- Coach 1 -->
      <div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Coaches/1.jpg" alt="Team-Image" />
          <!-- Coach Image -->
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
          <a href="../../pages/Team/Coach-Single.html"><h3>Joseph Davis</h3></a>
          <!-- Coach Name -->
          <p>Head Coach</p>
          <!-- Coach Designation -->
        </div>
      </div>

      <!-- Coach 2 -->
      <div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Coaches/2.jpg" alt="Team-Image" />
          <!-- Coach Image -->
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
          <a href="../../pages/Team/Coach-Single.html"><h3>Thomas Clark</h3></a>
          <!-- Coach Name -->
          <p>Assistant Coach</p>
          <!-- Coach Designation -->
        </div>
      </div>

      <!-- Coach 3 -->
      <div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Coaches/3.jpg" alt="Team-Image" />
          <!-- Coach Image -->
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
          <a href="../../pages/Team/Coach-Single.html"><h3>James Young</h3></a>
          <!-- Coach Name -->
          <p>Goalkeeping Coach</p>
          <!-- Coach Designation -->
        </div>
      </div>

      <!-- Coach 4 -->
      <div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Coaches/4.jpg" alt="Team-Image" />
          <!-- Coach Image -->
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
          <a href="../../pages/Team/Coach-Single.html"><h3>William Lewis</h3></a
          >
          <!-- Coach Name -->
          <p>Fitness Coach</p>
          <!-- Coach Designation -->
        </div>
      </div>

      <!-- Coach 5 -->
      <div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Coaches/5.jpg" alt="Team-Image" />
          <!-- Coach Image -->
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
          <a href="../../pages/Team/Coach-Single.html"><h3>Daniel King</h3></a>
          <!-- Coach Name -->
          <p>Tactical Analyst</p>
          <!-- Coach Designation -->
        </div>
      </div>

      <!-- Coach 6 -->
      <div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Coaches/6.jpg" alt="Team-Image" />
          <!-- Coach Image -->
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
          <a href="../../pages/Team/Coach-Single.html"
            ><h3>Matthew Wilson</h3></a
          >
          <!-- Coach Name -->
          <p>Technical Director</p>
          <!-- Coach Designation -->
        </div>
      </div>

      <!-- Coach 7 -->
      <div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Coaches/7.jpg" alt="Team-Image" />
          <!-- Coach Image -->
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
          <a href="../../pages/Team/Coach-Single.html"><h3>Andrew Turner</h3></a
          >
          <!-- Coach Name -->
          <p>Defensive Coach</p>
          <!-- Coach Designation -->
        </div>
      </div>

      <!-- Coach 8 -->
      <div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Coaches/8.jpg" alt="Team-Image" />
          <!-- Coach Image -->
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
          <a href="../../pages/Team/Coach-Single.html"
            ><h3>Michael Harris</h3></a
          >
          <!-- Coach Name -->
          <p>Technical Coach</p>
          <!-- Coach Designation -->
        </div>
      </div>
    </div>
  </section>
  <!-- ========== Coaches Area (End) ========== -->

  <!-- ========== Mission Area (Start) ========== -->
  <section class="mission linear-bg">
    <div class="box-container">
      <!-- Main Content Area -->
      <div class="content">
        <div class="text">
          <!-- Section Heading -->
          <div class="heading">
            <h2>
              Empowering <span>Players</span>, Building <span>Champions</span>.
            </h2>
          </div>

          <!-- Main Heading -->
          <p>
            At Royal Rebels, our mission is to empower our players, providing
            them with the support and resources needed to become champions on
            and off the field.
          </p>

          <!-- Mission Points -->
          <ul class="mission-points">
            <li>
              <i class="fas fa-medal"></i>
              <div class="text">
                <h5>excellence</h5>
                <p>
                  We strive for excellence in every aspect, fostering a culture
                  of continuous improvement and success.
                </p>
              </div>
            </li>
            <li>
              <i class="fas fa-users"></i>
              <div class="text">
                <h5>teamwork</h5>
                <p>
                  We promote teamwork, building a strong and united football
                  community that works together for victory.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <!-- ========== Mission Area (End) ========== -->

  <!-- ========== Testimonials Area (Start) ========== -->
  <section class="testimonial">
    <!-- Section Heading -->
    <div class="heading">
      <h2>Fan <span>Testimonials</span></h2>
    </div>

    <!-- Testimonial Slider Container -->
    <div class="swiper-container testimonial-slider">
      <div class="swiper-wrapper">
        <!-- Testimonial Item 1 -->
        <div class="swiper-slide testi-item">
          <img
            src="../../assets/images/Testimonials/Pic-1.jpg"
            alt="Author-Pic"
          />
          <i class="fas fa-quote-left"></i>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in
            ea expedita libero error aut itaque quia praesentium? Consectetur
            nam, maxime atque sit eius corporis voluptate? Exercitationem
            dolorem consequatur voluptatibus?
          </p>
          <div class="text">
            <h6>Season Ticket Holder</h6>
            <h4>Chris Turner</h4>
          </div>
        </div>

        <!-- Testimonial Item 2 -->
        <div class="swiper-slide testi-item">
          <img
            src="../../assets/images/Testimonials/Pic-2.jpg"
            alt="Author-Pic"
          />
          <i class="fas fa-quote-left"></i>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in
            ea expedita libero error aut itaque quia praesentium? Consectetur
            nam, maxime atque sit eius corporis voluptate? Exercitationem
            dolorem consequatur voluptatibus?
          </p>
          <div class="text">
            <h6>Supporter</h6>
            <h4>Amy Roberts</h4>
          </div>
        </div>

        <!-- Testimonial Item 3 -->
        <div class="swiper-slide testi-item">
          <img
            src="../../assets/images/Testimonials/Pic-3.jpg"
            alt="Author-Pic"
          />
          <i class="fas fa-quote-left"></i>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in
            ea expedita libero error aut itaque quia praesentium? Consectetur
            nam, maxime atque sit eius corporis voluptate? Exercitationem
            dolorem consequatur voluptatibus?
          </p>
          <div class="text">
            <h6>Season Ticket Holder</h6>
            <h4>Jack Thompson</h4>
          </div>
        </div>

        <!-- Testimonial Item 4 -->
        <div class="swiper-slide testi-item">
          <img
            src="../../assets/images/Testimonials/Pic-4.jpg"
            alt="Author-Pic"
          />
          <i class="fas fa-quote-left"></i>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in
            ea expedita libero error aut itaque quia praesentium? Consectetur
            nam, maxime atque sit eius corporis voluptate? Exercitationem
            dolorem consequatur voluptatibus?
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
  <!-- ========== Testimonials Area (End) ========== -->

  <!-- ========== Awards Area (Start) ========== -->
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
          <img src="../../assets/images/Awards/Award-1.png" alt="Award Image" />
          <!-- Award Image -->
          <h4>Champion League <br /> 2000</h4>
          <!-- Award Title and Year -->
        </div>

        <!-- Award 2 -->
        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-2.png" alt="Award Image" />
          <!-- Award Image -->
          <h4>National League <br /> 2004</h4>
          <!-- Award Title and Year -->
        </div>

        <!-- Award 3 -->
        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-3.png" alt="Award Image" />
          <!-- Award Image -->
          <h4>Premier League <br /> 2008</h4>
          <!-- Award Title and Year -->
        </div>

        <!-- Award 4 -->
        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-4.png" alt="Award Image" />
          <!-- Award Image -->
          <h4>National Cup <br /> 2012</h4>
          <!-- Award Title and Year -->
        </div>

        <!-- Award 5 -->
        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-5.png" alt="Award Image" />
          <!-- Award Image -->
          <h4>Champion League <br /> 2016</h4>
          <!-- Award Title and Year -->
        </div>

        <!-- Award 6 -->
        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-6.png" alt="Award Image" />
          <!-- Award Image -->
          <h4>Premier League <br /> 2020</h4>
          <!-- Award Title and Year -->
        </div>

        <!-- Award 1 -->
        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-1.png" alt="Award Image" />
          <!-- Award Image -->
          <h4>Champion League <br /> 2000</h4>
          <!-- Award Title and Year -->
        </div>

        <!-- Award 2 -->
        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-2.png" alt="Award Image" />
          <!-- Award Image -->
          <h4>National League <br /> 2004</h4>
          <!-- Award Title and Year -->
        </div>

        <!-- Award 3 -->
        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-3.png" alt="Award Image" />
          <!-- Award Image -->
          <h4>Premier League <br /> 2008</h4>
          <!-- Award Title and Year -->
        </div>

        <!-- Award 4 -->
        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-4.png" alt="Award Image" />
          <!-- Award Image -->
          <h4>National Cup <br /> 2012</h4>
          <!-- Award Title and Year -->
        </div>

        <!-- Award 5 -->
        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-5.png" alt="Award Image" />
          <!-- Award Image -->
          <h4>Champion League <br /> 2016</h4>
          <!-- Award Title and Year -->
        </div>

        <!-- Award 6 -->
        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-6.png" alt="Award Image" />
          <!-- Award Image -->
          <h4>Premier League <br /> 2020</h4>
          <!-- Award Title and Year -->
        </div>
      </div>
    </div>
  </section>
  <!-- ========== Awards Area (End) ========== -->

  <!-- ========== Sponsors Area (Start) ========== -->
  <section class="sponsors">
    <!-- Sponsor Slider Container -->
    <div class="swiper-container sponsor-slider">
      <!-- Sponsors Logo -->
      <div class="swiper-wrapper">
        <div class="swiper-slide sponsor-item">
          <a href="#"
            ><img
              src="../../assets/images/Sponsors/Sponsor-1.png"
              alt="Sponsor-Logo"
            /></a
          >
        </div>
        <div class="swiper-slide sponsor-item">
          <a href="#"
            ><img
              src="../../assets/images/Sponsors/Sponsor-2.png"
              alt="Sponsor-Logo"
            /></a
          >
        </div>
        <div class="swiper-slide sponsor-item">
          <a href="#"
            ><img
              src="../../assets/images/Sponsors/Sponsor-3.png"
              alt="Sponsor-Logo"
            /></a
          >
        </div>
        <div class="swiper-slide sponsor-item">
          <a href="#"
            ><img
              src="../../assets/images/Sponsors/Sponsor-4.png"
              alt="Sponsor-Logo"
            /></a
          >
        </div>
        <div class="swiper-slide sponsor-item">
          <a href="#"
            ><img
              src="../../assets/images/Sponsors/Sponsor-5.png"
              alt="Sponsor-Logo"
            /></a
          >
        </div>
        <div class="swiper-slide sponsor-item">
          <a href="#"
            ><img
              src="../../assets/images/Sponsors/Sponsor-6.png"
              alt="Sponsor-Logo"
            /></a
          >
        </div>
        <div class="swiper-slide sponsor-item">
          <a href="#"
            ><img
              src="../../assets/images/Sponsors/Sponsor-7.png"
              alt="Sponsor-Logo"
            /></a
          >
        </div>
        <div class="swiper-slide sponsor-item">
          <a href="#"
            ><img
              src="../../assets/images/Sponsors/Sponsor-8.png"
              alt="Sponsor-Logo"
            /></a
          >
        </div>
        <div class="swiper-slide sponsor-item">
          <a href="#"
            ><img
              src="../../assets/images/Sponsors/Sponsor-9.png"
              alt="Sponsor-Logo"
            /></a
          >
        </div>
        <div class="swiper-slide sponsor-item">
          <a href="#"
            ><img
              src="../../assets/images/Sponsors/Sponsor-10.png"
              alt="Sponsor-Logo"
            /></a
          >
        </div>
      </div>
    </div>
  </section>
  <!-- ========== Sponsors Area Area (End) ========== -->
</section>
<!-- ==================== About-Us Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />

<!-- ==================== Footer Area (End) ==================== -->
