var content=document.querySelector(".highlights__content"),selectHighlights=document.querySelector(".select__option--highlights"),contentHighlights=document.querySelector(".highlights__content--highlights"),selectEmission=document.querySelector(".select__option--emission"),contentEmission=document.querySelector(".highlights__content--emission"),selectLeasing=document.querySelector(".select__option--leasing"),contentLeasing=document.querySelector(".highlights__content--leasing");selectHighlights.onclick=function(){content.classList.remove("active"),contentHighlights.classList.toggle("active")},selectEmission.onclick=function(){content.classList.remove("active"),contentEmission.classList.toggle("active")},selectLeasing.onclick=function(){content.classList.remove("active"),contentLeasing.classList.toggle("active")};var navigationSwiper=new Swiper(".swiper-container.navigation__swiper",{loop:!0,slidesPerView:2,spaceBetween:25,centeredSlides:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{900:{slidesPerView:5,spaceBetween:50}}}),highlightsSwiper=new Swiper(".swiper-container.highlights__swiper",{loop:!0,slidesPerView:1,spaceBetween:25,centeredSlides:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{900:{slidesPerView:2}}});