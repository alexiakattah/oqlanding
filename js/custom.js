$(document).ready(function () {

	"use strict";

	/*

	 * ----------------------------------------------------------------------------------------

	 *  CHANGE MENU BACKGROUND JS

	 * ----------------------------------------------------------------------------------------

	 */



	let textTitle1 = '<div class="container" style="padding: 0"><p class="fs-3 animate__animated animate__fadeIn animate__slower">Um jeito novo de gerar negócios com relacionamento, reconhecimento, retenção e recomendações on-line.</p></div>';
	let textTitle2 = '<div class="container" style="padding: 0"><p class="fs-3 animate__animated animate__fadeIn animate__slower">Plataforma OQ: a mais completa solução<br> de <span class="italic">social sellers</span>, <span class="italic">real influencers</span>, <span class="italic">referral marketing</span> e <span class="italic">brand lovers</span> do Brasil.</p></div>';

	let textTitle1mobile = '<p style="padding: 0" class="fs-6 animate__animated animate__fadeIn animate__slower">Um jeito novo de gerar negócios com relacionamento, reconhecimento, retenção e recomendações on-line.</p>';
	let textTitle2mobile = '<p style="padding: 0" class="fs-6 animate__animated animate__fadeIn animate__slower">Plataforma OQ: a mais completa solução de social sellers, real influencers, referral marketing e brand lovers do Brasil.</p>';

	if (window.screen.width > 425) {

		$('#banner-title').append(textTitle1);

		setTimeout(() => {
			$('#banner-title').html('');
			$('#banner-title').append(textTitle2);
		}, 4000);
	}else {

		$('#banner-title').append(textTitle1mobile);

		setTimeout(() => {
			$('#banner-title').html('');
			$('#banner-title').append(textTitle2mobile);
		}, 4000);		
	}


	var headertopoption = $(window);

	var headTop = $('.header-top-area');

	headertopoption.on('scroll', function () {

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

			boxClass: 'wow',

			animateClass: 'animated',

			offset: 0,

			mobile: false,

			live: true

		});



		wow.init();

		// WOW JS

		new WOW({

			mobile: false

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

	/*==================================================================

	Telephone Mask

	===================================================================*/
	var options = {
		onKeyPress: function (phone, e, field, options) {
			var masks = ['(00) 0000-00000', '(00) 00000-0000'];
			var mask = (phone.length > 14) ? masks[1] : masks[0];
			$('.phone-input').mask(mask, options);
		}
	};

	$('.phone-input').mask('(00) 0000-00000', options);



});


