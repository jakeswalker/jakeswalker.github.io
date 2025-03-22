var $toggleButton = $('.toggleButton');
var $toggleMenu = $('.toggleMenu');

// menu toggle
$toggleButton.on('click', function(e){
	e.preventDefault();
	$toggleMenu
		.not(':animated')
		.slideToggle(300, "easeInOutBack", function(){
			// animation complete
		});
});
