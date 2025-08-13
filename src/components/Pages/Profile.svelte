<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import Header from "../Header.svelte";
  import Footer from "../Footer.svelte";

  let name = "";
  let email = "";
  let purchases: PurchaseItem[] = [];

  let isAuthenticated = false;

  type PurchaseItem = {
    id: string;
    productId: string;
    productName: string;
    productImage: string;
    quantity: number;
    priceAtPurchase: number;
    status: string;
    transactionId: string | null;
    amountPaid: number | null;
    currency: string | null;
    purchasedAt: string;
  };

  async function logout() {
    try {
      const res = await fetch("/api/logout", {
        method: "POST",
      });
      if (res.ok) {
        goto("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (err) {
      console.error("Logout error:", err);
    }
  }

  onMount(async () => {
    try {
      const profileRes = await fetch("/api/user/profile");
      if (profileRes.ok) {
        isAuthenticated = true;
        const data = await profileRes.json();
        name = data.name || "";
        email = data.email;
      }
    } catch (err) {
      console.error("Auth check failed:", err);
    }

    try {
      const historyRes = await fetch("/api/user/purchases");
      if (historyRes.ok) {
        const data = await historyRes.json();
        purchases = data.purchases;
      }
    } catch (err) {
      console.error("Purchase history error:", err);
    }
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
    <h2>profile</h2>
  </div>

  <div class="link">
    <a href="/"> <i class="fa-solid fa-house-chimney"></i> Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">profile</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Player Single Area (Start) ==================== -->
<section class="team-single">
  <!-- Player Introduction -->
  <div class="team-intro">
    <!-- Player Image -->
    <!-- <div class="image">
      <img src="../../assets/images/Krasava/fan.png" alt="Player Image" />
    </div> -->

    <!-- Player Information -->
    <!-- Player Information -->
    <div class="information">
      <h3>{name}</h3>
      <h5>{email}</h5>
      {#if isAuthenticated}
        <button on:click={logout} class="btn logout-btn">Logout</button>
      {:else}
        <a href="/login" class="btn login-btn">Login</a>
      {/if}

      <div class="team-about">
        <!-- <div class="text">
          {email}
        </div> -->
      </div>

      <!-- <ul class="team-personal-info">
        <li>
          <h6><i class="fas fa-flag"></i> Nationality:</h6>
          <span>{email}</span>
        </li>
        <li>
          <h6><i class="fa-regular fa-calendar-days"></i> D.O.B:</h6>
          <span>{email}</span>
        </li>
        <li>
          <h6><i class="fas fa-birthday-cake"></i> Age:</h6>
          <span>{email}</span>
        </li>
        <li>
          <h6><i class="fas fa-arrows-alt-v"></i> Height:</h6>
          <span>{email}</span>
        </li>
      </ul> -->
    </div>
  </div>

  <!-- Career Statistics -->
  <div class="career-stats">
    <!-- Club Statistics -->
    <div class="club-stats">
      <div class="heading">
        <h2>Buy history</h2>
      </div>

      <div class="stats-container">
        <div class="container">
          <!-- Career Title -->
          <div class="career-title">
            <h3>Date</h3>
            <h3>Product</h3>
            <h3>Qty</h3>
            <h3>Price</h3>
            <h3>Status</h3>
            <h3>Total</h3>
          </div>

          <div class="stats-content">
            {#each purchases as p}
              <div class="career-stat-item">
                <div class="box season">
                  {new Date(p.purchasedAt).toLocaleDateString()}
                </div>
                <div class="box season">
                  {p.productName}
                </div>
                <div class="box season">{p.quantity}</div>
                <div class="box season">€ {p.priceAtPurchase}</div>
                <div class="box season">{p.status}</div>
                <div class="box season">
                  € {p.priceAtPurchase * p.quantity}
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer />
