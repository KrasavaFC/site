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
    <h2>Reset Password</h2>
  </div>

  <div class="link">
    <a href="../../index.html">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Reset Password</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Reset-Password Area (Start) ==================== -->
<section class="reset-pwd">
  <!-- Reset Password Form (Start) -->
  <form class="account-form dark-form">
    <img src="../../assets/images/Logo/Logo.png" alt="" />

    <h3>Forgot Password!</h3>
    <!-- Form Heading -->

    <input
      type="email"
      name="email"
      placeholder="Enter your email"
      id="email"
      class="box"
      required
    />
    <!-- Email Input Field -->
    <button type="submit" class="btn" name="reset-link" id="reset-link"
      >Send Reset Link</button
    >
    <!-- Submit Button to Send Reset Link -->
    <p>
      Don't have an account? <a class="link" href="./Register.html">Register</a>
    </p>
    <!-- Link to Register for Users Without an Account -->
  </form>
  <!-- Reset Password Form (End) -->
</section>
<!-- ==================== Reset-Password Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->
