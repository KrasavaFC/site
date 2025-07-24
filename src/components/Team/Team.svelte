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
    <h2>Team</h2>
  </div>

  <div class="link">
    <a href="../../index.html">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">team</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Team Area (Start) ==================== -->
<section class="team">
  <!-- Team Section Heading -->
  <div class="heading">
    <h2>our <span>team</span></h2>
  </div>

  <!-- Tab Buttons for Team Categories -->
  <ul class="tab-buttons">
    <li><a class="button" href="#goalkeepers">goalkeepers</a></li>
    <!-- Button for Goalkeepers -->
    <li><a class="button" href="#defenders">Defenders</a></li>
    <!-- Button for Defenders -->
    <li><a class="button" href="#midfielders">Midfielders</a></li>
    <!-- Button for Midfielders -->
    <!--<li><a class="button" href="#forwards">Forwards</a></li>-->
    <!-- Button for Forwards -->
    <!--<li><a class="button" href="#coaches">Coaches</a></li>-->
    <!-- Button for Coaches -->
  </ul>

  <!-- Goalkeepers -->
  <div class="team-gallery" id="goalkeepers">
    <div class="sub-heading">
      <h3>GoalKeepers</h3>
    </div>

    <!-- Goalkeepers -->
    <div class="box-container">
      <!-- Goalkeeper 1 - Ioannis Pieri -->
      <div class="team-item">
        <!-- Team Member Image and Social Icons -->
        <div class="team-image">
          <img
            src="../../assets/images/Team/Goalkeepers/Ioannis.jpg"
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

      <!-- Goalkeeper 2 - Patryk Procek -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Goalkeepers/PatrykProcek.jpg"
            alt="Team-Image"
          />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>95</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Patryk Procek</h3></a
          >
          <p>GoalKeeper</p>
        </div>
      </div>

      <!-- Goalkeeper 3 - Christopher Brown -->
      <!-- <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Goalkeepers/3.jpg"
            alt="Team-Image"
          />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>18</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Christopher Brown</h3></a
          >
          <p>GoalKeeper</p>
        </div>
      </div> -->
    </div>
  </div>

  <!-- Defenders -->
  <div class="team-gallery" id="defenders">
    <div class="sub-heading">
      <h3>Defenders</h3>
    </div>

    <div class="box-container">
      <!-- Defender 1 - Dimitris Kyprianou -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Defenders/DimitrisKyprianou.jpeg"
            alt="Team-Image"
          />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>25</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Dimitris Kyprianou</h3></a
          >
          <p>Defender</p>
        </div>
      </div>

      <!-- Defender 2 - Vangelis Kyriacou -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Defenders/VangelisKyriacou.jpeg"
            alt="Team-Image"
          />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>32</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Vangelis Kyriacou</h3></a
          >
          <p>Defender</p>
        </div>
      </div>

      <!-- Defender 3 - Constantinos Demetriou -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Defenders/ConstantinosDemetrio.jpeg"
            alt="Team-Image"
          />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>77</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Constantinos Demetrio</h3></a
          >
          <p>Defender</p>
        </div>
      </div>

      <!-- Defender 4 - Martinos Christofi -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Defenders/MartinosChristofi.jpeg"
            alt="Team-Image"
          />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>93</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Martinos Christofi</h3></a
          >
          <p>Defender</p>
        </div>
      </div>

      <!-- Defender 5 - Joseph Young -->
      <!-- <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Defenders/8.jpg"
            alt="Team-Image"
          />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>28</span>
          <a href="../../pages/Team/Player-Single.html"><h3>Joseph Young</h3></a
          >
          <p>Defender</p>
        </div>
      </div>-->
    </div>
  </div>

  <!-- Midfielders -->
  <div class="team-gallery" id="midfielders">
    <div class="sub-heading">
      <h3>midfielders</h3>
    </div>

    <div class="box-container">
      <!-- Midfielder 1 - Andreas Komodikis -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/AndreasKomodikis.jpeg"
            alt="Team-Image"
          />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>7</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Andreas Komodikis</h3></a
          >
          <p>midfielder</p>
        </div>
      </div>

      <!-- Midfielder 2 - Curtis Yebli -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/CurtisYebli.jpeg"
            alt="Team-Image"
          />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>8</span>
          <a href="../../pages/Team/Player-Single.html"><h3>Curtis Yebli</h3></a
          >
          <p>midfielder</p>
        </div>
      </div>

      <!-- Midfielder 3 - Márcio Meira -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/MarcioMeira.jpeg"
            alt="Team-Image"
          />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>10</span>
          <a href="../../pages/Team/Player-Single.html"><h3>Márcio Meira</h3></a
          >
          <p>midfielder</p>
        </div>
      </div>

      <!-- Midfielder 4 - Theodosis Kyprou -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/TheodosisKyprou.jpeg"
            alt="Team-Image"
          />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>17</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Theodosis Kyprou</h3></a
          >
          <p>midfielder</p>
        </div>
      </div>

      <!-- Midfielder 5 - Nikolas Tarapoulouzis -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/NikolasTarapoulouzis.jpeg"
            alt="Team-Image"
          />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>30</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Nikolas Tarapoulouzis</h3></a
          >
          <p>midfielder</p>
        </div>
      </div>

      <!-- Midfielder 6 - Osman Koroma -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/OsmanKoroma.jpeg"
            alt="Team-Image"
          />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>33</span>
          <a href="../../pages/Team/Player-Single.html"><h3>Osman Koroma</h3></a
          >
          <p>midfielder</p>
        </div>
      </div>

      <!-- Midfielder 7 - George Walker -->
      <!--  <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/8.jpg"
            alt="Team-Image"
          />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>10</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>George Walker</h3></a
          >
          <p>midfielder</p>
        </div>
      </div> -->
    </div>
  </div>

  <!-- Forwards -->
  <div class="team-gallery" id="forwards">
    <div class="sub-heading">
      <h3>forwards</h3>
    </div>

    <div class="box-container">
      <!-- Forward 1 - Marian Suto -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Forwards/MarianSuto.jpeg"
            alt="Team-Image"
          />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>9</span>
          <a href="../../pages/Team/Player-Single.html"><h3>Marian Suto</h3></a>
          <p>forward</p>
        </div>
      </div>

      <!-- Forward 2 - Theodoros losifidis -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Forwards/Theodoroslosifidis.jpeg"
            alt="Team-Image"
          />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>26</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Theodoros Losifidis</h3></a
          >
          <p>forward</p>
        </div>
      </div>

      <!-- Forward 3 - Samuel Martin -->
      <!--<div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Forwards/4.jpg" alt="Team-Image" />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>04</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Samuel Martin</h3></a
          >
          <p>forward</p>
        </div>
      </div>-->
    </div>
  </div>

  <!-- Coaches -->
  <!--<div class="team-gallery" id="coaches">
    <div class="sub-heading">
      <h3>Coaches</h3>
    </div>

    <div class="box-container">-->

  <!-- Coach 1 -->

  <!--<div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Coaches/1.jpg" alt="Coach-Pic" />-->

  <!-- Coach Image
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>-->
  <!-- Facebook Icon
            <a href="#"><i class="fab fa-linkedin-in"></i></a> -->
  <!-- LinkedIn Icon 
            <a href="#"><i class="fab fa-twitter"></i></a>-->
  <!-- Twitter Icon
            <a href="#"><i class="fab fa-instagram"></i></a>-->
  <!-- Instagram Icon -->
  <!--</div>
        </div>
        <div class="team-content"> -->
  <!-- <a href="../../pages/Team/Coach-Single.html"><h3>Joseph Davis</h3></a> -->
  <!-- Coach Name -->
  <!-- <p>Head Coach</p> -->
  <!-- Coach Designation -->
  <!--  </div>
      </div>-->

  <!-- Coach 2 -->
  <!-- <div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Coaches/2.jpg" alt="Coach-Pic" />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <a href="../../pages/Team/Coach-Single.html"><h3>Thomas Clark</h3></a>
          <p>Assistant Coach</p>
        </div>
      </div>-->

  <!-- Coach 3 -->
  <!-- <div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Coaches/3.jpg" alt="Coach-Pic" />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <a href="../../pages/Team/Coach-Single.html"><h3>James Young</h3></a>
          <p>Goalkeeping Coach</p>
        </div>
      </div>-->

  <!-- Coach 4 -->
  <!--<div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Coaches/4.jpg" alt="Coach-Pic" />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <a href="../../pages/Team/Coach-Single.html"><h3>William Lewis</h3></a
          >
          <p>Fitness Coach</p>
        </div>
      </div>-->

  <!-- Coach 5 -->
  <!-- <div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Coaches/5.jpg" alt="Coach-Pic" />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <a href="../../pages/Team/Coach-Single.html"><h3>Daniel King</h3></a>
          <p>Tactical Analyst</p>
        </div>
      </div>-->

  <!-- Coach 6 -->
  <!-- <div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Coaches/6.jpg" alt="Coach-Pic" />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <a href="../../pages/Team/Coach-Single.html"
            ><h3>Matthew Wilson</h3></a
          >
          <p>Technical Director</p>
        </div>
      </div>-->

  <!-- Coach 7 -->
  <!--<div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Coaches/7.jpg" alt="Coach-Pic" />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <a href="../../pages/Team/Coach-Single.html"><h3>Andrew Turner</h3></a
          >
          <p>Defensive Coach</p>
        </div>
      </div>-->

  <!-- Coach 8 -->
  <!-- <div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Coaches/8.jpg" alt="Coach-Pic" />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <a href="../../pages/Team/Coach-Single.html"
            ><h3>Michael Harris</h3></a
          >
          <p>Technical Coach</p>
        </div>
      </div>
    </div> -->
  <!-- </div>-->
</section>
<!-- ==================== Team Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->
