
//购物车弹出效果
$(function(){
	var a = $('#header .head .header_2 .cart a');
	var b = $('#header .head .header_2 .cart .cart_1');
	$('#header .head .header_2 .cart').hover(function(){
		a.addClass('on');
		b.css('display','block').animate({
			height : '100px',
			opacity : 1
		},200);
	},function(){
		a.removeClass('on');
		b.animate({
			height : 0,
			opacity : 0.5
		},200,function(){
			b.css('display','none');
		});
	});
	
	//搜索框效果
	var c = $('#navzong .nav_nav .search .kuang');
	var d = $('#navzong .nav_nav .search .niu');
	c.hover(function(){
		d.css('border','1px solid #999');
	},function(){
		d.css('border','1px solid #ccc');
	});
	d.hover(function(){
		d.css('border','1px solid #ff6700');
	},function(){
		d.css('border','1px solid #ccc');
	});
	

	//导航弹出
	$('#navzong .nav_nav .bar .bar1').hover(function(){
		
		$('.menu').css('display','block').animate({
			height : '230px'
		},200);
	},function(){
		$('.menu').animate({
			height : '0px'
		},200,function(){
			$('.menu').css('display','none');
		});
	});
	
	
	
	//导航内容变化
	$('#navzong .nav_nav .bar .bar1 li').hover(function(){
		var i = $(this).index();
		var main = $('.menu .main');
		if(i == 1){
			main.html('<div><a href="###"><img src="images/a1.jpg"/><span >小米手机4C</span><span class="price">1299元</span></a></div><div><a href="###"><img src="images/a2.jpg"/><span >小米手机4</span><span class="price">1599元</span></a></div><div><a href="###"><img src="images/a3.jpg"/><span >小米Note标准版</span><span class="price">1999元</span></a></div><div><a href="###"><img src="images/a4.jpg"/><span >小米Note顶配版</span><span class="price">2299元</span></a></div><div class="tuijian"><a href="###"><img src="images/a5.jpg"/><span >红米2A</span><span class="price">799元</span></a></div>');
		}else if(i == 2){
			main.html('<div><a href="###"><img src="images/a3.jpg"/><span >红米手机2A高配版</span><span class="price">499元</span></a></div><div><a href="###"><img src="images/a5.jpg"/><span >红米手机2</span><span class="price">599元</span></a></div><div><a href="###"><img src="images/a2.jpg"/><span >红米手机3</span><span class="price">699元</span></a></div><div><a href="###"><img src="images/a1.jpg"/><span >红米Note电信版</span><span class="price">699元</span></a></div><div><a href="###"><img src="images/a4.jpg"/><span >红米Note2</span><span class="price">799元</span></a></div><div class="tuijian"><a href="###"><img src="images/a6.jpg"/><span >红米Note3</span><span class="price">899元</span></a></div>');
		}else if(i == 3){
			main.html('<div><a href="###"><img src="images/c1.jpg"/><span >小米平板2 16GB</span><span class="price">999元</span></a></div><div><a href="###"><img src="images/c2.jpg"/><span >小米平板2 64GB</span><span class="price">1299元</span></a></div><div class="tuijian"><a href="###"><img src="images/c3.jpg"/><span >小米平板2 64GB Windows版</span><span class="price">1299元</span></a></div>');
		}else if(i == 4){
			main.html('<div><a href="###"><img src="images/d11.jpg"/><span >小米电视2 40英寸</span><span class="price">1799元</span></a></div><div><a href="###"><img src="images/d22.jpg"/><span >小米电视2S 48英寸</span><span class="price">2799元</span></a></div><div><a href="###"><img src="images/d33.jpg"/><span >小米电视3 53英寸</span><span class="price">3999元</span></a></div><div><a href="###"><img src="images/d44.jpg"/><span >小米电视3 60英寸</span><span class="price">3999元</span></a></div><div><a href="###"><img src="images/d55.jpg"/><span >小米电视3 70英寸</span><span class="price">9999元</span></a></div><div class="tuijian"><a href="###"><img src="images/d66.jpg"/><span >小米盒子3</span><span class="price">299元</span></a></div>');
		}else if(i == 5){
			main.html('<div><a href="###"><img src="images/f11.png"/><span >小米盒子mini</span><span class="price">199元</span></a></div><div><a href="###"><img src="images/f22.png"/><span >小米盒子3</span><span class="price">299元</span></a></div><div><a href="###"><img src="images/f33.jpg"/><span >小米盒子3 增强版</span><span class="price">399元</span></a></div><div class="tuijian"><a href="###"><img src="images/f44.jpg"/><span >小米电视主机</span><span class="price">999元</span></a></div>');
		}else if(i == 6){
			main.html('<div><a href="###"><img src="images/z1.jpg"/><span >全新小米路由器</span><span class="price">1999元</span></a></div><div><a href="###"><img src="images/z2.jpg"/><span >小米路由器mini</span><span class="price">99元</span></a></div><div><a href="###"><img src="images/z3.jpg"/><span >小米路由器青春版</span><span class="price">149元</span></a></div><div><a href="###"><img src="images/z4.jpg"/><span >小米WiFi放大器</span><span class="price">399元</span></a></div><div><a href="###"><img src="images/z5.jpg"/><span >小米路由</span><span class="price">199元</span></a></div><div class="tuijian"><a href="###"><img src="images/a8.gif"/><span >查看全部智能硬件</span></a></div>');
		}else if(i == 7){
			main.html('<div><a href="###"><img src="images/y1.jpg"/><span >9号平衡车</span><span class="price">1999元</span></a></div><div><a href="###"><img src="images/y2.jpg"/><span >体重秤</span><span class="price">99元</span></a></div><div><a href="###"><img src="images/y3.jpg"/><span >摄像机</span><span class="price">149元</span></a></div><div><a href="###"><img src="images/y4.jpg"/><span >小米空气净化器2</span><span class="price">699元</span></a></div><div><a href="###"><img src="images/y5.jpg"/><span >米家压力电饭煲</span><span class="price">999元</span></a></div><div class="tuijian"><a href="###"><img src="images/a8.gif"/><span >查看全部智能硬件</span></a></div>');
		}
	},function(){
		
	});

	
	//banner图片循环
	var i = 1;
	setInterval(function(){
		var img = $('#daohang .zong .main1 .banner a');
		var time1 = 1000;
		img.stop().animate({
			opacity : 0
		},time1);
		img.eq(i).stop().animate({
			opacity : 1
		},time1);
		if(i == img.length -1) i = -1;
		i++;
	},5000);
	
	//明星单品
	var j = 1;
	$('#daohang .zong .main').eq(0).css('display','block').css('left','0px');
	var img = $('#daohang .zong .main');
	var time2 = 600;
	var width = '1226px';
	setInterval(function(){
		img.eq(j-1).animate({
			left : '-' + width
		},time2,function(){
			img.eq(j-2).css('display','none').css('left',width);
		});
		img.eq(j).css('display','block').animate({
			left:'0px'
		},time2);
		if(j == img.length-1) j = -1;
		j++;
	},6000);

	
	//智能硬件
	$('#mainzong .zong .yingjian .you .chanpin').hover(function(){
		var i = $(this).index();
		$('#mainzong .zong .yingjian .you .chanpin .pingjia').eq(i).css('display','block').stop().animate({
			height : '84px',
			top : '216px'
		},200);
	},function(){
		var i = $(this).index();
		$('#mainzong .zong .yingjian .you .chanpin .pingjia').eq(i).stop().animate({
			height : '0px',
			top : '300px'
		},200,function(){
			$(this).css('display','none');
		});       
	});
	
	
	//为你推荐 上移效果
	$('#mainzong .zong .tuijian .main .main1').hover(function(){
		$(this).stop().animate({
			top : '0px'
		},300);
	},function(){
		$(this).stop().animate({
			top : '5px'
		},300);
	});
	
	//热评
	$('#mainzong .zong .reping .main .main1').hover(function(){
		var i = $(this).index()/2;
		$('#mainzong .zong .reping .main .main1 .main2').eq(i).stop().animate({
			top : '-4px'
		});
		$('#mainzong .zong .reping .main .main1 .main2 .shade').eq(i).stop().animate({
			opacity : 0.6
		});
	},function(){
		var i = $(this).index()/2;
		$('#mainzong .zong .reping .main .main1 .main2').eq(i).stop().animate({
			top : '0px'
		});
		$('#mainzong .zong .reping .main .main1 .main2 .shade').eq(i).stop().animate({
			opacity : 0
		});
	});
	
	
	//视频
	$('#mainzong .zong .shipin .main .main1').hover(function(){
		var i = $(this).index()/2;
		$('#mainzong .zong .shipin .main .main1 .main2 .shade').eq(i).stop().animate({
			opacity : 0.7
		},300);
		$('#mainzong .zong .shipin .main .main1 .main2').eq(i).stop().animate({
			top : '-5px'
		},300);
		$('#mainzong .zong .shipin .main .main1 .main2 a .icon').eq(i).css('background','#ff6700').css('border','2px solid #ff6700');
	},function(){
		var i = $(this).index()/2;
		$('#mainzong .zong .shipin .main .main1 .main2 .shade').eq(i).stop().animate({
			opacity : 0
		},300);
		$('#mainzong .zong .shipin .main .main1 .main2').eq(i).stop().animate({
			top : '0px'
		},300);
		$('#mainzong .zong .shipin .main .main1 .main2 a .icon').eq(i).css('background','#000').css('border','2px solid #fff');
	});


	
	
	
	//评价字数限制
	$('#mainzong .zong .yingjian .you .chanpin').hover(function(){
		var i = $(this).index();
		var str = $('#mainzong .zong .yingjian .you .chanpin .pingjia .pingjia1').eq(i).html();

		if(str.length >33){
			$('#mainzong .zong .yingjian .you .chanpin .pingjia .pingjia1').eq(i).html(str.substr(0,33) + '...');
		}
	},function(){
		
	});
	
	
});