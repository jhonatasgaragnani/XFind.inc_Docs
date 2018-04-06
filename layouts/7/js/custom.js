/*
Template Name: FC Susire 
Author: FreeCssThemes
Version: 1.0
Designed and Development by: FreeCssThemes

====================================
[ CSS TABLE CONTENT ]
------------------------------------
    
	
	1.0 - Pre Loader
	2.0 - Text Rotator
	3.0 - IMAGE POPUP
	4.0 - DATE AND TIME PICKER
	5.0 - HOVER JS
	6.0 - TESTIMONIAL
	
	
-------------------------------------
[ END CSS TABLE CONTENT ]
=====================================
*/


(function($) {
        "use strict";

        window.onload = function() {
            document.getElementById('spinner').style.display = 'none';
		};
            /*-- TEXT ROTATOR JS --*/
            $(".rotate").textrotator({
                animation: "dissolve", // You can pick the way it animates when rotating through words. Options are dissolve (default), fade, flip, flipUp, flipCube, flipCubeUp and spin.
                separator: "|", //  You can define a new separator (|, &, * etc.) by yourself using this field.
                speed: 3000 // How many milliseconds until the next word show.
            });

            /*-- IMAGE POPUP --*/
            var options = {
                type: 'image',
                height: 550,
                width: 1000
            };
            $('a.popup').popup(options);

            /*-- DATE AND TIME PICKER --*/

            $('#datetimepicker1').datetimepicker();

            /*-- HOVER JS --*/

			$( "figure" ).on( "mouseleave", function( event ) {
			   $(this).removeClass("hover");
			});

            /*-- TESTIMONIAL --*/

            var $testimonialCarousel = $(".testimonial-carousel");
            $testimonialCarousel.owlCarousel({
                loop: false,
                margin: 22,
                nav: false,
                dots: true,
                dotsSpeed: 300,
                responsive: {
                    0: {
                        items: 1
                    },
                    600: {
                        items: 2
                    },
                    1000: {
                        items: 3
                    }
                }
            });

			
		

		


})(jQuery);