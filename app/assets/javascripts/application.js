// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
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
  $(document).on('click', '.tt-product', function(e) {
    var element = this.getAttribute('data-product');
    var target = $('p[class*="product-desc-"]');
    $('p[class*="product-desc-"]').removeClass('active');
    $('.product-desc-' + element).addClass('active');
  })
  $('div[data-ride="slick"]').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplaySpeed: 1000,
    autoplay: true,
    speed: 1000,
    pauseOnHover: false,
    fade: true,
    cssEase: 'linear'
  });
  (function($) {
    "use strict";
    $('a.scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 104)
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
    centerMode: false,
    slidesToShow: 1,
    dots: true,
  });
})
