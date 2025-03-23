var $body = $('body');
var $outer = $('.outer');
var $outerChild = $outer.find('*');
var $toggleButton = $('.toggleButton');
var toggleMenuOpen = false;

// open menu
$toggleButton.on('click', function(e){
	e.preventDefault();
	if (!toggleMenuOpen) {
		$body.css("overflow", "hidden");
		var $screenWidth = $(window).width();
				if ($screenWidth > 900) {
					$outer
						.not(':animated')
						.animate({
							"margin-left": "-300px"
						}, 200, "easeInOutCirc", function(){
							//animation complete
							$outerChild
								.css("pointer-events", "none");
							toggleMenuOpen = true;
						});
				}
				else {
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
				$outerChild
					.css("pointer-events", "auto");
				toggleMenuOpen = false;
			});
	}
});

// change margin when resized
$(window).resize(function() {
	if (toggleMenuOpen) {
		var $screenWidth = $(this).width();
		if ($screenWidth > 900) {
			$outer.css("margin-left", "-300px");
		}
		else {
			$outer.css("margin-left", "-230px");
		}
	}
});
