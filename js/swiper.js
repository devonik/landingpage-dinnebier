var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  loop: true,
  slidesPerView: 5,
  spaceBetween: 50,
  centeredSlides: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
})