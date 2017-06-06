jQuery(document).ready(function() {

	/* Lightnav  */

	$('#myNav').lightnav();

	/* Sticky nav */
	$('.js-section-story').waypoint(function(direction) {
		if (direction == "down") {
			$('.no-scroll').addClass('scroll');
			$('.scroll').removeClass('no-scroll');
        } else {
			$('.scroll').addClass('no-scroll');
			$('.no-scroll').removeClass('scroll');
		}
	})

	/* Scroll on buttons */
	$('.js-scroll-to-story').click(function () {
		$('html, body').animate({scrollTop: $('.js-section-story').offset().top}, 1000);
	});

	$('.js-scroll-to-projects').click(function (){
		$('html, body').animate({scrollTop: $('.js-section-projects').offset().top},1000);
	});

	$('.js-scroll-to-contact').click(function (){
		$('html, body').animate({scrollTop: $('.js-section-contact').offset().top},1000);
	});

	$('.js-scroll-to-head').click(function (){
		$('html, body').animate({scrollTop: $('.js-section-head').offset().top},1000);
	});

	 /* Animations on scroll */
	 $('.js-wp-1').waypoint(function(direction) {
	 	$('.js-wp-1').addClass('animated fadeInLeft');
	 }, {
 		offset: '60%'
 	});
	 $('.js-wp-2').waypoint(function(direction) {
	 	$('.js-wp-2').addClass('animated fadeInRight');
	 }, {
 		offset: '60%'
 	});
	 $('.js-wp-3').waypoint(function(direction) {
	 	$('.js-wp-3').addClass('animated fadeInLeft');
	}, {
		offset: '60%'
	});

	/* Form format */
	 $("#phone").mask("(999) 999-9999");

});
