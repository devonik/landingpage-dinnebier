var show = function(elem) {
  elem.classList.add('is-active');
}

var hide = function(elem) {
  elem.classList.remove('is-active');
}

var toggle = function(elem) {
  elem.classList.toggle('is-active');
}

// Listen for click events
document.addEventListener('click', function(event) {
  // Make sure clicked element is our toggle
  if (!event.target.classList.contains('toggle')) return;

  // Get the content
  var content = document.querySelector(event.dataset.option);
  if (!content) return;

  // Toggle the content
  toggle(content);
}, false);
