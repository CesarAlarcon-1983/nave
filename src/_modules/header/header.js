'use strict';

// Constructor
var Header = function() {
  var header = $('.header');
  var body = $('body');
  var menuOpen = $('.header__hamburguer');

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

module.exports = Header;
