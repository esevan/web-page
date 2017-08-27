$(document).ready(function() {
  var $indexSection = $('#index-section');
  var $galaryIndex = $('#galary-index');
  var screenWidth = $(window).width(), screenHeight = $(window).height();
  var scrollX = window.scrollX, scrollY = window.scrollY;
  var indexFadedOut = false;
  var statics = {};
  //var indexBgHeight = screenWidth * 720 / 1080;

  function parallaxGalaryBg() {
    var max = 100;
    // Start: scrollY == (top - screenHeight) : 0
    // Done: scrollY == top : 100
    // scrollY - top == 0
    // scrollY - top == screenHeight
    var shift = parseInt((statics.galaryIndexTop - scrollY) * 100/ screenHeight);
    if (shift <= max) {
      $galaryIndex.css('background-position-y', (100-shift) + '%');
    }
  }
  function parallaxGalary() {
    if (scrollY > statics.galaryIndexTop - screenHeight &&
      scrollY < statics.galaryIndexTop)
      parallaxGalaryBg();
  }

  function parallaxIndexBg() {
    var max = 50;
    var shift = parseInt(scrollY * 100/ statics.indexSectionHeight);
    if (shift <= max) {
      $indexSection.css('background-position-y', (50-shift) + '%');
    }
  }
  function parallaxIndex() {
    if (scrollY < statics.indexSectionBottom);
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
    parallaxGalary();
  }

  function initStatics() {
    /* Index section statics */
    statics.indexSectionTop = $indexSection.offset().top;
    statics.indexSectionHeight = $indexSection.height();
    statics.indexSectionBottom = statics.indexSectionTop + statics.indexSectionHeight;

    /* Galary section statics */
    statics.galaryIndexTop = $galaryIndex.offset().top;
    statics.galaryIndexHeight = $galaryIndex.height();
    statics.galaryIndexBottom = statics.galaryIndexTop + statics.galaryIndexHeight;
  }

  (function init() {
    initStatics();
    $(window).on('resize', onResizeWindow);
    $(window).on('scroll', onScrollWindow);
  })();
});
