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
      <h2>Portfolio Single</h2>
    </div> 

    <div class="link">
      <a href="../../index.html">Home</a>
      <i class="fa-solid fa-angles-right"></i>
      <span class="page">Portfolio Single</span>
    </div>

  </div> 
  <!-- ==================== Page-Title (End) ==================== -->



  <!-- ==================== Portfolio Single (Start) ==================== -->
  <section class="portfolio-single page-single">

    <!-- ========== Portfolio Info Area (Start) ========== -->
    <div class="portfolio-info page-info">
  
      <!-- Portfolio Image -->
      <div class="image">
        <img src="../../assets/images/Portfolio/Portfolio/Portfolio-1.jpg" alt="Young Talents Football Club">
      </div>
  
      <!-- Portfolio Content -->
      <div class="content">

        <!-- Main Heading -->
        <h3 class="main-heading">Young Talents</h3>

        <!-- Portfolio Important Note -->
        <p class="important">Explore the journey of our young football stars as they showcase their talent and dedication on the field. Join us in celebrating the spirit of football excellence.</p>

        <!-- Portfolio Description -->
        <p>Our Young Talents Football Club project highlights the incredible journey of our young players as they navigate the world of football. We are committed to providing a nurturing environment for their growth and fostering a love for the beautiful game.</p>

        <!-- Portfolio Gallery -->
        <div class="portfolio-gallery page-gallery">
          <a href="../../assets/images/Portfolio/Portfolio-Gallery/1.jpg">
            <img src="../../assets/images/Portfolio/Portfolio-Gallery/1.jpg" alt="Young Talents FC Image 1">
          </a>
          <a href="../../assets/images/Portfolio/Portfolio-Gallery/2.jpg">
            <img src="../../assets/images/Portfolio/Portfolio-Gallery/2.jpg" alt="Young Talents FC Image 2">
          </a>
          <a href="../../assets/images/Portfolio/Portfolio-Gallery/3.jpg">
            <img src="../../assets/images/Portfolio/Portfolio-Gallery/3.jpg" alt="Young Talents FC Image 3">
          </a>
          <a href="../../assets/images/Portfolio/Portfolio-Gallery/4.jpg">
            <img src="../../assets/images/Portfolio/Portfolio-Gallery/4.jpg" alt="Young Talents FC Image 4">
          </a>
          <a href="../../assets/images/Portfolio/Portfolio-Gallery/5.jpg">
            <img src="../../assets/images/Portfolio/Portfolio-Gallery/5.jpg" alt="Young Talents FC Image 5">
          </a>
          <a href="../../assets/images/Portfolio/Portfolio-Gallery/6.jpg">
            <img src="../../assets/images/Portfolio/Portfolio-Gallery/6.jpg" alt="Young Talents FC Image 6">
          </a>
        </div>

        <!-- Club Challenges -->
        <div class="sub-section">
          <h3 class="sub-heading">Club Challenges:</h3>
          <ul>
            <li><i class="fa-solid fa-check"></i>Fostering Football Excellence in Youth.</li>
            <li><i class="fa-solid fa-check"></i>Nurturing Talent and Skill Development.</li>
            <li><i class="fa-solid fa-check"></i>Building a Strong Team Spirit.</li>
          </ul>
        </div>

        <!-- Club Solutions -->
        <div class="sub-section">
          <h3 class="sub-heading">Club Solutions:</h3>
          <p>Our Young Talents FC project addresses challenges with the following solutions:</p>
          <ul>
            <li><i class="fa-solid fa-caret-right"></i>Comprehensive Youth Development Programs.</li>
            <li><i class="fa-solid fa-caret-right"></i>Professional Coaching and Mentorship.</li>
            <li><i class="fa-solid fa-caret-right"></i>Promoting Team Building Activities.</li>
          </ul>
        </div>

        <!-- Club Achievements -->
        <div class="sub-section">
          <h3 class="sub-heading">Club Achievements:</h3>
          <p>By supporting Young Talents FC, you contribute to:</p>
          <ul>
            <li><i class="fa-solid fa-circle-notch"></i>Fostering Future Football Stars.</li>
            <li><i class="fa-solid fa-circle-notch"></i>Promoting Youth Football Development.</li>
            <li><i class="fa-solid fa-circle-notch"></i>Building a Legacy of Excellence.</li>
          </ul>
        </div>

      </div>
  
    </div>
    <!-- ========== Portfolio Info Area (End) ========== -->
  
    <!-- ========== Portfolio Details Area (Start) ========== -->
    <div class="portfolio-sidebar page-sidebar">
  
      <h3 class="sub-heading">Portfolio Info</h3>

      <div class="container">

        <!-- Date -->
        <div class="detail-item">
          <i class="fa-regular fa-calendar-days"></i>
          <div class="detail-content">
            <h3>Foundation Date</h3>
            <p>1st June, 2010</p>
          </div>
        </div>

        <!-- Coach -->
        <div class="detail-item">
          <i class="fa-solid fa-user"></i>
          <div class="detail-content">
            <h3>Head Coach</h3>
            <p>John Footballson</p>
          </div>
        </div>

        <!-- Category -->
        <div class="detail-item">
          <i class="fa-solid fa-list-ul"></i>
          <div class="detail-content">
            <h3>Category</h3>
            <p>Player</p>
          </div>
        </div>

        <!-- League -->
        <div class="detail-item">
          <i class="fa-solid fa-futbol"></i>
          <div class="detail-content">
            <h3>League</h3>
            <p>Youth Football League</p>
          </div>
        </div>

        <!-- Training Duration -->
        <div class="detail-item">
          <i class="fa-regular fa-clock"></i>
          <div class="detail-content">
            <h3>Training Duration</h3>
            <p>Year-round</p>
          </div>
        </div>

        <!-- Home Ground -->
        <div class="detail-item">
          <i class="fa-regular fa-map"></i>
          <div class="detail-content">
            <h3>Home Ground:</h3>
            <p>Talent Arena Stadium</p>
          </div>
        </div>

        <!-- Website -->
        <div class="detail-item">
          <i class="fa-solid fa-globe"></i>
          <div class="detail-content">
            <h3>Official Website:</h3>
            <p class="website">www.youngtalentsfc.com</p>
          </div>
        </div>

        <!-- Budget -->
        <div class="detail-item">
          <i class="fa-solid fa-dollar-sign"></i>
          <div class="detail-content">
            <h3>Budget</h3>
            <p>Investment in Dreams</p>
          </div>
        </div>

      </div>

      <a href="../../pages/Contact/Contact.html" class="btn">Join Us</a>
  
    </div>
    <!-- ========== Portfolio Details Area (End) ========== -->
  
  </section>
  <!-- ==================== Portfolio Single (End) ==================== -->
    


  <!-- ==================== Footer Area (Start) ==================== -->
<Footer/>
  <!-- ==================== Footer Area (End) ==================== -->


