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
    <h2>player single</h2>
  </div>

  <div class="link">
    <a href="../../index.html">
      <i class="fa-solid fa-house-chimney"></i> Home</a
    >
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">player single</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Player Single Area (Start) ==================== -->
<section class="team-single">
  <!-- Player Introduction -->
  <div class="team-intro">
    <!-- Player Image -->
    <div class="image">
      <img
        src="../../assets/images/Team/Goalkeepers/1.jpg"
        alt="Player Image"
      />
    </div>

    <!-- Player Information -->
    <div class="information">
      <h3>John Smith</h3>
      <!-- Player Name -->
      <h5>Goalkeeper</h5>
      <!-- Player Position -->

      <div class="team-about">
        <div class="text">
          John Smith is a dedicated goalkeeper with a profound love for the
          game. He brings extensive experience and a passionate approach to
          goalkeeping. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
          dolor sit amet consectetur adipisicing elit.
        </div>
      </div>

      <!-- Player Contact Information -->
      <ul class="team-personal-info">
        <li>
          <h6><i class="fas fa-flag"></i> Nationality:</h6>
          <span>England</span>
        </li>
        <!-- Nationality -->
        <li>
          <h6><i class="fa-regular fa-calendar-days"></i> D.O.B:</h6>
          <span>January 1, 1990</span>
        </li>
        <!-- Date of Birth -->
        <li>
          <h6><i class="fas fa-birthday-cake"></i> Age:</h6>
          <span>33</span>
        </li>
        <!-- Age -->
        <li>
          <h6><i class="fas fa-arrows-alt-v"></i> Height:</h6>
          <span>6'2"</span>
        </li>
        <!-- Height -->
        <li>
          <h6><i class="fa-solid fa-futbol"></i> Current Club:</h6>
          <span>Royal Rebels</span>
        </li>
        <!-- Current Club -->
      </ul>

      <!-- Player Social Media Accounts -->
      <div class="icon-container">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <!-- Facebook Link -->
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
        <!-- LinkedIn Link -->
        <a href="#"><i class="fab fa-twitter"></i></a>
        <!-- Twitter Link -->
        <a href="#"><i class="fab fa-instagram"></i></a>
        <!-- Instagram Link -->
      </div>
    </div>
  </div>

  <!-- Career Statistics -->
  <div class="career-stats">
    <!-- Club Statistics -->
    <div class="club-stats">
      <div class="heading">
        <h2>Club statistics</h2>
      </div>

      <div class="stats-container">
        <div class="container">
          <!-- Career Title -->
          <div class="career-title">
            <h3>Season</h3>
            <h3 class="name">Club</h3>
            <h3>Goals</h3>
            <h3>Assists</h3>
            <h3 class="card">Yellow Cards</h3>
            <h3 class="card">Red Cards</h3>
          </div>

          <!-- Club Statistics Content -->
          <div class="stats-content">
            <!-- Club Stat Item 1 -->
            <div class="career-stat-item">
              <div class="box season">2020</div>
              <div class="box name">Lion FC</div>
              <div class="box">8</div>
              <div class="box">5</div>
              <div class="box card">2</div>
              <div class="box card">4</div>
            </div>

            <!-- Club Stat Item 2 -->
            <div class="career-stat-item">
              <div class="box season">2021</div>
              <div class="box name">Tiger United</div>
              <div class="box">6</div>
              <div class="box">3</div>
              <div class="box card">1</div>
              <div class="box card">2</div>
            </div>

            <!-- Club Stat Item 3 -->
            <div class="career-stat-item">
              <div class="box season">2022</div>
              <div class="box name">Panther FC</div>
              <div class="box">10</div>
              <div class="box">8</div>
              <div class="box card">3</div>
              <div class="box card">6</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- International Statistics -->
    <div class="inter-stats">
      <div class="heading">
        <h2>International statistics</h2>
      </div>

      <div class="stats-container">
        <div class="container">
          <!-- Career Title -->
          <div class="career-title">
            <h3>Season</h3>
            <h3 class="name">Club</h3>
            <h3>Goals</h3>
            <h3>Assists</h3>
            <h3 class="card">Yellow Cards</h3>
            <h3 class="card">Red Cards</h3>
          </div>

          <!-- International Statistics Content -->
          <div class="stats-content">
            <!-- International Stat Item 1 -->
            <div class="career-stat-item">
              <div class="box season">2020</div>
              <div class="box name">National A</div>
              <div class="box">3</div>
              <div class="box">2</div>
              <div class="box card">1</div>
              <div class="box card">1</div>
            </div>

            <!-- International Stat Item 2 -->
            <div class="career-stat-item">
              <div class="box season">2021</div>
              <div class="box name">National A</div>
              <div class="box">5</div>
              <div class="box">4</div>
              <div class="box card">2</div>
              <div class="box card">3</div>
            </div>

            <!-- International Stat Item 3 -->
            <div class="career-stat-item">
              <div class="box season">2022</div>
              <div class="box name">National A</div>
              <div class="box">7</div>
              <div class="box">6</div>
              <div class="box card">3</div>
              <div class="box card">2</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Player Honours -->
  <div class="team-member-honours">
    <div class="heading">
      <h2>Player Honours</h2>
    </div>

    <div class="honours-container">
      <!-- Player Honour 1 -->
      <div class="team-honour">
        <div class="honour-season">2020/21</div>
        <div class="honour-trophy">
          <span>2</span>
          <i class="fas fa-trophy"></i>
        </div>
        <div class="honour-type">Premier League Title</div>
        <div class="honour-title">Best Goalkeeper Award</div>
      </div>

      <!-- Player Honour 2-->
      <div class="team-honour">
        <div class="honour-season">2021/22</div>
        <div class="honour-trophy">
          <span>2</span>
          <i class="fas fa-trophy"></i>
        </div>
        <div class="honour-type">Champions League Title</div>
        <div class="honour-title">Golden Glove</div>
      </div>

      <!-- Player Honour 3 -->
      <div class="team-honour">
        <div class="honour-season">2022/23</div>
        <div class="honour-trophy">
          <span>2</span>
          <i class="fas fa-trophy"></i>
        </div>
        <div class="honour-type">La Liga Title</div>
        <div class="honour-title">Top Saves Award</div>
      </div>

      <!-- Player Honour 4 -->
      <div class="team-honour">
        <div class="honour-season">2023/24</div>
        <div class="honour-trophy">
          <span>2</span>
          <i class="fas fa-trophy"></i>
        </div>
        <div class="honour-type">FA Cup Title</div>
        <div class="honour-title">Outstanding Goalkeeper</div>
      </div>
    </div>
  </div>
</section>
<!-- ==================== Player Single Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->
