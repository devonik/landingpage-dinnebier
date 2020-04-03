var navigationSwiper = new Swiper ('.swiper-container.navigation__swiper', {
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

var highlightsSwiper = new Swiper ('.swiper-container.highlights__swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 25,
  centeredSlides: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    900: {
      slidesPerView: 2,
    }
  }
})
