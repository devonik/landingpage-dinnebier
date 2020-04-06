var highlightsSelect = $('.highlights .select');
var highlightsContent = $('.highlights__content');
var highlightsContentDetails = $('.highlights__content--details');

highlightsContent.hide();
highlightsContentDetails.show();
highlightsSelect.change(function(){
    var value = $('.highlights .select option:selected').val();
    var content = $('.highlights__content--' + value);

    content.show();
    content.siblings(highlightsContent).hide();
});