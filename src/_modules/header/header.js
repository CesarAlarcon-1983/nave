'use strict';

// Constructor
var Header = function() {
  var header = $('.header');
  var body = $('body');
  var menuOpen = $('.header__hamburguer');
  var player = $('.player');
  var openPlayer = $('.-js-player');
  var closePlayer = $('.player__close-button');
  var playerIframe = $('.-js-iframe');
  var playerOverlay = $('.player__overlay');
  var contentWrapper = $('.tacto__content__wrapper');
  var tactoHash = window.location.hash;
  var targets = $('[data-target]');
  var contents = $('[data-content]');
  var artistasTarget = targets.filter(function() {
    return $(this).data('target') == 'artistas';
  })
  var artistasContent = contents.filter(function() {
    return $(this).data('content') == 'artistas';
  })
  var coproductoresTarget = targets.filter(function() {
    return $(this).data('target') == 'coproductores';
  })
  var coproductoresContent = contents.filter(function() {
    return $(this).data('content') == 'coproductores';
  })

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


  openPlayer.on('click', function() {
    var videoUrl = $(this).data('src');
    var embedUrl = false;
    var videoId;
    var errorMessage = ('.player__error-message');

    if(videoUrl.includes('youtube')) {
      var url = new URL(videoUrl);
      videoId = url.searchParams.get('v');      
      embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&&showinfo=0&controls=0&autoplay=1`;
    }

    if(videoUrl.includes('vimeo')) {
      var url = new URL(videoUrl);
      videoId = url.pathname;      
      embedUrl = `https://player.vimeo.com/video${videoId}?autoplay=1&controls=0`;
    }

    player.addClass('-visible');
    body.addClass('-hideOverflow');
    
    if(!embedUrl) {
      $(errorMessage).addClass('-visible');
      return;
    }

    $(playerIframe).attr('src', `${embedUrl}`)
  })

  closePlayer.add(playerOverlay).on('click', function() {
    player.removeClass('-visible');
    body.removeClass('-hideOverflow');
    $(playerIframe).removeAttr('src');
  })

  if(!tactoHash) {
    $(targets[0]).addClass('-active');
    $(contents[0]).addClass('-active');
  }

  console.log(tactoHash)
  if(tactoHash == '') {
    contentWrapper.height($(contents[0]).height());
  }
  
  if(tactoHash == '#artistas') {
    console.log(artistasContent.height());
    contentWrapper.height(artistasContent.height());
    header.addClass('-scrolled');
    artistasContent.addClass('-active');
    artistasTarget.addClass('-active');
  }

  if(tactoHash == '#coproductores') {
    contentWrapper.height(coproductoresContent.height());
    header.addClass('-scrolled');
    coproductoresContent.addClass('-active');
    coproductoresTarget.addClass('-active');
  }

  targets.on('click', function() {
    targets.removeClass('-active')
    contents.removeClass('-active')

    var target = $(this).data('target');
    var targettedContent = contents.filter(function() {
      return $(this).data('content') == target;
    })


    $(this).addClass('-active');
    contentWrapper.height(targettedContent.height());

    targettedContent.addClass('-active');

    console.log('target', target)
    console.log('targetted content', targettedContent)

    if(window.innerWidth > 720) {
      $('html, body').animate({
        scrollTop: contentWrapper.offset().top - 270
      })
    } else {
      $('html, body').animate({
        scrollTop: contentWrapper.offset().top - 170
      })
    }
  })

  var arrowNext = $('.-js-arrow-next');
  var arrowPrev = $('.-js-arrow-prev');
  var slider = $('.nave-tv__hero__slider');
  var thumbnails = $('.nave-tv__hero__thumbnails');

  arrowNext.on('click', function() {
    slider.slick('slickNext');
    thumbnails.slick('slickNext');
  })

  arrowPrev.on('click', function() {
    slider.slick('slickPrev');
    thumbnails.slick('slickPrev');
  })

};

module.exports = Header;
