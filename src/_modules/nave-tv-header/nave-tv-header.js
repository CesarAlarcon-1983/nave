'use strict';

// Constructor
var NaveTvHeader = function() {
  var header = $('.nave-tv-header');
  var body = $('body');
  var menuOpen = $('.nave-tv-header__hamburguer');

  menuOpen.on('click', function() {
    header.toggleClass('-open');
    body.toggleClass('-hideOverflow');
  });

  $(window).on('scroll', function() {
    if(window.scrollY > 0) {
      header.addClass('-scrolled');
    } else {
      header.removeClass('-scrolled');
    }
  })
};

module.exports = NaveTvHeader;
