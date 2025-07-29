<script lang="ts">
  import Footer from "../Footer.svelte";
  import Header from "../Header.svelte";
  import { goto } from '$app/navigation';

  let name = '';
  let email = '';
  let password = '';
  let repeatPassword = '';
  let agreed = false;
  let error: string | null = null;

  async function handleRegister() {
    error = null;

    if (!agreed) {
      error = 'You must agree to the terms.';
      return;
    }

    if (password !== repeatPassword) {
      error = 'Passwords do not match.';
      return;
    }

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password })
      });

      if (!res.ok) {
        error = await res.text();
        return;
      }

      const data = await res.json();
      console.log('Registered user:', data.user);
      goto('/profile');
    } catch (err) {
      console.error(err);
      error = 'Something went wrong. Please try again.';
    }
  }
</script>

<Header />

<div class="page-title">
  <div class="title">
    <h2>register</h2>
  </div>
  <div class="link">
    <a href="/">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">register</span>
  </div>
</div>

<section class="register">
  <form class="account-form" on:submit|preventDefault={handleRegister}>
    <img src="../../assets/images/Logo/Logo.png" alt="" />
    <h3>register</h3>

    <input
      type="text"
      name="name"
      placeholder="enter your name"
      class="box"
      bind:value={name}
      required
    />

    <input
      type="email"
      name="email"
      placeholder="enter your email"
      class="box"
      bind:value={email}
      required
    />

    <input
      type="password"
      name="password"
      placeholder="enter your password"
      class="box"
      bind:value={password}
      required
    />

    <input
      type="password"
      name="repeat-password"
      placeholder="repeat your password"
      class="box"
      bind:value={repeatPassword}
      required
    />

    <div class="checkbox-label">
      <input type="checkbox" id="terms" bind:checked={agreed} />
      <label for="terms">
        i agree with the <span>&nbsp;terms & conditions</span>
      </label>
      <div class="checkbox-indicator"></div>
    </div>

    {#if error}
      <p style="color: red;">{error}</p>
    {/if}

    <button type="submit" class="btn" name="register" id="register">register</button>

    <p>
      already have an account?
      <a class="link" href="/login">login</a>
    </p>
  </form>
</section>

<Footer />
