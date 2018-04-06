
/*
 *  jQuery $.greyScale Plugin 0.1
 *  Written by Andrew Pryde (www.pryde-design.co.uk)
 *  Date: Mon 1 Aug 2011
 */

(function($){

  $.fn.greyScale = function(args) {
	  "use strict";
    $options = $.extend({
      fadeTime: 400
    }, args);
    function greyScale(image, width, height) {
      can = $('<canvas>')
        .css({
          'display' : 'none',
          'left' : '0',
          'position' : 'absolute',
          'top' : '0'
        })
        .attr({
          'width': width,
          'height': height
        })
        .addClass('gsCanvas');
      ctx = can[0].getContext('2d');
      ctx.drawImage(image, 0, 0, width, height);

      imageData = ctx.getImageData(0, 0,  width, height);
      px = imageData.data;
      for (i = 0; i < px.length; i+= 4) {
        grey = px[i] * .3 + px[i+1] * .59 + px[i+2] * .11;
        px[i] = px[i+1] = px[i+2] = grey;
      }
      ctx.putImageData(imageData, 0, 0);
      return can;
    }
    if ($.browser.msie) {
      // IE doesn't support Canvas so use it's horrible filter syntax instead
      this.each(function(){
        $(this).css({
          'filter': 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)',
          'zoom': '1'
        });
        $(this).hover(function() {
          $(this).css({
            'filter': 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=0)'
          });
        }, function() {
          $(this).css('filter', 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)');
        });
      });
    } else {
      this.each(function(index) {
        $(this).wrap('<div class="gsWrapper">');
        gsWrapper = $(this).parent();
        gsWrapper.css({
          'position' : 'relative',
          'display' : 'inline-block'
        });
        if (window.location.hostname !== this.src.split('/')[2]) {
          // if the image is on a different url proxy the request
         $.getImageData({
            url: $(this).attr('src'),
            success: $.proxy(function(image) {
                can = greyScale(image, image.width, image.height);
                can.appendTo(this).fadeIn($options.fadeTime);
              }, gsWrapper),
            error: function(xhr, text_status){
              // silently fail on error
            }
          });
        } else { // if the url isn't local don't proxy the request
          can = greyScale($(this)[0], $(this).width(), $(this).height());
          can.appendTo(gsWrapper).fadeIn($options.fadeTime);
        }
    });

    $(this).parent().delegate('.gsCanvas', 'mouseover mouseout', function(event) {
      (event.type == 'mouseover') && $(this).stop().animate({'opacity': '0'}, $options.fadeTime);
      (event.type == 'mouseout') && $(this).stop().animate({'opacity': '1'}, $options.fadeTime);
    });
  }
  };
})( jQuery );
