	/* ==============================================
		Auto Close Responsive Navbar on Click
	=============================================== */
	function close_toggle() {
		if ($(window).width() <= 767) {
		  $('.navbar-collapse li').on('click', function(){
			  $('.navbar-collapse').collapse('hide');
		  });
		}
		else {
			$('.navbar .navbar-default a').off('click');
		}
	}
	close_toggle();

	$(window).resize(close_toggle);
	
	// Custom script
	$(document).ready(function(){
		
		// fixed sticky navbar
		try {
			$('#onepage-menu').sticky({
				topSpacing: 0,
				className: 'sticky'
			});
			$('#onepage-menu').onePageNav({
					scrollSpeed: 0,
					scrollOffset: 0
				})
		} catch (err) {

		}
		
		//Smooth Scroll
		try {
			$('.navbar-nav li a').smoothScroll();
			$('.onepage-button a').smoothScroll();
		} catch (err) {

		}
		
		/*-- click search --*/
		$("#single-page-search").click(function(){
			$("#search-box-single-page").slideToggle(500);
			return false;
		});
		
	});
	
	/* ==============================================
		Active Menu Item on Page Scroll
	=============================================== */   
		
	var sections = $('section')
	  , nav = $('#onepage-menu')
	  , nav_height = nav.outerHeight();
	 
	$(window).on('scroll', function () {
	  var cur_pos = $(this).scrollTop();
	 
	  sections.each(function() {
		var top = $(this).offset().top - nav_height,
			bottom = top + $(this).outerHeight();
			
		if (cur_pos >= top && cur_pos <= bottom) {
		  nav.find('a').removeClass('current');
		  sections.removeClass('current');
	 
		  $(this).addClass('current');
		  nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('current');
		}
	  });
	});
	
	$(window).load(function(){
        
        // Page loader
        $(".page-loader div").delay(0).fadeOut();
        $(".page-loader").delay(600).fadeOut("slow");
        
    });