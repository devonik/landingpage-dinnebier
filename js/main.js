const select = document.querySelector('.select__option--highlights');
const content = document.querySelector('.highlights__content--highlights');

select.onclick = function() {
  content.classList.toggle('active');
}