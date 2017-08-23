$(document).ready(function() {
  var $indexSection = $('.index-section');
  var screenWidth, screenHeight;

  function adjust_screen() {
    screenWidth = $(window).width();
    screenHeight = $(window).height();
    var docHeight = $(document).height();
    console.log(screenHeight + " " + docHeight);
    $indexSection.css('background-size', screenWidth);
    $indexSection.css('height', screenWidth * 720 / 1080);
  }

  (function init() {
    adjust_screen();
    $(window).resize(adjust_screen);
  })();
});
