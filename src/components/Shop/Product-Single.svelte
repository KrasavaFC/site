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
    <h2>Product Single</h2>
  </div>

  <div class="link">
    <a href="../../index.html">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Product Single</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Product Single Area (Start) ==================== -->
<section class="product-single">
  <!-- ========== Product-Description Area (Start) ========== -->
  <div class="product-des">
    <div class="box-container">
      <!-- Football Product Image -->
      <div class="image">
        <div class="image-container">
          <!-- Main football product image -->
          <div class="main">
            <img
              src="../../assets/images/Shop/Product-Gallery/1.jpg"
              alt="Football Product Image"
            />
            <!-- Main football product image -->
          </div>

          <!-- Football Product Image Gallery Buttons -->
          <div class="change-btns">
            <img
              class="active"
              src="../../assets/images/Shop/Product-Gallery/1.jpg"
              alt="Football Product Gallery Image 1"
            />
            <!-- Active image in the gallery -->
            <img
              src="../../assets/images/Shop/Product-Gallery/2.jpg"
              alt="Football Product Gallery Image 2"
            />
            <!-- Image in the gallery -->
            <img
              src="../../assets/images/Shop/Product-Gallery/3.jpg"
              alt="Football Product Gallery Image 3"
            />
            <!-- Image in the gallery -->
            <img
              src="../../assets/images/Shop/Product-Gallery/4.jpg"
              alt="Football Product Gallery Image 4"
            />
            <!-- Image in the gallery -->
          </div>
        </div>
      </div>

      <!-- Football Product Information -->
      <div class="content">
        <div class="text">
          <div class="introduction">
            <div class="intro">
              <!-- Football Product Rating -->
              <div class="rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <span>4.5 (10)</span>
              <!-- Number of reviews -->
            </div>
            <h3>Official Football</h3>
            <!-- Football Product Title -->
            <div class="price">$40.00/- <span>$50.00</span></div>
            <!-- Football Product price -->
          </div>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
            tempore eaque nesciunt neque consectetur, qui illo. Fugit numquam
            nesciunt, repudiandae corrupti, pariatur obcaecati perspiciatis quam
            eius magni officiis, delectus aut? Lorem ipsum dolor sit.
          </p>
          <!-- Football Product Description -->

          <!-- Quantity Box -->
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

            <a href="../../pages/Shop/Cart.html" class="btn">add to cart</a>
            <!-- Add To Cart Button -->
          </div>

          <!-- Football Product Categories -->
          <div class="categories">
            <h4>Categories:</h4>
            <a href="#">Sports Equipment</a>
          </div>

          <!-- Football Product Tags -->
          <div class="tags">
            <h4>Tags:</h4>
            <a href="#">Football</a>
            <a href="#">Sports</a>
            <a href="#">Outdoor</a>
          </div>
        </div>
      </div>
    </div>

    <div class="product-info tab-info">
      <!-- Tab Buttons -->
      <div class="tab-buttons">
        <button type="button" class="button active" data-target="#description"
          >description</button
        >
        <!-- Active tab button for description -->
        <button type="button" class="button" data-target="#additional"
          >additional information</button
        >
        <!-- Tab button for additional information -->
        <button type="button" class="button" data-target="#reviews"
          >reviews (2)</button
        >
        <!-- Tab button for reviews -->
      </div>

      <!-- Tab Sections -->
      <div class="tab-sections">
        <!-- Description Tab Section -->
        <div class="tab-section active" id="description">
          <div class="description">
            <p>
              Experience the thrill of the game with our Official Football.
              Crafted for optimum performance and durability, this football is
              designed to meet the highest standards. Whether you're a seasoned
              player or just starting, our Official Football promises an
              exceptional playing experience on the field. Experience the thrill
              of the game with our Official Football. Crafted for optimum
              performance and durability, this football is designed to meet the
              highest standards. Whether you're a seasoned player or just
              starting, our Official Football promises an exceptional playing
              experience on the field.
            </p>
          </div>
        </div>

        <!-- Additional Information Tab Section -->
        <div class="tab-section" id="additional">
          <div class="additional-info">
            <div class="item">
              <h3>Brand:</h3>
              <span>SportPro</span>
            </div>
            <!-- Football brand -->
            <div class="item">
              <h3>Material:</h3>
              <span>Premium Leather</span>
            </div>
            <!-- Material -->
            <div class="item">
              <h3>Size:</h3>
              <span>Standard Size 5</span>
            </div>
            <!-- Size -->
          </div>
        </div>

        <!-- Reviews Tab Section -->
        <div class="tab-section" id="reviews">
          <div class="reviews">
            <h2>2 reviews</h2>

            <!-- Review Comment 1 -->
            <div class="comment">
              <div class="comment-image">
                <img
                  src="../../assets/images/Shop/Reviews/Pic-1.jpg"
                  alt="comment-author-Pic"
                />
                <!-- Reviewer's image -->
              </div>
              <div class="comment-content">
                <h3>David Thompson</h3>
                <!-- Reviewer's name -->
                <h6>dec 03, 2023</h6>
                <!-- Review date -->
                <p class="text">
                  This football exceeded my expectations. It has a great feel,
                  and the durability is impressive. It's a fantastic addition to
                  my football collection.
                </p>
                <!-- Review content -->
              </div>
            </div>

            <!-- Review Comment 2 -->
            <div class="comment">
              <div class="comment-image">
                <img
                  src="../../assets/images/Shop/Reviews/Pic-2.jpg"
                  alt="comment-author-Pic"
                />
                <!-- Reviewer's image -->
              </div>
              <div class="comment-content">
                <h3>Sarah Miller</h3>
                <!-- Reviewer's name -->
                <h6>dec 04, 2023</h6>
                <!-- Review date -->
                <p class="text">
                  The quality of this football is exceptional. It's perfect for
                  both casual and competitive play. Highly recommended for
                  football enthusiasts!
                </p>
                <!-- Review content -->
              </div>
            </div>

            <!-- Leave a Reply Section -->
            <div class="leave-reply">
              <form class="form">
                <h2>Leave a Comment</h2>

                <div class="input-box">
                  <input
                    type="text"
                    name="name"
                    class="box"
                    id="name"
                    placeholder="Name"
                    required
                  />
                  <!-- Name input -->
                  <input
                    type="email"
                    name="email"
                    class="box"
                    id="email"
                    placeholder="Email"
                    required
                  />
                  <!-- Email input -->
                </div>

                <textarea
                  cols="30"
                  rows="10"
                  name="comment"
                  class="box"
                  id="comment"
                  placeholder="Comment"
                ></textarea>
                <!-- Comment input -->

                <input type="submit" value="Submit" class="btn" />
                <!-- Submit button -->
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ========== Product-Description Area (End) ========== -->

  <!-- ========== Related Products Area (Start) ========== -->
  <div class="related-items">
    <!-- Sidebar Heading -->
    <div class="sidebar-heading">
      <h2>Related Products</h2>
    </div>

    <!-- Related Products -->
    <div class="box-container">
      <!-- Product-1 -->
      <div class="product-item">
        <div class="image">
          <img
            src="../../assets/images/Shop/Products/Product-2.jpg"
            alt="Product-Image"
          />
          <!-- Product Image -->
          <div class="options">
            <a href="../../pages/Shop/Wishlist.html" class="icon"
              ><i class="far fa-heart"></i></a
            ><!-- Add to Wishlist Button -->
            <a href="../../pages/Shop/Cart.html" class="icon"
              ><i class="fa-solid fa-cart-shopping"></i></a
            ><!-- Add to Cart Button -->
            <a href="../../pages/Shop/Product-Single.html" class="icon"
              ><i class="fa-solid fa-magnifying-glass"></i></a
            ><!-- Product Detail Page Button -->
          </div>
        </div>
        <div class="content">
          <div class="rating">
            <!-- Product Rating -->
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <a href="../../pages/Shop/Product-Single.html"><h3>Home Jersey</h3></a
          >
          <!-- Product Title -->
          <div class="price">$40.00 <span>$50.00</span></div>
          <!-- Product Price -->
        </div>
      </div>

      <!-- Product-2 -->
      <div class="product-item">
        <div class="image">
          <img
            src="../../assets/images/Shop/Products/Product-3.jpg"
            alt="Product-Image"
          />
          <!-- Product Image -->
          <div class="options">
            <a href="../../pages/Shop/Wishlist.html" class="icon"
              ><i class="far fa-heart"></i></a
            ><!-- Add to Wishlist Button -->
            <a href="../../pages/Shop/Cart.html" class="icon"
              ><i class="fa-solid fa-cart-shopping"></i></a
            ><!-- Add to Cart Button -->
            <a href="../../pages/Shop/Product-Single.html" class="icon"
              ><i class="fa-solid fa-magnifying-glass"></i></a
            ><!-- Product Detail Page Button -->
          </div>
        </div>
        <div class="content">
          <div class="rating">
            <!-- Product Rating -->
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <a href="../../pages/Shop/Product-Single.html"><h3>Hoodie</h3></a>
          <!-- Product Title -->
          <div class="price">$40.00 <span>$50.00</span></div>
          <!-- Product Price -->
        </div>
      </div>

      <!-- Product-3 -->
      <div class="product-item">
        <div class="image">
          <img
            src="../../assets/images/Shop/Products/Product-4.jpg"
            alt="Product-Image"
          />
          <!-- Product Image -->
          <div class="options">
            <a href="../../pages/Shop/Wishlist.html" class="icon"
              ><i class="far fa-heart"></i></a
            ><!-- Add to Wishlist Button -->
            <a href="../../pages/Shop/Cart.html" class="icon"
              ><i class="fa-solid fa-cart-shopping"></i></a
            ><!-- Add to Cart Button -->
            <a href="../../pages/Shop/Product-Single.html" class="icon"
              ><i class="fa-solid fa-magnifying-glass"></i></a
            ><!-- Product Detail Page Button -->
          </div>
        </div>
        <div class="content">
          <div class="rating">
            <!-- Product Rating -->
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <a href="../../pages/Shop/Product-Single.html"><h3>Soccer Cap</h3></a>
          <!-- Product Title -->
          <div class="price">$40.00 <span>$50.00</span></div>
          <!-- Product Price -->
        </div>
      </div>

      <!-- Product-4 -->
      <div class="product-item">
        <div class="image">
          <img
            src="../../assets/images/Shop/Products/Product-5.jpg"
            alt="Product-Image"
          />
          <!-- Product Image -->
          <div class="options">
            <a href="../../pages/Shop/Wishlist.html" class="icon"
              ><i class="far fa-heart"></i></a
            ><!-- Add to Wishlist Button -->
            <a href="../../pages/Shop/Cart.html" class="icon"
              ><i class="fa-solid fa-cart-shopping"></i></a
            ><!-- Add to Cart Button -->
            <a href="../../pages/Shop/Product-Single.html" class="icon"
              ><i class="fa-solid fa-magnifying-glass"></i></a
            ><!-- Product Detail Page Button -->
          </div>
        </div>
        <div class="content">
          <div class="rating">
            <!-- Product Rating -->
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </div>
          <a href="../../pages/Shop/Product-Single.html"><h3>Sneakers</h3></a>
          <!-- Product Title -->
          <div class="price">$40.00 <span>$50.00</span></div>
          <!-- Product Price -->
        </div>
      </div>
    </div>
  </div>
  <!-- ========== Related Products Area (End) ========== -->
</section>
<!-- ==================== Product Single Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />

<!-- ==================== Footer Area (End) ==================== -->
