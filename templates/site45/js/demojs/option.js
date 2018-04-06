	jQuery(document).ready(function($) {


/********** Demo option script you can remove **********/


var fonts= new Array(
'Allan',
'Allerta',
'Allerta Stencil',
'Anonymous Pro',
'Arimo',
'Arvo',
'Bentham',
'Buda',
'Cabin',
'Calligraffitti',
'Cantarell',
'Cardo',
'Cherry Cream Soda',
'Chewy',
'Coda',
'Coming Soon',
'Copse',
'Corben',
'Cousine',
'Covered By Your Grace',
'Crafty Girls',
'Crimson Text',
'Crushed',
'Cuprum',
'Droid Sans',
'Droid Sans Mono',
'Droid Serif',
'Fontdiner Swanky',
'GFS Didot',
'GFS Neohellenic',
'Geo',
'Gruppo',
'Hanuman',
'Homemade Apple',
'IM Fell DW Pica',
'IM Fell DW Pica SC',
'IM Fell Double Pica',
'IM Fell Double Pica SC',
'IM Fell English',
'IM Fell English SC,IM Fell English SC',
'IM Fell French Canon',
'IM Fell French Canon SC',
'IM Fell Great Primer',
'IM Fell Great Primer SC',
'Inconsolata',
'Irish Growler',
'Josefin Sans',
'Josefin Slab',
' Just Another Hand',
'Just Me Again Down Here',
'Kenia',
'Kranky',
'Kristi',
'Lato',
'Lekton',
'Lobster,Lobster',
'Luckiest Guy',
'Merriweather',
'Molengo',
'Mountains of Christmas',
'Neucha',
'Neuton',
'Nobile',
'OFL Sorts Mill Goudy TT',
'Old Standard TT',
'Orbitron',
'PT Sans',
'PT Sans Caption',
'PT Sans Narrow',
'Permanent Marker,Permanent Marker',
'Philosopher,Philosopher',
'Puritan',
'Raleway',
'Reenie Beanie',
'Rock Salt',
'Schoolbell',
'Slackey',
'Sniglet',
'Sunshiney',
'Syncopate',
'Tangerine',
'Tinos',
'Ubuntu',
'UnifrakturCook',
'UnifrakturMaguntia',
'Unkempt,Unkempt',
'Vibur',
'Vollkorn',
'Walter Turncoat',
'Yanone Kaffeesatz'
); 
	
var values= new Array(
'Allan',
'Allerta',
'Allerta+Stencil',
'Anonymous+Pro',
'Arimo',
'Arvo',
'Bentham',
'Buda',
'Cabin',
'Calligraffitti',
'Cantarell',
'Cardo',
'Cherry+Cream+Soda',
'Chewy',
'Coda',
'Coming+Soon',
'Copse',
'Corben',
'Cousine',
'Covered+By+Your+Grace',
'Crafty+Girls',
'Crimson+Text',
'Crushed',
'Cuprum',
'Droid+Sans',
'Droid+Sans+Mono',
'Droid+Serif',
'Fontdiner+Swanky',
'GFS+Didot',
'GFS+Neohellenic',
'Geo',
'Gruppo',
'Hanuman',
'Homemade+Apple',
'IM Fell+DW+Pica',
'IM Fell+DW+Pica+SC',
'IM Fell+Double+Pica',
'IM Fell+Double+Pica+SC',
'IM Fell+English',
'IM Fell+English+SC,IM Fell English SC',
'IM Fell+French+Canon',
'IM Fell+French+Canon+SC',
'IM Fell+Great+Primer',
'IM Fell+Great+Primer+SC',
'Inconsolata',
'Irish+Growler',
'Josefin+Sans',
'Josefin+Slab',
' Just+Another+Hand',
'Just+Me+Again+Down+Here',
'Kenia',
'Kranky',
'Kristi',
'Lato',
'Lekton',
'Lobster',
'Luckiest+Guy',
'Merriweather',
'Molengo',
'Mountains+of+Christmas',
'Neucha',
'Neuton',
'Nobile',
'OFL+Sorts+Mill+Goudy+TT',
'Old+Standard+TT',
'Orbitron',
'PT+Sans',
'PT+Sans+Caption',
'PT+Sans+Narrow',
'Permanent+Marker',
'Philosopher',
'Puritan',
'Raleway',
'Reenie+Beanie',
'Rock+Salt',
'Schoolbell',
'Slackey',
'Sniglet',
'Sunshiney',
'Syncopate',
'Tangerine',
'Tinos',
'Ubuntu',
'UnifrakturCook',
'UnifrakturMaguntia',
'Unkempt',
'Vibur',
'Vollkorn',
'Walter+Turncoat',
'Yanone+Kaffeesatz'
); 
	var j=0;
	$.each(fonts, function(i, item) {
$('select.lfonts').append('<option value="'+ values[j] +'">' + item + '</option>');
$('select.hfonts').append('<option value="'+ values[j] +'">' + item + '</option>');
$('select.bodyfont').append('<option value="'+ values[j] +'">' + item + '</option>');

/* $('select').eq(2).append('<option value="'+ values[j] +'">' + item + '</option>');

$('select').eq(3).append('<option value="'+ values[j] +'">' + item + '</option>'); */

		j++;
		});
		
		
	for(var i=10;i<=20;i++){
	
	$('select.bfontsize').append('<option value="'+i+'">'+i+'</option>');
	
	}
	
	

$("select.lfonts").on("change", function() {
  var font =$(this).val();
  var fonttext = $("select.lfonts option:selected").text();
  $("#header.bg h3").css('font-family',fonttext);
  $("#header.scroll h3").css('font-family',fonttext);
  $("link#lfonts").attr("href" ,'http://fonts.googleapis.com/css?family=' +font);
 
});	
	

$("select.hfonts").on("change", function() {
  var font =$(this).val();
  var fonttext = $("select.hfonts option:selected").text();
  $("link#hfonts").attr("href" ,'http://fonts.googleapis.com/css?family=' +font);

  $('h1,h2,h3,h4,h5,h6').css('font-family',fonttext);
 
});
		
		
$("select.bodyfont").on("change", function() {

  var bfont= $(this).val();
  var bhfont= $("select.bodyfont option:selected").text();
  
$("link#bodyfonts").attr("href" ,'http://fonts.googleapis.com/css?family=' +bfont);

$('body').css('font-family',bhfont);
$('p').css('font-family',bhfont);
  
  
});		
		

 $("select.bfontsize").on("change", function() {
  var bfont= $("select.bfontsize option:selected").text();
 $('p').css('fontSize', bfont+'px');
 $('body').css('fontSize', bfont+'px');
 });
 
 
$('.color-skin li').click(function() {
		var pat = $(this).attr('class');
		$('style.color-pick').remove();
		$('link#skin').attr('href','css/skins/'+pat+'.css');
		
	});

		
		
		

		
		
/*
color Picker 
------------------------*/

$('#back').click(function(){
	if($(this).is(":checked")){
	
	$('body').css('background','none');
	$('.inner-heading h1').css('background','#fff');
	

	}
	
	else{
	$('body').css('background-image','url("./images/bg.png")');
	$('.inner-heading h1').css('background-image','url("./images/bg.png")');
	
	}
	
});
		


$('#colorSelector').ColorPicker({
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
/*jshint smarttabs: true */		
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb,hex) {
/*jshint bitwise: false*/		 
		var hexStr = '#'+hex;  // 190 ie bebebe
		var hex1 = parseInt(hexStr.substring(1), 16);
		var r = (hex1 & 0xff0000) >> 16;
		var g = (hex1 & 0x00ff00) >> 8;
		var b = hex & 0x0000ff;
		
	$("head").append("<style type=\"text/css\" charset=\"utf-8\" class='color-pick'>#header.bg,.sort a.current_link{background-color:#"+hex+";}.service-block:hover{background-color:#"+hex+"}section.social ul li a.facebook:hover{background:#"+hex+";}section.social ul li a.twitter:hover{background:#"+hex+";}section.social ul li a.google-plus:hover{background:#"+hex+";}.flex control-paging li a.flex-active{background:#"+hex+";}.da-thumbs li .main div{background-color:#"+hex+";}.recent-blog .containt:hover{background-color:#"+hex+";}.flex-control-paging li a.flex-active{background-color:#"+hex+";}.flex-control-paging li a:hover{background-color:#"+hex+";}#bx-pager{border-top:2px solid #"+hex+";}#bx-pager a.active:before{border-top-color:#"+hex+";}.bx-wrapper .bx-prev:hover{background-color:#"+hex+"}.bx-wrapper .bx-next:hover{background-color:#"+hex+"}#footer .footer-widget ul.list li a:before{background-color:#"+hex+";}#footer .footer-widget ul.list li a:hover:before{background-color:#"+hex+";color:#"+hex+";}#footer .footer-widget ul.list li a:hover,.node span,.accordion a span,.pricing_table_wdg ul li:hover,.pricing_table_wdg ul li span.active{color:#"+hex+";}.carousel .next:hover, .carousel .prev:hover,a.submit,.bottom-footer{background-color:#"+hex+";}.bx-wrapper li a span{color:#"+hex+";}#footer,#footer .footer-widget h4:before{border-top-color:#"+hex+";}.service-globe .circle_block span{color:#"+hex+";}.pricing_table_wdg ul li span.active,.pricing_table_wdg ul li:hover,{color:#"+hex+";}.stylish > span{background:#"+hex+";}.halfCircleBottom,.halfCircleright{border-color:#"+hex+";}div>a.read,.gallery.full-width .da-thumbs li .main div a.read{color:#"+hex+";}.nivo-controlNav a:hover,.nivo-controlNav a.active{background:#"+hex+";}.flex-caption.bottom .textp,.flex-caption.bottom .right .btcolor,.flex-caption.left .textp{background:#"+hex+";}.flex-caption.left .textp{color:#fff;}.flex-caption.left .btcolor{background:#"+hex+";}.flex-caption.bottom .textp:after{border-top-color:#"+hex+";}#send_message,#send{background:#"+hex+";}.circleright{border-top-color:#"+hex+";border-right-color:#"+hex+";border-bottom-color:#"+hex+";}a.active-button{background:#"+hex+";}.filter:hover,.filter.selected{background-color:#"+hex+";}.people span.post,.filter{color:#"+hex+";}.buttonred,.comment-cout,.ca-content-wrapper,.arrow-circle{background-color:#"+hex+";}.list li:hover span,span.drop,.post-info a span.icon-comment,.post-info a.post-read,ul.catagories li:hover a,ul.bullet-list li span,a.toggle_trigger span{color:#"+hex+";}.search input.submit,.mailchimp a,.blog-post:hover .post-contant,.widget-controls .flex-direction-nav li a:hover,.tags a:hover:after,.tags a:hover,ul.catagories li:hover span,.accordion a.current,.toggle_trigger.toggle_active,.tabs li a.current,.home-tab .tabs:after,.pricing_table_wdg ul.bestb li:last-child a,.pricing_table_wdg ul li:last-child:hover a{background-color:#"+hex+";}.pricing_table_wdg ul.bestb{border-color:#"+hex+";}div.usquare_square_bg1,div.usquare_square_bg2,div.usquare_square_bg3,div.usquare_square_bg4,div.usquare_square_bg5,div.usquare_square_bg6,div.usquare_square_bg7,div.usquare_square_bg8,div.usquare_square_bg9,.node span:hover,.contact-box.blue{background-color:#"+hex+";}.ca-content h6{color:#fff;}.newsletter-widget input#submit,span.big_button a,.service-block_2 .stylish > span,.service-content:hover,.service_content a.orange_button,a.orange_button{background:#"+hex+"}.red_form .minimal_form:after{border-top-color:#"+hex+";}.red_form .minimal_form,.style9.bg,.nivo-caption a.button-medium,.service-globe:hover .circle_block span{background:#"+hex+";}ul.sf-menu li a:hover{background:#"+hex+";}ul.sf-menu li li{background:#"+hex+";}ul.sf-menu li li:hover .icon span{color:#"+hex+";}ul.sf-menu .sfHover{background:#"+hex+";}ul.sf-menu li:hover ul,ul.sf-menu li.sfHover ul{	background:#fff;}ul.sf-menu li a:hover{color:#fff;background:#"+hex+";}ul.sf-menu li li {background:#"+hex+";}ul.sf-menu li li .icon{background:#fff;}ul.sf-menu li li:hover,ul.sf-menu li li a:focus, ul.sf-menu li li a:hover, ul.sf-menu li li a:active {background:#fff;}")} });
	

	
$('#logocolor').ColorPicker({
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb,hex) {
			$('#header.bg h3 a.logo').css('color','#'+hex);
			$('#header.scroll h3 a.logo').css('color','#'+hex);
		}
	});	
	
	
$('#colorSelector_inner').ColorPicker({
		color: 'r:255, r:0, b:0',
		onShow: function (colpkr) {
			$(colpkr).fadeIn(500);
			return false;
		},
		onHide: function (colpkr) {
			$(colpkr).fadeOut(500);
			return false;
		},
		onChange: function (hsb,hex) {
			$('.tweet_roll a,.sidebar_tabs ul li a,.toggles a,.sorting a.current_link').css('color','#' +hex);
		}
	});


$('.pattern li').click(function() {
		$('body').css('background-image','none');
		var pat = $(this).css('background-image');
		$('style.color').remove();
		$('body').css('background-image',pat);
		$('.inner-heading h1').css('background-image',pat);
		

	});

$("div.panel_button").click(function(){
		$("div#panel").animate({
			left: "0"
		}, "fast");
		$(".panel_button").animate({
			left: "320px"
		}, "fast");
		$("div.panel_button").toggle();
});	
	
$("div.hide_button").click(function(){
	$("div#panel").animate({
		left: "-310px"
	}, "fast");
	$(".panel_button").animate({
		left: "10px"
	}, "fast");
});



		
});