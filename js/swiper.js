var mySwiper = new Swiper ('.swiper-container', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 25,
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    900: {
      slidesPerView: 5,
      spaceBetween: 50,
    }
  }
})