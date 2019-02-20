$(document).ready(function() { 
	$('.header-button').click( function(event){ 
		event.preventDefault(); 
		$('.overlay').fadeIn(1000, 
		 	function(){ 
				$('.popup') 
					.css('display', 'block') 
					.animate({opacity: 1}, 1000); 
		});
	});

	$('.button-close, .overlay').click( function(){ 
		$('.popup')
			.animate({opacity: 0}, 1000,  
				function(){ 
					$(this).css('display', 'none');
					$('.overlay').fadeOut(1000); 
				}
			);
	});
});