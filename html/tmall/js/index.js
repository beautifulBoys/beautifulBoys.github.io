
$(function(){
	
	var i = 1;
	$('#banner .center').eq(0).animate({
		opacity : 1
	},1);
	setInterval(function(){
		var img = $('#banner .center');
		var time = 1200;
		img.stop().animate({
			opacity : 0
		},time);
		img.eq(i).stop().animate({
			opacity : 1
		},time);
		if(i == img.length -1) i = -1;
		i++;
	},8000);

	
});