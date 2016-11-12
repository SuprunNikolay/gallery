$( document ).ready(function() {
  $('#gallery').isotope({
    itemSelector : '.content',
    layoutMode: 'masonry',
    masonry: {
	  columnWidth: 1,
    }
  });
});