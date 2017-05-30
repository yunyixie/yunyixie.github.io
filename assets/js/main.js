$(document).ready(function() {


  /* navi title */


  $('.navi__p').mouseenter(function() {
    $('.pt').addClass('showme');
  });

  $('.navi__p').mouseleave(function() {
      $('.pt').removeClass('showme');
    });

    $('.navi__n').mouseenter(function() {
      $('.nt').addClass('showme');
    });

  $('.navi__n').mouseleave(function() {
      $('.nt').removeClass('showme');
    });

    /*game modes*/

    $('.switch1').click(function() {
      $('.content').addClass('normal');
    });




































  $('.box').addClass('red');

});
