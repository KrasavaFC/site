<script lang="ts">
  import Header from "../Header.svelte";
  import Footer from "../Footer.svelte";
  import { onMount } from "svelte";
  import { browser } from "$app/environment";

  type CartItem = {
    id: string;
    productId: string;
    addedAt: string;
    quantity: number;
    product: {
      id: string;
      name: string;
      price: number;
      imageUrl: string;
    };
  };

  let cart: CartItem[] = [];
  let loading = true;

  $: total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  async function updateQuantity(item: CartItem, newQuantity: number) {
    if (newQuantity < 1) return;

    try {
      const res = await fetch("/api/user/wishlist", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId: item.productId,
          quantity: newQuantity,
        }),
      });

      if (res.ok) {
        cart = cart.map((i) =>
          i.productId === item.productId ? { ...i, quantity: newQuantity } : i
        );
      } else {
        const text = await res.text();
        console.error("Failed to update quantity:", text);
      }
    } catch (err) {
      console.error("Update quantity error:", err);
    }
  }

  async function loadCart() {
    loading = true;
    try {
      const res = await fetch("/api/user/cart");
      if (res.ok) {
        const data = await res.json();
        cart = data.cart;
      } else {
        console.error("Failed to load cart");
      }
    } catch (err) {
      console.error("Network error:", err);
    } finally {
      loading = false;
    }
  }

  async function removeFromCart(productId: string) {
    try {
      const res = await fetch("/api/user/wishlist", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId }),
      });

      if (res.ok) {
        await loadCart();
      } else {
        const text = await res.text();
        console.error("Failed to remove item:", text);
      }
    } catch (err) {
      console.error("Delete error:", err);
    }
  }

  onMount(() => {
    loadCart();

    if (!browser) return;

    const waitForPaypal = setInterval(() => {
      if (window.paypal) {
        clearInterval(waitForPaypal);

        window.paypal
          .Buttons({
            createOrder(data: any, actions: any) {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: total.toFixed(2),
                    },
                  },
                ],
              });
            },
            async onApprove(data: any, actions: any) {
              const details = await actions.order.capture();

              const res = await fetch("/api/paypal", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  orderId: data.orderID,
                  payerId: data.payerID,
                  details,
                  cart,
                }),
              });

              if (res.ok) {
                alert("✅ Оплата успешна");
                await loadCart();
              } else {
                const err = await res.text();
                alert("❌ Ошибка при сохранении заказа: " + err);
              }
            },
            onError(err: any) {
              console.error("PayPal error:", err);
            },
          })
          .render("#paypal-button-container");
      }
    }, 300);
  });
</script>

<a href="#" class="scroll-top">
  <i class="fa-solid fa-arrow-up-long"></i>
</a>

<Header />

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

<section class="cart">
  <div class="shopping-cart">
    <div class="container">
      <div class="shoplist-title">
        <h3 class="product-heading">product</h3>
        <h3>price</h3>
        <h3>quantity</h3>
        <h3>total</h3>
        <h3>action</h3>
      </div>

      <div class="box-container">
        {#if loading}
          <p>Loading cart...</p>
        {:else if cart.length === 0}
          <p>Your cart is empty.</p>
        {:else}
          {#each cart as item}
            <div class="cart-item">
              <div class="box product">
                <img src={item.product.imageUrl} alt="Product-Image" />
                <div class="name">{item.product.name}</div>
              </div>
              <div class="box price">${item.product.price.toFixed(2)}</div>
              <div class="box quantitly">
                <div class="quantity buttons_added">
                  <input
                    type="button"
                    value="-"
                    class="minus"
                    on:click={() => updateQuantity(item, item.quantity - 1)}
                  />
                  <input
                    type="number"
                    min="1"
                    max="100"
                    bind:value={item.quantity}
                    class="input-text qty text"
                    on:change={() => updateQuantity(item, item.quantity)}
                  />
                  <input
                    type="button"
                    value="+"
                    class="plus"
                    on:click={() => updateQuantity(item, item.quantity + 1)}
                  />
                </div>
              </div>

              <div class="box total">${item.product.price.toFixed(2)}</div>
              <div class="box action">
                <i
                  class="icon fa-solid fa-trash-arrow-up"
                  title="Remove"
                  on:click={() => removeFromCart(item.productId)}
                  style="cursor: pointer;"
                ></i>
              </div>
            </div>
          {/each}
        {/if}
      </div>
    </div>
  </div>

  <div class="cart-summary">
    <div class="summary-list">
      <div class="summary-item">
        <div class="name summary-box">total</div>
        <div class="value summary-box">${total}</div>
      </div>
    </div>
    <div id="paypal-button-container"></div>

    <!-- <a href="#" class="btn">proceed to checkout</a> -->
  </div>
</section>

<Footer />
