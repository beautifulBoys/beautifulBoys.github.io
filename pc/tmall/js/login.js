

$(function(){
	$('.header .main a').hover(function(){
		$('.header .main .tip').stop().animate({
			left:'140px',
			opacity:1
		},300);
	},function(){
		$('.header .main .tip').stop().animate({
			left:'180px',
			opacity:0
		},300);
	});
	
	
	
	$('.style1 .header .main img').click(function(){
		$('.style1').animate({
			left:'-350px'
		},300);
		$('.style2').animate({
			left:'0px'
		},300);
	});
	$('.style2 .header .main img').click(function(){
		$('.style1').animate({
			left:'0px'
		},300);
		$('.style2').animate({
			left:'350px'
		},300);
	});
	
});