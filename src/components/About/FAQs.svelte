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
<div class="page-title-about">
  <div class="title">
    <h2>About Us</h2>
  </div>

  <div class="link">
    <a href="/">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">About Us</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ========== Mission Area (Start) ========== -->
<section class="mission linear-bg">
  <div class="box-container">
    <!-- Main Content Area -->
    <div class="content">
      <div class="text">
        <!-- Section Heading -->
        <div class="heading">
          <h2>
            The <span>Krasava </span>Way
          </h2>
        </div>

        <!-- Main Heading -->
        <p>Krasava Football Club was founded in 2021 with one clear idea:</p>

        <p>
          to create an honest, independent alternative to the traditional
          football system.
        </p>

        <!-- Mission Points -->
        <ul class="mission-points">
          <li>
            <i class="fas fa-users"></i>
            <div class="text">
              <h5>teamwork</h5>
              <p>
                While most clubs relied on state funding and closed structures,
                we built Krasava entirely on private investment — open,
                transparent, and accessible to anyone with a dream to play.
              </p>
            </div>
          </li>
          <li>
            <i class="fas fa-medal"></i>
            <div class="text">
              <h5>excellence</h5>
              <p>
                We stand for openness. We stand for integrity. We stand for
                football built by the people — for the people.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
<!-- ========== Mission Area (End) ========== -->

<!-- ==================== Faqs Area (Start) ==================== -->
<section class="faq">
  <div class="content">
    <div class="text">
      <!-- Section Heading -->
      <div class="heading">
        <h2>
          <span>FAQ</span>
        </h2>
      </div>
    </div>
  </div>
  <div class="box-container">
    <!-- FAQ Accordion Container -->
    <div class="accordion-container">
      <!-- FAQ Accordion 1: Tickets -->
      <div class="accordion active">
        <div class="accordion-heading">
          <i class="fas fa-plus"></i>
          <h3>How to buy Season tickets?</h3>
        </div>
        <p class="accordion-content">
          To purchase tickets, visit our website or contact our office. Online
          ticketing is available for your convenience. Stay updated on upcoming
          matches and ticket availability through our official channels.
        </p>
      </div>

      <!-- FAQ Accordion 4: Youth Programs -->
      <div class="accordion">
        <div class="accordion-heading">
          <i class="fas fa-plus"></i>
          <h3>Youth development programs?</h3>
        </div>
        <p class="accordion-content">
          Explore youth academy and trial opportunities on our website. Our club
          is dedicated to nurturing young talent. Find details about eligibility
          and participation criteria for youth programs.
        </p>
      </div>

      <!-- FAQ Accordion 2: Memberships -->
      <!-- <div class="accordion">
        <div class="accordion-heading">
          <i class="fas fa-plus"></i>
          <h3>Process for club membership?</h3>
        </div>
        <p class="accordion-content">
          Explore membership tiers and benefits on our website. Register online
          for the preferred membership level. Join our football community and
          enjoy exclusive perks associated with your chosen membership.
        </p>
      </div> -->

      <!-- FAQ Accordion 3: Meet Players -->
      <div class="accordion">
        <div class="accordion-heading">
          <i class="fas fa-plus"></i>
          <h3>Opportunities to meet players?</h3>
        </div>
        <p class="accordion-content">
          Attend special events and meet-and-greets to interact with players.
          Stay updated on social media and our website for announcements.
          Connect with the team and create memorable fan experiences.
        </p>
      </div>

      <!-- FAQ Accordion 5: Sponsorship -->
      <div class="accordion">
        <div class="accordion-heading">
          <i class="fas fa-plus"></i>
          <h3>Explore sponsorship opportunities?</h3>
        </div>
        <p class="accordion-content">
          Businesses interested in sponsoring the club can contact our dedicated
          team. Discover the benefits of collaboration and learn about the
          process of forming a successful partnership with our club.
        </p>
      </div>
    </div>

    <!-- FAQ Image -->
    <div class="image">
      <img src="../../assets/images/Krasava/main2.JPG" alt="FAQs-Image" />
    </div>
  </div>
</section>
<!-- ==================== Faqs Area (End) ==================== -->

<!-- ========== Count Area (Start) ========== -->
<!-- <div class="counting">
  <div class="box">
    <div class="info">
      <i class="fas fa-futbol"></i>
      <div class="content">
        <h1 class="count" data-count="700">700+</h1>
        <h3>Goals Scored</h3>
      </div>
    </div>
  </div>

  <div class="box">
    <div class="info">
      <i class="fas fa-trophy"></i>
      <div class="content">
        <h1 class="count" data-count="400">100+</h1>
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
        <h1 class="count" data-count="10">1</h1>
        <h3>Championships Won</h3>
      </div>
    </div>
  </div>
</div> -->
<!-- ========== Count Area (End) ========== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />

<!-- ==================== Footer Area (End) ==================== -->
