$(document).ready(function() {
  var $indexSection = $('.index-section');
  var $indexTitle = $('.index-title');
  var $contentsWrapper = $('.contents-wrapper');
  var screenWidth = $(window).width(), screenHeight = $(window).height();
  var scrollX = window.scrollX, scrollY = window.scrollY;
  var indexFadedOut = false;

  function adjustIndexSection() {
    $indexSection.css('background-size', screenWidth);
    $indexSection.css('height', screenWidth * 720 / 1080);
    $indexSection.css('width', screenWidth);
    $contentsWrapper.css('margin-top', $indexSection.height());
  }

  function fadeOutTitle() {
    if (indexFadedOut && scrollY < ($indexSection.height() - $indexTitle.height())) {
      indexFadedOut = false;
      $indexTitle.fadeIn('fast', function() { $indexTitle.show(); });
    } else if (scrollY > $indexSection.height() - $indexTitle.height()){
      indexFadedOut = true;
      $indexTitle.fadeOut('fast', function() { $indexTitle.hide(); });
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

    fadeOutTitle();
  }

  (function init() {
    adjustIndexSection();
    $(window).on('resize', onResizeWindow);
    $(window).on('scroll', onScrollWindow);
  })();
});
