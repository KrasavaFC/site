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
    <h2>Fixture Single</h2>
  </div>

  <div class="link">
    <a href="../../index.html">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Fixture Single</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Fixture Single (Start) ==================== -->
<section class="match-single fixture-single page-single">
  <!-- ========== Fixture Info Container (Start) ========== -->
  <div class="match-info page-info">
    <!-- Fixture Single Intro Section -->
    <div class="match-single-intro">
      <div class="match-detail">
        <!-- Match Details Section -->
        <div class="league">Champions League</div>
        <div class="time">15 Dec 2023 - 8:30 p.m.</div>
        <div class="venue">City Stadium, Pakistan</div>
      </div>
      <div class="match-intro">
        <!-- Match Introduction -->
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
    </div>

    <!-- Teams Lineup -->
    <div class="content">
      <div class="lineup" id="lineup">
        <div class="lineup-content">
          <!-- Team-1 Lineup -->
          <div class="team-lineup">
            <!-- Team Heading with Logo -->
            <div class="match-heading">
              <div class="team-logo">
                <img src="../../assets/images/Club-Teams/Royal.png" alt="" />
              </div>
            </div>

            <!-- Goalkeeper Section -->
            <div class="lineup-section">
              <h4>Goalkeeper</h4>

              <div class="team-players">
                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">25</div>
                    <div class="player-name">John Smith</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Defender Section -->
            <div class="lineup-section">
              <h4>Defender</h4>

              <div class="team-players">
                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">03</div>
                    <div class="player-name">Daniel Davis</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">27</div>
                    <div class="player-name">Matthew White</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">09</div>
                    <div class="player-name">Alexander Turner</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">15</div>
                    <div class="player-name">Robert Harris</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Midfield Section -->
            <div class="lineup-section">
              <h4>Midfield</h4>

              <div class="team-players">
                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">14</div>
                    <div class="player-name">David Scott</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">30</div>
                    <div class="player-name">Benjamin Lewis</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">02</div>
                    <div class="player-name">James King</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">19</div>
                    <div class="player-name">Charles Taylor</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Forward Section -->
            <div class="lineup-section">
              <h4>Forward</h4>

              <div class="team-players">
                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">07</div>
                    <div class="player-name">Oliver White</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">26</div>
                    <div class="player-name">Harry Turner</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Substitutions Section -->
            <div class="lineup-section">
              <h4>Substitutions</h4>

              <div class="team-players">
                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">12</div>
                    <div class="player-name">Michael Johnson</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">18</div>
                    <div class="player-name">Christopher Browno</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">21</div>
                    <div class="player-name">William Martin</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">36</div>
                    <div class="player-name">Thomas Clark</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">06</div>
                    <div class="player-name">Richard Hall</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">28</div>
                    <div class="player-name">Joseph Young</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">22</div>
                    <div class="player-name">Andrew Wilson</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">08</div>
                    <div class="player-name">Edward Moore</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">33</div>
                    <div class="player-name">Henry Adams</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">10</div>
                    <div class="player-name">George Walker</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">13</div>
                    <div class="player-name">Jack Harris</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">04</div>
                    <div class="player-name">Samuel Martin</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">28</div>
                    <div class="player-name">Ethan Mitchell</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">05</div>
                    <div class="player-name">Mason Brooks</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">17</div>
                    <div class="player-name">Caleb Ward</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Team-2 Lineup -->
          <div class="team-lineup">
            <!-- Team Heading with Logo -->
            <div class="match-heading">
              <div class="team-logo">
                <img src="../../assets/images/Club-Teams/Aurora.png" alt="" />
              </div>
            </div>

            <!-- Goalkeeper Section -->
            <div class="lineup-section">
              <h4>Goalkeeper</h4>

              <div class="team-players">
                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">12</div>
                    <div class="player-name">Leo Fitzgerald</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Defender Section -->
            <div class="lineup-section">
              <h4>Defender</h4>

              <div class="team-players">
                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">5</div>
                    <div class="player-name">Nolan Pierce</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">28</div>
                    <div class="player-name">Felix Riley</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">17</div>
                    <div class="player-name">Jasper Palmer</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">09</div>
                    <div class="player-name">Maxwell Turner</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Midfield Section -->
            <div class="lineup-section">
              <h4>Midfield</h4>

              <div class="team-players">
                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">22</div>
                    <div class="player-name">Dominic Hayes</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">03</div>
                    <div class="player-name">Spencer Bennett</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">19</div>
                    <div class="player-name">Victor Wallace</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">14</div>
                    <div class="player-name">Quentin Hudson</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Forward Section -->
            <div class="lineup-section">
              <h4>Forward</h4>

              <div class="team-players">
                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">08</div>
                    <div class="player-name">Travis Grayson</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">26</div>
                    <div class="player-name">Dylan Fletcher</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Substitutions Section -->
            <div class="lineup-section">
              <h4>Substitutions</h4>

              <div class="team-players">
                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">02</div>
                    <div class="player-name">Bradley Jensen</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">25</div>
                    <div class="player-name">Isaac Barrett</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">11</div>
                    <div class="player-name">Ryder Dalton</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">07</div>
                    <div class="player-name">Xavier Chandler</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">20</div>
                    <div class="player-name">Easton Bishop</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">06</div>
                    <div class="player-name">Zane Donovan</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">29</div>
                    <div class="player-name">Micah Carr</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">01</div>
                    <div class="player-name">Silas Hunter</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">15</div>
                    <div class="player-name">Grayson Quinn</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">23</div>
                    <div class="player-name">Austin Tate</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">10</div>
                    <div class="player-name">Logan Kane</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">18</div>
                    <div class="player-name">Hudson Sawyer</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">16</div>
                    <div class="player-name">Brody Harper</div>
                  </div>
                </div>

                <div class="team-player">
                  <div class="player-info">
                    <div class="player-no">04</div>
                    <div class="player-name">Jackson Clark</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ========== Fixture Info Container (End) ========== -->

  <!-- ========== Fixture Sidebar Area (Start) ========== -->
  <div class="fixture-details-sidebar page-sidebar">
    <h3 class="sub-heading">Fixture Info</h3>

    <div class="container">
      <!-- Matchday -->
      <div class="detail-item">
        <i class="fa-solid fa-futbol"></i>
        <div class="detail-content">
          <h3>Match Number</h3>
          <p>11</p>
        </div>
      </div>

      <!-- Date -->
      <div class="detail-item">
        <i class="fa-regular fa-calendar-days"></i>
        <div class="detail-content">
          <h3>Date</h3>
          <p>15th December, 2023</p>
        </div>
      </div>

      <!-- Time -->
      <div class="detail-item">
        <i class="fa-regular fa-clock"></i>
        <div class="detail-content">
          <h3>Time</h3>
          <p>19:00</p>
        </div>
      </div>

      <!-- Venue -->
      <div class="detail-item">
        <i class="fa-regular fa-map"></i>
        <div class="detail-content">
          <h3>Stadium</h3>
          <p>Stadium XYZ</p>
        </div>
      </div>

      <!-- Competition -->
      <div class="detail-item">
        <i class="fa-solid fa-trophy"></i>
        <div class="detail-content">
          <h3>Competition</h3>
          <p>Premier League</p>
        </div>
      </div>

      <!-- Referee -->
      <div class="detail-item">
        <i class="fa-solid fa-user"></i>
        <div class="detail-content">
          <h3>Referee</h3>
          <p>John Smith</p>
        </div>
      </div>

      <!-- Status -->
      <div class="detail-item">
        <i class="fa-solid fa-info-circle"></i>
        <div class="detail-content">
          <h3>Status</h3>
          <p>Upcoming</p>
        </div>
      </div>
    </div>

    <a href="#" class="btn">Get Tickets</a>
  </div>
  <!-- ========== Fixture Sidebar Area (End) ========== -->
</section>
<!-- ==================== Fixture Single (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->
