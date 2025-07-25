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
    <h2>Book Your Academy Membership</h2>
  </div>

  <div class="link">
    <a href="../../index.html">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Academy</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Portfolio Single (Start) ==================== -->
<section class="portfolio-single page-single">
  <!-- ========== Portfolio Info Area (Start) ========== -->
  <div class="portfolio-info page-info">
    <!-- Portfolio Image -->
    <div class="image">
      <img
        src="../../assets/images/Portfolio/Portfolio/academy2.JPG"
        alt="Young Talents Football Club"
      />
    </div>

    <!-- Portfolio Content -->
    <div class="content">
      <!-- Main Heading -->
      <h3 class="main-heading">Our Mission</h3>

      <!-- Portfolio Important Note -->

      <p class="important">Territory of freedom</p>

      <!-- Portfolio Description -->
      <p>
        Our academy has as its primary goal to inspire children to love football
        and sports. Under the guidance of qualified coaches from different
        countries, we create an atmosphere where every child, starting from 3-4
        years old, can enjoy the game and not worry about winning or losing. We
        strive to ensure that our young athletes develop not only physically,
        but also as individuals, ready to interact in society. At our academy,
        the emphasis is on the comprehensive development of each child,
        providing a unique opportunity to grow and fulfill their dreams in the
        most favorable environment.
      </p>

      <!-- Portfolio Gallery -->
      <div class="portfolio-gallery page-gallery">
        <a href="">
          <img
            src="../../assets/images/Portfolio/Portfolio/academy3.JPG"
            alt="Young Talents FC Image 1"
          />
        </a>
        <a href="">
          <img
            src="../../assets/images/Portfolio/Portfolio/academy.JPG"
            alt="Young Talents FC Image 2"
          />
        </a>
        <a href="">
          <img
            src="../../assets/images/Portfolio/Portfolio/academy1.JPG"
            alt="Young Talents FC Image 2"
          />
        </a>
        <a href="">
          <img
            src="../../assets/images/Portfolio/Portfolio/academy5.JPG"
            alt="Young Talents FC Image 2"
          />
        </a>
        <a href="">
          <img
            src="../../assets/images/Portfolio/Portfolio/academy4.png"
            alt="Young Talents FC Image 2"
          />
        </a>
        <a href="">
          <img
            src="../../assets/images/Portfolio/Portfolio/academy2.JPG"
            alt="Young Talents FC Image 2"
          />
        </a>
      </div>

      <!-- Club Challenges -->
      <div class="sub-section">
        <h3 class="sub-heading">Features of training</h3>
        <ul>
          <li>
            <i class="fa-solid fa-check"></i>3-5 years old: Emphasis on
            developmental activities for coordination
          </li>
          <li>
            <i class="fa-solid fa-check"></i>6-8 years old: We do not use
            evaluative statements - every child is a “champion” for us, we do
            not play for scores during training.
          </li>
          <li>
            <i class="fa-solid fa-check"></i>9-12 years old: We cultivate team
            spirit and teach how to act strategically, using logic.
          </li>
        </ul>
      </div>

      <!-- Club Solutions -->
      <div class="sub-section">
        <h3 class="sub-heading">Our home</h3>
        <p>
          NAIS Sports Club Limassol is where children's dreams come true.
          Situated in the heart of Germasogeia, our pitches are the beginning of
          a great football journey, where every step brings you closer to
          success. In our house, dreams come true
        </p>
      </div>

      <!-- Club Achievements -->
      <div class="sub-section">
        <h3 class="sub-heading">Diversity</h3>
        <!--<p>By supporting Young Talents FC, you contribute to:</p>-->
        <ul>
          <li><i class="fa-solid fa-circle-notch"></i>Swimming Pool</li>
          <ul>
            <li>
              <i class="fa-solid fa-caret-right"></i>In our school, water
              training helps improve children's physical fitness, endurance and
              coordination. Water training strengthens muscles, increases
              flexibility and has a positive effect on the nervous system. We
              strive for the harmonious development of each child, strengthening
              their health and sports skills.
            </li>
          </ul>
          <li><i class="fa-solid fa-circle-notch"></i>Stretching</li>
          <li>
            <i class="fa-solid fa-caret-right"></i>At our football school,
            regular stretching sessions help young footballers become more
            flexible, prevent injuries and speed up recovery after training.
            Under the guidance of experienced coaches, children learn safe and
            effective stretching techniques, which increases their range of
            motion and maintains a high level of physical fitness, contributing
            to success on the field.
          </li>
          <li><i class="fa-solid fa-circle-notch"></i>Nutrition</li>
          <li>
            <i class="fa-solid fa-caret-right"></i>Tatyana Budnik is a certified
            nutritionist with a higher medical education, specializing in
            creating individual nutrition plans without strict restrictions. Her
            methods help improve eating habits and the general condition of the
            body, increasing energy levels and sleep quality. Tatyana will help
            in establishing a balanced diet, and will also develop individual
            nutrition strategies depending on the athlete's goals. Tatyana is
            the author of the project "Not about diets" and works with adults
            and children.
          </li>
          <li><i class="fa-solid fa-circle-notch"></i>Identity</li>
          <li>
            <i class="fa-solid fa-caret-right"></i>We propose to print names on
            T-shirts in the children's native language to help maintain a
            connection with the Motherland and to provide moral support to
            children, strengthening their identity.
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- ========== Portfolio Info Area (End) ========== -->

  <!-- ========== Portfolio Details Area (Start) ========== -->
  <div class="portfolio-sidebar page-sidebar">
    <h3 class="sub-heading">Description</h3>

    <div class="container">
      <!-- Date-->
      <div class="detail-item">
        <i class="fa-regular fa-calendar-days"></i>
        <div class="detail-content">
          <h3>2 training sessions per week</h3>
          <!--<p>1st June, 2010</p>-->
        </div>
      </div>

      <!-- League -->
      <div class="detail-item">
        <i class="fa-solid fa-futbol"></i>
        <div class="detail-content">
          <h3>Game day</h3>
          <p>(Saturday)</p>
        </div>
      </div>

      <!-- Coach
        <div class="detail-item">
          <i class="fa-solid fa-user"></i>
          <div class="detail-content">
            <h3>Head Coach</h3>
            <p>John Footballson</p>
          </div>
        </div>-->

      <!-- Category -->
      <div class="detail-item">
        <i class="fa-solid fa-list-ul"></i>
        <div class="detail-content">
          <h3>Swimming pool training</h3>
          <p>(2 times per month)</p>
        </div>
      </div>

      <!-- Training Duration -->
      <div class="detail-item">
        <i class="fa-regular fa-clock"></i>
        <div class="detail-content">
          <h3>Stretching</h3>
          <p>(1 time per week)</p>
        </div>
      </div>

      <!-- Home Ground -->
      <div class="detail-item">
        <i class="fa-regular fa-map"></i>
        <div class="detail-content">
          <h3>Family activity</h3>
          <p>(approximately once every 2 months, or once per month upon request)</p>
        </div>
      </div>

      <!-- Website 
      <div class="detail-item">
        <i class="fa-solid fa-globe"></i>
        <div class="detail-content">
          <h3>Official Website:</h3>
          <p class="website">www.youngtalentsfc.com</p>
        </div>
      </div>-->

      <!-- Budget -->
      <div class="detail-item">
        <i class="fa-solid fa-dollar-sign"></i>
        <div class="detail-content">
          <h3>Budget</h3>
          <p>150€</p>
        </div>
      </div>
    </div>

    <a href="" class="btn">Monthly Academy Membership</a>
  </div>
  <!-- ========== Portfolio Details Area (End) ========== -->
</section>
<!-- ==================== Portfolio Single (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->
