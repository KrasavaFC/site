<script lang='ts'>
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
    <li><a class="button" href="#forwards">Forwards</a></li>
    <!-- Button for Forwards -->
    <li><a class="button" href="#coaches">Coaches</a></li>
    <!-- Button for Coaches -->
  </ul>

  <!-- Goalkeepers -->
  <div class="team-gallery" id="goalkeepers">
    <div class="sub-heading">
      <h3>GoalKeepers</h3>
    </div>

    <!-- Goalkeepers -->
    <div class="box-container">
      <!-- Goalkeeper 1 - John Smith -->
      <div class="team-item">
        <!-- Team Member Image and Social Icons -->
        <div class="team-image">
          <img
            src="../../assets/images/Team/Goalkeepers/1.jpg"
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
          <span>25</span>
          <!-- Team Member Jersey Number -->
          <a href="../../pages/Team/Player-Single.html"><h3>John Smith</h3></a>
          <!-- Team Member Name -->
          <p>GoalKeeper</p>
          <!-- Team Member Designation -->
        </div>
      </div>

      <!-- Goalkeeper 2 - Michael Johnson -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Goalkeepers/2.jpg"
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
          <span>12</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Michael Johnson</h3></a
          >
          <p>GoalKeeper</p>
        </div>
      </div>

      <!-- Goalkeeper 3 - Christopher Brown -->
      <div class="team-item">
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
      </div>
    </div>
  </div>

  <!-- Defenders -->
  <div class="team-gallery" id="defenders">
    <div class="sub-heading">
      <h3>Defenders</h3>
    </div>

    <div class="box-container">
      <!-- Defender 1 - Daniel Davis -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Defenders/1.jpg"
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
          <span>03</span>
          <a href="../../pages/Team/Player-Single.html"><h3>Daniel Davis</h3></a
          >
          <p>Defender</p>
        </div>
      </div>

      <!-- Defender 2 - Matthew White -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Defenders/2.jpg"
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
          <span>27</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Matthew White</h3></a
          >
          <p>Defender</p>
        </div>
      </div>

      <!-- Defender 3 - Alexander Turner -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Defenders/3.jpg"
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
          <span>09</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Alexander Turner</h3></a
          >
          <p>Defender</p>
        </div>
      </div>

      <!-- Defender 4 - Robert Harris -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Defenders/4.jpg"
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
          <span>15</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Robert Harris</h3></a
          >
          <p>Defender</p>
        </div>
      </div>

      <!-- Defender 5 - William Martin -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Defenders/5.jpg"
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
          <span>21</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>William Martin</h3></a
          >
          <p>Defender</p>
        </div>
      </div>

      <!-- Defender 6 - Thomas Clark -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Defenders/6.jpg"
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
          <span>36</span>
          <a href="../../pages/Team/Player-Single.html"><h3>Thomas Clark</h3></a
          >
          <p>Defender</p>
        </div>
      </div>

      <!-- Defender 7 - Richard Hall -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Defenders/7.jpg"
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
          <span>06</span>
          <a href="../../pages/Team/Player-Single.html"><h3>Richard Hall</h3></a
          >
          <p>Defender</p>
        </div>
      </div>

      <!-- Defender 8 - Joseph Young -->
      <div class="team-item">
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
      </div>
    </div>
  </div>

  <!-- Midfielders -->
  <div class="team-gallery" id="midfielders">
    <div class="sub-heading">
      <h3>midfielders</h3>
    </div>

    <div class="box-container">
      <!-- Midfielder 1 - David Scott -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/1.jpg"
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
          <span>14</span>
          <a href="../../pages/Team/Player-Single.html"><h3>David Scott</h3></a>
          <p>midfielder</p>
        </div>
      </div>

      <!-- Midfielder 2 - Benjamin Lewis -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/2.jpg"
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
            ><h3>Benjamin Lewis</h3></a
          >
          <p>midfielder</p>
        </div>
      </div>

      <!-- Midfielder 3 - James King -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/3.jpg"
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
          <span>02</span>
          <a href="../../pages/Team/Player-Single.html"><h3>James King</h3></a>
          <p>midfielder</p>
        </div>
      </div>

      <!-- Midfielder 4 - Charles Taylor -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/4.jpg"
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
          <span>19</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Charles Taylor</h3></a
          >
          <p>midfielder</p>
        </div>
      </div>

      <!-- Midfielder 5 - Andrew Wilson -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/5.jpg"
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
          <span>22</span>
          <a href="../../pages/Team/Player-Single.html"
            ><h3>Andrew Wilson</h3></a
          >
          <p>midfielder</p>
        </div>
      </div>

      <!-- Midfielder 6 - Edward Moore -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/6.jpg"
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
          <span>08</span>
          <a href="../../pages/Team/Player-Single.html"><h3>Edward Moore</h3></a
          >
          <p>midfielder</p>
        </div>
      </div>

      <!-- Midfielder 7 - Henry Adams -->
      <div class="team-item">
        <div class="team-image">
          <img
            src="../../assets/images/Team/Midfielders/7.jpg"
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
          <a href="../../pages/Team/Player-Single.html"><h3>Henry Adams</h3></a>
          <p>midfielder</p>
        </div>
      </div>

      <!-- Midfielder 8 - George Walker -->
      <div class="team-item">
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
      </div>
    </div>
  </div>

  <!-- Forwards -->
  <div class="team-gallery" id="forwards">
    <div class="sub-heading">
      <h3>forwards</h3>
    </div>

    <div class="box-container">
      <!-- Forward 1 - Oliver White -->
      <div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Forwards/1.jpg" alt="Team-Image" />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>07</span>
          <a href="../../pages/Team/Player-Single.html"><h3>Oliver White</h3></a
          >
          <p>forward</p>
        </div>
      </div>

      <!-- Forward 2 - Harry Turner -->
      <div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Forwards/2.jpg" alt="Team-Image" />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>26</span>
          <a href="../../pages/Team/Player-Single.html"><h3>Harry Turner</h3></a
          >
          <p>forward</p>
        </div>
      </div>

      <!-- Forward 3 - Jack Harris -->
      <div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Forwards/3.jpg" alt="Team-Image" />
          <div class="icon-container">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="team-content">
          <span>13</span>
          <a href="../../pages/Team/Player-Single.html"><h3>Jack Harris</h3></a>
          <p>forward</p>
        </div>
      </div>

      <!-- Forward 4 - Samuel Martin -->
      <div class="team-item">
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
      </div>
    </div>
  </div>

  <!-- Coaches -->
  <div class="team-gallery" id="coaches">
    <div class="sub-heading">
      <h3>Coaches</h3>
    </div>

    <div class="box-container">
      <!-- Coach 1 -->
      <div class="team-item">
        <div class="team-image">
          <img src="../../assets/images/Team/Coaches/1.jpg" alt="Coach-Pic" />
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
      </div>

      <!-- Coach 3 -->
      <div class="team-item">
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
      </div>

      <!-- Coach 4 -->
      <div class="team-item">
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
      </div>

      <!-- Coach 5 -->
      <div class="team-item">
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
      </div>

      <!-- Coach 6 -->
      <div class="team-item">
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
      </div>

      <!-- Coach 7 -->
      <div class="team-item">
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
      </div>

      <!-- Coach 8 -->
      <div class="team-item">
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
    </div>
  </div>
</section>
<!-- ==================== Team Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->
