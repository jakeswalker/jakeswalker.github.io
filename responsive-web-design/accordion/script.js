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

	// remove bottom border
	if ($accordionPanel.is(':hidden') && $parent.hasClass('lastAccordion')) {
		$accordionButton.css("border-bottom-width", "0px");
	}

	// animate accordionPanel
	$accordionPanel
		.not(':animated')
		.slideToggle(200, function(){
			// add bottom border
			if ($accordionPanel.is(':hidden') && $parent.hasClass('lastAccordion')) {
				$accordionButton.css("border-bottom-width", "1px");
			}
		});
});
