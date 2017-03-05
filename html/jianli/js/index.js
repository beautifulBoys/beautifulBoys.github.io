
$(function(){
	//背景位移
	setInterval(function(){
		var a = Math.floor(Math.random()*30);
		var b = Math.floor(Math.random()*15);
		$('.header .beijing .yinying').animate({
			left:a,
			top:b
		},2500).animate({
			left:0,
			top:0
		},2500);
	},100);

	
	
	
});