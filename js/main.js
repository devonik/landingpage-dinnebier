var highlightsSelect = $('.highlights .select');
var highlightsContent = $('.highlights__content');

highlightsContent.hide();
highlightsSelect.change(function(){
    var value = $('.highlights .select option:selected').val();
    var theDiv = $('.highlights__content--' + value);

    theDiv.show();
    theDiv.siblings(highlightsContent).hide();
});