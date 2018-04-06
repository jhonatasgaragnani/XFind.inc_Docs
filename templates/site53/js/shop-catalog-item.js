	
	//jQuery Document Ready
	$( document ).ready(function() {
		
		//cart voucher
		$("#add-to-cart").click(function(){
			$(".cart-voucher").slideToggle(500);
			return false;
		});
		
		//cart plus/minus
		$('#cart-minus').click(function() {
			$('.add-middle').html(function(i, val) { return val*1-1 });
			return false;
		});
		$('#cart-plus').click(function() {
			$('.add-middle').html(function(i, val) { return val*1+1 });
			return false;
		});
		
		//flexslider
		$(window).load(function(){
			$('.flexslider').flexslider({
				animation: "slide",
				controlNav: "thumbnails",
				start: function(slider){
				  $('body').removeClass('loading');
				}
			});
		});
	});