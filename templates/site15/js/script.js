var $ = jQuery.noConflict();

$(document).ready(function($) {

	/*-------------------------------------------------*/
	/* =  Dropdown Menu - Superfish
	/*-------------------------------------------------*/

	$('ul.sf-menu').superfish({
		delay: 400,
		autoArrows: false,
		speed: 'fast',
		animation: {opacity:'show', height:'show'}
	});

	/*-------------------------------------------------*/
	/* =  Mobile Menu
	/*-------------------------------------------------*/
	
	// Create the dropdown base
    $("<select />").appendTo(".navigation");
    
    // Create default option "Go to..."
    $("<option />", {
    	"selected": "selected",
    	"value"   : "",
    	"text"    : "Go to..."
    }).appendTo(".navigation select");
    
    // Populate dropdown with menu items
    $(".sf-menu a").each(function() {
    	var el = $(this);
    	if(el.next().is('ul.sub-menu')){
    		$("<optgroup />", {
	    	    "label"    : el.text()
	    	}).appendTo(".navigation select");
    	} else {
    		$("<option />", {
	    	    "value"   : el.attr("href"),
	    	    "text"    : el.text()
	    	}).appendTo(".navigation select");
    	}
    });

    // Change style
    $('.navigation select').selectbox({
		effect: "slide"
	});
    
	// To make dropdown actually work
	// To make more unobtrusive: http://css-tricks.com/4064-unobtrusive-page-changer/
    $(".navigation select").change(function() {
      window.location = $(this).find("option:selected").val();
    });

	/*-------------------------------------------------*/
	/*  Display TopRow content
	/*-------------------------------------------------*/

	$('div#top-line article').css('margin-left', '940px');

	$('#top-line a#close').on('click', function(){
		$(this).css('display', 'none');
		$('#top-line a#open').css('display', 'block');
		$('div#top-line article').animate({'margin-left': '0px'});
	});

	$('#top-line a#open').on('click', function(){
		$(this).css('display', 'none');
		$('#top-line a#close').css('display', 'block');
		$('div#top-line article').animate({'margin-left': '940px'});
	});

	/*-------------------------------------------------*/
	/* =  #Recent image hover effects
	/*-------------------------------------------------*/

	$('#recent .left').on('hover', function(){
		$(this).children('#up').stop().animate({'top': 0, 'left': 0},100);
	});

	$('#recent .left').on('mouseleave', function(){
		$(this).children('#up').stop().animate({'top': '-40px', 'left': '-40px'},100);
	});

	$('#recent .left').on('hover', function(){
		$(this).children('#down').stop().animate({'bottom': '40px', 'right': 0},100);
	});

	$('#recent .left').on('mouseleave', function(){
		$(this).children('#down').stop().animate({'bottom': '0px', 'right': '-40px'},100);
	});

	/*-------------------------------------------------*/
	/* =  Fancybox Images
	/*-------------------------------------------------*/
	try {
		$("#down, #link-down").fancybox({
			nextEffect	: 'fade',
			prevEffect	: 'fade',
			openEffect	: 'fade',
	    	closeEffect	: 'fade',
	          helpers: {
	              title : {
	                  type : 'float'
	              }
	          }
		});
	} catch(err) {

	}

	/*-------------------------------------------------*/
	/* =  home2 - Our-Services
	/*-------------------------------------------------*/

	$('.services p').filter(':nth-child(n+4)').addClass('hide');

	$('.services h2').on('click', function() {
		if ( !$(this).hasClass('active')) {
		$('.services h2').removeClass('active');
		$(this)
			.addClass('active')
			.next()
				.slideDown(200)
				.siblings('.services p')
					.slideUp(200);
		}
	});

	/*-------------------------------------------------*/
	/* =  home2 - Testimonials
	/*-------------------------------------------------*/

	// Hiding all the testimonials, except for the first one.
	$('.testimonials li').hide().eq(0).show();
	
	// A self executing function that loops through the testimonials:
	(function showNextTestimonial(){
		
		// Wait for 7.5 seconds and hide the currently visible testimonial:
		$('.testimonials li:visible').delay(7500).fadeOut('slow',function(){
			
			// Move it to the back:
			$(this).appendTo('.testimonials ul');
			
			// Show the next testimonial:
			$('.testimonials li:first').fadeIn('slow',function(){
				
				// Call the function again:
				showNextTestimonial();
			});
		});
	})();

	/*-------------------------------------------------*/
	/* =  home3 - Services
	/*-------------------------------------------------*/

	$('.services2 ul.span4 li').on('click', function(){
		var $this = $(this),
			x = $(this).index();
		if( !$this.hasClass('active2')) {
			$('.services2 ul.span4 li').removeClass('active2');
			$this.addClass('active2');
			$('.services2 ul.span8 li').fadeOut(400);
			$('.services2 ul.span8 li:eq('+ x +')').delay(400).fadeIn(400);
		}
	});

	/*-------------------------------------------------*/
	/* =  home7 - Services
	/*-------------------------------------------------*/

	$('.services3 ul.span3 li').on('click', function(){
		var $this = $(this),
			x = $(this).index();
		if( !$this.hasClass('active3')) {
			$('.services3 ul.span3 li').removeClass('active3');
			$this.addClass('active3');
			$('.services3 ul.wrapper li').fadeOut(400);
			$('.services3 ul.wrapper li:eq('+ x +')').delay(400).fadeIn(400);
		}
	});

	/*-------------------------------------------------*/
	/* =  home8  - photo-hover
	/*-------------------------------------------------*/

	$('.main3 .recent2 ul li').on('hover', function(){
		$(this).children('#link-up').stop().animate({'top': 0, 'left': 0},100);
	});

	$('.main3 .recent2 ul li').on('mouseleave', function(){
		$(this).children('#link-up').stop().animate({'top': '-40px', 'left': '-40px'},100);
	});

	$('.main3 .recent2 ul li').on('hover', function(){
		$(this).children('#link-down').stop().animate({'bottom': 0, 'right': 0},100);
	});

	$('.main3 .recent2 ul li').on('mouseleave', function(){
		$(this).children('#link-down').stop().animate({'bottom': '-40px', 'right': '-40px'},100);
	});

	/*-------------------------------------------------*/
	/* =  Latest News
	/*-------------------------------------------------*/

	$('#js-news').ticker();
    $('#js-news').ticker({
		speed: 0.10,
		htmlFeed: false,
		fadeInSpeed: 2000,
		titleText: 'Latest News'
	});
    
    /*-------------------------------------------------*/
	/* =  sidebar serv-widget
	/*-------------------------------------------------*/

	$('.serv-item p').filter(':nth-child(n+4)').addClass('hide');

	$('.serv-item h3').on('click', function() {
		if ( !$(this).hasClass('active')) {
		$('.serv-item h3').removeClass('active');
		$(this)
			.addClass('active')
			.next()
				.slideDown(200)
				.siblings('.serv-widget div p')
					.slideUp(200);
		}
	});

	/*-------------------------------------------------*/
	/* =  sidebar tabs-widget
	/*-------------------------------------------------*/

	$('.tab-links li').on('click', function(){
		var $this = $(this),
			x = $(this).index();
		if( !$this.hasClass('active')) {
			$('.tab-links li').removeClass('active');
			$this.addClass('active');
			$('.tab-content li').fadeOut(200);
			$('.tab-content li:eq('+ x +')').delay(200).fadeIn(200);
		}
	});

	/*-------------------------------------------------*/
	/* =  Scroll to TOP
	/*-------------------------------------------------*/
	$('.back-to-top img').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        return false;
    });
	
	/*-------------------------------------------------*/
	/* =  #portfolio image hover effects
	/*-------------------------------------------------*/

	$('.portfolio-post').on('hover', function(){
		$(this).children('#up').stop().animate({'top': 0, 'left': 0},100);
	});

	$('.portfolio-post').on('mouseleave', function(){
		$(this).children('#up').stop().animate({'top': '-40px', 'left': '-40px'},100);
	});

	$('.portfolio-post').on('hover', function(){
		$(this).children('#down').stop().animate({'bottom': '40px', 'right': 0},100);
	});

	$('.portfolio-post').on('mouseleave', function(){
		$(this).children('#down').stop().animate({'bottom': '0px', 'right': '-40px'},100);
	});

	/*-------------------------------------------------*/
	/* =  #portfolio image hover effects
	/*-------------------------------------------------*/

	$('.slides li').on('hover', function(){
		$(this).children('#down').stop().animate({'bottom': 0, 'right': 0},100);
	});

	$('.slides li').on('mouseleave', function(){
		$(this).children('#down').stop().animate({'bottom': '-40px', 'right': '-40px'},100);
	});

	/*-------------------------------------------------*/
	/* =  singlepost - Author
	/*-------------------------------------------------*/

	$('.member-post li').on('click', function(){
		var $this = $(this),
			x = $(this).index();
		if( !$this.hasClass('active')) {
			$('.member-post li').removeClass('active');
			$this.addClass('active');
			$('.member-data li').fadeOut(200);
			$('.member-data li:eq('+ x +')').delay(200).fadeIn(200);
		}
	});

	/*-------------------------------------------------*/
	/* =  singlepost - Author
	/*-------------------------------------------------*/

	$('.tab-list li').on('click', function(){
		var $this = $(this),
			x = $(this).index();
		if( !$this.hasClass('active')) {
			$('.tab-list li').removeClass('active');
			$this.addClass('active');
			$('.tab-cont li').fadeOut(200);
			$('.tab-cont li:eq('+ x +')').delay(200).fadeIn(200);
		}
	});

	/*-------------------------------------------------*/
	/* =  Jquery styleswitcher
	/*-------------------------------------------------*/
	/**
	* Styleswitch stylesheet switcher built on jQuery
	* Under an Attribution, Share Alike License
	* By Kelvin Luck ( http://www.kelvinluck.com/ )
	**/

	$(document).ready(function() {
		$('.styleswitch').click(function(){
			if($(this).attr('rel') == 'boxed'){
				$.cookie("skin", 'boxed', {expires: 365, path: '/'});
			} else {
				$.cookie("skin", 'fullwidth', {expires: 365, path: '/'});
			}
		});
	});

		
	/* ---------------------------------------------------------------------- */
	/*	Contact Map
	/* ---------------------------------------------------------------------- */

	var contact = {"lat":"51.521481", "lon":"-0.087976"}; //Change a map coordinate here!

	try {
		var create_map = function() {
			$('#map').remove();
			$('#contact .row-fluid').before('<div id="map"></div>');

			$('#map').gmap3({
		        action: 'addMarker',
		        latLng: [contact.lat, contact.lon],
		        map:{
		        	center: [contact.lat, contact.lon],
		        	zoom: 14
		       		},
		        },
		        {action: 'setOptions', args:[{scrollwheel:true}]}
			);
		}
	} catch(err) {

	}
	$('#map').ready(function(){
		create_map();
	});

	
});