	
	/*-- home page Click icon --*/
	$( document ).ready(function() {
		
		/*-- click search --*/
		$("#click-search").click(function(){
			$("#portfolio-search-box").slideToggle(500);
			$("#portfolio-tag").hide();
			$(this).toggleClass("active");
			$("#click-tag").removeClass("active");
			$("#click-tag").removeClass("click-tag-active");
			return false;
		});
		/*-- click tag --*/
		$("#click-tag").click(function(){
			$("#portfolio-tag").slideToggle(500);
			$("#portfolio-search-box").hide();
			$(this).toggleClass("active");
			$("#click-search").removeClass("active");
			return false;
		});
		$("#click-tag").addClass("click-tag-active");
	});