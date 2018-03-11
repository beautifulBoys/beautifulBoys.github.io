
$(function(){
	//搜索框效果
	var search = $('.head .main .shang .zhong input');
	search.focus(function(){
		$(this).addClass('kuang');
	});
	search.blur(function(){
		$(this).removeClass('kuang');
	});
	
	
	//特色轮播图
	var i = 1;
	//初始化
	$('.center .main .mokuai .main1 .tu a').eq(0).css('display','block').css('left','0px');
	$('.center .main .mokuai .main1 .tu a').eq(1).css('display','block');
	
	//预设参数
	var img = $('.center .main .mokuai .main1 .tu a');
	var time = 600;
	var width = '194px';

	setInterval(function(){   	//进入循环时，先走循环时间，在走循环内同（循环以循环时间开始）。
		
		img.eq(i-1).animate({
			left : '-' + width
		},time,function(){
			img.eq(i-2).css('display','none').css('left',width);
		});
		img.eq(i).animate({
			left:'0px'
		},time,function(){
			img.eq(i).css('left',width).css('display','block');
		});
		
		if(i == img.length -1) i = -1;
		i++;

	},4000);
	
});