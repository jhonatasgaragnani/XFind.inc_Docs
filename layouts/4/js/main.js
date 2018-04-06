// -----------------------------------------------------------------------------
// Main Javascript 
// -----------------------------------------------------------------------------
(function($) {
    "use strict";

    $(window).load(function(){

        // Preloader
        // ---------------------------------------- 
        if($('#preloader').length > 0){
            $('#preloader').fadeOut('slow',function(){$(this).remove();});
        }

        // Post slider in news
        // ---------------------------------------- 
        if($('.n-post-slider').length > 0){
            $('.n-post-slider').owlCarousel({
                singleItem: true,
                transitionStyle: 'fade',
                autoWidth: true,
                slideSpeed: 1000,
                autoPlay: 5000,
                mouseDrag: false,
                pagination: true,
                navigation: false
            });
        }
    });

    // Animating the navbar toggle
    // ----------------------------------------
    $('.navbar-toggle').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.navbar-toggle-desktop').on('click', function(){
        $('.navbar-collapse').toggleClass('navbar-visible');
    });

    // Bootstrap Dropdown on hover
    // ----------------------------------------
    $('.dropdown').on({
        mouseenter: function (){
            $(this).addClass('open');
        },
        mouseleave: function(){
            $(this).removeClass('open');
        }
    });

    // Sliders
    // ----------------------------------------

    // home splash slider
    if($('.splash-slider').length > 0){
        $('.splash-slider').owlCarousel({
            singleItem: true,
            transitionStyle: 'fade',
            slideSpeed: 1000,
            autoPlay: 5000,
            mouseDrag: false,
            pagination: false,
            navigation: true,
            navigationText: ["<i class='icon-arrows-slim-left'></i>","<i class='icon-arrows-slim-right'></i>"]
        });
    }

    // simple gallery slider
    if($('.gallery-slider').length > 0){
        $('.gallery-slider').owlCarousel({
            singleItem: true,
            slideSpeed: 1000,
            autoPlay: 5000,
            mouseDrag: false,
            pagination: true
        });
    }

    // full width gallery slider
    if($('.full-gallery-slider').length > 0){
        $('.full-gallery-slider').owlCarousel({
            itemsDesktop: [1199,4],
            itemsDesktopSmall: [992,3],
            itemsTablet: [768,3],
            itemsMobile: [479,1],
            slideSpeed: 1000,
            autoPlay: 5000,
            pagination: false,
            navigation: true,
            navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
        });
    }

    // testimonials slider
    if($('.testimonials-slider').length > 0){
        $('.testimonials-slider ').owlCarousel({
            singleItem: true,
            slideSpeed: 1000,
            autoPlay: 5000,
            mouseDrag: false,
            pagination: true,
            navigation: true,
            navigationText: ["<i class='icon-arrows-slim-left'></i>","<i class='icon-arrows-slim-right'></i>"]
        });
    }

    // clients slider
    if($('.clients-slider').length > 0){
        $('.clients-slider').owlCarousel({
            items: 6,
            itemsDesktop: [1199,6],
            itemsDesktopSmall: [992,4],
            itemsTablet: [768,3],
            itemsMobile: [479,1],
            slideSpeed: 1000,
            autoPlay: 5000,
            mouseDrag: false,
            pagination: true,
            navigation: false
        });
    }

    // Back to top
    // ----------------------------------------
    if($('.back-to-top').length > 0){
        $('.back-to-top').on("click", function(){
            $('html, body').animate({scrollTop: 0}, 800);
            return false;
        });
    }

    // Gallery Popup
    // ----------------------------------------

    // image popup
    if($('.popup').length > 0){
        $('.popup').magnificPopup({
          type: 'image'
        });
    }

    // video popup
    if($('.popup-video').length > 0){
        $('.popup-video').magnificPopup({
            type: 'iframe'
        });
    }

    // Progress
    // ----------------------------------------
    if($('.progress-circle').length > 0){
        $('.progress-circle').circleProgress({
            size: 140,
            startAngle: -Math.PI / 2,
            thickness: 3,
            emptyFill: "#fafafa",
            fill: {
                color: "#bc5b6e"
            }
        });
    }


    // Portfolio Filtering
    // ----------------------------------------
    if ($('.filter').length > 0) {
        $('.filter').on("click", function () {
            var $this = $(this);
            // if we click the active tab, do nothing
            if ( !$this.hasClass("active") ) {
                $(".filter").removeClass("active");
                $this.addClass("active"); // set the active tab
                // get the data-rel value from selected tab and set as filter
                var $filter = $this.data("rel");
                // if we select view all, return to initial settings and show all
                $filter == 'all' ?
                    $(".item")
                    .css('opacity', 1)
                : // otherwise
                    $(".item")
                    .css('opacity', .2)
                    .filter(function () {
                        // set data-filter value as the data-rel value of selected tab
                        return $(this).data("filter") == $filter;
                    })
                    .css('opacity', 1);
            } // if
        });
    }

    // Masonry Grid
    // ----------------------------------------
    if ($('.masonry').length > 0) {
        $('.masonry').gridalicious({
            gutter: 20,
            width: 330,
            selector: '.post'
        });
    }
})(jQuery);
