<script lang="ts">
  import Footer from "../Footer.svelte";
  import Header from "../Header.svelte";
  import { onMount } from "svelte";

  let products = [];

  let tickets: {
    week_1: any | null;
    week_2: any | null;
    week_3: any | null;
  } = {
    week_1: null,
    week_2: null,
    week_3: null,
  };

  onMount(async () => {
    const res = await fetch("/api/products");
    products = await res.json();

    tickets.week_1 = products.find(
      (p: any) => p.description === "1 Traning Session per Week"
    );
    tickets.week_2 = products.find(
      (p: any) => p.description === "2 Traning Sessions per Week"
    );
    tickets.week_3 = products.find(
      (p: any) => p.description === "3 Traning Sessions per Week"
    );
  });
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
    <h2>Book Your Academy Membership</h2>
  </div>

  <div class="link">
    <a href="/">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Academy</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== About Area (Start) ==================== -->
<section class="about">
  <!-- About Information -->
  <div class="box-container">
    <!-- About Image -->
    <div class="image">
      <div class="sub-image one">
        <img
          src="../../assets/images/Portfolio/Portfolio/academy.JPG"
          alt="About-Image1"
        />
      </div>
      <div class="sub-image two">
        <img
          src="../../assets/images/Portfolio/Portfolio/academy3.JPG"
          alt="About-Image2"
        />
        <img
          src="../../assets/images/Portfolio/Portfolio/academy4.png"
          alt="About-Image3"
        />
      </div>
    </div>

    <!-- About Content -->
    <div class="content">
      <div class="heading">
        <h2>
          Our <span>Mission</span>
        </h2>
        <!-- Main Heading -->
      </div>

      <p>
        Our academy has as its primary goal to inspire children to love football
        and sports. Under the guidance of qualified coaches from different
        countries, we create an atmosphere where every child, starting from 3-4
        years old, can enjoy the game and not worry about winning or losing.
      </p>
      <p>
        We strive to ensure that our young athletes develop not only physically,
        but also as individuals, ready to interact in society. 
      <!-- Description -->

      <!-- Key Features -->
      <ul class="features">
        <li>
          <i class="fas fa-futbol"></i><span
            >3-5 years old: Emphasis on developmental activities for
            coordination</span
          >
        </li>
        <!-- Feature 1 -->
        <li>
          <i class="fas fa-futbol"></i><span
            >6-8 years old: We do not use evaluative statements - every child is
            a “champion” for us, we do not play for scores during training.</span
          >
        </li>
        <!-- Feature 2 -->
        <li>
          <i class="fas fa-futbol"></i><span
            >9-12 years old: We cultivate team spirit and teach how to act
            strategically, using logic.
          </span>
        </li>
      </ul>

      <a href="#plans" class="btn">View All Plans</a>
    </div>
  </div>
</section>
{#if tickets.week_1}
  <section class="team-single" id="plans">
    <!-- <div class="home-results">
      <div class="heading">
        <h2> <span>Pricing</span></h2>
      </div> -->
    <!-- Player Introduction -->
    <div class="team-intro">
      <!-- Player Image -->
      <div class="image" style="width: 50rem; max-height:30rem">
        <img
          src="../../assets/images/Portfolio/Portfolio/academy6.JPG"
          alt="Ticket"
        />
      </div>

      <!--  Information -->
      <div class="information">
        <h3>Get Monthly Academy Membership</h3>
        <h5>⚽ 1 training sessions per week</h5>

        <!-- <div class="team-about">
          <div class="text">
            All Home Games. Special Access. True Fan Experience.
          </div>
        </div> -->

        <!-- More Information -->
        <ul class="team-personal-info">
          <li>
            <span>Game day (Saturday)</span>
          </li>
      
          <li>
            <span>Stretching (1 time per week)</span>
          </li>
          <li>
            <span
              >Family activity (approximately once every 2 months, or once per
              month upon request)</span
            >
          </li>
        </ul>
        <a href={`/shop/cart/${tickets.week_1.id}`} class="btn"
          >€{tickets.week_1.price}: Buy Monthly Academy Membership</a
        >
      </div>
    </div>
  </section>
{/if}

<!-- ==================== 50€ BUY TICKET (End) ==================== -->

<!-- ==================== 70€ BUY TICKET ==================== -->
{#if tickets.week_2}
  <section class="team-single">
    <!-- Player Introduction -->
    <div class="team-intro">
      <!-- Player Image -->
      <div class="image" style="width: 50rem; max-height:30rem">
        <img
          src="../../assets/images/Portfolio/Portfolio/academy7.png"
          alt="Ticket"
        />
      </div>

      <!--  Information -->
      <div class="information">
        <h3>Get Monthly Academy Membership</h3>
        <h5>⚽ 2 training sessions per week</h5>

        <!-- More Information -->
        <ul class="team-personal-info">
          <li>
            <span>Game day (Saturday)</span>
          </li>
     
          <li>
            <span>Stretching (1 time per week)</span>
          </li>
          <li>
            <span
              >Family activity (approximately once every 2 months, or once per
              month upon request)</span
            >
          </li>
        </ul>
        <a href={`/shop/cart/${tickets.week_2.id}`} class="btn"
          >€{tickets.week_2.price}: Buy Monthly Academy Membership</a
        >
      </div>
    </div>
  </section>
{/if}

<!-- ==================== 70€ BUY TICKET (End) ==================== -->

<!-- ==================== 100€ BUY TICKET ==================== -->
{#if tickets.week_3}
  <section class="team-single">
    <!-- Player Introduction -->
    <div class="team-intro">
      <!-- Player Image -->
      <div class="image" style="width: 50rem; max-height:30rem">
        <img
          src="../../assets/images/Portfolio/Portfolio/academy1.JPG"
          alt="Ticket"
        />
      </div>

      <!--  Information -->
      <div class="information">
        <h3>Get Monthly Academy Membership</h3>
        <h5>⚽ 3 training sessions per week</h5>

        <!-- <div class="team-about">
          <div class="text">
            All Home Games. Special Access. True Fan Experience.
          </div>
        </div> -->

        <!-- More Information -->
        <ul class="team-personal-info">
          <li>
            <span>Game day (Saturday)</span>
          </li>
       
          <li>
            <span>Stretching (1 time per week)</span>
          </li>
          <li>
            <span
              >Family activity (approximately once every 2 months, or once per
              month upon request)</span
            >
          </li>
        </ul>
        <a href={`/shop/cart/${tickets.week_3.id}`} class="btn"
          >€{tickets.week_3.price}: Buy Monthly Academy Membership</a
        >
      </div>
    </div>
  </section>
{/if}

<Footer />
