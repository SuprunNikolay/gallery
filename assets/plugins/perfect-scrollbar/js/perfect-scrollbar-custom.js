function changeSize() {
$(".gallery-container").width(width).height(height);

    Ps.update(document.getElementById('gallery'));
}

$(function() {
    Ps.initialize(document.getElementById('gallery'));
    $('.gallery-container').css('height', function(){
        return $('#gallery').css('height');
        
    });
    // $('.gallery-container').css('width', function(){
    //   return $('section').css('width');
    // });
    // console.log($('.gallery-container').css('width'));
    // console.log($('section').css('width'));

});