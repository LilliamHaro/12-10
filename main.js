$(document).ready(function() {
  if ($(window).width() > 600) {
    setTimeout(function() {
      $(".column-diagonal-container ul li:nth-child(1)").addClass("anim-li-1");
    }, 0);
    setTimeout(function() {
      $(".column-diagonal-container ul li:nth-child(2)").addClass("anim-li-2");
    }, 500);
    setTimeout(function() {
      $(".column-diagonal-container ul li:nth-child(3)").addClass("anim-li-3");
    }, 1200);
    setTimeout(function() {
      $(".column-diagonal-container ul li:nth-child(4)").addClass("anim-li-4");
    }, 1500);
    setTimeout(function() {
      $(".column-diagonal-container ul li:nth-child(5)").addClass("anim-li-5");
    }, 800);
    setTimeout(function() {
      $(".column-diagonal-container ul li:nth-child(6)").addClass("anim-li-6");
    }, 1300);
  }
});
