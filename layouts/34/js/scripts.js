jQuery(document).ready(function($) {
  "use strict";
  
  $('.map-click').on('click', function(e){
    $('#map1').slideToggle();
  })

	try {
			
		var owl = $('.slider-carousel').owlCarousel({
			items: 1,
			navigation : false,
			navigationText: true,
			pagination: false,
			autoPlay: false,
			itemsCustom: [[1300,1], [768,1], [600,1],[480,1],[320,1]],
			slideSpeed: 1000,

		});
	}
	catch(e) {
		console.log(e.message);
	}

    try {
      
    var owl = $('.tweets-carousel').owlCarousel({
      items: 1,
      navigation : false,
      navigationText: true,
      pagination: true,
      autoPlay: false,
      itemsCustom: [[1300,1], [768,1], [600,1],[480,1],[320,1]],
      slideSpeed: 1000,

    });
  }
  catch(e) {
    console.log(e.message);
  }

   try {

    new Morris.Area({
            element: 'area-example',
              data: [
            { y: '2010', a: 100, b: 90 },
            { y: '2011', a: 75,  b: 65 },
            { y: '2012', a: 100, b: 90 }
          ],
          xkey: 'y',
          ykeys: ['a', 'b'],
          labels: ['Series A', 'Series B']
        });

      }

       catch(e) {
        console.log(e.message);
      }

      try {

        $('.filter-content').mixItUp( {
          effects: ['fade', 'blur'],
          callbacks : {
            onMixEnd : function(state){
              
              var show_lenght = state.$show.length;
              console.log(show_lenght);
              var current_filter = state.activeFilter;
              $('.filter-option .filter > span').remove();
              $('.filter-option li.filter.active').append('<span>('+show_lenght+')</span>');
            }
          }
        });
        //var mix_state = $('.filter-content').mixitup('getState');
        //console.log(mix_state);
        $('.filter-option .filter').on('click', function(){

        });
      }
      catch(e) {
        console.log(e.message);
      }


       try {
      
          var owl = $('.testi-carousel').owlCarousel({
            items: 1,
            navigation : true,
            navigationText: false,
            pagination: true,
            autoPlay: false,
            itemsCustom: [[1300,1], [768,1], [600,1],[480,1],[320,1]],
            slideSpeed: 1000,
            vertical:true,
            size: 2 //Change to match total number of rows.

    });
      }
      catch(e) {
        console.log(e.message);
      }

      try {
      
          var owl = $('.clients-carousel').owlCarousel({
            items: 1,
            navigation : true,
            navigationText: false,
            pagination: true,
            autoPlay: false,
            itemsCustom: [[1300,1], [768,1], [600,1],[480,1],[320,1]],
            slideSpeed: 1000,
            vertical:true,
            size: 2 //Change to match total number of rows.

    });
      }
      catch(e) {
        console.log(e.message);
      }

       try {
      
          var owl = $('.pro-single-carousel').owlCarousel({
            items: 1,
            navigation : true,
            navigationText: false,
            pagination: true,
            autoPlay: false,
            itemsCustom: [[1300,1], [768,1], [600,1],[480,1],[320,1]],
            slideSpeed: 1000,
            vertical:true,
            size: 2 //Change to match total number of rows.

    });
      }
      catch(e) {
        console.log(e.message);
      }

      
      try {
          
            $('.scroll-content').imagesLoaded( function() {
              // images have loaded

                //scrollpane parts
            var scrollPane = $( ".scroll-pane" ),
              scrollContent = $( ".scroll-content" ),
              scrollWidth = scrollContent.width(),
              devision = $(window).width() < 500 ? 1 : 3;
              console.log($(window).width());
              scrollContent.children().width(scrollWidth / devision);
              
              scrollPane.height(scrollContent.children().height() + 60);
              scrollWidth = 0;
            scrollContent.children().each(function(i, el){
              scrollWidth += $(this).width();
            });
            console.log(scrollContent.children().width());
            scrollContent.width(scrollWidth);
            scrollPane.mCustomScrollbar({
              theme:"minimal",
              scrollbarPosition: 'outside',
              axis: 'xy',
            });
              
              });
           
          }

      catch(e) {
        console.log(e.message);
      }


      try {


       
             $(".dial").knob({
         'format' : function (value) {
           return value + '%';
      }
        });
     
      }
      catch(e) {
        console.log(e.message);
      }




});




  try {
    //google-map
    function initialize() {
      "use strict";

      var locations = [
                ['<div class="infobox">121 King Street, Melbourne Victoria 3000<br />United States of America, CA 90017</div>', 40.5458921,-74.1843522, 2]
                     //['<div class="infobox"><h4>TRANSPORTER<i class="fa fa-star-o"></i></h4><div class="pull-left"><p class="brown">255 Church Cross Street <br>Victoria Australia 3000</p><p class="brown">Transporters.org.Aus</p><p class="brown"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><span>64 reviews</span></p></div><div class="pull-right"><img src="images/69.jpg" alt="#" class="img-responsive"></div><div class="clearfix"></div> <ul class="list-unstyled list-inline"><li><a href="#">Directions</a></li> <li><a href="#">Search nearby</a></li><li><a href="#">Save to map</a></li> <li ><div class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">More<i class="fa fa-caret-down"></i> </a><ul class="dropdown-menu" role="menu"><li><a href="#">More1</a></li> <li><a href="#">More2</a></li><li><a href="#">More3</a></li></ul></div></li></ul></div>', 39.5458921, -75.1843522],
                     // ['<div class="infobox"><h4>TRANSPORTER<i class="fa fa-star-o"></i></h4><div class="pull-left"><p class="brown">255 Church Cross Street <br>Victoria Australia 3000</p><p class="brown">Transporters.org.Aus</p><p class="brown"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><span>64 reviews</span></p></div><div class="pull-right"><img src="images/69.jpg" alt="#" class="img-responsive"></div><div class="clearfix"></div> <ul class="list-unstyled list-inline"><li><a href="#">Directions</a></li> <li><a href="#">Search nearby</a></li><li><a href="#">Save to map</a></li> <li ><div class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">More<i class="fa fa-caret-down"></i> </a><ul class="dropdown-menu" role="menu"><li><a href="#">More1</a></li> <li><a href="#">More2</a></li><li><a href="#">More3</a></li></ul></div></li></ul></div>', 38.5458921, -76.1843522]
              ];
      var mapCanvas = document.getElementById('map-street');
      var mapOptions = {
        center: new google.maps.LatLng(40.5458921, -74.1843522),
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "labels.text",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#46484e"
            },
            {
                "lightness": 17
            }
        ]
    }
]
      }
      var map = new google.maps.Map(mapCanvas, mapOptions);

      var infowindow = new google.maps.InfoWindow();

      var marker, i;

        for (i = 0; i < locations.length; i++) {  

          marker = new google.maps.Marker({ 
            position: new google.maps.LatLng(locations[i][1], locations[i][2]), 
            map: map ,
            icon: 'images/marker.png'
          });

          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
      }
    }

    google.maps.event.addDomListener(window, 'load', initialize);
  } catch(e) {
    console.log( 'google map error' );
  }
