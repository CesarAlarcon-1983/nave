'use strict';

const { speed } = require("jquery");

// Constructor
var Slider = function() {
    var slider = $('._slider');
    var sliderMulti = $('._slidermulti');
    var thumbnails = $('._thumbnails');

    if(thumbnails) {
        thumbnails.each(function(){
            $(this).slick({
                // fade: true,
                arrows: false,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                initialSlide: 1,
                responsive: [
                    {
                        breakpoint: 900,
                        settings: {
                            centerMode: false,
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                        }
                    }
                ]
            });
        });
    }
    if(slider) {
        slider.each(function(){
            $(this).slick({
                dots: false,
                fade: true,
                arrows:  true,
                autoplay: false,
                infinite: true,
                responsive: [
                    {
                        breakpoint: 900,
                        settings: {
                            centerMode: false,
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: false,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            autoplay: true,
                            speed: 300
                        }
                    }
                ]
            });
        });
    }
    if(sliderMulti) {
        sliderMulti.each(function(){
            $(this).slick({
                dots: false,
                arrows: true,
                infinite: false,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: false,
                centerMode: false,
                responsive: [
                    {
                        breakpoint: 900,
                        settings: {
                            centerMode: true,
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            centerMode: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        });
    }
};

module.exports = Slider;
