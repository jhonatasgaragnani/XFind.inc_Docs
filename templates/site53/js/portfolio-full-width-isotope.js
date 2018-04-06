	//jQuery Document Ready
	$(window).load(function() {
		
		// quick search regex
		var qsRegex;
		
		// init Isotope
		var $container = $('#isotope-container-space').isotope({
			itemSelector: '.item',
			layoutMode: 'masonry',
			/*-- search filter --*/
			filter: function() {
			  return qsRegex ? $(this).text().match( qsRegex ) : true;
			},
			transitionDuration: '0.8s',
			// only opacity for reveal/hide transition
			hiddenStyle: {
			  opacity: 0
			},
			visibleStyle: {
			  opacity: 1
			}
		});
		// use value of search field to filter
		var $quicksearch = $('#quicksearch').keyup( debounce( function() {
			qsRegex = new RegExp( $quicksearch.val(), 'gi' );
			$container.isotope();
		}, 200 ) );
		
		// debounce so filtering doesn't happen every millisecond
		function debounce( fn, threshold ) {
		  var timeout;
		  return function debounced() {
			if ( timeout ) {
			  clearTimeout( timeout );
			}
			function delayed() {
			  fn();
			  timeout = null;
			}
			timeout = setTimeout( delayed, threshold || 100 );
		  }
		}
		// bind filter button click
		$('#filters ul li a').click(function(){
			
			/*-- active filter button --*/
			$('#filters ul li a.active-button').removeClass('active-button');
			$(this).addClass('active-button');
			
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
			});
			return false;
			
		});
		
		//browser select
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) 
		{
			$('.portfolio-title').css('top','8%');
			$('.details-link').css('top', '8%');
			
			if ($(window).width() <= 767) {
				$('.portfolio-title').css('top','3%');
				$('.details-link').css('top', '3%');
			}
		};
	});