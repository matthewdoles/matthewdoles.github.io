window.onload = function() {

  window.onscroll = function() {
    if ($(this).scrollTop() > 1) {
      $('.container').addClass('active');
    } else {
      $('.container').removeClass('active');
    }
  }

}