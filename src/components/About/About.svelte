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
<div class="page-title-tickets">
  <div class="title">
    <h2>BECOME A SEASON TICKET HOLDER</h2>
  </div>

  <div class="link">
    <a href="/">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Tickets</span>
  </div>
</div>
<!-- ==================== Page-Title Area (End) ==================== -->

<!-- ==================== About-Us Area (Start) ==================== -->
<section class="about-us">
  <!-- <section class="about">
    <div class="box-container">
      <div class="image">
        <div class="sub-image one">
          <img src="../../assets/images/About/About-1.jpg" alt="About-Image1" />
        </div>
        <div class="sub-image two">
          <img src="../../assets/images/About/About-2.jpg" alt="About-Image2" />
          <img src="../../assets/images/About/About-3.jpg" alt="About-Image3" />
        </div>
      </div>

      <div class="content">
        <div class="heading">
          <h2>
            <span>passion</span> for the Game, Dedication to
            <span>Excellence</span>
          </h2>
        </div>

        <p>
          Join us in celebrating the spirit of football. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Eum voluptatibus dolores. Join us
          in celebrating the spirit of football. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Eum voluptatibus dolores.
        </p>

        <ul class="features">
          <li>
            <i class="fas fa-futbol"></i><span
              >Fostering Talent and Team Spirit</span
            >
          </li>
          <li>
            <i class="fas fa-futbol"></i><span
              >Building a Strong Football Community</span
            >
          </li>
          <li>
            <i class="fas fa-futbol"></i><span
              >Training and Development Programs</span
            >
          </li>
          <li>
            <i class="fas fa-futbol"></i><span
              >Competing with Integrity and Passion</span
            >
          </li>
        </ul>
      </div>
    </div>
  </section> -->
  <!-- ========== About Area (End) ========== -->

  <!-- ==================== BUY TICKET ==================== -->
  <section class="team-single">
    <!-- Player Introduction -->
    <div class="team-intro">
      <!-- Player Image -->
      <div class="image" style="width: 50rem; max-height:30rem">
        <img src="/assets/images/Krasava/krasavaticket.png" alt="Ticket" />
      </div>

      <!-- Player Information -->
      <div class="information">
        <h3>Get Your Season Ticket</h3>
        <!-- Player Name -->
        <h5>For 2025–2026</h5>
        <!-- Player Position -->

        <div class="team-about">
          <div class="text">
            All Home Games. Special Access. True Fan Experience.
          </div>
        </div>

        <!-- Player Contact Information -->
        <ul class="team-personal-info">
          <li>
            <h6>🎟 Access to all home matches</h6>
            <span>(Championship A & B)</span>
          </li>
          <!-- Nationality -->
          <li>
            <h6>🏆 Entry to all home Cup matches</h6>
            <span>(excluding the final)</span>
          </li>
          <!-- Date of Birth -->
          <li>
            <h6>⚽ Free access to home friendlies</h6>
          </li>
          <!-- Age -->
          <li>
            <h6>🎉 Invitations to club events</h6>
          </li>
          <!-- Height -->
          <li>
            <h6>🛍 Discounts at the official merch store</h6>
          </li>
          <!-- Current Club -->
        </ul>
        <a href="" class="btn">150€: Buy Season Ticket</a>
      </div>
    </div>
  </section>
  <!-- ==================== BUY TICKET (End) ==================== -->

  <!-- ==================== BUY Kids Season Ticket ==================== -->
  <section class="team-single">
    <!-- Player Introduction -->
    <div class="team-intro">
      <!-- Player Image -->
      <div class="image" style="width: 50rem; max-height:30rem">
        <img
          src="/assets/images/Krasava/childticket.png"
          alt="Ticket"
        />
      </div>

      <!-- Player Information -->
      <div class="information">
        <h3>Get Kids Season Ticket</h3>
        <!-- Player Name -->
        <h5>For 2025–2026</h5>
        <!-- Player Position -->

        <div class="team-about">
          <div class="text">
            Big Games. Big Emotions. Special Access for Our Youngest Fans!
          </div>
        </div>

        <!-- Player Contact Information -->
        <ul class="team-personal-info">
          <li>
            <h6>⚽ Entry to All Home Matches</h6>
            <span
              >(Championship Phases A & B — seated in family-friendly sectors)</span
            >
          </li>
          <!-- Nationality -->
          <li>
            <h6>🏆 Entry to all home Cup matches</h6>
            <span>(excluding the final)</span>
          </li>
          <!-- Date of Birth -->
          <li>
            <h6>🎉 Home Friendly Matches</h6>
            <span>Free attendance with special kid-friendly zones</span>
          </li>
          <!-- Age -->
          <li>
            <h6>🧸 Club Events for Kids</h6>
            <span>Meet the players, take part in youth fan days</span>
          </li>
          <!-- Height -->
          <li>
            <h6>🛍 15% Discount on kids’ merchandise</h6>
            <span>(jerseys, scarves, toys & more!)</span>
          </li>
          <!-- Current Club -->
        </ul>
        <a href="" class="btn">50€: Buy Kids Ticket</a>
      </div>
    </div>
  </section>
  <!-- ==================== BUY Kids Season Ticket (End) ==================== -->

  <!-- ==================== BUY STUDENT TICKET ==================== -->
  <section class="team-single">
    <!-- Player Introduction -->
    <div class="team-intro">
      <!-- Player Image -->
      <div class="image" style="width: 50rem; max-height:30rem">
        <img
          src="/assets/images/Krasava/krasavaticketstudent.png"
          alt="Ticket"
        />
      </div>

      <!-- Player Information -->
      <div class="information">
        <h3>Get Your Student Season Ticket</h3>
        <!-- Player Name -->
        <h5>For 2025–2026</h5>
        <!-- Player Position -->

        <div class="team-about">
          <div class="text">
            All Home Games. All the Action. At a Student-Friendly Price.
          </div>
        </div>

        <!-- Player Contact Information -->
        <ul class="team-personal-info">
          <li>
            <h6>🎟 Access to all home matches</h6>
            <span>(Championship Phases A & B) </span>
          </li>
          <!-- Nationality -->
          <li>
            <h6>🏆 Entry to all home Cup matches</h6>
            <span>(excluding the final)</span>
          </li>
          <!-- Date of Birth -->
          <li>
            <h6>⚽ Free Access to Home Friendlies</h6>
          </li>
          <!-- Age -->
          <li>
            <h6>🎉 Invitations to club events</h6>
          </li>
          <!-- Height -->
          <li>
            <h6>🛍 Discounts at the official merch store</h6>
            <span>at the Official Store </span>
          </li>
          <li>
            <h6>🧑‍🎓 Exclusive Student Offer</h6>
            <span>Available only with valid student ID </span>
          </li>
          <!-- Current Club -->
        </ul>
        <a href="" class="btn">70€: Buy Student Season Ticket</a>
      </div>
    </div>
  </section>
  <!-- ==================== BUY STUDENT TICKET (End) ==================== -->

  <!-- ==================== Testimonials Area (Start) ==================== -->
  <section class="testimonial-bg linear-bg">
    <div class="heading">
      <h2>Fan <span>Testimonials</span></h2>
    </div>

    <div class="swiper-container testimonial-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide testi-item">
          <img src="./assets/images/Testimonials/liya.jpg" alt="Author-Pic" />
          <i class="fas fa-quote-left"></i>
          <p>
            Something incredible is happening here — pure emotion, passionate
            fans, and unstoppable energy. This is where history is being made.
          </p>
          <div class="text">
            <h6>Student Season Ticket Holder</h6>
            <h4>Liya</h4>
          </div>
        </div>

        <div class="swiper-slide testi-item">
          <img src="./assets/images/Testimonials/yulia.jpg" alt="Author-Pic" />
          <i class="fas fa-quote-left"></i>
          <p>
            I moved to Cyprus — and Krasava welcomed me like family. The
            community here is strong, warm, and full of new friendships.
          </p>
          <div class="text">
            <h6>Season Ticket Holder</h6>
            <h4>Yulia</h4>
          </div>
        </div>
        <!-- 
        <div class="swiper-slide testi-item">
          <img src="./assets/images/Testimonials/Pic-3.jpg" alt="Author-Pic" />
          <i class="fas fa-quote-left"></i>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in
            ea expedita libero error aut itaque quia praesentium? Consectetur
            nam, maxime atque sit eius corporis voluptate? Exercitationem
            dolorem consequatur voluptatibus?
          </p>
          <div class="text">
            <h6>Season Ticket Holder</h6>
            <h4>Vladimir</h4>
          </div>
        </div>

        <div class="swiper-slide testi-item">
          <img src="./assets/images/Testimonials/Pic-4.jpg" alt="Author-Pic" />
          <i class="fas fa-quote-left"></i>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in
            ea expedita libero error aut itaque quia praesentium? Consectetur
            nam, maxime atque sit eius corporis voluptate? Exercitationem
            dolorem consequatur voluptatibus?
          </p>
          <div class="text">
            <h6>Club Member</h6>
            <h4>Emma Wilson</h4>
          </div>
        </div>
      </div> -->

        <div class="swiper-pagination swiper-pagination3"></div>
      </div>
    </div>
  </section>
  <!-- ==================== Testimonials Area (End) ==================== -->

  <!-- ========== Testimonials Area (Start) ========== -->
  <!-- <section class="testimonial">
    <div class="heading">
      <h2>Fan <span>Testimonials</span></h2>
    </div>

    <div class="swiper-container testimonial-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide testi-item">
          <img
            src="./assets/images/Testimonials/liya.jpg"
            alt="Author-Pic"
          />
          <i class="fas fa-quote-left"></i>
          <p>
            Something incredible is happening here — pure emotion, passionate fans, and unstoppable energy. This is where history is being made.
          </p>
          <div class="text">
            <h6>Student Season Ticket Holder</h6>
            <h4>Liya</h4>
          </div>
        </div>

        <div class="swiper-slide testi-item">
          <img
            src="../../assets/images/Testimonials/Pic-2.jpg"
            alt="Author-Pic"
          />
          <i class="fas fa-quote-left"></i>
          <p>
            I moved to Cyprus — and Krasava welcomed me like family. The community here is strong, warm, and full of new friendships.
          </p>
          <div class="text">
            <h6>Season Ticket Holder</h6>
            <h4>Yulia</h4>
          </div>
        </div>

        <div class="swiper-slide testi-item">
          <img
            src="../../assets/images/Testimonials/Pic-3.jpg"
            alt="Author-Pic"
          />
          <i class="fas fa-quote-left"></i>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in
            ea expedita libero error aut itaque quia praesentium? Consectetur
            nam, maxime atque sit eius corporis voluptate? Exercitationem
            dolorem consequatur voluptatibus?
          </p>
          <div class="text">
            <h6>Season Ticket Holder</h6>
            <h4>Jack Thompson</h4>
          </div>
        </div>

        <div class="swiper-slide testi-item">
          <img
            src="../../assets/images/Testimonials/Pic-4.jpg"
            alt="Author-Pic"
          />
          <i class="fas fa-quote-left"></i>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis in
            ea expedita libero error aut itaque quia praesentium? Consectetur
            nam, maxime atque sit eius corporis voluptate? Exercitationem
            dolorem consequatur voluptatibus?
          </p>
          <div class="text">
            <h6>Club Member</h6>
            <h4>Emma Wilson</h4>
          </div>
        </div>
      </div>

      <div class="swiper-pagination swiper-pagination3"></div>
    </div>
  </section> -->
  <!-- ========== Testimonials Area (End) ========== -->

  <!-- ========== Awards Area (Start) ========== -->
  <!-- <section class="awards linear-bg">
    <div class="heading">
      <h2>our <span>awards</span></h2>
    </div>

    <div class="swiper-container award-slider">
      <div class="swiper-wrapper">
        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-1.png" alt="Award Image" />
          <h4>Champion League <br /> 2000</h4>
        </div>

        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-2.png" alt="Award Image" />
          <h4>National League <br /> 2004</h4>
        </div>

        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-3.png" alt="Award Image" />
          <h4>Premier League <br /> 2008</h4>
        </div>

        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-4.png" alt="Award Image" />
          <h4>National Cup <br /> 2012</h4>
        </div>

        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-5.png" alt="Award Image" />
          <h4>Champion League <br /> 2016</h4>
        </div>

        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-6.png" alt="Award Image" />
          <h4>Premier League <br /> 2020</h4>
        </div>

        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-1.png" alt="Award Image" />
          <h4>Champion League <br /> 2000</h4>
        </div>

        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-2.png" alt="Award Image" />
          <h4>National League <br /> 2004</h4>
        </div>

        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-3.png" alt="Award Image" />
          <h4>Premier League <br /> 2008</h4>
        </div>

        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-4.png" alt="Award Image" />
          <h4>National Cup <br /> 2012</h4>
        </div>

        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-5.png" alt="Award Image" />
          <h4>Champion League <br /> 2016</h4>
        </div>

        <div class="swiper-slide award-item">
          <img src="../../assets/images/Awards/Award-6.png" alt="Award Image" />
          <h4>Premier League <br /> 2020</h4>
        </div>
      </div>
    </div>
  </section> -->
  <!-- ========== Awards Area (End) ========== -->
</section>
<!-- ==================== About-Us Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />

<!-- ==================== Footer Area (End) ==================== -->
