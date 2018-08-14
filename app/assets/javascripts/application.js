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

$(document).ready(function() {
	var heroSlider = function() {
		var currentSlide = 0;
		var count = $('.carousel-item').length;

		$('.carousel-item').hide();
		$('.carousel-item').eq(0).show();

		setInterval(function() {    
	    $('.carousel-item').eq(currentSlide).fadeOut(function () {
	      $(this).removeClass('active');
	      currentSlide = (currentSlide + 1) % count;
	      $('.carousel-item').eq(currentSlide).addClass('active').fadeIn();
	    })
		}, 5000)
	}
	heroSlider();
})
