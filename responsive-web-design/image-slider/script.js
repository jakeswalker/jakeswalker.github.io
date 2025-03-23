var $slider = $('.slider');
var $slides = $('.slides');
var $slide = $slides.find('.slide');
var $sLButton = $('#sLButton');
var $sRButton = $('#sRButton');
var slideTimer;
var currentSlide = 1;

// start slider
function startSlider(){
	slideTimer = setInterval(function(){

		if (currentSlide == $slide.length) {
			currentSlide = 1;
			$slides.css("margin-left", "0px");
		}

		var slideWidth = $slide.width();
		var marginLeft = -slideWidth * currentSlide;
		currentSlide++;

		$slides
			.not(':animated')
			.animate({
				"margin-left": marginLeft
			}, 600, "easeOutQuart", function(){
				// animation complete
			});
	}, 4000);
}

// stop slider
function stopSlider(){
	clearInterval(slideTimer);
}
	
// slide button left
$sLButton.on('click', function(e){
	e.preventDefault();

	if ($slides.is(':animated')) {
		$slides.stop();
	}
		
	stopSlider();
	currentSlide--;

	var slideWidth = $slide.width();
	var lastSlide = $slide.length - 1;

	if (currentSlide === 0) {
		var lastMarginLeft = -slideWidth * lastSlide;
		currentSlide = lastSlide;
		$slides.css("margin-left", lastMarginLeft);
	}

	var totalSlidesWidth = slideWidth * lastSlide;
	var distance = $slide.length - currentSlide;
	var marginLeft = (distance * slideWidth) -totalSlidesWidth;

	$slides
		.animate({
			"margin-left": marginLeft
		}, 600, "easeOutQuart", function(){
			// animation complete
			startSlider();
		});
});

// slide button right
$sRButton.on('click', function(e){
	e.preventDefault();

	if ($slides.is(':animated')) {
		$slides.stop();
	}
		
	stopSlider();

	if (currentSlide === $slide.length) {
		currentSlide = 1;
		$slides.css("margin-left", "0px");
	}

	var slideWidth = $slide.width();
	var marginLeft = -slideWidth * currentSlide;
	currentSlide++;

	$slides
		.animate({
			"margin-left": marginLeft
		}, 600, "easeOutQuart", function(){
			// animation complete
			startSlider();
		});
});

// keep margin left while resizing
$(window).resize(function() {
		
	var slideWidth = $slide.width();
	var lastSlide = $slide.length - 1;
	var totalSlidesWidth = slideWidth * lastSlide;
	var distance = $slide.length - currentSlide;
	var marginLeft = (distance * slideWidth) -totalSlidesWidth;

	if ($slides.is(':animated')) {
		$slides.stop();
	}

	$slides.css("margin-left", marginLeft);
});

// stop slider on enter
// $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);

// start slider
startSlider();
