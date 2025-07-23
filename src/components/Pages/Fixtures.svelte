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
    <h2>Fixtures</h2>
  </div>

  <div class="link">
    <a href="../../index.html">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Fixtures</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Fixtures Area (Start) ==================== -->
<section class="matches">
  <div class="heading">
    <h2>Champions League: 2023/2024</h2>
  </div>

  <div class="box-container">
    <!-- Monthly Fixtures for December 2023 -->
    <div class="monthly-matches">
      <div class="sub-heading">
        <h3>December 2023</h3>
      </div>

      <!-- Match 1 -->
      <div class="match-item">
        <a href="../../pages/Pages/Fixture-Single.html">
          <div class="match-detail">
            <div class="league">Champions League</div>
            <div class="time">15 Dec 2023 - 8:30 p.m.</div>
            <div class="venue">City Stadium, Pakistan</div>
          </div>
          <div class="match-intro">
            <div class="team-logo">
              <h3>Royal Rebels</h3>
              <img src="../../assets/images/Club-Teams/Royal.png" alt="logo" />
            </div>
            <div class="result"><span>VS</span></div>
            <div class="team-logo">
              <img src="../../assets/images/Club-Teams/Aurora.png" alt="logo" />
              <h3>Aurora Club</h3>
            </div>
          </div>
        </a>
        <div class="action-container">
          <a href="#"
            ><i class="fas fa-ticket-alt"></i> <span>Buy ticket</span>
          </a>
          <a href="../../pages/Pages/Fixture-Single.html"
            ><i class="fa-solid fa-pen-to-square"></i>
            <span>Match Report</span></a
          >
        </div>
      </div>

      <!-- Match 2 -->
      <div class="match-item">
        <a href="../../pages/Pages/Fixture-Single.html">
          <div class="match-detail">
            <div class="league">Champions League</div>
            <div class="time">27 Dec 2023 - 6:45 p.m.</div>
            <div class="venue">City Stadium, Pakistan</div>
          </div>
          <div class="match-intro">
            <div class="team-logo">
              <h3>Phoenix Titans</h3>
              <img
                src="../../assets/images/Club-Teams/Phoenix.png"
                alt="logo"
              />
            </div>
            <div class="result"><span>VS</span></div>
            <div class="team-logo">
              <img src="../../assets/images/Club-Teams/Royal.png" alt="logo" />
              <h3>Royal Rebels</h3>
            </div>
          </div>
        </a>
        <div class="action-container">
          <a href="#"
            ><i class="fas fa-ticket-alt"></i> <span>Buy ticket</span>
          </a>
          <a href="../../pages/Pages/Fixture-Single.html"
            ><i class="fa-solid fa-pen-to-square"></i>
            <span>Match Report</span></a
          >
        </div>
      </div>
    </div>

    <!-- Monthly Fixtures for January 2024 -->
    <div class="monthly-matches">
      <div class="sub-heading">
        <h3>January 2024</h3>
      </div>

      <!-- Match 3 -->
      <div class="match-item">
        <a href="../../pages/Pages/Fixture-Single.html">
          <div class="match-detail">
            <div class="league">Champions League</div>
            <div class="time">08 jan 2024 - 7:15 p.m.</div>
            <div class="venue">City Stadium, Pakistan</div>
          </div>
          <div class="match-intro">
            <div class="team-logo">
              <h3>Nova Knights</h3>
              <img
                src="../../assets/images/Club-Teams/Knights.png"
                alt="logo"
              />
            </div>
            <div class="result"><span>VS</span></div>
            <div class="team-logo">
              <img src="../../assets/images/Club-Teams/Royal.png" alt="logo" />
              <h3>Royal Rebels</h3>
            </div>
          </div>
        </a>
        <div class="action-container">
          <a href="#"
            ><i class="fas fa-ticket-alt"></i> <span>Buy ticket</span>
          </a>
          <a href="../../pages/Pages/Fixture-Single.html"
            ><i class="fa-solid fa-pen-to-square"></i>
            <span>Match Report</span></a
          >
        </div>
      </div>

      <!-- Match 4 -->
      <div class="match-item">
        <a href="../../pages/Pages/Fixture-Single.html">
          <div class="match-detail">
            <div class="league">Champions League</div>
            <div class="time">14 Jan 2024 - 6:00 p.m.</div>
            <div class="venue">City Stadium, Pakistan</div>
          </div>
          <div class="match-intro">
            <div class="team-logo">
              <h3>Royal Rebels</h3>
              <img src="../../assets/images/Club-Teams/Royal.png" alt="logo" />
            </div>
            <div class="result"><span>VS</span></div>
            <div class="team-logo">
              <img src="../../assets/images/Club-Teams/Lions.png" alt="logo" />
              <h3>Liberty Lions</h3>
            </div>
          </div>
        </a>
        <div class="action-container">
          <a href="#"
            ><i class="fas fa-ticket-alt"></i> <span>Buy ticket</span>
          </a>
          <a href="../../pages/Pages/Fixture-Single.html"
            ><i class="fa-solid fa-pen-to-square"></i>
            <span>Match Report</span></a
          >
        </div>
      </div>

      <!-- Match 5 -->
      <div class="match-item">
        <a href="../../pages/Pages/Fixture-Single.html">
          <div class="match-detail">
            <div class="league">Champions League</div>
            <div class="time">23 Jan 2024 - 8:00 p.m.</div>
            <div class="venue">City Stadium, Pakistan</div>
          </div>
          <div class="match-intro">
            <div class="team-logo">
              <h3>Royal Rebels</h3>
              <img src="../../assets/images/Club-Teams/Royal.png" alt="logo" />
            </div>
            <div class="result"><span>VS</span></div>
            <div class="team-logo">
              <img src="../../assets/images/Club-Teams/Arrows.png" alt="logo" />
              <h3>Silver Arrows</h3>
            </div>
          </div>
        </a>
        <div class="action-container">
          <a href="#"
            ><i class="fas fa-ticket-alt"></i> <span>Buy ticket</span>
          </a>
          <a href="../../pages/Pages/Fixture-Single.html"
            ><i class="fa-solid fa-pen-to-square"></i>
            <span>Match Report</span></a
          >
        </div>
      </div>

      <!-- Match 6 -->
      <div class="match-item">
        <a href="../../pages/Pages/Fixture-Single.html">
          <div class="match-detail">
            <div class="league">Champions League</div>
            <div class="time">29 Jan 2024 - 7:30 p.m.</div>
            <div class="venue">City Stadium, Pakistan</div>
          </div>
          <div class="match-intro">
            <div class="team-logo">
              <h3>Royal Rovers</h3>
              <img src="../../assets/images/Club-Teams/Rovers.png" alt="logo" />
            </div>
            <div class="result"><span>VS</span></div>
            <div class="team-logo">
              <img src="../../assets/images/Club-Teams/Royal.png" alt="logo" />
              <h3>Royal Rebels</h3>
            </div>
          </div>
        </a>
        <div class="action-container">
          <a href="#"
            ><i class="fas fa-ticket-alt"></i> <span>Buy ticket</span>
          </a>
          <a href="../../pages/Pages/Fixture-Single.html"
            ><i class="fa-solid fa-pen-to-square"></i>
            <span>Match Report</span></a
          >
        </div>
      </div>
    </div>

    <!-- Monthly Fixtures for February 2024 -->
    <div class="monthly-matches">
      <div class="sub-heading">
        <h3>February 2024</h3>
      </div>

      <!-- Match 7 -->
      <div class="match-item">
        <a href="../../pages/Pages/Fixture-Single.html">
          <div class="match-detail">
            <div class="league">Champions League</div>
            <div class="time">05 feb 2024 - 5:45 p.m.</div>
            <div class="venue">City Stadium, Pakistan</div>
          </div>
          <div class="match-intro">
            <div class="team-logo">
              <h3>Royal Rebels</h3>
              <img src="../../assets/images/Club-Teams/Royal.png" alt="logo" />
            </div>
            <div class="result"><span>VS</span></div>
            <div class="team-logo">
              <img
                src="../../assets/images/Club-Teams/Infinite.png"
                alt="logo"
              />
              <h3>Infinite Club</h3>
            </div>
          </div>
        </a>
        <div class="action-container">
          <a href="#"
            ><i class="fas fa-ticket-alt"></i> <span>Buy ticket</span>
          </a>
          <a href="../../pages/Pages/Fixture-Single.html"
            ><i class="fa-solid fa-pen-to-square"></i>
            <span>Match Report</span></a
          >
        </div>
      </div>

      <!-- Match 8 -->
      <div class="match-item">
        <a href="../../pages/Pages/Fixture-Single.html">
          <div class="match-detail">
            <div class="league">Champions League</div>
            <div class="time">16 feb 2024 - 6:15 p.m.</div>
            <div class="venue">City Stadium, Pakistan</div>
          </div>
          <div class="match-intro">
            <div class="team-logo">
              <h3>Eagles United</h3>
              <img src="../../assets/images/Club-Teams/Eagle.png" alt="logo" />
            </div>
            <div class="result"><span>VS</span></div>
            <div class="team-logo">
              <img src="../../assets/images/Club-Teams/Royal.png" alt="logo" />
              <h3>Royal Rebels</h3>
            </div>
          </div>
        </a>
        <div class="action-container">
          <a href="#"
            ><i class="fas fa-ticket-alt"></i> <span>Buy ticket</span>
          </a>
          <a href="../../pages/Pages/Fixture-Single.html"
            ><i class="fa-solid fa-pen-to-square"></i>
            <span>Match Report</span></a
          >
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ==================== Fixtures Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->
