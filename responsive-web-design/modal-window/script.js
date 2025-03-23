//========== modal window ==========//
var $body = $('body');
var $modalWin = $('.modalWin');
var $viewImageButton = $('#viewImageButton');
var $modalWinBG = $('.modalWinBG');
var $photographer = $('.photographer');

// open modal window
$viewImageButton.on('click', function(e){
	e.preventDefault();

	if ($modalWin.not(':animated')) {
		$modalWin.css("display", "inline");
		$body.css("overflow", "hidden");
		$modalWin
			.animate({
				"opacity": 1.0
			}, 300, function(){
				// animation complete
			});
	}
});

// close modal window
$modalWinBG.on('click', function(){

	if ($modalWin.not(':animated')) {
		$modalWin
			.animate({
				"opacity": 0.0
			}, 300, function(){
				// animation complete
				$modalWin.css("display", "none");
				$body.css("overflow", "auto");
			});	
	}
});
$photographer.on('click', function(){

	if ($modalWin.not(':animated')) {
		$modalWin
			.animate({
				"opacity": 0.0
			}, 300, function(){
				// animation complete
				$modalWin.css("display", "none");
				$body.css("overflow", "auto");
			});	
	}
});

//========== button ==========//

var $viewImageButton = $('#viewImageButton');

$viewImageButton
	.on('mouseenter', function(){
		$(this).css("background", "hsla(220,100%,75%,0.8)");
	})
	.on('mouseleave', function(){
		$(this).css("background", "hsla(220,100%,75%,1.0)");
	});

//========== button animation ==========//
// var colorTimer;
// var isBlue = true;
// var $viewImageButton = $('#viewImageButton');

// function startColorTimer(){

// 	colorTimer = setInterval(function(){

// 		if (isBlue) {
// 			$viewImageButton.css("background", "hsla(255,100%,75%,1.0)");
// 			isBlue = false;
// 		}
// 		else {
// 			$viewImageButton.css("background", "hsla(220,100%,75%,1.0)");
// 			isBlue = true;
// 		}			
// 	}, 100);
// }

// function stopColorTimer(){
// 	clearInterval(colorTimer);
// }

// $viewImageButton
// 	.on('mouseenter', function(){
// 		stopColorTimer();
// 		$(this).css("background", "hsla(255,100%,75%,1.0)");
// 		isBlue = false;
// 	})
// 	.on('mouseleave', function(){
// 		startColorTimer();
// 		$(this).css("background", "hsla(220,100%,75%,1.0)");
// 		isBlue = true;
// 	});

// startColorTimer();
