$(document).ready(function() {
  /* navi title */

  $(".navi__p").mouseenter(function() {
    $(".pt").addClass("showme");
  });

  $(".navi__p").mouseleave(function() {
    $(".pt").removeClass("showme");
  });

  $(".navi__n").mouseenter(function() {
    $(".nt").addClass("showme");
  });

  $(".navi__n").mouseleave(function() {
    $(".nt").removeClass("showme");
  });

  /*game modes*/
  /*body*/
  $(".switch1").click(function() {
    $("body").removeClass("hard");
    $("body").removeClass("hell");
    $("body").addClass("normal");
  });

  $(".switch2").click(function() {
    $("body").removeClass("normal");
    $("body").removeClass("hell");
    $("body").addClass("hard");
  });

  $(".switch3").click(function() {
    $("body").removeClass("normal");
    $("body").removeClass("hard");
    $("body").addClass("hell");
  });

  /*content*/
  $(".switch1").click(function() {
    $(".content").removeClass("hard");
    $(".content").removeClass("hell");
    $(".content").addClass("normal");
  });

  $(".switch2").click(function() {
    $(".content").removeClass("normal");
    $(".content").removeClass("hell");
    $(".content").addClass("hard");
  });

  $(".switch3").click(function() {
    $(".content").removeClass("normal");
    $(".content").removeClass("hard");
    $(".content").addClass("hell");
  });

/*fade*/

  $(function() {
    $('body').removeClass('fade-out');
});

});
