<script lang="ts">
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
    <h2>Contact</h2>
  </div>

  <div class="link">
    <a href="../../index.html">Home</a>
    <i class="fa-solid fa-angles-right"></i>
    <span class="page">Contact</span>
  </div>
</div>
<!-- ==================== Page-Title (End) ==================== -->

<!-- ==================== Contact Area (Start) ==================== -->
<section class="contact" id="contact">
  <!-- ========== Contact Info (Start) ========== -->
  <div class="contact-info">
    <!-- Address Info -->
    <div class="info-item">
      <i class="fa-solid fa-map-location-dot"></i>
      <div class="content">
        <h3>address</h3>
        <p>karachi, pakistan</p>
      </div>
    </div>

    <!-- Phone Info -->
    <div class="info-item">
      <i class="fas fa-phone"></i>
      <div class="content">
        <h3>call us</h3>
        <p>+123-456-789</p>
        <p>+111-222-333</p>
      </div>
    </div>

    <!-- Email Info -->
    <div class="info-item">
      <i class="fas fa-envelope"></i>
      <div class="content">
        <h3>mail us</h3>
        <p class="gmail">abc@gmail.com</p>
        <p class="gmail">xyz@gmail.com</p>
      </div>
    </div>
  </div>
  <!-- ========== Contact Info (End) ========== -->

  <div class="box-container">
    <!-- ========== Google Map (Start) ========== -->
    <!-- <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d924234.6303368191!2d66.59494515823903!3d25.193389461148573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33e06651d4bbf%3A0x9cf92f44555a0c23!2sKarachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1645287442276!5m2!1sen!2s"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
    ></iframe> -->
    <!-- ========== Google Map (End) ========== -->

    <!-- ========== Contact Form (Start) ========== -->
    <div class="contact-container">
      <form method="post" class="contact-form" id="contact-form">
        <!-- Form Heading -->
        <div class="heading">
          <h2>get in touch</h2>
        </div>

        <!-- Name and Email Input -->
        <input
          type="text"
          name="name"
          class="box"
          id="name"
          placeholder="name"
          required
        />
        <input
          type="email"
          name="email"
          class="box"
          id="email"
          placeholder="email"
          required
        />

        <!-- Subject Input -->
        <input
          type="text"
          name="subject"
          class="box"
          id="subject"
          placeholder="subject"
          required
        />

        <!-- Comment/Message Textarea -->
        <textarea
          cols="30"
          rows="10"
          name="comment"
          class="box"
          id="comment"
          placeholder="message"
          required
        ></textarea>

        <!-- Submit Button -->
        <button type="submit" class="btn" name="submit" id="submit"
          >submit</button
        >

        <!-- Alert Message -->
        <span class="alert" id="msg"></span>
      </form>
    </div>
    <!-- ========== Contact Form (End) ========== -->
  </div>
</section>
<!-- ==================== Contact Area (End) ==================== -->

<!-- ==================== Footer Area (Start) ==================== -->
<Footer />
<!-- ==================== Footer Area (End) ==================== -->

<!-- ==================== Custom Script ==================== -->

<!-- Contact-Form Script -->
<!-- <script>
    jQuery('#contact-form').on('submit',function(e){
      jQuery('#contact-form #msg').html('');
      jQuery('#contact-form #submit').html('Please wait');
      jQuery('#contact-form #submit').attr('disabled',true);
      jQuery.ajax({
        url:'../../assets/php/submit.php',
        type:'post',
        data:jQuery('#contact-form').serialize(),
        success:function(result){
          jQuery('#contact-form #msg').html(result);
          jQuery('#contact-form #submit').html('send message');
          jQuery('#contact-form #submit').attr('disabled',false);
          jQuery('#contact-form')[0].reset();
        }
      });
      e.preventDefault();
    });
  </script> -->
