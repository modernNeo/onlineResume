$(document).ready(function(){
  // Add scrollspy to <body>
	//$('body').scrollspy({target: ".navbar", offset: 50});   

	// Add smooth scrolling on all links inside the navbar
	$("#myNavbar a").on('click', function(event) {
		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		}  // End if
	});

	/*
	$( ".mr-auto .nav-item" ).bind( "click", function(event) {
		event.preventDefault();
		var clickedItem = $( this );
		$( ".mr-auto .nav-item" ).each( function() {
			$( this ).removeClass( "active" );
		});
		clickedItem.addClass( "active" );
	});
	*/


	//pulled from https://stackoverflow.com/a/41630305
	//used to update which nav bar is lit up when scrolling through the sections
	$(window).on('scroll', function(event){
		var scrollPos = $(document).scrollTop();
		$(".nav li a").each(function () {
			var currLink = $(this);
			var refElement = $(currLink.attr("href"));

			if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
				currLink.parent().addClass("active"); 
				return;
			}else{
				currLink.parent().removeClass("active");
			}
		})
	})

});