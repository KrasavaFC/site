/*--------------- Award Slider ---------------*/ 
var swiper = new Swiper(".award-slider", {

    spaceBetween: 20,
    loop:true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false, 
    },

    pagination: {
        el: ".swiper-pagination7",
        clickable:true,
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
  