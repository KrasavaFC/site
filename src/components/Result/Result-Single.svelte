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
    <h2>Result Single</h2>
  </div>

  <div class="link">
    <a href="../../index.html">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Result Single</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Result Single (Start) ==================== -->
<section class="match-single result-single page-single">
  <!-- ========== Result Info Container (Start) ========== -->
  <div class="match-info page-info">
    <!-- Result Single Intro Section -->
    <div class="match-single-intro">
      <div class="match-detail">
        <!-- Match Details Section -->
        <div class="league">Champions League</div>
        <div class="time">03 Dec 2023 - 8:30 p.m.</div>
        <div class="venue">City Stadium, Pakistan</div>
      </div>

      <div class="match-intro">
        <!-- Match Introduction and Result Section -->
        <div class="team-logo">
          <h3>Royal Rebels</h3>
          <img src="../../assets/images/Club-Teams/Royal.png" alt="logo" />
        </div>
        <div class="result"><span>2</span><span>-</span><span>1</span></div>
        <!-- Result Display -->
        <div class="team-logo">
          <img src="../../assets/images/Club-Teams/Eagle.png" alt="logo" />
          <h3>Eagles United</h3>
        </div>
      </div>

      <div class="match-events">
        <!-- Match Events Section -->
        <div class="team-events">
          <div class="team-event">
            <i class="fa-solid fa-futbol"></i>
            <div class="event-min">7'</div>
            <div class="event-name">Alexander Turner</div>
          </div>
          <div class="team-event">
            <i class="fa-solid fa-futbol"></i>
            <div class="event-min">42'</div>
            <div class="event-name">Charles Taylor</div>
          </div>
        </div>
        <div class="team-events">
          <div class="team-event">
            <div class="event-name">Jasper Palmer</div>
            <div class="event-min">7'</div>
            <i class="fa-solid fa-futbol"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- Content Section for Tab Information -->
    <div class="content tab-info">
      <!-- Result Info Tabs - Tab Buttons -->
      <div class="result-info-tabs tab-buttons">
        <button type="button" class="button active" data-target="#overview"
          >overview</button
        >
        <button type="button" class="button" data-target="#lineup"
          >line up</button
        >
        <button type="button" class="button" data-target="#statistics"
          >statistics</button
        >
        <button type="button" class="button" data-target="#result-gallery"
          >gallery</button
        >
      </div>

      <!-- Result Info Tabs - Tab Sections -->
      <div class="tab-sections">
        <!-- Overview Tab Section -->
        <div class="overview tab-section active" id="overview">
          <!-- Match Overview Sub-Section -->
          <div class="sub-section">
            <h3 class="sub-heading">Match Overview:</h3>
            <p>
              The stage was set at City Stadium, Pakistan, for an exhilarating
              Champions League clash on December 3, 2023, kicking off at 8:30
              P.M. In this highly anticipated encounter, the Royal Rebels and
              Eagles United locked horns in a battle that unfolded under the
              floodlights, captivating fans with every thrilling moment.
            </p>
          </div>

          <!-- Final Score Sub-Section -->
          <div class="sub-section">
            <h3 class="sub-heading">Final Score:</h3>
            <p>
              Amidst the electric atmosphere, the Royal Rebels managed to secure
              a hard-fought victory, triumphing over Eagles United with a final
              scoreline of 2-1. This crucial win held profound implications for
              the Royal Rebels, influencing their standing in the prestigious
              Champions League.
            </p>
          </div>

          <!-- Goal Scorers Sub-Section -->
          <div class="sub-section">
            <h3 class="sub-heading">Goal Scorers:</h3>
            <ul>
              <li>
                <i class="fa-solid fa-futbol"></i>Alexander Turner of the Royal
                Rebels opened the scoring at the 7th minute.
              </li>
              <li>
                <i class="fa-solid fa-futbol"></i>Eagles United responded with
                determination, as Charles Taylor netted a crucial equalizer at
                the 42nd minute.
              </li>
            </ul>
          </div>

          <!-- Key Moments Sub-Section -->
          <div class="sub-section">
            <h3 class="sub-heading">Key Moments:</h3>
            <ul>
              <li>
                <i class="fa-solid fa-arrow-right"></i>Jasper Palmer's pivotal
                contribution at the 7th minute set the tone for an intense and
                strategic battle between the two teams.
              </li>
              <li>
                <i class="fa-solid fa-arrow-right"></i>The match unfolded with
                unpredictable rhythms, with each key moment shaping the ebb and
                flow of the encounter.
              </li>
            </ul>
          </div>

          <!-- Player Performances Sub-Section -->
          <div class="sub-section">
            <h3 class="sub-heading">Player Performances:</h3>
            <ul>
              <li>
                <i class="fa-solid fa-circle-notch"></i>Alexander Turner
                showcased goal-scoring prowess, playing a pivotal role in the
                Royal Rebels' triumph.
              </li>
              <li>
                <i class="fa-solid fa-circle-notch"></i>Charles Taylor's
                equalizer reflected Eagles United's resilience and
                determination.
              </li>
              <li>
                <i class="fa-solid fa-circle-notch"></i>Jasper Palmer's
                contributions at the 7th minute added a strategic layer to the
                team dynamics, influencing the overall narrative of the match.
              </li>
            </ul>
          </div>
        </div>

        <!-- Lineup Tab Section -->
        <div class="lineup tab-section" id="lineup">
          <div class="lineup-content">
            <!-- Team-1 Lineup -->
            <div class="team-lineup">
              <!-- Team Heading with Logo -->
              <div class="match-heading">
                <div class="team-logo">
                  <img
                    src="../../assets/images/Club-Teams/Royal.png"
                    alt="Team-logo"
                  />
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
                    <div class="player-events">
                      <div class="event-goal">
                        <i class="fa-solid fa-futbol"></i>
                      </div>
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
                    <div class="player-events">
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-down-long"></i><span
                          >66'</span
                        >
                      </div>
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
                    <div class="player-events">
                      <div class="event-goal">
                        <i class="fa-solid fa-futbol"></i>
                      </div>
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-down-long"></i><span
                          >90'+5'</span
                        >
                      </div>
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
                    <div class="player-events">
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-down-long"></i><span
                          >61'</span
                        >
                      </div>
                    </div>
                  </div>

                  <div class="team-player">
                    <div class="player-info">
                      <div class="player-no">26</div>
                      <div class="player-name">Harry Turner</div>
                    </div>
                    <div class="player-events">
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-down-long"></i><span
                          >66'</span
                        >
                      </div>
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
                    <div class="player-events">
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-up-long"></i><span>61'</span
                        >
                      </div>
                    </div>
                  </div>

                  <div class="team-player">
                    <div class="player-info">
                      <div class="player-no">08</div>
                      <div class="player-name">Edward Moore</div>
                    </div>
                    <div class="player-events">
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-up-long"></i><span>66'</span
                        >
                      </div>
                    </div>
                  </div>

                  <div class="team-player">
                    <div class="player-info">
                      <div class="player-no">33</div>
                      <div class="player-name">Henry Adams</div>
                    </div>
                    <div class="player-events">
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-up-long"></i><span>66'</span
                        >
                      </div>
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
                    <div class="player-events">
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-up-long"></i><span
                          >90'+5'</span
                        >
                      </div>
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
                  <img
                    src="../../assets/images/Club-Teams/Eagle.png"
                    alt="Team-logo"
                  />
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
                    <div class="player-events">
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-down-long"></i><span
                          >66'</span
                        >
                      </div>
                    </div>
                  </div>

                  <div class="team-player">
                    <div class="player-info">
                      <div class="player-no">17</div>
                      <div class="player-name">Jasper Palmer</div>
                    </div>
                    <div class="player-events">
                      <div class="event-goal">
                        <i class="fa-solid fa-futbol"></i>
                      </div>
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-down-long"></i><span
                          >64'</span
                        >
                      </div>
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
                    <div class="player-events">
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-down-long"></i><span
                          >46'</span
                        >
                      </div>
                    </div>
                  </div>

                  <div class="team-player">
                    <div class="player-info">
                      <div class="player-no">19</div>
                      <div class="player-name">Victor Wallace</div>
                    </div>
                    <div class="player-events">
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-down-long"></i><span
                          >56'</span
                        >
                      </div>
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
                      <div class="player-no">14</div>
                      <div class="player-name">Quentin Hudson</div>
                    </div>
                  </div>

                  <div class="team-player">
                    <div class="player-info">
                      <div class="player-no">08</div>
                      <div class="player-name">Travis Grayson</div>
                    </div>
                    <div class="player-events">
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-down-long"></i><span
                          >64'</span
                        >
                      </div>
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
                    <div class="player-events">
                      <div class="event-yellow-card">
                        <img
                          src="../../assets/images/Result/yellow-card.png"
                          alt="yellow card"
                        />
                      </div>
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-up-long"></i><span>56'</span
                        >
                      </div>
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
                    <div class="player-events">
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-up-long"></i><span>64'</span
                        >
                      </div>
                    </div>
                  </div>

                  <div class="team-player">
                    <div class="player-info">
                      <div class="player-no">01</div>
                      <div class="player-name">Silas Hunter</div>
                    </div>
                    <div class="player-events">
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-up-long"></i><span>46'</span
                        >
                      </div>
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
                    <div class="player-events">
                      <div class="event-yellow-card">
                        <img
                          src="../../assets/images/Result/yellow-card.png"
                          alt="yellow card"
                        />
                      </div>
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-up-long"></i><span>66'</span
                        >
                      </div>
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
                    <div class="player-events">
                      <div class="event-substitution">
                        <i class="fa-solid fa-arrow-up-long"></i><span>64'</span
                        >
                      </div>
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

        <!-- statistics Tab Section -->
        <div class="statistics tab-section" id="statistics">
          <div class="match-stats-container">
            <!-- Match Heading with Team Logos -->
            <div class="match-heading">
              <div class="team-logo">
                <img
                  src="../../assets/images/Club-Teams/Royal.png"
                  alt="Team-logo"
                />
              </div>
              <div class="heading"><h2>match stats</h2></div>
              <div class="team-logo">
                <img
                  src="../../assets/images/Club-Teams/Eagle.png"
                  alt="Team-logo"
                />
              </div>
            </div>

            <!-- Stats Content Section -->
            <div class="stats-content">
              <!-- Possession Stat Item -->
              <div class="stat-item">
                <div class="stat-heading">
                  <div class="title">51%</div>
                  <div class="title">Possession %</div>
                  <div class="title">49%</div>
                </div>
                <div class="stat-bar">
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                </div>
              </div>

              <!-- Total Shots Stat Item -->
              <div class="stat-item">
                <div class="stat-heading">
                  <div class="title">12</div>
                  <div class="title">Total Shots</div>
                  <div class="title">9</div>
                </div>
                <div class="stat-bar">
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                </div>
              </div>

              <!-- On Target Stat Item -->
              <div class="stat-item">
                <div class="stat-heading">
                  <div class="title">4</div>
                  <div class="title">On Target</div>
                  <div class="title">2</div>
                </div>
                <div class="stat-bar">
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                </div>
              </div>

              <!-- Off Target Stat Item -->
              <div class="stat-item">
                <div class="stat-heading">
                  <div class="title">5</div>
                  <div class="title">Off Target</div>
                  <div class="title">5</div>
                </div>
                <div class="stat-bar">
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                </div>
              </div>

              <!-- Passes Stat Item -->
              <div class="stat-item">
                <div class="stat-heading">
                  <div class="title">487</div>
                  <div class="title">Passes</div>
                  <div class="title">472</div>
                </div>
                <div class="stat-bar">
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                </div>
              </div>

              <!-- Pass acuracy Stat Item -->
              <div class="stat-item">
                <div class="stat-heading">
                  <div class="title">84%</div>
                  <div class="title">Pass acuracy</div>
                  <div class="title">85%</div>
                </div>
                <div class="stat-bar">
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                </div>
              </div>

              <!-- Fouls Stat Item -->
              <div class="stat-item">
                <div class="stat-heading">
                  <div class="title">13</div>
                  <div class="title">Fouls</div>
                  <div class="title">11</div>
                </div>
                <div class="stat-bar">
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                </div>
              </div>

              <!-- Yellow Cards Stat Item -->
              <div class="stat-item">
                <div class="stat-heading">
                  <div class="title">0</div>
                  <div class="title">Yellow Cards</div>
                  <div class="title">2</div>
                </div>
                <div class="stat-bar">
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                </div>
              </div>

              <!-- Red Cards Stat Item -->
              <div class="stat-item">
                <div class="stat-heading">
                  <div class="title">0</div>
                  <div class="title">Red Cards</div>
                  <div class="title">0</div>
                </div>
                <div class="stat-bar">
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                </div>
              </div>

              <!-- Offsides Stat Item -->
              <div class="stat-item">
                <div class="stat-heading">
                  <div class="title">2</div>
                  <div class="title">Offsides</div>
                  <div class="title">2</div>
                </div>
                <div class="stat-bar">
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                </div>
              </div>

              <!-- Corners Stat Item -->
              <div class="stat-item">
                <div class="stat-heading">
                  <div class="title">6</div>
                  <div class="title">Corners</div>
                  <div class="title">3</div>
                </div>
                <div class="stat-bar">
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                  <div class="stat-progress">
                    <span style="width: 50%;"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Gallery Tab Section -->
        <div class="tab-section" id="result-gallery">
          <div class="match-gallery page-gallery">
            <a href="../../assets/images/Result/Match-Gallery/1.jpg">
              <img
                src="../../assets/images/Result/Match-Gallery/1.jpg"
                alt="Match-Image"
              />
            </a>
            <a href="../../assets/images/Result/Match-Gallery/2.jpg">
              <img
                src="../../assets/images/Result/Match-Gallery/2.jpg"
                alt="Match-Image"
              />
            </a>
            <a href="../../assets/images/Result/Match-Gallery/3.jpg">
              <img
                src="../../assets/images/Result/Match-Gallery/3.jpg"
                alt="Match-Image"
              />
            </a>
            <a href="../../assets/images/Result/Match-Gallery/4.jpg">
              <img
                src="../../assets/images/Result/Match-Gallery/4.jpg"
                alt="Match-Image"
              />
            </a>
            <a href="../../assets/images/Result/Match-Gallery/5.jpg">
              <img
                src="../../assets/images/Result/Match-Gallery/5.jpg"
                alt="Match-Image"
              />
            </a>
            <a href="../../assets/images/Result/Match-Gallery/6.jpg">
              <img
                src="../../assets/images/Result/Match-Gallery/6.jpg"
                alt="Match-Image"
              />
            </a>
            <a href="../../assets/images/Result/Match-Gallery/7.jpg">
              <img
                src="../../assets/images/Result/Match-Gallery/7.jpg"
                alt="Match-Image"
              />
            </a>
            <a href="../../assets/images/Result/Match-Gallery/8.jpg">
              <img
                src="../../assets/images/Result/Match-Gallery/8.jpg"
                alt="Match-Image"
              />
            </a>
            <a href="../../assets/images/Result/Match-Gallery/9.jpg">
              <img
                src="../../assets/images/Result/Match-Gallery/9.jpg"
                alt="Match-Image"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ========== Result Info Container (End) ========== -->

  <!-- ========== Result Sidebar Area (Start) ========== -->
  <div class="result-details-sidebar page-sidebar">
    <h3 class="sub-heading">Result Details</h3>

    <div class="container">
      <!-- Matchday -->
      <div class="detail-item">
        <i class="fa-solid fa-futbol"></i>
        <div class="detail-content">
          <h3>Match Number</h3>
          <p>10</p>
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

      <!-- Stadium -->
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

      <!-- Attendance -->
      <div class="detail-item">
        <i class="fa-solid fa-users"></i>
        <div class="detail-content">
          <h3>Attendance</h3>
          <p>14000</p>
        </div>
      </div>

      <!-- Weather Conditions -->
      <div class="detail-item">
        <i class="fa-solid fa-cloud-sun-rain"></i>
        <div class="detail-content">
          <h3>Weather Conditions</h3>
          <p>Weather Description</p>
        </div>
      </div>

      <!-- Match Duration -->
      <div class="detail-item">
        <i class="fa-solid fa-hourglass-end"></i>
        <div class="detail-content">
          <h3>Match Duration</h3>
          <p>Full Time + Extra Time</p>
        </div>
      </div>
    </div>

    <a href="#" class="btn">Match Highlights</a>
  </div>
  <!-- ========== Result Sidebar Area (End) ========== -->
</section>
<!-- ==================== Result Single (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->
