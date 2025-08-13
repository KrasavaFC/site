<script lang="ts">
  import Header from "../Header.svelte";
  import Footer from "../Footer.svelte";
  import { onMount } from "svelte";

  type WishlistItem = {
    id: string;
    productId: string;
    addedAt: string;
    product: {
      id: string;
      name: string;
      price: number;
      imageUrl: string;
    };
  };

  let wishlist: WishlistItem[] = [];
  let loading = true;

  async function loadWishlist() {
    loading = true;
    try {
      const res = await fetch("/api/user/cart");
      if (res.ok) {
        const data = await res.json();
        wishlist = data.cart;
      } else {
        console.error("Failed to load wishlist");
      }
    } catch (err) {
      console.error("Network error:", err);
    } finally {
      loading = false;
    }
  }

  onMount(() => {
    loadWishlist();
  });

  async function removeFromWishlist(productId: string) {
    try {
      const res = await fetch("/api/user/wishlist", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ productId })
      });

      if (res.ok) {
        await loadWishlist();
      } else {
        const text = await res.text();
        console.error("Failed to remove from wishlist:", text);
      }
    } catch (err) {
      console.error("Network error while deleting:", err);
    }
  }
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
    <h2>Cart</h2>
  </div>

  <div class="link">
    <a href="/">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Cart</span>
  </div>
</div>

<section class="wishlist">
  <div class="wishlist-container">
    <div class="container">
      <div class="shoplist-title">
        <h3 class="product-heading">product</h3>
        <h3>price</h3>
        <h3>status</h3>
        <h3>activity</h3>
      </div>

      <div class="box-container">
        {#if loading}
          <h3>Loading...</h3>
        {:else if wishlist.length === 0}
          <h3>Your wishlist is empty.</h3>
        {:else}
          {#each wishlist as item}
            <div class="wishlist-item">
              <div class="box product">
                <img src={item.product.imageUrl} alt="Product-Image" />
                <div class="name">{item.product.name}</div>
              </div>
              <div class="box price">€{item.product.price.toFixed(2)}</div>
              <div class="box status in">in Stock</div>
              <div class="box action">
                <a
                  href="#"
                  class="icon delete fas fa-trash-alt"
                  title="Remove"
                  on:click|preventDefault={() =>
                    removeFromWishlist(item.product.id)}
                ></a>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>
</section>

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->
