
(function($){

function onScrollInit( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass 	= osElement.attr('animate-style'),
        osAnimationDelay 	= osElement.attr('animate-delay');
				osAnimationTime 	= osElement.attr('animate-time');

        osElement.css({
          '-webkit-animation-delay':  	osAnimationDelay,
          '-moz-animation-delay':     	osAnimationDelay,
          'animation-delay':          	osAnimationDelay,
    		  'animation-duration':       	osAnimationTime,
    		  '-webkit-animation-duration':	osAnimationTime,
        });

        var osTrigger = ( trigger ) ? trigger : osElement;

        osTrigger.waypoint(function() {
          osElement.addClass('animated').addClass(osAnimationClass);
          },{
              triggerOnce: true,
             // offset: '90%'
			  offset: '80%'
        });
  });
}


function onScrollInitwithRemove( items, trigger ) {
  items.each( function() {
    var osElement = $(this),
        osAnimationClass 	= osElement.attr('animate-style'),
        osAnimationDelay 	= osElement.attr('animate-delay');
				osAnimationTime 	= osElement.attr('animate-time');

        osElement.css({
          '-webkit-animation-delay':  	osAnimationDelay,
          '-moz-animation-delay':     	osAnimationDelay,
          'animation-delay':          	osAnimationDelay,
		   		'animation-duration':       	osAnimationTime,
		  		'-webkit-animation-duration':	osAnimationTime,
        });

        var osTrigger = ( trigger ) ? trigger : osElement;

        osTrigger.waypoint(function(direction) {
					if (direction === 'down') {	osElement.addClass('animated').addClass(osAnimationClass); }
					}, {
						triggerOnce: true,
 						offset: '90%'
				});
				osTrigger.waypoint(function(direction) {
					if (direction === 'up') { osElement.removeClass('animated').removeClass(osAnimationClass); }
        },{
						offset: '105%'
        });
  });
}



/* #addAnimation
================================================== */
function addAnimation(location) {

		var b_class = $(location).find('.set-animate');
		b_class.each(function() {
			var amElement = $(this),
			osAnimationClass 	= amElement.attr('animate-style'),
			osAnimationDelay 	= amElement.attr('animate-delay');
			osAnimationTime 	= amElement.attr('animate-time');

			amElement.css({
			  '-webkit-animation-delay':  	osAnimationDelay,
			  '-moz-animation-delay':     	osAnimationDelay,
			  'animation-delay':          	osAnimationDelay,
			  '-webkit-animation-duration':	osAnimationTime,
				'animation-duration':       	osAnimationTime,
			});

			amElement.addClass('animated').addClass(osAnimationClass);
		});
	};



/* #addAnimation
================================================== */
function addmobileAnimation(location) {

		var b_class = $(location).find('.set-mobileanimate');
		b_class.each(function() {
			var amElement = $(this),
			osAnimationClass 	= amElement.attr('animate-style'),
			osAnimationDelay 	= amElement.attr('animate-delay');
			osAnimationTime 	= amElement.attr('animate-time');

			amElement.css({
			  '-webkit-animation-delay':  	osAnimationDelay,
			  '-moz-animation-delay':     	osAnimationDelay,
			  'animation-delay':          	osAnimationDelay,
			  '-webkit-animation-duration':	osAnimationTime,
				'animation-duration':       	osAnimationTime,
			});

			amElement.addClass('animated').addClass(osAnimationClass);
		});
	};




/* #removeAnimation
================================================== */
function removeAnimation(location) {
		var a_class = $(location).find('.animated');
		a_class.each(function() {
			var rm_class = $(this).attr('animate-style');
			$(this).removeClass(rm_class);
			$(this).removeClass('animated');
		});
	};




$(document).ready(function () {

onScrollInit( $('.aniset') ); //active when page load finish
onScrollInit( $('.head-aniset'), $('.sub-aniset') ); //active in group when page load finish
onScrollInitwithRemove( $('.re-aniset') );  //active when page load finish and remove when scroll pass
onScrollInitwithRemove( $('.re-head-aniset'), $('.re-sub-aniset') ); //active in group when page load finish and remove when scroll pass

});


}(jQuery));