$(document).ready(function() {
  var $indexSection = $('#index-section');
  var $indexTitle = $('#index-title');
  var screenWidth = $(window).width(), screenHeight = $(window).height();
  var scrollX = window.scrollX, scrollY = window.scrollY;
  var indexFadedOut = false;
  //var indexBgHeight = screenWidth * 720 / 1080;

  function parallaxIndexBg() {
    var max = 50;
    var shift = parseInt(scrollY * 100/ $indexSection.height());
    if (shift <= max) {
      $indexSection.css('background-position-y', (50-shift) + '%');
    }
  }
  function parallaxIndex() {
    parallaxIndexBg();
  }

  function onResizeWindow() {
    screenWidth = $(window).width();
    screenHeight = $(window).height();
  }

  function onScrollWindow() {
    scrollX = window.pageXOffset;
    scrollY = window.pageYOffset;

    parallaxIndex();
  }

  (function init() {
    $(window).on('resize', onResizeWindow);
    $(window).on('scroll', onScrollWindow);
  })();
});
