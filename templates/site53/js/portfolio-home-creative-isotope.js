	//jQuery Document Ready
	$(window).load(function() {
		// init Isotope
		var $container = $('#isotope-container-creative').isotope({
			itemSelector: '.item',
			layoutMode: 'masonry',
			masonry: {
				gutter: 30
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
		// bind filter button click
		$('#filters ul li a').click(function(){
			
			/*-- active filter button --*/
			$('#filters ul li a.active-filter').removeClass('active-filter');
			$(this).addClass('active-filter');
			
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
			});
			return false;
			
		});
		
		//browser select
		if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) 
		{
			$('.details-link-info').css({"top":"0","margin-top":"45%"});
			
			if ($(window).width() <= 767) {
				$('.details-link-info').css({"top":"0","margin-top":"45%"});
			}
		};
	});