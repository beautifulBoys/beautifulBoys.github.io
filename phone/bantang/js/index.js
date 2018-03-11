
$(function(){
	
	var height2 = $('.header').width()*586/900;

	$('.banner').css('height',height2+'px');
	$(window).resize(function(){
		$('.banner').css('height',$('.header').width()*586/900+'px');
	});

	$(window).scroll(function(){
		var ht=document.documentElement.scrollTop || document.body.scrollTop;
		//header透明度
		var height1 = $('.header').height();
		var height3 = (parseInt($('.menu').height())-1)+'px';
	//	alert(height1);
		$('.header .box .beijing').css('opacity',ht/(height2-height1));
		//导航条悬浮
		if(ht>=height2-height1){
			$('.menu').addClass('fix');
			$('.main').css('margin-top',height3);
		}else if(ht<height2-height1){
			$('.menu').removeClass('fix');
			$('.main').css('margin-top','0');
		}
	});

	//图片轮播
	var i = 1;
	//预设参数
	var img = $('.banner .tu img');
	var time = 500;
	var width = $('.banner .tu img').css('width');

	//初始化
	$('.banner .tu img').css('left',width);
	$('.banner .tu img').eq(0).css('display','block').css('left','0px');
	$('.banner .tu img').eq(1).css('display','block');
	

	setInterval(function(){
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
		
	},5000);
		
	//首页加载
	
		
		
		
	//模拟ajax加载
	var page = 1;
	$(window).scroll(function(){
		var title = ['假日女神必备装扮术','适合跟闺蜜一起分享的变美清单','换手机是没钱了，那就换个手机壳吧','没有清爽的蓝裙子怎么过夏天','潮湿季必备！防潮去霉我有妙招','这个夏季的舌尖应该是墨西哥味的','音乐就要躁起来，跑男耳机首选','指尖作画，要做的就是精致美','简简单单！我的style是清新范','爆好吃的超人气韩国零食TOP10'];
		var number = ['34233','34623','13364','25632','10775','14563','45321','12323','32553','14223'];
		var mth=document.getElementsByClassName('fenpin');
		var offh=document.documentElement.scrollTop || document.body.scrollTop;
		var htmlh = $(document.body).height();
		var juli = htmlh-offh-$(window).height();
		if(htmlh<40000){
			if(juli<=900){
				for(var i =0;i<10;i++){
					$('.zong .main').append('<div class="fenpin"><a href="fen.html?id='+(10*page+i)+'"><img src="images/a'+(10*page+i)+'.jpg"/><div class="tip"><span class="title">'+title[i]+'</span><span class="zan">'+number[i]+'</span></div></a></div>');
				}
				if(page<3){
					page = page+1;
				}else{
					page = 1;
				}
			}
		}
		
	});
	
	
	
	
	
	
	
	
});


