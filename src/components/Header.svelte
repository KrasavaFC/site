<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";

  let cartCount = 0;
  let intervalId: NodeJS.Timeout;

  async function fetchCartCount() {
    try {
      const res = await fetch("/api/user/cart");
      if (res.ok) {
        const data = await res.json();
        cartCount = data.cart.length;
      } else {
        console.warn("Cart fetch failed:", res.status);
      }
    } catch (err) {
      console.error("Cart fetch error:", err);
    }
  }

  onMount(() => {
    if (!browser) return;

    fetchCartCount();

    intervalId = setInterval(fetchCartCount, 1000);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<header class="header">
  <div class="header-1">
    <ul class="social-contacts">
      <li>
        <a href="https://www.instagram.com/krasavafc/" class="fab fa-instagram"
        ></a>
      </li>
    </ul>
  </div>

  <div class="header-2">
    <a class="logo" href="/">
      <img src="/assets/images/Krasava/krsv.png" alt="logo" />
    </a>

    <div class="container">
      <nav class="navbar">
        <a class="nav-btn" href="/">home</a>
        <a class="nav-btn" href="/team">Team</a>

        <a class="nav-btn" href="/about">About</a>
        <a class="nav-btn" href="/academy">Academy</a>
        <a class="nav-btn" href="/tickets">Tickets</a>
        <a class="nav-btn" href="/shop/grid">Shop</a>
        <a class="nav-btn" href="/fanid">FanID</a>
        <a class="nav-btn" href="/contact">contact</a>
      </nav>

      <div class="icon-container">
        <a href="/shop/checkout" class="cart-icon-wrapper">
          <i class="icon fa-solid fa-cart-arrow-down"></i>
          {#if cartCount > 0}
            <span class="cart-badge">{cartCount}</span>
          {/if}
        </a>

        <a href="/profile">
          <i class="icon fa-solid fa-user"></i>
        </a>

        <div id="menu-btn" class="icon fa-solid fa-bars-staggered"></div>
      </div>

      <form class="search-container">
        <input
          type="search"
          id="search-bar"
          placeholder="search here"
          required
        />
        <button type="submit"><i class="fas fa-search"></i></button>
      </form>
    </div>
  </div>

  <!-- ===== Mobile Menu Area (Start) ===== -->
  <div class="mobile-menu">
    <nav class="mobile-navbar">
      <div class="nav-link">
        <div class="main-nav-link">
          <a class="nav-btn" href="/">home</a>
        </div>
      </div>
      <div class="nav-link">
        <div class="main-nav-link">
          <a class="nav-btn" href="/team">Team</a>
        </div>
      </div>
      <div class="nav-link">
        <div class="main-nav-link">
          <a class="nav-btn" href="/about">About</a>
        </div>
      </div>
      <div class="nav-link">
        <div class="main-nav-link">
          <a class="nav-btn" href="/academy">Academy</a>
        </div>
      </div>

      <div class="nav-link">
        <div class="main-nav-link">
          <a class="nav-btn" href="/tickets">Tickets</a>
        </div>
      </div>
      <div class="nav-link">
        <div class="main-nav-link">
          <a class="nav-btn" href="/shop/grid">Shop</a>
        </div>
      </div>
      <div class="nav-link">
        <div class="main-nav-link">
          <a class="nav-btn" href="/fanid">FanID</a>
        </div>
      </div>
      <div class="nav-link">
        <div class="main-nav-link">
          <a class="nav-btn" href="/contact">contact</a>
        </div>
      </div>
    </nav>
  </div>
  <!-- ===== Mobile Menu Area (End) ===== -->
</header>

<style>
  .cart-icon-wrapper {
    position: relative;
    display: inline-block;
  }

  .cart-badge {
    position: absolute;
    bottom: -4px;
    right: -6px;
    background-color: yellow;
    color: black;
    border-radius: 50%;
    font-size: 10px;
    font-weight: bold;
    padding: 2px 5px;
    line-height: 1;
  }
</style>
