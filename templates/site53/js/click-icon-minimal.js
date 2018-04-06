	
	// minimal click menu
	$(document).ready(function(){
		
		//minimal click menu inner
		$("li.menu-drop > a").click(function(event){
			event.preventDefault();
			$("li.menu-drop").removeClass("minimal-toggle-class");
			$(this).parent().toggleClass("minimal-toggle-class", 'fast');
			return false;
		});
		
		$("li.menu-submenu-drop > a").click(function(event){
			event.preventDefault();
			$("li.menu-submenu-drop").removeClass("minimal-toggle-class-2");
			$(this).parent().toggleClass("minimal-toggle-class-2", 'fast');
			return false;
		});
		
		//search icon
		$("#click-search-menu").click(function(){
			$("#home-search").slideToggle(500);
			$(this).toggleClass("active");
			return false;
		});
		
		//push menu
		var menuRight = document.getElementById( 'cbp-spmenu-s1' ),
			menuRightTwo = document.getElementById( 'cb-spmenu-s2' ),
			showRightPush = document.getElementById( 'showRightPush' ),
			showRightPushTwo = document.getElementById( 'site-info' ),
			body = document.body;
		
		showRightPush.onclick = function() {
			classie.toggle( this, 'active' );
			classie.toggle( body, 'cbp-spmenu-push-toleft' );
			classie.toggle( menuRight, 'cbp-spmenu-open' );
		};
		
		showRightPushTwo.onclick = function() {
			classie.toggle( this, 'active' );
			classie.toggle( body, 'cbp-spmenu-push-toleft' );
			classie.toggle( menuRightTwo, 'cbp-spmenu-open' );
		};
		
		//close button
		$(".minimal-close-button > a").click(function(){
			$(".minimal-menu-container").removeClass('cbp-spmenu-open');
			$("body").removeClass('cbp-spmenu-push-toleft');
			$("#showRightPush").removeClass('active');
		});
		
		$(".minimal-site-info > a").click(function(){
			$(".minimal-site-info").removeClass('cbp-spmenu-open');
			$("body").removeClass('cbp-spmenu-push-toleft');
			$("#site-info").removeClass('active');
		});
		
		// Page loader
		$(window).load(function(){
			// Page loader
			$(".page-loader div").delay(0).fadeOut();
			$(".page-loader").delay(600).fadeOut("slow");
		});
		
		//browser select
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) 
		{
			$('.minimal-details-link-info').css({"top":"0","margin-top":"30%"});
			$('.minimal-bottom-title').css({"position":"static","margin-top":"0"});
			
			if ($(window).width() <= 767) {
				$('.minimal-details-link-info').css({"top":"0","margin-top":"30%"});
				$('.minimal-bottom-title').css({"position":"static","margin-top":"0"});
			}
		};
		
	});