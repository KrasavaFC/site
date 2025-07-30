<script lang="ts">
  import { onMount } from "svelte";
  import Header from "../Header.svelte";
  import Footer from "../Footer.svelte";

  type Product = {
    id: string;
    name: string;
    price: number;
    oldPrice?: number;
    imageUrl?: string;
  };

  let products: Product[] = [];
  let loading = true;
  let cartCount: number = 0;

  onMount(async () => {
    try {
      const res = await fetch("/api/products");
      products = await res.json();

      const cartRes = await fetch("/api/user/cart");
      if (cartRes.ok) {
        const { cart } = await cartRes.json();
        cartCount = cart.length + 1;
      }
    } catch (err) {
      console.error("Failed to fetch data:", err);
    } finally {
      loading = false;
    }
  });

  async function addToCart(productId: string) {
    try {
      const res = await fetch("/api/user/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (res.ok) {
        const result = await res.json();
        console.log("Product added to cart:", result);
      } else if (res.status === 409) {
        console.warn("Product is already in cart.");
      } else if (res.status === 401) {
        alert("Please log in to add items to cart.");
      } else {
        const errorText = await res.text();
        console.error("Unexpected error:", errorText);
      }
    } catch (err) {
      console.error("Network or server error:", err);
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
    <h2>Shop Grid</h2>
  </div>

  <div class="link">
    <a href="../../index.html">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Shop Grid</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Shop-Grid Area (Start) ==================== -->
<section class="shop">
  <!-- ========== Shop Sidebar Area (Start) ========== -->
  <div class="sidebar">
    <!-- <div class="category sidebar-item">
      <div class="sidebar-heading">
        <h2>categories</h2>
      </div>

      <div class="box-container">
        <a href="#" class="item">
          <span><i class="fa-solid fa-futbol"></i>All Products</span>
          <p>(30)</p>
        </a>
        <a href="#" class="item">
          <span><i class="fa-solid fa-futbol"></i>Sports Equipment</span>
          <p>(08)</p>
        </a>
        <a href="#" class="item">
          <span><i class="fa-solid fa-futbol"></i>Apparel </span>
          <p>(06)</p>
        </a>
        <a href="#" class="item">
          <span><i class="fa-solid fa-futbol"></i>Accessories</span>
          <p>(04)</p>
        </a>
        <a href="#" class="item">
          <span><i class="fa-solid fa-futbol"></i>Footwear</span>
          <p>(06)</p>
        </a>
        <a href="#" class="item">
          <span><i class="fa-solid fa-futbol"></i>Technology</span>
          <p>(06)</p>
        </a>
      </div>
    </div>

    <div class="filter sidebar-item">
      <div class="sidebar-heading">
        <h2>Product Filter</h2>
      </div>

      <div class="box-container">
        <div class="slider">
          <div class="progress"></div>
        </div>
        <div class="range-input">
          <input
            type="range"
            class="range-min"
            min="0"
            max="1000"
            value="250"
            step="10"
          />
          <input
            type="range"
            class="range-max"
            min="0"
            max="1000"
            value="750"
            step="10"
          />
        </div>
        <div class="price-wrap">
          <div class="price-input">
            <div class="field">
              <span>$</span>
              <input type="number" class="input-min" value="250" />
            </div>
            <div class="separator">-</div>
            <div class="field">
              <span>$</span>
              <input type="number" class="input-max" value="750" />
            </div>
          </div>
          <span class="btn">FILTER</span>
        </div>
      </div>
    </div>

    <div class="popular-products sidebar-item">
      <div class="sidebar-heading">
        <h2>popular products</h2>
      </div>

      <div class="box-container">
        <div class="post-item">
          <img
            src="../../assets/images/Shop/Products/Product-1.jpg"
            alt="Popular-Product-Image"
          />
          <div class="content">
            <a href="../../pages/Shop/Product-Single.html">Football</a>
            <div class="price">
              <p>$40.00 <span>$50.00</span></p>
            </div>
          </div>
        </div>

        <div class="post-item">
          <img
            src="../../assets/images/Shop/Products/Product-3.jpg"
            alt="Popular-Product-Image"
          />
          <div class="content">
            <a href="../../pages/Shop/Product-Single.html">Hoodie</a>
            <div class="price">
              <p>$40.00 <span>$50.00</span></p>
            </div>
          </div>
        </div>

        <div class="post-item">
          <img
            src="../../assets/images/Shop/Products/Product-5.jpg"
            alt="Popular-Product-Image"
          />
          <div class="content">
            <a href="../../pages/Shop/Product-Single.html">Sneakers</a>
            <div class="price">
              <p>$40.00 <span>$50.00</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> -->

    <div class="shop-container">
      <div class="intro">
        <div class="showing">showing {cartCount} of {cartCount} products</div>

        <!-- <div class="styles">
        <a href="../../pages/Shop/Shop-Grid.html" class="fas fa-th"></a>
        <a href="../../pages/Shop/Shop-List.html" class="fas fa-list"></a>
      </div> -->

        <div class="sorting-type">
          <label for="sort">sort by:</label>

          <select name="sort" id="sort">
            <option value="default">default</option>
            <option value="name, A to Z">name, A to Z</option>
            <option value="mname, Z to A">name, Z to A</option>
            <option value="price, low to high">price, low to high</option>
            <option value="price, high to low">price, high to low</option>
          </select>
        </div>
      </div>

      <div class="product-container grid">
        {#if loading}
          <p>Loading products...</p>
        {:else if products.length === 0}
          <p>No products available.</p>
        {:else}
          {#each products as product}
            <div class="product-item">
              <div class="image">
                <img
                  src={product.imageUrl || "/placeholder.jpg"}
                  alt={product.name}
                />
                <div class="options">
                  <a
                    href="#"
                    class="icon"
                    on:click|preventDefault={() => addToCart(product.id)}
                    title="Add to Cart"
                  >
                    <i class="fa-solid fa-cart-shopping"></i>
                  </a>
                </div>
                <!-- <div class="options">
                  <button class="icon" on:click={() => addToCart(product.id)}>
                    <i class="fa-solid fa-cart-shopping"></i>
                  </button>
                  <a href={`/shop/product/${product.id}`} class="icon">
                    <i class="fa-solid fa-magnifying-glass"></i>
                  </a>
                </div> -->
              </div>
              <div class="content">
                <a href={`/shop/product/${product.id}`}
                  ><h3>{product.name}</h3></a
                >
                <div class="price">
                  ${product.price.toFixed(2)}
                  {#if product.oldPrice}
                    <span>${product.oldPrice.toFixed(2)}</span>
                  {/if}
                </div>
              </div>
            </div>
          {/each}
        {/if}
      </div>
      <!-- ===== Products (Ends) ===== -->

      <!-- ===== Pagination (Start) ===== -->
      <!-- <div class="pages-no">
      <div class="container">
        <div class="item">
          <i class="fas fa-arrow-left"></i>
        </div>
        <div class="numbers">
          <div class="item active">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
        </div>
        <div class="item">
          <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    </div> -->
    </div>
    <!-- ========== Shop Container (End) ========== -->
  </div>
</section>
<!-- ==================== Shop-Grid Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />

<!-- ==================== Footer Area (End) ==================== -->
