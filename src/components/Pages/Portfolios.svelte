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
    <h2>Portfolio</h2>
  </div>

  <div class="link">
    <a href="../../index.html">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Portfolio</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Portfolio Area (Start) ==================== -->
<section class="portfolio">
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
          src="../../assets/images/Portfolio/Portfolio/Portfolio-1.jpg"
          alt="Young Talents"
        />
        <!-- Portfolio Image -->
        <div class="content">
          <!-- Buttons container -->
          <div class="btn-container">
            <a
              class="view"
              href="../../assets/images/Portfolio/Portfolio/Portfolio-1.jpg"
              ><i class="fa-solid fa-camera-retro"></i></a
            >
            <!-- View image button -->
            <a href="../../pages/Pages/Portfolio-Single.html"
              ><i class="fa-solid fa-link"></i></a
            >
            <!-- Link to portfolio single page -->
          </div>
          <!-- Text content -->
          <div class="text">
            <p>Player</p>
            <!-- Portfolio Category -->
            <a href="../../pages/Pages/Portfolio-Single.html"
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
          src="../../assets/images/Portfolio/Portfolio/Portfolio-2.jpg"
          alt="International Wins"
        />
        <!-- Portfolio Image -->
        <div class="content">
          <!-- Buttons container -->
          <div class="btn-container">
            <a
              class="view"
              href="../../assets/images/Portfolio/Portfolio/Portfolio-2.jpg"
              ><i class="fa-solid fa-camera-retro"></i></a
            >
            <!-- View image button -->
            <a href="../../pages/Pages/Portfolio-Single.html"
              ><i class="fa-solid fa-link"></i></a
            >
            <!-- Link to portfolio single page -->
          </div>
          <!-- Text content -->
          <div class="text">
            <p>Trophy</p>
            <!-- Portfolio Category -->
            <a href="../../pages/Pages/Portfolio-Single.html"
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
          src="../../assets/images/Portfolio/Portfolio/Portfolio-3.jpg"
          alt="Fan Engagement"
        />
        <!-- Portfolio Image -->
        <div class="content">
          <!-- Buttons container -->
          <div class="btn-container">
            <a
              class="view"
              href="../../assets/images/Portfolio/Portfolio/Portfolio-3.jpg"
              ><i class="fa-solid fa-camera-retro"></i></a
            >
            <!-- View image button -->
            <a href="../../pages/Pages/Portfolio-Single.html"
              ><i class="fa-solid fa-link"></i></a
            >
            <!-- Link to portfolio single page -->
          </div>
          <!-- Text content -->
          <div class="text">
            <p>Community</p>
            <!-- Portfolio Category -->
            <a href="../../pages/Pages/Portfolio-Single.html"
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
          src="../../assets/images/Portfolio/Portfolio/Portfolio-4.jpg"
          alt="Championship Victories"
        />
        <!-- Portfolio Image -->
        <div class="content">
          <!-- Buttons container -->
          <div class="btn-container">
            <a
              class="view"
              href="../../assets/images/Portfolio/Portfolio/Portfolio-4.jpg"
              ><i class="fa-solid fa-camera-retro"></i></a
            >
            <!-- View image button -->
            <a href="../../pages/Pages/Portfolio-Single.html"
              ><i class="fa-solid fa-link"></i></a
            >
            <!-- Link to portfolio single page -->
          </div>
          <!-- Text content -->
          <div class="text">
            <p>Trophy</p>
            <!-- Portfolio Category -->
            <a href="../../pages/Pages/Portfolio-Single.html"
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
          src="../../assets/images/Portfolio/Portfolio/Portfolio-5.jpg"
          alt="Goal Machines"
        />
        <!-- Portfolio Image -->
        <div class="content">
          <!-- Buttons container -->
          <div class="btn-container">
            <a
              class="view"
              href="../../assets/images/Portfolio/Portfolio/Portfolio-5.jpg"
              ><i class="fa-solid fa-camera-retro"></i></a
            >
            <!-- View image button -->
            <a href="../../pages/Pages/Portfolio-Single.html"
              ><i class="fa-solid fa-link"></i></a
            >
            <!-- Link to portfolio single page -->
          </div>
          <!-- Text content -->
          <div class="text">
            <p>Player</p>
            <!-- Portfolio Category -->
            <a href="../../pages/Pages/Portfolio-Single.html"
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
          src="../../assets/images/Portfolio/Portfolio/Portfolio-6.jpg"
          alt="Youth Development"
        />
        <!-- Portfolio Image -->
        <div class="content">
          <!-- Buttons container -->
          <div class="btn-container">
            <a
              class="view"
              href="../../assets/images/Portfolio/Portfolio/Portfolio-6.jpg"
              ><i class="fa-solid fa-camera-retro"></i></a
            >
            <!-- View image button -->
            <a href="../../pages/Pages/Portfolio-Single.html"
              ><i class="fa-solid fa-link"></i></a
            >
            <!-- Link to portfolio single page -->
          </div>
          <!-- Text content -->
          <div class="text">
            <p>Community</p>
            <!-- Portfolio Category -->
            <a href="../../pages/Pages/Portfolio-Single.html"
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

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->
