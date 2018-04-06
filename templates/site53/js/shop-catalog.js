	
	//jQuery Document Ready
	$( document ).ready(function() {
		
		//tooltip
		$(function () {
			$('[data-toggle="tooltip"]').tooltip();
		});
		
		//cart voucher
		$("#add-to-cart").click(function(){
			$(".cart-voucher").slideToggle(500);
			return false;
		});
		
		//grid view or list view isotope
		$(".list-view-shop").css("display","none");
		
		//list view
		$('#list-view').click(function(){
			$(".list-view-shop").fadeIn(1000);
			$(".grid").fadeOut();
			$(this).addClass('active-button');
			$('#grid-view').removeClass('active-button');
			return false;
		});
		
		//grid view
		$('#grid-view').click(function(){
			$(".grid").fadeIn(1000);
			$(".list-view-shop").fadeOut();
			$('#list-view').removeClass('active-button');
			$(this).addClass('active-button');
			return false;
		});
		
		//browser select
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) 
		{
			$('.product-info').css('top','8%');
			
			if ($(window).width() <= 767) {
				$('.product-info').css('top','8%');
			}
		};
		
	});