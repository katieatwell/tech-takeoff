//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require popper
//= require jquery3
//= require bootstrap
//= require_tree .
//= require jquery.slick
//= require jquery.easing
$(document).ready(function() {

  $('.tt-team-slide').each(function(i) {
    $('.section-dots').append("<div class='dot'></div>");
  })

  $('.dot').each(function(i) {
    $(this).attr('data-dot', i);
    if (i == 0) {
      $(this).addClass('active');
    }
  })
  var fire = 0;
  $(window).on('scroll', function() {
    if (fire == 0) {
      if ($(window).scrollTop() >= $('#why').offset().top - 200) {
        fire += 1;
        $('.product-desc-production').addClass('active').animate({"height": "100%", "margin-top": "0%"}, 1000);
        setTimeout(function() {
          $('#production').addClass('active');
        }, 1200);
      }
    }
    if ($(window).width() > 991) {
      if ($(window).scrollTop() >= $('#who').offset().top - 200) {
        $('.type').addClass('typewriter');
      }
    }
  })

  $(document).on('click', '.tt-product', function(e) {
    $('div[class^="tt-product"]').removeClass('active');
    $(this).toggleClass('active');
    var element = this.getAttribute('data-product');
    $('.desc-container').removeClass('active');
    $('.' + element).addClass('active');
    $('p[class*="product-desc-"]').removeClass('active').addClass('active');
    $('.product-desc-' + element).removeClass('inactive').addClass('active').animate({"height": "100%", "margin-top": "0%"}, 1000);
  })

  $('#career').on('mouseenter', function(e) {
    $('.career-opp').css({'transform': 'translateY(-40px)'});
    $('.show-message').css({'bottom': '-1px'});
  })
  $('#career').on('mouseleave', function(e) {
    $('.career-opp').css({'transform': 'translateY(0px)'});
    $('.show-message').css({'bottom': '-40px'});
  })

  var index = 1;
  $('.arrow-right, .dot').on('click', function(e) {
    $('.tt-team-slide').each(function(i, el) {
      $(el).removeClass('active');
      if (index == i) {
        $(this).addClass('active');
      }
    })
    $('.dot').each(function(i, el) {
      if ($(this).attr('data-dot') == (index)) {
        $('.dot').toggleClass('active');
      }
    })
    index ++;
    if (index > $('.tt-team-slide').length - 1) {
      index = 0;
    }
  })

  $('div[data-ride="slick"]').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 2500,
    autoplay: true,
    speed: 1000,
    pauseOnHover: false,
    fade: true,
    cssEase: 'linear'
  });
  (function($) {
    "use strict";
    $('.scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 84)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
    $('.scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
    $('body').scrollspy({
      target: '#mainNav',
      offset: 104
    });

  })(jQuery);
  $('.screenshots').slick({
    centerTrue: false,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          centerTrue: true,
          slidesToShow: 2,
          centerPadding: '20px'
        }
      },
      {
        breakpoint: 786,
        settings: {
          centerTrue: true,
          slidesToShow: 1,
          centerPadding: '20px'
        }
      }
    ]
  });
})

