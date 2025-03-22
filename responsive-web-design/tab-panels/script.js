//========== tab panel ==========//
var $link = $('.tabs a');
var $tabPanel = $('.tabPanel');
var lastActiveLink;

$link
	.on('mouseenter', function(){
		var $this = $(this);
		var $panel = $($this.attr('href'));

		// if there's an active
		if ($link.hasClass('active')) {
			var $activeLink = $('.tabs .active');
			var $activePanel = $($activeLink.attr('href'));

			// if it's not already active
			if (!$this.hasClass('active')) {
				$activeLink.removeClass('active');
				$activePanel.removeClass('active');

				$this.addClass('active');
				$panel.addClass('active');

				lastActiveLink = $activeLink;
			}
		}
		// if there's no active at all
		else {
			$this.addClass('active');
			$panel.addClass('active');

			lastActiveLink = $this;
		}
	})
	.on('mouseleave', function(){
		var $activeLink = $('.tabs .active');
		var $activePanel = $($activeLink.attr('href'));

		$activeLink.removeClass('active');
		$activePanel.removeClass('active');
	});

$tabPanel
	.on('mouseenter', function(){
		var $activeLink = lastActiveLink;
		var $activePanel = $($activeLink.attr('href'));

		$activeLink.addClass('active');
		$activePanel.addClass('active');
	})
	.on('mouseleave', function(){
		var $activeLink = lastActiveLink;
		var $activePanel = $($activeLink.attr('href'));

		$activeLink.removeClass('active');
		$activePanel.removeClass('active');
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
		$tmContainer.css("display", "inline-block");
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
				$tmContainer.css("display", "none");
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

//========== accordion ==========//
$('.accordionButton').on('click', function(e){
	e.preventDefault();

	var $accordionButton = $(this);
	var $accordionPanel = $accordionButton.next('.accordionPanel');
	var $arrow = $accordionButton.find('.fa')
	var $parent = $accordionPanel.parent('li');

	// change arrow
	if (!$accordionPanel.is(':animated')) {
		if ($accordionPanel.is(':hidden')) {
			$arrow.removeClass('fa-chevron-down');
			$arrow.addClass('fa-chevron-up')
		}
		else {
			$arrow.removeClass('fa-chevron-up');
			$arrow.addClass('fa-chevron-down')
		}
	}

	// animate accordionPanel
	$accordionPanel
		.not(':animated')
		.slideToggle(200, function(){

		});
});
