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
};

module.exports = Header;
