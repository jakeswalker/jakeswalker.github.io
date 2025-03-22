//========== scroll hide nav ==========//
var $header = $('header');
var lastScrollTop = 0;
var headerHidden = false;
var headerHeight = $header.outerHeight();

if ($(window).scrollTop() > headerHeight) {
	$header.css("top", "-100px");
	headerHidden = true;
}

$(window).scroll(function(e) {
	var currentScrollTop = $(this).scrollTop();

	// up scroll
	if (currentScrollTop < lastScrollTop) {
		if (headerHidden) {
			// show nav
			$header
				.not(':animated')
				.animate({
					"top": "0px"
				}, 300, "easeOutQuart", function(){
					// animation complete
					headerHidden = false;
				});
		}
	}
	// down scroll
	else {
		if (!headerHidden) {
			// hide nav
			if (currentScrollTop > lastScrollTop && currentScrollTop > headerHeight) {
				$header
					.not(':animated')
					.animate({
						"top": "-100px"
					}, 300, "easeOutQuart", function(){
						// animation complete
						headerHidden = true;
					});
			}
		} 
	}
	lastScrollTop = currentScrollTop;
});

//========== horizontal toggle menu ==========//
var $body = $('body');
var $outer = $('.outer');
var $outerChild = $outer.find('*');
var $tmContainer = $('.tmContainer');
var $toggleButton = $('.toggleButton');
var toggleMenuOpen = false;

// open menu
$toggleButton.on('click', function(e){
	e.preventDefault();
	if (!toggleMenuOpen) {
		$body.css("overflow", "hidden");
		$tmContainer.css({
			"display": "inline-block",
			"position": "fixed",
			"top": "0px"
		});
		$outer
			.not(':animated')
			.animate({
				"margin-left": "-230px"
			}, 200, "easeInOutCirc", function(){
				//animation complete
				$outerChild
					.css("pointer-events", "none");
				toggleMenuOpen = true;
			});
	}
});

// close menu
$outer.on('click', function(e){
	if (toggleMenuOpen) {
		$outer
			.not(':animated')
			.animate({
				"margin-left": "0px"
			}, 200, "easeInOutCirc", function(){
				// animation complete
				$body.css("overflow", "auto");
				$tmContainer.css({
					"display": "none",
					"position": "absolute"
				});
				$outerChild.css("pointer-events", "auto");
				toggleMenuOpen = false;
			});
	}
});

// remove toggleMenu when resized
$(window).resize(function() {

	if (toggleMenuOpen) {
		var $screenWidth = $(this).width();
		if ($screenWidth > 900) {
			$outer.css("margin-left", "0px");
			$body.css("overflow", "auto");
			$tmContainer.css("display", "none");
			$outerChild.css("pointer-events", "auto");
			toggleMenuOpen = false;
		}
	}
});
