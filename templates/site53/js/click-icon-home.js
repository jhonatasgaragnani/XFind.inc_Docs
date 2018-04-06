	
		/*-- home page Click icon --*/
	$( document ).ready(function() {
		
		/*-- click search --*/
		$("#click-search").click(function(){
			$("#home-search").slideToggle(500);
			$("#home-tag").hide();
			$(this).toggleClass("active");
			$("#click-tag").removeClass("active");
			return false;
		});
		/*-- click tag --*/
		$("#click-tag").click(function(){
			$("#home-tag").slideToggle(500);
			$("#home-search").hide();
			$(this).toggleClass("active");
			$("#click-search").removeClass("active");
			return false;
		});
		
	});