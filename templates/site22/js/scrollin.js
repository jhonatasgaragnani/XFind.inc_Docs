jQuery(document).ready(function($){
	$( ".scroll-box" ).each(function() {
    scrollWrapper = $(this);
    scrollContent = $(this).find('.grid');

    if( !Modernizr.touch ){

        scrollWrapper.mousewheel(function(event, delta, deltaX, deltaY) {

            var currentScroll = parseInt( $(this).scrollLeft());
            $(this).scrollLeft( currentScroll + (-deltaY*100) );
            var finalRight = ((scrollContent.width() -   $(this).scrollLeft()) == scrollWrapper.width());

            var finalLeft =  ($(this).scrollLeft() == 0);
            if( finalRight && (deltaY < 0) ) {
                var windowScroll = $(window).scrollTop();
                windowScroll +=50;
                $(window).scrollTop(windowScroll);
            } else if(finalLeft && (deltaY > 0) ){
                var windowScroll = $(window).scrollTop();
                windowScroll -=50;
                $(window).scrollTop(windowScroll);
            }
            scrollWrapper.getNiceScroll().resize();
        });
    } else {
        $(this).addClass("no-animation");
    }

    var slide_colour = jQuery(".scroll-box").data("color");

    try{
        scrollWrapper.niceScroll({
            cursorcolor: "#431701",
            cursorwidth:"16px",
            cursorborder:"none",
            cursorborderradius:"0px",
            cursoropacitymin:"1",
            background:"rgba(0,0,0,0.8)",
            railpadding:{top:"20px"}
        }).rail.css({'height':'15px'});
    } catch(e){
        console.log("Seems scrolling works wrong.");
    }


    var countElements = $(this).find(".grid .gr-box").size();
    $(scrollContent).width(countElements*392);

    var scrollbox = $(this);
    var indent = ( $(window).width() - jQuery(".fifteen.columns>.wrap").width() ) / 2;

    // setBoxedSlider();

    var animateTime = 1,
        offsetStep = 5;

    //event handling for buttons "left", "right"
    jQuery('.bttL')
        .mousedown(function() {
            scrollContent.data('loop', true).loopingAnimation($(this), $(this).is('.bttR') );
        })
        .bind("mouseup mouseout", function(){
            //scrollContent.data('loop', false).stop();
        });

    jQuery.fn.loopingAnimation = function(el, dir){
        if(this.data('loop')){
            var sign = (dir) ? '-=' : '+=';
            this.animate({ marginLeft: sign + offsetStep + 'px' }, animateTime, function(){ $(this).loopingAnimation(el,dir) });
        }
        return false;
    };
});

});