(function($){


 $(function(){
   $('body').ihavecookies({
       title: ' ',
       message: 'By continuing to use this website you agree to the use of cookies according to our ',
       delay: 600,
       expires: 1,
       link: '',
       onAccept: function(){
           var myPreferences = $.fn.ihavecookies.cookie();
           console.log('Yay! The following preferences were saved...');
           console.log(myPreferences);
       },
       uncheckBoxes: true,
       acceptBtnLabel: 'Accept',
       moreInfoLabel: 'Privacy policy',
   });
   if ($.fn.ihavecookies.preference('marketing') === true) {console.log('This should run because marketing is accepted.');}
   $(document).on('click', '.x_closebox',function() {$("#gdpr-cookie-message").fadeOut(200);});
 });

    if($(".room-slide-home").length) {
        $('.room-slide-home').not(".slick-initialized").slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 5000,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 750,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    }
                },
            ]
        });
    }




$(document).ready(function () {

  $('.minipopup .btn__close').click(function () {
      $('.minipopup').hide();
  });

	if (typeof (scriptVars.popup) != "undefined") {
        setTimeout(function () {
            $.fancybox.open(scriptVars.popup, {
                padding: 0
            });
        }, scriptVars.popup_delay);
    }




     if($(".menu-item-has-children").length) {
        $(".menu-item-has-children").addClass("has_submenu");
    }
    if($(".mainmenu .sub-menu").length) {
        $(".mainmenu .sub-menu").show();
    }


    // <script src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.0/dist/jquery.validate.js"></script>
    var $form = $('.sec__contactform form#request');
    $form.validate({
        submitHandler: function(f) {

            $('#sendmail_notify').remove();
            var $notification = $('<div id="sendmail_notify">').text('Sending').css({
                "color":"#FFFFF"
            }).appendTo($form);

            $form.css('opacity','0.3');


            $.ajax({
                type: "POST",
                url: scriptVars.template + '/inc/formmail/sendmail-contact.php',
                data: $form.serialize(),
                success: function(data){

                    $form.css('opacity','1');

                    if (data.success === true) {

                        $notification.text(data.message).css("color","#70a533");
                        $("input[type=text], textarea").val("");
                        location.href = "/thankyou/";

                    }else {

                        $notification.text(data.message).css("color","#dc8300");

                        // $notification.text(data.message).css("color","#dc8300");
                        // $('.wrap--loading, #emailnewletter, #btnSubmitnewsletter').hide();
                        // $('.alert--newsletter').css('opacity','1').html("<div class='formSuccess1'><p>You Message has been sent.</p><p>Thank you for your subscription to our newsletter. </p></div>");

                    }
                }
            });
        }
    });



    var $form_newsleter = $('form#newsletter_form');
    if(('#btnSubmitnewsletter').length) {
        $('#btnSubmitnewsletter').click(function(){
            $form_newsleter.submit();
        });
    }

    $form_newsleter.validate({
        submitHandler: function(f) {

            // $('#sendmail_notify').remove();
            // var $notification = $('<div id="sendmail_notify">').text('Sending').css({
            //     "color":"#FFFFF"
            // }).appendTo($form);

            // console.log("ok");

            $('.wrap--loading').show();
            $('.alert--newsletter').html('');

            $.ajax({
                type: "POST",
                url: scriptVars.template + '/inc/formmail/sendmail-newsletter.php',
                data: $form_newsleter.serialize(),
                success: function(data){
                    console.log(data);

                    $form_newsleter.css('opacity','1');
                    if (data.success === true) {
                        $('.wrap--loading, #emailnewletter, #btnSubmitnewsletter').hide();
                        $('.alert--newsletter').css('opacity','1').html("<div class='formSuccess1'><p>You Message has been sent.</p><p>Thank you for your subscription to our newsletter. </p></div>");
                    }
                    else {
                        $('.wrap--loading, #emailnewletter, #btnSubmitnewsletter').hide();
                        $('.alert--newsletter').css('opacity','1').html("<div class='formSuccess2'><p>Sorry,Has somthing wrong. Message cannot sent.</p></div>");
                    }
                }
            });
        }
    });



    var $form_claim = $('.sec__claimform form#request');
    $form_claim.validate({
        submitHandler: function(f) {


            $form_claim.css('opacity','0.3');
            $('.wrap--loading').show();
            $('.alert--newsletter').html('');

            $.ajax({
                type: "POST",
                url: scriptVars.template + '/inc/formmail/sendmail-claim.php',
                data: $form_claim.serialize(),
                success: function(data){
                    console.log(data);

                    $form_claim.css('opacity','1');
                    if (data.success === true) {
                        $('.wrap--loading, #request .row, #request h2').hide();
                        $('.alert--clainform').css('opacity','1').html("<div class='formSuccess1'><h4>You Message has been sent.</h4><p>We’ll be in touch shortly.</p></div>");
                    }
                    else {
                        $('.wrap--loading').hide();
                        $('.alert--clainform').css('opacity','1').html("<div class='formSuccess2'><p>Sorry, Has somthing wrong. Message cannot sent.</p></div>");
                    }

                }
            });
        }
    });


    //-----------------------------------------------------------------------------------------------------

    if($("#checkin").length) {


        var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        /* #Today input
        ================================================== */
        var today   = new Date();
        var day 	= today.getDate();
        var month 	= today.getMonth(); //January is 0!
        var year 	= today.getFullYear();

        if(day<10){
            var day = 0+day.toString(); //+0
        }
        $("#checkin").val( day+" "+monthNames[month]+" "+year.toString() ); //show
        //console.log( "#checkin : "+day+" "+monthNames[month]+" "+year.toString() );

        if(month<10){
            var month = month+1;
            month = 0+month.toString(); //+0
        }
        $("#check_in_date").val(year+"-"+month+"-"+day); //hide


        /* #Nextday input
        ================================================== */
        var nextday = new Date();
        nextday.setDate(nextday.getDate()+1);

        var day_next			= nextday.getDate();
        var month_next 		= nextday.getMonth();
        var year_next 		= nextday.getFullYear();

        if(day_next<10){
            var day_next = 0+day_next.toString(); //+0
        }
        $("#checkout").val(  day_next+" "+monthNames[month_next]+" "+year_next.toString() );
        //console.log( "#checkout : "+day_next+" "+monthNames[month_next]+" "+year_next.toString() );


        if(month_next<10){
            var month_next 	= month_next+1;
            month_next  = 0+month_next.toString(); //+0
        }
        $("#check_out_date").val(year_next+"-"+month_next+"-"+day_next);


        var $from = $("#checkin"),
            $to = $("#checkout");

        $from.datepicker({
            minDate: 0,
            numberOfMonths: 2,
            dateFormat: 'd M yy',
            onClose: function (selectedDate) {
                var dateString = $("#checkin").val();
                var to_datesplit 	= dateString.split(" ");
                var inputcheckin_month = $.inArray(to_datesplit[1], monthNames) +1;

                if(inputcheckin_month<10){ inputcheckin_month = 0+inputcheckin_month.toString(); } //+0
                var check_in_date_input = to_datesplit[0]+"-"+inputcheckin_month+"-"+to_datesplit[2];
                $("#check_in_date").val( check_in_date_input );

                /* #sent day to checkoutform
                ================================================== */
                var checkOutDate = new Date(dateString);
                checkOutDate.setDate(checkOutDate.getDate()+1);

                $to.datepicker("option", "minDate", checkOutDate);
                if(selectedDate != "") {
                    $to.focus().click();
                }

            },
            beforeShowDay: function(date) {

                //console.log(date);

                var checkdate = $.datepicker.formatDate('d M yy', date );
                var datecheckin = new Date($("#checkin").val());
                var datecheckout = new Date($("#checkout").val());

                if ( date >= datecheckin && date <= datecheckout ) {
                    return [true, 'ui-state-book', 'tooltipText'];
                }
                return [true, '', ''];
            }

        });


        $to.datepicker({
            defaultDate: "+1d",
            minDate: 1,
            numberOfMonths: 2,
            dateFormat: 'd M yy',
            onClose: function (selectedDate) {
                var todateString 	= $("#checkout").val();
                var to_todatesplit 	= todateString.split(" ");
                var inputcheckout_month = $.inArray(to_todatesplit[1], monthNames) +1;

                if(inputcheckout_month<10){ inputcheckout_month = 0+inputcheckout_month.toString(); } //+0
                var check_out_date_input = to_todatesplit[0]+"-"+inputcheckout_month+"-"+to_todatesplit[2];
                $("#check_out_date").val( check_out_date_input );

                $("#checkout").val(todateString);

            },
            beforeShowDay: function(date) {

                //console.log(date);

                var checkdate = $.datepicker.formatDate('d M yy', date );
                var datecheckin = new Date($("#checkin").val());
                var datecheckout = new Date($("#checkout").val());

                if ( date >= datecheckin && date <= datecheckout ) {
                    return [true, 'ui-state-book', 'tooltipText'];
                }
                return [true, '', ''];
            }
        });

        var debounce;
        $(window).resize(function() {
            clearTimeout(debounce);
            if ($(window).width() < 768) {
                debounce = setTimeout(function() {
                debounceDatepicker(1);
                }, 250);
            } else {
                debounce = setTimeout(function() {
                debounceDatepicker(2);
                }, 250);
            }
        }).trigger('resize');

        function debounceDatepicker(no) {
            $("#checkin").datepicker("option", "numberOfMonths", no);
            $("#checkout").datepicker("option", "numberOfMonths", no);
        }

        function calcDaysBetween(startDate, endDate) {
            return (endDate - startDate) / (1000 * 60 * 60 * 24);
        }
        function days_between(date1, date2) {
            var ONE_DAY = 1000 * 60 * 60 * 24
            var date1_ms = date1.getTime()
            var date2_ms = date2.getTime()
            var difference_ms = Math.abs(date1_ms - date2_ms)
            return Math.round(difference_ms/ONE_DAY)
        }
    }



});


        $('document').ready(function(){
            $('.ga-box a').fancybox();
        });


		var timeout;
        $(window).resize(function() {
            clearTimeout(timeout);
            timeout = setTimeout(function() {

                var width = $(window).width();

                var col = 3;
                if( width <= 600) col = 1;
                else if( width <= 768) col = 2;

                var cols = ['','100%','50%','33.33%','25%'];

                var rooms = $(".rooms .box");
                var count_posts = rooms.length;
                var mod = count_posts % col;

                if(rooms.length) {
                    $.each(rooms,function(i,element){
                        var width = cols[col];
                        if(i+1 > (count_posts - mod)) {
                            width = cols[mod];
                        }
                        $(element).css("width",width);
                    });
                }

                //--------------------------------

                col = 4;
                if( width <= 600) col = 1;
                else if( width <= 768) col = 2;
                else if( width <= 1024) col = 3;

                var facilities = $(".facilities .box");
                count_posts = facilities.length;
                mod = count_posts % col;

                if(facilities.length) {
                    $.each(facilities,function(i,element){
                        var width = cols[col];
                        if(i+1 > (count_posts - mod)) {
                            width = cols[mod];
                        }
                        $(element).css("width",width);
                    });
                }

				//--------------------------------

				var restaurants = $(".restaurants .box");
                count_posts = restaurants.length;
                mod = count_posts % col;

                if(restaurants.length) {
                    $.each(restaurants,function(i,element){
                        var width = cols[col];
                        if(i+1 > (count_posts - mod)) {
                            width = cols[mod];
                        }
                        $(element).css("width",width);
                    });
                }

				//--------------------------------
				var services = $(".services .box");
                count_posts = services.length;
                mod = count_posts % col;

                if(services.length) {
                    $.each(services,function(i,element){
                        var width = cols[col];
                        if(i+1 > (count_posts - mod)) {
                            width = cols[mod];
                        }
                        $(element).css("width",width);
                    });
                }



            }, 250);

        }).trigger('resize');



        $(document).ready(function () {
             if($('#maquee_popup').length){
                 var stillshow = true;
                 $('#maquee_popup').show();

                 $("#maquee_close").click(function() {
                     stillshow=false;
                     $("#maquee_popup").fadeOut();
                 });
             }
         });

}(jQuery));
