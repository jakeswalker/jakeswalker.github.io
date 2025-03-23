//========== columns ==========//
var $col = $('.col');

$col
	.on('mouseenter', function() {
		if ($(this).is(':animated')) {
				$(this).stop();
			}
			$(this)
				.animate({
					"opacity": "0.8"
				}, 200, function(){
					
				});
	})
	.on('mouseleave', function() {
		if ($(this).is(':animated')) {
				$(this).stop();
			}
			$(this)
				.animate({
					"opacity": "1.0"
				}, 200, function(){
					
				});
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

//========== margin calculation ==========//
// var columns = 12; // set number of columns in a row
// var margin = 1; // set margin between columns
// var span = 1;
// var output = "";

// while (span <= columns) {
// 	var width = (100 - ((columns/span * 2) - 2) * margin) / (columns/span);
// 	output += '.col.span_' + span + ' {width: ' + parseFloat(width.toFixed(3)) + '%;}\n';
// 	span++;
// }

// var marginLR = 'margin-left: ' + margin + '%;' + '\n' + 'margin-right: ' + margin + '%;';
// console.log(marginLR + '\n\n' + output);
