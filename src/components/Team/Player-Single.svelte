<script lang="ts">
  import Footer from "../Footer.svelte";
  import Header from "../Header.svelte";
  export let data;
  const { player, name } = data;

  function calculateAge(dateString: string): number {
    const birthDate = new Date(dateString);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const hasBirthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() &&
        today.getDate() >= birthDate.getDate());

    if (!hasBirthdayPassed) {
      age--;
    }

    return age;
  }

  function formatBirthDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  const age = calculateAge(player.birthDate);
  const formattedDate = formatBirthDate(player.birthDate);
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
<div class="page-title-player">
  <div class="title">
    <h2>player</h2>
  </div>

  <div class="link">
    <a href="/"> <i class="fa-solid fa-house-chimney"></i> Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">player</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Player Single Area (Start) ==================== -->
<section class="team-single">
  <!-- Player Introduction -->
  <div class="team-intro">
    <!-- Player Image -->
    <div class="image">
      <img src={player.imageUrl} alt="Player Image" />
    </div>

    <!-- Player Information -->
    <div class="information">
      <h3>{player.firstName} {player.lastName} {player.number}</h3>
      <!-- Player Name -->
      <h5>{player.position}</h5>
      <!-- Player Position -->
      <div class="team-about">
        <div class="text">
          {player.info}
        </div>
      </div>

      <!-- Player Contact Information -->
      <ul class="team-personal-info">
        <li>
          <h6><i class="fas fa-flag"></i> Nationality:</h6>
          <span> {player.nationality} </span>
        </li>
        <!-- Nationality -->
        <li>
          <h6><i class="fa-regular fa-calendar-days"></i> D.O.B:</h6>
          <span>{formattedDate}</span>
        </li>
        <!-- Date of Birth -->

        <li>
          <h6><i class="fas fa-birthday-cake"></i> Age:</h6>
          <span>{age}</span>
        </li>
        <!-- Age -->
        <!-- <li>
          <h6><i class="fas fa-arrows-alt-v"></i> Height:</h6>
          <span>{player.height}</span>
        </li> -->
        <!-- Height -->
      </ul>

      <!-- Player Social Media Accounts -->
      <div class="icon-container">
        <!-- <a href={player.instagram} target="_blank">
          <i class="fab fa-instagram"></i>
        </a> -->
        <!-- Instagram Link -->
      </div>
    </div>
  </div>

  <!-- <div class="career-stats">
    <div class="club-stats">
      <div class="heading">
        <h2>Club statistics</h2>
      </div>

      <div class="stats-container">
        <div class="container">
          <div class="career-title">
            <h3>Season</h3>
            <h3 class="name">Club</h3>
            <h3>Goals</h3>
            <h3>Assists</h3>
            <h3 class="card">Yellow Cards</h3>
            <h3 class="card">Red Cards</h3>
          </div>

          <div class="stats-content">
            <div class="career-stat-item">
              <div class="box season">2020</div>
              <div class="box name">Lion FC</div>
              <div class="box">8</div>
              <div class="box">5</div>
              <div class="box card">2</div>
              <div class="box card">4</div>
            </div>

            <div class="career-stat-item">
              <div class="box season">2021</div>
              <div class="box name">Tiger United</div>
              <div class="box">6</div>
              <div class="box">3</div>
              <div class="box card">1</div>
              <div class="box card">2</div>
            </div>

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

    <div class="inter-stats">
      <div class="heading">
        <h2>International statistics</h2>
      </div>

      <div class="stats-container">
        <div class="container">
          <div class="career-title">
            <h3>Season</h3>
            <h3 class="name">Club</h3>
            <h3>Goals</h3>
            <h3>Assists</h3>
            <h3 class="card">Yellow Cards</h3>
            <h3 class="card">Red Cards</h3>
          </div>

          <div class="stats-content">
            <div class="career-stat-item">
              <div class="box season">2020</div>
              <div class="box name">National A</div>
              <div class="box">3</div>
              <div class="box">2</div>
              <div class="box card">1</div>
              <div class="box card">1</div>
            </div>

            <div class="career-stat-item">
              <div class="box season">2021</div>
              <div class="box name">National A</div>
              <div class="box">5</div>
              <div class="box">4</div>
              <div class="box card">2</div>
              <div class="box card">3</div>
            </div>

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

  <div class="team-member-honours">
    <div class="heading">
      <h2>Player Honours</h2>
    </div>

    <div class="honours-container">
      <div class="team-honour">
        <div class="honour-season">2020/21</div>
        <div class="honour-trophy">
          <span>2</span>
          <i class="fas fa-trophy"></i>
        </div>
        <div class="honour-type">Premier League Title</div>
        <div class="honour-title">Best Goalkeeper Award</div>
      </div>

      <div class="team-honour">
        <div class="honour-season">2021/22</div>
        <div class="honour-trophy">
          <span>2</span>
          <i class="fas fa-trophy"></i>
        </div>
        <div class="honour-type">Champions League Title</div>
        <div class="honour-title">Golden Glove</div>
      </div>

      <div class="team-honour">
        <div class="honour-season">2022/23</div>
        <div class="honour-trophy">
          <span>2</span>
          <i class="fas fa-trophy"></i>
        </div>
        <div class="honour-type">La Liga Title</div>
        <div class="honour-title">Top Saves Award</div>
      </div>

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
  </div> -->
</section>

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->
