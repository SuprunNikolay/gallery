if ($(window).width() >= '1200'){
      $("#gallery").mousewheel(function(event, delta) {
      this.scrollLeft -= (delta * 30);
      event.preventDefault();
      });
};