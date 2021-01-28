// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

global.$ = global.jQuery;
//global._ = require('underscore');

var Header = require('../_modules/header/header');
var Slider = require('../_modules/slider/slider');
var NaveTvHeader = require('../_modules/nave-tv-header/nave-tv-header');

$(function() {

    new Header();
    new NaveTvHeader();
    new Slider();
});
