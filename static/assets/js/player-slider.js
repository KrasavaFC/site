/*--------------- Player Slider ---------------*/ 
var swiper = new Swiper(".player-slider", {

    spaceBetween: 10, // Space between slides
    loop:true, // Enable looping of slides
  
    autoplay: {
      delay: 5000, // Delay between slide transitions
      disableOnInteraction: false, // Allow autoplay on user interaction
    },
   
    // Pagination settings
    pagination: {
      el: ".swiper-pagination4", // Pagination element
      clickable: true, // Enable clickable pagination bullets
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  
  }); 
  