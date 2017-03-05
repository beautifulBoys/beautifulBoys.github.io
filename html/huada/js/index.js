
$(function(){
	
	
	var a = $('.screen'),
			b = $('.weixin'),
			c = $('#daohang .xinxi .beijing2 a'),
			time1 = 300;
	screen(a,b,c);
	
	//锁屏函数
	function screen(a,b,c){
		$(document).ready(function(){
			center(b);
			$(window).scroll(function(){
				center(b);
			});
			$(window).resize(function(){
				center(b);
			});
			c.click(function(){
				$(a).show().stop().animate({opacity:0.4},time1);
				$(b).show().stop().animate({opacity:1},time1);
				$('body').css('overflow','hidden');
			});
			$(b).click(function(){
				$(a).stop().animate({opacity:0},time1,function(){$(this).hide();});
				$(b).stop().animate({opacity:0},time1,function(){
					$(this).hide();
					$('body').css('overflow-y','auto');
				});
			});
		});
	}
	function center(ele){
		var h = $(window).height();
		var w = $(window).width() + 17;
		var ha = $(window).scrollTop();
		var ch = parseInt(ele.css('height'));
		var cw = parseInt(ele.css('width'));
		a.css('width',w + 'px').css('height',h + 'px');
		b.css('top',(h-ch)/2 + ha + 'px').css('left',(w-cw)/2 + 'px');
	}

	//新闻切换
	$('#news div.main ul').width(500*$('#news div.main li').length+'px');
	$("#news div.header a").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		var distance = -390*index;
		$('#news div.main ul').stop().animate({
			left:distance
		});
	});

	$('#wenhua div.main ul').width(500*$('#wenhua div.main li').length+'px');
	$("#wenhua div.header a").mouseover(function(){
		$(this).addClass('on').siblings().removeClass('on');
		var index = $(this).index();
		number = index;
		var distance = -710*index;
		$('#wenhua div.main ul').stop().animate({
			left:distance
		});
	});
	
	
	//轮播
	var i = 1;
	//初始化
	$('#banner img').eq(0).css('display','block').css('left','0px');
	$('#banner img').eq(1).css('display','block');
	
	//预设参数
	var img = $('#banner img');
	var time2 = 2000;
	var width = '1365px';
	
	
	setInterval(function(){   	//进入循环时，先走循环时间，在走循环内同（循环以循环时间开始）。
		
		img.eq(i-1).animate({
			left : '-' + width
		},time2,function(){
			img.eq(i-2).css('display','none').css('left',width);
		});
		img.eq(i).animate({
			left:'0px'
		},time2,function(){
			img.eq(i).css('left',width).css('display','block');
		});
		
		if(i == img.length -1) i = -1;
		i++;
		
	},8000);

	
	
	
	
	
	
	
	
	
	
	
	
	
	
});


















