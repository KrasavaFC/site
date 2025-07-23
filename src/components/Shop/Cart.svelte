<script>
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
    <h2>Cart</h2>
  </div>

  <div class="link">
    <a href="../../index.html">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Cart</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Cart Area (Start) ==================== -->
<section class="cart">
  <!-- ========== Shopping-Cart Area (Start) ========== -->
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
        <!-- Cart Item 1 -->
        <div class="cart-item">
          <div class="box product">
            <img
              src="../../assets/images/Shop/Products/Product-1.jpg"
              alt="Product-Image"
            />
            <div class="name">Football</div>
          </div>
          <div class="box price">$50.00</div>
          <div class="box quantitly">
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
          <div class="box total">$50.00</div>
          <div class="box action">
            <i class="icon fa-solid fa-trash-arrow-up"></i>
          </div>
        </div>

        <!-- Cart Item 2 -->
        <div class="cart-item">
          <div class="box product">
            <img
              src="../../assets/images/Shop/Products/Product-2.jpg"
              alt="Product-Image"
            />
            <div class="name">Home Jersey</div>
          </div>
          <div class="box price">$50.00</div>
          <div class="box quantitly">
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
          <div class="box total">$50.00</div>
          <div class="box action">
            <i class="icon fa-solid fa-trash-arrow-up"></i>
          </div>
        </div>

        <!-- Cart Item 3 -->
        <div class="cart-item">
          <div class="box product">
            <img
              src="../../assets/images/Shop/Products/Product-3.jpg"
              alt="Product-Image"
            />
            <div class="name">Hoodie</div>
          </div>
          <div class="box price">$50.00</div>
          <div class="box quantitly">
            <div class="quantity buttons_added">
              <input type="button" value="-" class="minus" />
              <input
                type="number"
                step="1"
                min="1"
                max="100"
                name="quantity"
                value="2"
                title="Qty"
                class="input-text qty text"
              />
              <input type="button" value="+" class="plus" />
            </div>
          </div>
          <div class="box total">$100.00</div>
          <div class="box action">
            <i class="icon fa-solid fa-trash-arrow-up"></i>
          </div>
        </div>

        <!-- Cart Item 4 -->
        <div class="cart-item">
          <div class="box product">
            <img
              src="../../assets/images/Shop/Products/Product-4.jpg"
              alt="Product-Image"
            />
            <div class="name">Soccer Cap</div>
          </div>
          <div class="box price">$50.00</div>
          <div class="box quantitly">
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
          <div class="box total">$50.00</div>
          <div class="box action">
            <i class="icon fa-solid fa-trash-arrow-up"></i>
          </div>
        </div>

        <!-- Cart Item 5 -->
        <div class="cart-item">
          <div class="box product">
            <img
              src="../../assets/images/Shop/Products/Product-5.jpg"
              alt="Product-Image"
            />
            <div class="name">Sneakers</div>
          </div>
          <div class="box price">$50.00</div>
          <div class="box quantitly">
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
          <div class="box total">$50.00</div>
          <div class="box action">
            <i class="icon fa-solid fa-trash-arrow-up"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ========== Shopping-Cart Area (End) ========== -->

  <!-- ========== Cart-Summary Area (Start) ========== -->
  <div class="cart-summary">
    <div class="summary-list">
      <div class="summary-item">
        <div class="name summary-box">sub total</div>
        <div class="value summary-box">$300.00</div>
      </div>

      <div class="summary-item">
        <div class="name summary-box">delivery fee</div>
        <div class="value summary-box">$30.00</div>
      </div>

      <div class="summary-item">
        <div class="name summary-box">discount</div>
        <div class="value summary-box">$60.00</div>
      </div>

      <div class="summary-item">
        <div class="name summary-box">tax</div>
        <div class="value summary-box">$30.00</div>
      </div>

      <div class="summary-item">
        <div class="name summary-box">total</div>
        <div class="value summary-box">$300.00</div>
      </div>
    </div>

    <a href="./Checkout.html" class="btn">proceed to checkout</a>
  </div>
  <!-- ========== Cart-Summary Area (End) ========== -->
</section>
<!-- ==================== Cart Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />

<!-- ==================== Footer Area (End) ==================== -->
