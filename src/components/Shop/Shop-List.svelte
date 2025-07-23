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
    <h2>Shop List</h2>
  </div>

  <div class="link">
    <a href="../../index.html">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Shop List</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Shop-List Area (Start) ==================== -->
<section class="shop">
  <!-- ========== Shop Sidebar Area (Start) ========== -->
  <div class="sidebar">
    <!-- ===== Category Area (Start) ===== -->
    <div class="category sidebar-item">
      <!-- Sidebar Heading: Categories -->
      <div class="sidebar-heading">
        <h2>categories</h2>
      </div>

      <!-- Shop Categories -->
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
    <!-- ===== Category Area (End) ===== -->

    <!-- ===== Filter Products (Start) ===== -->
    <div class="filter sidebar-item">
      <!-- Sidebar Heading: Filter Products -->
      <div class="sidebar-heading">
        <h2>Product Filter</h2>
      </div>

      <div class="box-container">
        <!-- Slider -->
        <div class="slider">
          <div class="progress"></div>
        </div>
        <!-- Range Input -->
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
        <!-- Price Wrap -->
        <div class="price-wrap">
          <!-- Price Input -->
          <div class="price-input">
            <!-- Minimum Price Field -->
            <div class="field">
              <span>$</span>
              <input type="number" class="input-min" value="250" />
            </div>
            <!-- Separator -->
            <div class="separator">-</div>
            <!-- Maximum Price Field -->
            <div class="field">
              <span>$</span>
              <input type="number" class="input-max" value="750" />
            </div>
          </div>
          <!-- Filter Button -->
          <span class="btn">FILTER</span>
        </div>
      </div>
    </div>
    <!-- ===== Filter Products (End) ===== -->

    <!-- ===== Popular Products Area (Start) ===== -->
    <div class="popular-products sidebar-item">
      <!-- Sidebar Heading: Popular Products -->
      <div class="sidebar-heading">
        <h2>popular products</h2>
      </div>

      <!-- Popular Products -->
      <div class="box-container">
        <!-- Popular Product 1 -->
        <div class="post-item">
          <img
            src="../../assets/images/Shop/Products/Product-1.jpg"
            alt="Popular-Product-Image"
          />
          <!-- Product Image -->
          <div class="content">
            <a href="../../pages/Shop/Product-Single.html">Football</a>
            <!-- Product Title -->
            <div class="price">
              <p>$40.00 <span>$50.00</span></p>
              <!-- Product Price -->
            </div>
          </div>
        </div>

        <!-- Popular Product 2 -->
        <div class="post-item">
          <img
            src="../../assets/images/Shop/Products/Product-3.jpg"
            alt="Popular-Product-Image"
          />
          <!-- Product Image -->
          <div class="content">
            <a href="../../pages/Shop/Product-Single.html">Hoodie</a>
            <!-- Product Title -->
            <div class="price">
              <p>$40.00 <span>$50.00</span></p>
              <!-- Product Price -->
            </div>
          </div>
        </div>

        <!-- Popular Product 3 -->
        <div class="post-item">
          <img
            src="../../assets/images/Shop/Products/Product-5.jpg"
            alt="Popular-Product-Image"
          />
          <!-- Product Image -->
          <div class="content">
            <a href="../../pages/Shop/Product-Single.html">Sneakers</a>
            <!-- Product Title -->
            <div class="price">
              <p>$40.00 <span>$50.00</span></p>
              <!-- Product Price -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- ===== Popular Products Area (End) ===== -->
  </div>
  <!-- ========== Shop Sidebar Area (End) ========== -->

  <!-- ========== Shop Container (Start) ========== -->
  <div class="shop-container">
    <!-- ===== Shop Header (Start) ===== -->
    <div class="intro">
      <!-- Showing Products Count -->
      <div class="showing">showing 4 of 30 products</div>

      <!-- Display Styles -->
      <div class="styles">
        <a href="../../pages/Shop/Shop-Grid.html" class="fas fa-th"></a>
        <a href="../../pages/Shop/Shop-List.html" class="fas fa-list"></a>
      </div>

      <!-- Sorting Type -->
      <div class="sorting-type">
        <!-- Sorting Label -->
        <label for="sort">sort by:</label>

        <!-- Sorting Options -->
        <select name="sort" id="sort">
          <option value="default">default</option>
          <option value="name, A to Z">name, A to Z</option>
          <option value="mname, Z to A">name, Z to A</option>
          <option value="price, low to high">price, low to high</option>
          <option value="price, high to low">price, high to low</option>
        </select>
      </div>
    </div>
    <!-- ===== Shop Header (End) ===== -->

    <!-- ===== Products (Start) ===== -->
    <div class="product-container list">
      <!-- Product-1 -->
      <div class="product-item">
        <div class="image">
          <img
            src="../../assets/images/Shop/Products/Product-1.jpg"
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
          <a href="../../pages/Shop/Product-Single.html"><h3>football</h3></a>
          <!-- Product Title -->
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            fugit inventore numquam error odit dolorum veniam recusandae
            doloribus dolor et minus sed hic distinctio, tenetur, voluptatem
            quia excepturi maxime repellat!
          </p>
          <!-- Product Description -->
          <div class="price">$40.00 <span>$50.00</span></div>
          <!-- Product Price -->
        </div>
      </div>

      <!-- Product-2 -->
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
          <a href="../../pages/Shop/Product-Single.html"><h3>home jersey</h3></a
          >
          <!-- Product Title -->
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            fugit inventore numquam error odit dolorum veniam recusandae
            doloribus dolor et minus sed hic distinctio, tenetur, voluptatem
            quia excepturi maxime repellat!
          </p>
          <!-- Product Description -->
          <div class="price">$40.00 <span>$50.00</span></div>
          <!-- Product Price -->
        </div>
      </div>

      <!-- Product-3 -->
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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            fugit inventore numquam error odit dolorum veniam recusandae
            doloribus dolor et minus sed hic distinctio, tenetur, voluptatem
            quia excepturi maxime repellat!
          </p>
          <!-- Product Description -->
          <div class="price">$40.00 <span>$50.00</span></div>
          <!-- Product Price -->
        </div>
      </div>

      <!-- Product-4 -->
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
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            fugit inventore numquam error odit dolorum veniam recusandae
            doloribus dolor et minus sed hic distinctio, tenetur, voluptatem
            quia excepturi maxime repellat!
          </p>
          <!-- Product Description -->
          <div class="price">$40.00 <span>$50.00</span></div>
          <!-- Product Price -->
        </div>
      </div>
    </div>
    <!-- ===== Products (End) ===== -->

    <!-- ===== Pagination (Start) ===== -->
    <div class="pages-no">
      <div class="container">
        <!-- Previous Page Button -->
        <div class="item">
          <i class="fas fa-arrow-left"></i>
        </div>
        <!-- Page Numbers -->
        <div class="numbers">
          <div class="item active">1</div>
          <div class="item">2</div>
          <div class="item">3</div>
        </div>
        <!-- Next Page Button -->
        <div class="item">
          <i class="fas fa-arrow-right"></i>
        </div>
      </div>
    </div>
    <!-- ===== Pagination (End) ===== -->
  </div>
  <!-- ========== Shop Container (End) ========== -->
</section>
<!-- ==================== Shop-List Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />

<!-- ==================== Footer Area (End) ==================== -->
