$(document).ready(function() {
  var $indexSection = $('.index-section');
  var screenWidth = $(window).width(), screenHeight = $(window).height();
  var scrollX = window.scrollX, scrollY = window.scrollY;

  function adjustIndexSection() {
    $indexSection.css('background-size', screenWidth);
    $indexSection.css('height', screenWidth * 720 / 1080);
  }

  function fixIndexSection() {
    var sectionHeight = $indexSection.height();

    if (scrollY <= sectionHeight) {
      $indexSection.css('background-position-y', scrollY);
    }
  }

  function onResizeWindow() {
    screenWidth = $(window).width();
    screenHeight = $(window).height();

    adjustIndexSection();
  }

  function onScrollWindow() {
    scrollX = window.scrollX;
    scrollY = window.scrollY;

    fixIndexSection();
  }

  (function init() {
    adjustIndexSection();
    $(window).on('resize', onResizeWindow);
    $(window).on('scroll', onScrollWindow);
  })();
});
