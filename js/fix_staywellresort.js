// JavaScript Document

(function($){


$( document ).ready(function() {

/* # Scroll
================================================== */
$('a[href*=\\#]:not([href=\\#])').click(function() {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
						$('html,body').animate({
								scrollTop: target.offset().top
						}, 1000);
						return false;
				}
		}
});




/* # Refresh (reload) goto Top
================================================== */
window.onbeforeunload = function () {
  	window.scrollTo(0, 0);
}


/* # Stop link
================================================== */
$(".stoplinkto").click(function(e){
		e.preventDefault();
});


/* # Set height roomtype on homepage
================================================== */
var fix_roomheight = 0;
$('.sd__roomtype .box').each(function () {
		var boxroom_H = $(this).height();
		if ( fix_roomheight < boxroom_H ) {
				fix_roomheight = boxroom_H;
		}
});

$('.sd__roomtype .box').css('height', fix_roomheight);
//console.log("fix_roomheight : "+fix_roomheight);


/* #Mobile Menu
================================================== */
$(".wrap__mobilemenu #list__mainmenu > li").each(function(n) {
	 	$(this).removeClass('animated fadeInLeftSm');
});


$('._btn-mobilemenu').click(function(){
		$(this).toggleClass('active');
		$('.wrap__mobilemenu').toggleClass('active');
		$('body').toggleClass('fixed_scroll');
		addmobileAnimation('.wrap__mobilemenu #list__mainmenu');
});


$('.i-menuarrow').click(function() {
		if ( $(this).hasClass('active') ) {
				$(this).parent().removeClass('active');
				$(this).removeClass('active');
				//console.log( "removeClass" );
		}else{
				$('.wrap__mobilemenu #list__mainmenu .has_submenu').removeClass('active');
				$('.i-menuarrow').removeClass('active');
				$(this).parent().addClass('active');
				$(this).addClass('active');
				//console.log("addClass");
		}
});

$('._btn-close').click(function() {
		// removeAnimation('.wrap__mobilemenu #list__mainmenu');
		$('.wrap__mobilemenu, ._btn-mobilemenu').toggleClass('active');
		$('body').toggleClass('fixed_scroll');
		$('.wrap__mobilemenu #list__mainmenu .has_submenu').removeClass('active');
		$('.i-menuarrow').removeClass('active');

});


/* # Menu Toggle
================================================== */
$('._btn-menumain').click(function(e){
		e.preventDefault();
		$('.logo').toggleClass('active');
		$('.menu_header').toggleClass('active');
		$('.btn-menu').toggleClass('active');
		});


/* # Reser box
================================================== */
$('._btn-reserbox').click(function(e){
		e.preventDefault();
		$('.btn-reserbox').toggleClass('active');
		$('.reser_header').toggleClass('active');
		});


/* #Tooltip
================================================== */
$('.tooltip li i').tooltipster({
		animation: 'slideup',
		delay: 200,
		/*autoClose: false,*/
});


/* # Action Photo
================================================== */
//onScrollInit( $('.photo') );


/* # Mainbanner Mouse effect
================================================== */
// var lFollowX = 0,
//     lFollowY = 0,
//     x = 0,
//     y = 0,
//     friction = 1 / 30;
// function moveBackground() {
// 	  x += (lFollowX - x) * friction;
// 	  y += (lFollowY - y) * friction;
// 	  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
// 	  $('.sd__mainbanner .box.slick-active ._bg-full').css({
// 		    '-webit-transform': translate,
// 		    '-moz-transform': translate,
// 		    'transform': translate
// 		  	});
// 	  window.requestAnimationFrame(moveBackground);
// }
//
// $('.sd__mainbanner').on('mousemove click', function(e) {
// 	  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
// 	  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
// 	  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
// 	  lFollowY = (10 * lMouseY) / 100;
// });
// moveBackground();
// splitslideword( '.content__mainslide .title', 'fadeInRightSm' );



/* # Back to top
================================================== */
if ($('#back-to-top').length) {
	var scrollTrigger = 100, // px
			backToTop = function () {
					var scrollTop = $(window).scrollTop();
          var pageHeight  = $(document).height() - $('footer').height() - $(window).height();
          //console.log('pageHeight = '+pageHeight+" : scrollTop = "+scrollTop);

					if (scrollTop > scrollTrigger) {
							$('#back-to-top').addClass('show');
							$('#back-to-top').css('bottom', "20px");
              // if ( scrollTop > pageHeight ) {
              //     var fixbottom = scrollTop - pageHeight + 20;
              //     $('#back-to-top').css('bottom', fixbottom+"px" );
              //     } else {
              //     $('#back-to-top').css('bottom', "20px");
              //     }

					} else {
							$('#back-to-top').removeClass('show');
					}
			};
	backToTop();
	$(window).on('scroll', function () {
			backToTop();
	});
	$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
					scrollTop: 0
			}, 700);
	});
}


/* end ================================================== */  });

$(window).on('load', function() {

/* end ================================================== */  });


var windowWidth = $(window).width();
$( window ).resize(function() {

    /* # Back to top
    ================================================== */
    if (windowWidth > 769 && $(window).width() < 769) {
        //location.reload();
        }
    else if (windowWidth < 769 && $(window).width() > 769) {
        //location.reload();
        }


/* end ================================================== */  });



function splitslideword( text, animate ) {
		$( text ).each( function() {
				var a = $(this).text().split(" "), inject = ' ', delay = '';
				if (a.length) {
						$(a).each(function(i, item) {
							delay = i+2;
							inject += '<span class="set-animate" animate-style="'+animate+'" animate-delay="0.'+i+'s" animate-time="2.2s">'+item+'</span> ';
						});
					$( this ).empty().append(inject);
				}
		});
}

}(jQuery));
