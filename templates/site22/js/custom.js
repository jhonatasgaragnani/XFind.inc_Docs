jQuery(document).ready(function($){
	"use strict";
	//Pie Chart on About Us Page
	
	
	/** Start of Social Icons Hover Function **/	
	$('.social_active').hoverdir( {} );
	/** End of Social Icons Hover Function **/	

	/** Start of Main Slider Function **/	
	var mainslider = $('.main_slider');
	   if (mainslider.length){
		mainslider.bxSlider({  auto:true, minSlides: 1, maxSlides: 1, slideMargin: 18,  speed: 500 , pager: false });
	}
	/** End of Main Slider Function **/	
	
	/** Start of Client Slider Function **/	
	var css = $('#client_slider');
	if (css.length){
		css.bxSlider({
			slideWidth: 214, minSlides: 1, maxSlides: 5, slideMargin: 25,  speed: 500 , pager: false });
	}
	/** End of Client Slider Function **/	 
	
	/** Start of Client Slider Function **/	
	var twitterslider = $('#twitter_widget');
		   if (twitterslider.length){ 
			twitterslider.bxSlider({  minSlides: 1, maxSlides: 1, slideMargin: 18,  speed: 500 , pager: false });
		}
	/** End of Client Slider Function **/	 
	
	/** Start of Client Slider Function **/	
	var testimonial = $('#testimonial_slider');
	   if (testimonial.length){ 
		testimonial.bxSlider({  minSlides: 1, maxSlides: 1, slideMargin: 18,  speed: 500 , controls:true, CSS: false });
	}
	/** End of Client Slider Function **/ 
	
	/** Start of Client Slider Function **/	
	var testitext = $('#tsti_slider');
	if (testitext.length){
		testitext.bxSlider({  minSlides: 1, maxSlides: 1, slideMargin: 18,  speed: 500 , controls:false,   pagerCustom: '#tsti_logo_slider' });
	}
	var team_widegt = $('#team_widegt');
	if (team_widegt.length){
		team_widegt.bxSlider({  minSlides: 1, maxSlides: 1, slideMargin: 18,  speed: 500 , controls:true, pager:false, CSS:false   });
	}
	/** End of Client Slider Function **/
	
	/** Sorting Filter **/
	var filterlist = $('.work-list') ;
	if ( $(filterlist.length) ){
	filterlist.imagesLoaded(function(){ filterlist.isotope({ itemSelector : '.featurework', layoutMode : 'fitRows' }); });
		$('#filter a').click(function(){ var selector = $(this).attr('data-filter'); filterlist.isotope({ filter: selector }); return false; });
	}
	/** End of Sorting Filter **/ 
	
	/** Start of Latest Project Slider Function **/	
	var project = $('#latest_project');
	   if (project.length){
		project.bxSlider({  minSlides: 1, maxSlides: 1,  speed: 500 , pager: false });
	}
	/** End of Latest Project Slider Function **/	 
	/** Start of World Cup Slider Function **/	
	var worldcup = $('#world_cup');
	   if (worldcup.length){
		worldcup.bxSlider({  auto: true, autoControls: true, pause: 3000, pager:false, controls:true });
	}
	/** End of World Cup Slider Function **/
	
	/* Start of prettyPhoto Lightbox **/ 
	$("area[data-gal^='prettyPhoto']").prettyPhoto();
	$(".gallery:first a[data-gal^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_rounded',slideshow:3000, autoplay_slideshow: false});
	$(".gallery:gt(0) a[data-gal^='prettyPhoto']").prettyPhoto({animation_speed:'fast',theme:'light_rounded',slideshow:10000, hideflash: true});	 
	/* End of Twitter Feed Slider **/
	var year_num = $('.year_num');
	if(year_num.lenght){
		$('.year_num').click(function(event){
			event.preventDefault();
			$('.tl_year ').removeClass('current');
			$(this).parent().addClass('current');
		});
	}
	
	$('.nav li, .nav li').on({
		mouseenter: function() {
			$(this).children('ul').stop(true, true).slideDown(800);
		},
		mouseleave: function() {
			$(this).children('ul').slideUp(100);
		}
	});	
	var percentage_default = $('.percentage').html();
	if(percentage_default == '<span>30</span>%'){
		$('.percentage').easyPieChart({
			animate: 1000,
			onStep: function(value) {
				this.$el.find('span').text(value);
			}
		});
	}
	
	
});
