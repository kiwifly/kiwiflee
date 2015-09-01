
var events = {

	nav_toggle: function(e) {
		if (!Modernizr.touch) {
	    if ($(this).scrollTop() > 550) {
	        $('nav.home').slideDown();
	    } else { 
	        $('nav.home').hide();
	    }
    }
	}

}

$(document).ready(function() {	

  $('body.page-template-home-template-php').backstretch("http://milkandpixels.com/wp-content/themes/milkandpixels/images/dumbo.jpg");
  
  events.nav_toggle();

	if (Modernizr.touch){
		window.scrollTo(0,1);
	}
	
	$('body').delegate('section', 'waypoint.reached', function(event, direction) {
		var $active = $(this);

		if (direction === "up") {
			$active = $active.prev();
		}
		if (!$active.length) $active = $active.end();
		
		$('.section-active').removeClass('section-active');
		$active.addClass('section-active');
		
		$('.nav-links .active').removeClass('active');
		$('a[href=#'+$active.attr('id')+']').addClass('active');
	});
	
	$('section').waypoint({ offset: '50%' });

	// Wicked credit to
	// http://www.zachstronaut.com/posts/2009/01/18/jquery-smooth-scroll-bugs.html
	var scrollElement = 'html, body';
	$('html, body').each(function () {
		var initScrollTop = $(this).attr('scrollTop');
		$(this).attr('scrollTop', initScrollTop + 1);
		if ($(this).attr('scrollTop') == initScrollTop + 1) {
			scrollElement = this.nodeName.toLowerCase();
			$(this).attr('scrollTop', initScrollTop);
			return false;
		}    
	});
	
	// Smooth scrolling for internal links
	$(".scroll-it").click(function(event) {
		event.preventDefault();
		$('.nav-links a').removeClass('active');
		$(this).addClass('active');
		var $this = $(this),
		target = this.hash,
		$target = $(target);
		
		$(scrollElement).stop().animate({
			'scrollTop': $target.offset().top - 30
		}, 500, 'swing', function() {
			history.pushState(null, null, target);
		});
	});
});


$(window).scroll( $.throttle( 50, events.nav_toggle ) ); 

// Check if browser supports HTML5 input placeholder
function supports_input_placeholder() {
	var i = document.createElement('input');
	return 'placeholder' in i;
}

// Change input text on focus
if (!supports_input_placeholder()) {
	$(':text').focus(function(){
		var self = $(this);
		if (self.val() == self.attr('placeholder')) self.val('');
	}).blur(function(){
		var self = $(this), value = $.trim(self.val());
		if(val == '') self.val(self.attr('placeholder'));
	});
} else {
	$(':text').focus(function(){
		$(this).css('color', '#000');
	});
}