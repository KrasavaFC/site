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
    <h2>register</h2>
  </div>

  <div class="link">
    <a href="../../index.html">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">register</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Register Area (Start) ==================== -->
<section class="register">
  <!-- Registration Form (Start) -->
  <form class="account-form">
    <img src="../../assets/images/Logo/Logo.png" alt="" />

    <h3>register</h3>
    <!-- Form Heading -->

    <input
      type="text"
      name="name"
      placeholder="enter your name"
      id="name"
      class="box"
      required
    />
    <!-- Name Input -->
    <input
      type="email"
      name="email"
      placeholder="enter your email"
      id="email"
      class="box"
      required
    />
    <!-- Email Input -->
    <input
      type="password"
      name="password"
      placeholder="enter your password"
      id="password"
      class="box"
      required
    />
    <!-- Password Input -->
    <input
      type="password"
      name="repeat-password"
      placeholder="repeat your password"
      id="repeat-password"
      class="box"
      required
    />
    <!-- Repeat Password Input -->

    <!-- Terms and Conditions Checkbox -->
    <div class="checkbox-label">
      <input type="checkbox" checked="checked" id="terms" />
      <label for="terms"
        >i agree with the <span>&nbsp;terms & conditions</span></label
      >
      <div class="checkbox-indicator"></div>
    </div>

    <!-- Register Button -->
    <button type="submit" class="btn" name="register" id="register"
      >register</button
    >

    <!-- Login Link -->
    <p>
      already have an account? <a class="link" href="./Login.html">login</a>
    </p>
  </form>
  <!-- Registration Form (End) -->
</section>
<!-- ==================== Register Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->
