var highlightsSelect = $('.highlights .select');
var highlightsContent = $('.highlights__content');
var highlightsContentDetails = $('.highlights__content--details');

// Mobile select
if (parseInt($(window).width()) < 900) {
  highlightsContent.hide();
  highlightsContentDetails.show();
  highlightsSelect.change(function() {
      var value = $('.highlights .select option:selected').val();
      var content = $('.highlights__content--' + value);

      content.show();
      content.siblings(highlightsContent).hide();
  });
} else {
  // Desktop select
  highlightsContent.hide();
  highlightsContentDetails.show();
  $('.highlights__select--desktop div').click(function() {
    var toggleIdSelect = $(this).data('select');
    highlightsContent.hide();
    $('.highlights__content--' + toggleIdSelect).toggle();
    $('.highlights__select--desktop div').removeClass('is-active');
    $(this).toggleClass('is-active');
  });
}