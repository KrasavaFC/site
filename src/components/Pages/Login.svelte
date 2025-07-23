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
    <h2>login</h2>
  </div>

  <div class="link">
    <a href="../../index.html">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">login</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Login Area (Start) ==================== -->
<section class="login">
  <!-- Login Form -->
  <form class="account-form">
    <img src="../../assets/images/Logo/Logo.png" alt="" />

    <h3>login</h3>
    <!-- Form Heading -->

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

    <!-- Remember Me Checkbox and Forgot Password Link -->
    <div class="info">
      <!-- Remember Me Checkbox -->
      <div class="checkbox-label">
        <input type="checkbox" id="remember-me" />
        <label for="remember-me">remember me</label>
        <div class="checkbox-indicator"></div>
      </div>

      <!-- Forgot Password Link -->
      <div class="forgot">
        <a class="link" href="./Reset-Password.html">forgot password?</a>
      </div>
    </div>

    <!-- Login Button -->
    <button type="submit" class="btn" name="login" id="login-btn">login</button>

    <!-- Registration Link -->
    <p>
      don't have an account? <a class="link" href="./Register.html">register</a>
    </p>
  </form>
  <!-- Login Form (End) -->
</section>
<!-- ==================== Login Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->
