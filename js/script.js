jQuery(document).ready(function() {

	/* Lightnav     $('#myNav').lightnav();*/



	/* Sticky nav */
	$('.js-section-story').waypoint(function(direction) {
		if (direction == "down") {
			$('.sticky-nav').addClass('sticky');
			$('.sticky').removeClass('sticky-nav');
        } else {
			$('.sticky').addClass('sticky-nav');
			$('.sticky-nav').removeClass('sticky');
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
 		offset: '25%'
 	});
	 $('.js-wp-2').waypoint(function(direction) {
	 	$('.js-wp-2').addClass('animated fadeInRight');
	 }, {
 		offset: '-25%'
 	});
	 $('.js-wp-3').waypoint(function(direction) {
	 	$('.js-wp-3').addClass('animated fadeInLeft');
	}, {
		offset: '-75%'
	});

	/* Form format */
	 $("#phone").mask("(999) 999-9999");
});
