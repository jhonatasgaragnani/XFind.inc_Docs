(function($){
    "use strict"; // Start of use strict
	
	//jQuery Document Ready
	$( document ).ready(function() {
		
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
		
		//push menu
		var menuRight = document.getElementById( 'cbp-spmenu-s1' ),
			showRightPush = document.getElementById( 'showRightPush' ),
			body = document.body;
		
		showRightPush.onclick = function() {
			classie.toggle( this, 'active' );
			classie.toggle( body, 'cbp-spmenu-push-toleft' );
			classie.toggle( menuRight, 'cbp-spmenu-open' );
		};
		
		//close button
		$(".minimal-close-button > a").click(function(){
			$(".minimal-menu-container").removeClass('cbp-spmenu-open');
			$("body").removeClass('cbp-spmenu-push-toleft');
			$("#showRightPush").removeClass('active');
		});
	});
	
	$(window).load(function(){
        
        // Page loader
        $(".page-loader div").delay(0).fadeOut();
        $(".page-loader").delay(600).fadeOut("slow");
        
    });
	
})(jQuery); // End of use strict