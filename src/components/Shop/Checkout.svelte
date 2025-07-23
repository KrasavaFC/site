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
    <h2>Checkout</h2>
  </div>

  <div class="link">
    <a href="../../index.html">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Checkout</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Checkout Area (Start) ==================== -->
<section>
  <form action="#" class="checkout">
    <div class="box-1">
      <!-- ========== Billing-Address Area (Start) ========== -->
      <div class="billing address checkout-item">
        <div class="heading">
          <h2>billing address</h2>
        </div>

        <div class="form">
          <!-- First and Last name input -->
          <div class="input-box">
            <input
              type="text"
              name="first-name"
              placeholder="first name"
              id="b-first-name"
              class="box"
              required
            />
            <input
              type="text"
              name="last-name"
              placeholder="last name"
              id="b-last-name"
              class="box"
              required
            />
          </div>

          <!-- Company input -->
          <div class="input-box">
            <input
              type="text"
              name="company"
              placeholder="company"
              id="b-company"
              class="box"
              required
            />
          </div>

          <!-- Country input -->
          <div class="input-box">
            <input
              type="text"
              name="country"
              placeholder="country"
              id="b-country"
              class="box"
              required
            />
          </div>

          <!-- Address input -->
          <div class="input-box">
            <input
              type="text"
              name="address"
              placeholder="address"
              id="b-address"
              class="box"
              required
            />
          </div>

          <!-- City and ZIP input -->
          <div class="input-box">
            <input
              type="text"
              name="city"
              placeholder="town/city"
              id="b-city"
              class="box"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="postcode/ZIP"
              id="b-zip"
              class="box"
              required
            />
          </div>

          <!-- Phone and Email input -->
          <div class="input-box">
            <input
              type="number"
              name="number"
              placeholder="phone no"
              id="b-number"
              class="box"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email address"
              id="b-email"
              class="box"
              required
            />
          </div>
        </div>
      </div>
      <!-- ========== Billing-Address Area (End) ========== -->

      <!-- ========== Shipping-Address Area (Start) ========== -->
      <div class="shipping address checkout-item">
        <div class="heading">
          <h2>shipping address</h2>
        </div>

        <!-- Shipping Address Form -->
        <div class="form">
          <!-- First and Last name input -->
          <div class="input-box">
            <input
              type="text"
              name="first-name"
              placeholder="first name"
              id="s-first-name"
              class="box"
              required
            />
            <input
              type="text"
              name="last-name"
              placeholder="last name"
              id="s-last-name"
              class="box"
              required
            />
          </div>

          <!-- Company input -->
          <div class="input-box">
            <input
              type="text"
              name="company"
              placeholder="company"
              id="s-company"
              class="box"
              required
            />
          </div>

          <!-- Country input -->
          <div class="input-box">
            <input
              type="text"
              name="country"
              placeholder="country"
              id="s-country"
              class="box"
              required
            />
          </div>

          <!-- Address input -->
          <div class="input-box">
            <input
              type="text"
              name="address"
              placeholder="address"
              id="s-address"
              class="box"
              required
            />
          </div>

          <!-- City and ZIP input -->
          <div class="input-box">
            <input
              type="text"
              name="city"
              placeholder="town/city"
              id="s-city"
              class="box"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="postcode/ZIP"
              id="s-zip"
              class="box"
              required
            />
          </div>

          <!-- Phone and Email input -->
          <div class="input-box">
            <input
              type="number"
              name="number"
              placeholder="phone no"
              id="s-number"
              class="box"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="email address"
              id="s-email"
              class="box"
              required
            />
          </div>
        </div>
      </div>
      <!-- ========== Shipping-Address Area (End) ========== -->
    </div>

    <div class="box-2">
      <!-- ========== Payment-Method Area (Start) ========== -->
      <div class="payment-methods checkout-item">
        <div class="heading">
          <h2>payment method</h2>
        </div>

        <div class="content">
          <!-- Payment Method: Direct Bank Transfer -->
          <div class="payment">
            <input
              id="direct-bank-transfer"
              name="payment"
              type="radio"
              checked
            />
            <label for="direct-bank-transfer" class="radio-label"
              >direct bank transfer</label
            >

            <!-- Payment Method Content -->
            <div class="payment-body active">
              <p>
                Make your payment directly into our bank account. Please use
                your Order ID as the payment reference. Your order won’t be
                shipped until the funds have our account.
              </p>
            </div>
          </div>

          <!-- Payment Method: Cash On Delivery -->
          <div class="payment">
            <input id="cash-on-delivery" name="payment" type="radio" />
            <!-- Payment Method Radio Button -->
            <label for="cash-on-delivery" class="radio-label"
              >cash on delivery</label
            >
            <!-- Payment Method Label -->

            <!-- Payment Method Content -->
            <div class="payment-body">
              <p>
                Please send your cheque to Store Name, Store Street, Store Town,
                Store State / County, Store Postcode.
              </p>
            </div>
          </div>

          <!-- Payment Method: Paypal -->
          <div class="payment">
            <input id="paypal" name="payment" type="radio" />
            <!-- Payment Method Radio Button -->
            <label for="paypal" class="radio-label">paypal</label>
            <!-- Payment Method Label -->

            <!-- Payment Method Content -->
            <div class="payment-body">
              <p>
                Pay via PayPal; you can pay with your credit card if you don’t
                have a PayPal account.
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- ========== Payment-Method Area (End) ========== -->

      <!-- ========== Cart-Total Area (Start) ========== -->
      <div class="shop-summary checkout-item">
        <div class="heading">
          <h2>cart total</h2>
        </div>

        <div class="summary-list">
          <!-- Subtotal -->
          <div class="summary-item">
            <div class="name summary-box">sub total</div>
            <div class="value summary-box">$300.00</div>
          </div>

          <!-- Delivery Fee -->
          <div class="summary-item">
            <div class="name summary-box">delivery fee</div>
            <div class="value summary-box">$30.00</div>
          </div>

          <!-- Discount -->
          <div class="summary-item">
            <div class="name summary-box">discount</div>
            <div class="value summary-box">$60.00</div>
          </div>

          <!-- Tax -->
          <div class="summary-item">
            <div class="name summary-box">tax</div>
            <div class="value summary-box">$30.00</div>
          </div>

          <!-- Total -->
          <div class="summary-item">
            <div class="name summary-box">total</div>
            <div class="value summary-box">$300.00</div>
          </div>
        </div>
      </div>

      <!-- ========== Cart-Total Area (End) ========== -->

      <button type="submit" class="btn">place order</button>
      <!-- Place Order Button -->
    </div>
  </form>
</section>
<!-- ==================== Checkout Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />

<!-- ==================== Footer Area (End) ==================== -->
