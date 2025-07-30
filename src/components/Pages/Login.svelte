<script lang="ts">
  import Footer from "../Footer.svelte";
  import Header from "../Header.svelte";
  import { goto } from "$app/navigation";

  let email = "";
  let password = "";
  let error: string | null = null;

  async function handleLogin() {
    error = null;
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        error = await res.text();
        return;
      }

      const data = await res.json();
      console.log("User:", data.user);
      goto("/profile"); 
    } catch (err) {
      error = "Something went wrong. Please try again.";
      console.error(err);
    }
  }
</script>

<Header />

<div class="page-title">
  <div class="title">
    <h2>login</h2>
  </div>
  <div class="link">
    <a href="/">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">login</span>
  </div>
</div>

<section class="login">
  <form class="account-form" on:submit|preventDefault={handleLogin}>
    <img src="../../assets/images/Krasava/krsv.png" alt="" />
    <h3>login</h3>

    <input
      type="email"
      name="email"
      placeholder="enter your email"
      id="email"
      class="box"
      bind:value={email}
      required
    />
    <input
      type="password"
      name="password"
      placeholder="enter your password"
      id="password"
      class="box"
      bind:value={password}
      required
    />

    <!-- <div class="info">
      <div class="checkbox-label">
        <input type="checkbox" id="remember-me" />
        <label for="remember-me">remember me</label>
        <div class="checkbox-indicator"></div>
      </div>
      <div class="forgot">
        <a class="link" href="./Reset-Password.html">forgot password?</a>
      </div>
    </div> -->

    {#if error}
      <p style="color: red;">{error}</p>
    {/if}

    <button type="submit" class="btn" name="login" id="login-btn">login</button>

    <a href="/api/auth/google" class="btn" id="login-btn">
      <span>Continue with Google</span>
    </a>

    <p>don't have an account? <a class="link" href="/register">register</a></p>
  </form>
</section>

<Footer />

<style>
 
</style>
