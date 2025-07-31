<script lang="ts">
  import Footer from "../Footer.svelte";
  import Header from "../Header.svelte";

  export let data;
  const { product } = data;

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

<a href="#" class="scroll-top">
  <i class="fa-solid fa-arrow-up-long"></i>
</a>

<Header />

<div class="page-title">
  <div class="title">
    <h2>{product.name}</h2>
  </div>

  <div class="link">
    <a href="/">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">{product.name}</span>
  </div>
</div>

<section class="product-single">
  <div class="product-des">
    <div class="box-container">
      <div class="image">
        <div class="image-container">
          <div class="main">
            <img src={product.imageUrl} alt={product.name} />
          </div>
        </div>
      </div>
      <div class="content">
        <div class="text">
          <div class="introduction">
            <h3>{product.name}</h3>
            <div class="price">${product.price.toFixed(2)}</div>
          </div>
          <p>
            {product.description}
          </p>
          <div class="box">
            <div class="qty">
              <h4>Qty:</h4>
              <div class="quantity buttons_added">
                <input type="button" value="-" class="minus" />
                <input
                  type="number"
                  step="1"
                  min="1"
                  max="100"
                  name="quantity"
                  value="1"
                  title="Qty"
                  class="input-text qty text"
                />
                <input type="button" value="+" class="plus" />
              </div>
            </div>
            <a
              on:click|preventDefault={() => addToCart(product.id)}
              href="/shop/checkout"
              class="btn">add to cart</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<Footer />
