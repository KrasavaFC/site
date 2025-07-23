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
    <h2>Point Table</h2>
  </div>

  <div class="link">
    <a href="../../index.html">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Point Table</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Point Table Area (Start) ==================== -->
<section class="point-table">
  <div class="point-table-container">
    <div class="container">
      <!-- Table Title Row -->
      <div class="table-title">
        <h3>#</h3>
        <h3 class="name">Team</h3>
        <h3>P</h3>
        <h3>W</h3>
        <h3>D</h3>
        <h3>L</h3>
        <h3>F</h3>
        <h3>A</h3>
        <h3>GD</h3>
        <h3>Pts</h3>
      </div>

      <!-- Points Section -->
      <div class="points">
        <!-- Team-1 Point Item -->
        <div class="point-item">
          <div class="box">1</div>
          <div class="box name">
            <img
              src="../../assets/images/Club-Teams/Royal.png"
              alt="Team-Logo"
            />
            <span>royal rebels</span>
          </div>
          <div class="box">5</div>
          <div class="box">4</div>
          <div class="box">1</div>
          <div class="box">0</div>
          <div class="box">10</div>
          <div class="box">5</div>
          <div class="box">5</div>
          <div class="box">13</div>
        </div>

        <!-- Team-2 Point Item -->
        <div class="point-item">
          <div class="box">2</div>
          <div class="box name">
            <img
              src="../../assets/images/Club-Teams/Eagle.png"
              alt="Team-Logo"
            />
            <span>Eagles United</span>
          </div>
          <div class="box">5</div>
          <div class="box">3</div>
          <div class="box">1</div>
          <div class="box">1</div>
          <div class="box">8</div>
          <div class="box">4</div>
          <div class="box">4</div>
          <div class="box">10</div>
        </div>

        <!-- Team-3 Point Item -->
        <div class="point-item">
          <div class="box">3</div>
          <div class="box name">
            <img
              src="../../assets/images/Club-Teams/Knights.png"
              alt="Team-Logo"
            />
            <span>Nova Knights</span>
          </div>
          <div class="box">5</div>
          <div class="box">3</div>
          <div class="box">0</div>
          <div class="box">2</div>
          <div class="box">9</div>
          <div class="box">7</div>
          <div class="box">2</div>
          <div class="box">9</div>
        </div>

        <!-- Team-4 Point Item -->
        <div class="point-item">
          <div class="box">4</div>
          <div class="box name">
            <img
              src="../../assets/images/Club-Teams/Aurora.png"
              alt="Team-Logo"
            />
            <span>Aurora Club</span>
          </div>
          <div class="box">5</div>
          <div class="box">2</div>
          <div class="box">2</div>
          <div class="box">1</div>
          <div class="box">7</div>
          <div class="box">6</div>
          <div class="box">1</div>
          <div class="box">8</div>
        </div>

        <!-- Team-5 Point Item -->
        <div class="point-item">
          <div class="box">5</div>
          <div class="box name">
            <img
              src="../../assets/images/Club-Teams/Lions.png"
              alt="Team-Logo"
            />
            <span>Liberty Lions</span>
          </div>
          <div class="box">5</div>
          <div class="box">2</div>
          <div class="box">2</div>
          <div class="box">1</div>
          <div class="box">6</div>
          <div class="box">5</div>
          <div class="box">1</div>
          <div class="box">8</div>
        </div>

        <!-- Team-6 Point Item -->
        <div class="point-item">
          <div class="box">6</div>
          <div class="box name">
            <img
              src="../../assets/images/Club-Teams/Arrows.png"
              alt="Team-Logo"
            />
            <span>Silver Arrows</span>
          </div>
          <div class="box">5</div>
          <div class="box">2</div>
          <div class="box">1</div>
          <div class="box">2</div>
          <div class="box">8</div>
          <div class="box">9</div>
          <div class="box">-1</div>
          <div class="box">7</div>
        </div>

        <!-- Team-7 Point Item -->
        <div class="point-item">
          <div class="box">7</div>
          <div class="box name">
            <img
              src="../../assets/images/Club-Teams/Rovers.png"
              alt="Team-Logo"
            />
            <span>Royal Rovers</span>
          </div>
          <div class="box">5</div>
          <div class="box">1</div>
          <div class="box">3</div>
          <div class="box">1</div>
          <div class="box">5</div>
          <div class="box">5</div>
          <div class="box">0</div>
          <div class="box">6</div>
        </div>

        <!-- Team-8 Point Item -->
        <div class="point-item">
          <div class="box">8</div>
          <div class="box name">
            <img
              src="../../assets/images/Club-Teams/Infinite.png"
              alt="Team-Logo"
            />
            <span>Infinite Club</span>
          </div>
          <div class="box">5</div>
          <div class="box">1</div>
          <div class="box">2</div>
          <div class="box">2</div>
          <div class="box">6</div>
          <div class="box">7</div>
          <div class="box">-1</div>
          <div class="box">5</div>
        </div>

        <!-- Team-9 Point Item -->
        <div class="point-item">
          <div class="box">9</div>
          <div class="box name">
            <img
              src="../../assets/images/Club-Teams/Phoenix.png"
              alt="Team-Logo"
            />
            <span>Phoenix Titans</span>
          </div>
          <div class="box">5</div>
          <div class="box">1</div>
          <div class="box">2</div>
          <div class="box">2</div>
          <div class="box">5</div>
          <div class="box">7</div>
          <div class="box">-2</div>
          <div class="box">5</div>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- ==================== Point Table Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->
