
(function($) {

	/* #Main slide <--- only slide and zoom full screen
================================================== */
	$('.sd__mainheader').on('init', function(event, slick) {
			$('.sd__mainheader').find('.slick-current').removeClass('slick-active').addClass('reset-animation');
			setTimeout( function() {
				$('.sd__mainheader').find('.slick-current').removeClass('reset-animation').addClass('slick-active');
			}, 1);
	});

	$('.sd__mainbanner').slick({
		fade: true,
		autoplay: true,
		infinite: true,
		speed: 1300,
		autoplaySpeed: 8000,
		pauseOnHover: false,
		adaptiveHeight: true,
		sliding: true,
		dots: true,
		arrows: false,
	});


	$('.sd__facilities, .sd__offer').slick({
		infinite: true,
	  slidesToShow: 3,
	  slidesToScroll: 3,
		dots: false,
		arrows: true,
		responsive: [
	    {
		      breakpoint: 801,
		      settings: {
						slidesToShow: 2,
					  slidesToScroll: 2,
		      }
    	},
			{
		      breakpoint: 601,
		      settings: {
						slidesToShow: 1,
					  slidesToScroll: 1,
		      }
    	},
			{
		      breakpoint: 481,
		      settings: {
						slidesToShow: 1,
					  slidesToScroll: 1,
						dots: true,
						arrows: false,
		      }
    	},
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  	]
	});



	/* #Accom home slide
	================================================== */
	$('._sd_accomhome').on('init', function(event, slick) {
		addAnimation('.box');
	});
	$('._sd_accomhome').slick({
		fade: true,
		autoplay: true,
		infinite: true,
		speed: 500,
		autoplaySpeed: 8000,
		pauseOnHover: false,
		adaptiveHeight: true,
		sliding: true,
		dots: true,
		arrows: false,
		}).on('beforeChange', function(event, slick, currentSlide, nextSlide){
				removeAnimation('.box');
				//console.log('before change');
			})
			.on('afterChange', function(event, slick, currentSlide, nextSlide){
				//console.log('after change : '+currentSlide);
				addAnimation('.box[data-panel="page_'+currentSlide+'"]');

			});

		/* #Accom home slide
	================================================== */
	// $('.sd__roomtype').on('init', function(event, slick) {
	// 		$('.sd__roomtype').find('.slick-current').removeClass('slick-active').addClass('reset-animation');
	// 		setTimeout( function() {
	// 			$('.sd__roomtype').find('.slick-current').removeClass('reset-animation').addClass('slick-active');
	// 		}, 1);
	// });
	$('.sd__roomtype').slick({
		fade: true,
		autoplay: true,
		pauseOnHover: false,
		adaptiveHeight: true,
		sliding: true,
		dots: false,
		arrows: true,
		responsive: [
	    {
		      breakpoint: 481,
		      settings: {
						dots: true,
						arrows: false,
						adaptiveHeight: true,
						slidesToShow: 1,
  					slidesToScroll: 1,
		      }
    	}
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  	]
	});

	$('.sd__photolist').slick({
		fade: true,
		autoplay: true,
		pauseOnHover: false,
		adaptiveHeight: true,
		sliding: true,
		dots: true,
		arrows: true,
		responsive: [
	    {
		      breakpoint: 481,
		      settings: {
						dots: true,
						arrows: false,
						adaptiveHeight: true,
						slidesToShow: 1,
  					slidesToScroll: 1,
		      }
    	}]
	});

	$('.sd__roomtypephoto').slick({
		fade: true,
		autoplay: true,
		pauseOnHover: false,
		adaptiveHeight: true,
		sliding: true,
		dots: false,
		arrows: true,
		})


}(jQuery));
