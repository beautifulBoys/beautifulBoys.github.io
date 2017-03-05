
$(function(){
	var input = $('.header .search input');
	input.css('width',(parseInt($('.header').css('width'))-95)+'px');
	
	$(window).resize(function(){
		input.css('width',(parseInt($('.header').css('width'))-95)+'px');
	});
	
	
});


