$(document).ready(function() {
	"use strict";
	/*
	 * ----------------------------------------------------------------------------------------
	 *  CHANGE MENU BACKGROUND JS
	 * ----------------------------------------------------------------------------------------
	 */

	var headertopoption = $(window);
	var headTop = $('.header-top-area');
	headertopoption.on('scroll', function() {
		if (headertopoption.scrollTop() > 200) {
			headTop.addClass('menu-bg');
		} else {
			headTop.removeClass('menu-bg');
		}
	});

	


	/*==============================================================
	 wow animation - on scroll
	 ==============================================================*/
	var wowJs = $('.wow');
	if (wowJs.length) {
		var wow = new WOW({
			boxClass : 'wow',
			animateClass : 'animated',
			offset : 0,
			mobile : false,
			live : true
		});

		wow.init();
		// WOW JS
		new WOW({
			mobile : false
		}).init();
	}
	/*==============================================================
	 set parallax
	 ==============================================================*/
	function stellarParallax() {
		if ($(window).width() > 1024) {
			$.stellar();
		} else {
			$.stellar('destroy');
			$('.parallax').css('background-position', '');
		};
	};
	
	
});
