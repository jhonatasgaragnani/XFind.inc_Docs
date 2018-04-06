	
	jQuery(document).ready(function($) {
	"use strict";
	$("a.fancy,a.iframe").fancybox({
	'titleShow'     : false,
	'showCloseButton': true,
	'overlayShow' : true
	});
var sticky_navigation_offset_top = $('#header').offset().top;
var sticky_navigation = function(){
var scroll_top = $(window).scrollTop();
if(scroll_top>sticky_navigation_offset_top){ 
/*jshint smarttabs: true */
$('#header').removeClass('bg');
$('#header').addClass('scroll');
$("link#menu-b").attr("href",'css/menu-b.css');
}else{
$('#header').removeClass('scroll');
$('#header').addClass('bg');
$("link#menu-b").attr("href",' ');
}
};
sticky_navigation();
$(window).scroll(function(){
sticky_navigation();
});

var sticky_option = $('#demopanel').offset().top;
/*jshint smarttabs: true */
	// our function that decides weather the navigation bar should have "fixed" css position or not.
	 var sticky_opt = function(){
		var scroll = $(window).scrollTop(); // our current vertical position from the top
		
		// if we've scrolled more than the navigation, change its position to fixed to stick to top, otherwise change it back to relative
		if (scroll> sticky_option){ 
			
			$('#demopanel').css('position','fixed');
			$('#demopanel').css('top','105px');

		}else{
		
			$('#demopanel').css('position','absolute');
			$('#demopanel').css('top','190px');
			
		}};

	// run our function on load
	sticky_opt();
	// and run it again every time you scroll
	$(window).scroll(function() {
		sticky_opt();

	});		

	//tabs 
	$("ul.tabs").tabs("div.panes > div");

		//accordion
		 $(".accordion").tabs(
				".accordion div.pane",
			{tabs: 'a', effect: 'slide', initialIndex:0}
			);
		
		
		
		
		
		
		//menu call		
		$('ul.sf-menu li a').hover(function(){
		
				$(this).addClass('active-b');
				
			},function(){
		
				$(this).removeClass('active-b');
		
		});
		
		
		
				// TinyNav.js 1
	$('.sf-menu').tinyNav();
	
		
		$('ul.sf-menu').superfish({
			delay : 200,
			autoArrows :false,
			speed:         'normal', 
			disableHI:     false
		});
		

		


/* Tabs */

$(".tab_content").hide(); //Hide all content
$("ul.tabs li:first").addClass("active").show(); //Activate first tab

$(".tab_content").filter(':first').show(); //Show first tab content


$("ul.tabs li").click(function() {

	$("ul.tabs li").removeClass("active"); //Remove any "active" class
	$(this).addClass("active"); //Add "active" class to selected tab
	$(".tab_content").hide(); //Hide all tab content

	var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
	$(activeTab).fadeIn(); //Fade in the active ID content
	return false;
});
		
		
		
/*toogle*/

$(".toggle_container").hide(); 

$(".toggle_trigger").click(function(){
	$(this).toggleClass("toggle_active").next().slideToggle("fast");
		
	$(this).find('toggle_active span').addClass('icon-minus-sign');
	return false;

		
});
		



	"use strict";	
/* 	$('.toggle_trigger').find('span').addClass('icon-plus-sign');
 */	
	
	$('.toggle_trigger').click(function(){
	
		
	});

	
	$('.accordion>a.current').find('span').addClass('icon-minus-sign');
	
		$('.accordion a').click(function(){
		
		
			$('.accordion a').find('span').removeClass('icon-minus-sign');
			$('.accordion a').find('span').addClass('icon-plus-sign');
			
			$('.accordion a.current').find('span').removeClass('icon-plus-sign');
			$('.accordion a.current').find('span').addClass('icon-minus-sign');
		
	});
	
	
	//auto clear for  input box

	$('.autoclear').click(
	function() {
	if ( this.value === this.defaultValue ) {
	this.value = '';
	} 
	});
	
	$('.autoclear').blur(
	function() {
	if (this.value === '') {
	this.value = this.defaultValue;
	}
	}
	);



/* Contact Form */
	
	$('#send_message').click(function(e){
	
        e.preventDefault();
        var error = false;
        var name = $('#name').val();
        var email = $('#email_form').val();
        var message = $('#message').val();
			/*jshint unused:true, eqnull:true */	
        if(name.length === 0){
                error = true;
                $('#name').css("border", "solid 1px #dc5948") ;
            }else{
                $('#name').css("border", "solid 1px #efefef") ;
            }
            if(email.length === 0 || email.indexOf('@') === -1){
                error = true;
                 $('#email_form').css("border", "solid 1px #dc5948") ;
            }else{  
				
                $('#email_form').css("border", "solid 1px #efefef") ;
            }
            if(message.length === 0){
                error = true;
				$('#message').css("border", "solid 1px #dc5948") ;
            }else{                   
                $('#message').css("border", "solid 1px #efefef") ;
            }
			
			if(error === true)
			{
				$('#errors').show();
				$('#mail_sucess').hide();
				$('#mail_fail').hide();
			}
			
            
        if(error === false){
			$('#send_message').attr({'disabled' : 'true', 'value' : 'wait' });

            /* using the jquery's post(ajax) function and a lifesaver
            function serialize() which gets all the data from the form
            we submit it to send_email.php */
            $.post("js/php/send_email.php", $("#contact_form").serialize(),function(result){
				if(result === 'sent'){
					$('#errors').hide();
					$('#send_message').remove();
                    $('#mail_success').fadeIn(500);
					$('#mail_fail').hide();
                }else{
					$('#mail_fail').fadeIn(500);
					$('#errors').hide();
                    $('#send_message').removeAttr('disabled').attr('value', 'Sent');
                }
            });
        }
    });

	

/**************************** Footer contact Form ***************************/
	
	$('#send').click(function(e){
	
        e.preventDefault();
        var error = false;
        var bottomsg = $('#footmessage').val();
	
     
            if(bottomsg.length === 0){
                error = true;
				$('#footmessage').css("border", "solid 1px #dc5948") ;
            }else{                   
                $('#footmessage').css("border", "solid 1px #efefef") ;
            }
			
			if(error === true)
			{
				$('#errors').show();
				$('#mail_sucess').hide();
				$('#mail_fail').hide();
			}
			
            
        if(error === false){
			$('#send').attr({'disabled' : 'true', 'value' : 'wait' });

            /* using the jquery's post(ajax) function and a lifesaver
            function serialize() which gets all the data from the form
            we submit it to send_email.php */
            $.post("js/send.php", $("#footermsg").serialize(),function(result){
				if(result === 'sent'){
					$('#errors').hide();
					$('#send').remove();
                    $('#mail_s').fadeIn(500);
					$('#mail_f').hide();
                }else{
					$('#mail_f').fadeIn(500);
					$('#errors').hide();
                    $('#send').removeAttr('disabled').attr('value', 'Sent');
                }
            });
        }
    });
	

	
/* *************************** quick sand jquery ****************************/

// Custom sorting plugin
	// bind radiobuttons in the form
	var $filterType = jQuery('#filter a');
	// get the first collection
	var $list = jQuery('#portfolio-sorting');
	// clone applications to get a second collection
	var $data = $list.clone();
	jQuery('#filter>a:first-child').addClass('current_link');
	$filterType.click(function() {
			var $sortedData;
		if (jQuery(this).attr('class') === 'every') {
		  $sortedData = $data.find('li');
		} else {
			$sortedData = $data.find('.'+ jQuery(this).attr('class'));
		}	
		jQuery('#filter a').removeClass('current_link');
		jQuery(this).addClass('current_link');
			
		$list.quicksand($sortedData, {
		  attribute: 'id',
		  duration: 800,
		  easing: 'easeInOutQuad',
		  useScaling: 'false',
		   adjustHeight: 'auto'
		   },function(){
				$('.da-thumbs > li >div.wrapper>.main').each( function() { $(this).hoverdir(); } );

		   });

		   return false;

		});
		
				
			

	/*///////////////////////////////////////////////////////////////////////
Ported to jquery from prototype by Joel Lisenby (joel.lisenby@gmail.com)
http://joellisenby.com

original prototype code by Aarron Walter (aarron@buildingfindablewebsites.com)
http://buildingfindablewebsites.com

Distrbuted under Creative Commons license
http://creativecommons.org/licenses/by-sa/3.0/us/
///////////////////////////////////////////////////////////////////////*/

	function ajax_newsletter() {
		// update user interface
		$('#response').html('Adding email address...');
		
		// Prepare query string and send AJAX request
		$.ajax({
			url: 'js/php/store-address.php',
			data: 'ajax=true&email=' + escape($('#email').val()),
			success: function(msg) {
				$('#response').html('You have been Subscribe');
			}
		});
		return false;
	
	}
	
	
		
	$('#submit').click(function(e) {
		
		e.preventDefault();
		
		var er =false;
		
		var mes = $('#email').val();
		

var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i

		if(!pattern.test(mes))
		{
                er = true;
				$('#response').html('Enter Valid email');
                 $('#email').css("border", "solid 1px #dc5948") ;
        }
		else {
		ajax_newsletter();
		   $('#email').css("border", "solid 1px #ddd") ;
		}
	});
	
	
	


			
}); // end of document ready 