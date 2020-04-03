var content = document.querySelector('.highlights__content');

var selectHighlights = document.querySelector('.select__option--highlights');
var contentHighlights = document.querySelector('.highlights__content--highlights');

var selectEmission = document.querySelector('.select__option--emission');
var contentEmission = document.querySelector('.highlights__content--emission');

var selectLeasing = document.querySelector('.select__option--leasing');
var contentLeasing = document.querySelector('.highlights__content--leasing');

selectHighlights.onclick = function() {
  console.log('click' + selectHighlights);
  content.classList.remove('active')
  contentHighlights.classList.toggle('active');
}

selectEmission.onclick = function() {
  console.log('click' + selectEmission);
  content.classList.remove('active')
  contentEmission.classList.toggle('active');
}

selectLeasing.onclick = function() {
  console.log('click' + selectLeasing);
  content.classList.remove('active')
  contentLeasing.classList.toggle('active');
}