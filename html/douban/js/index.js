/**
 * Created by 鑫 on 2017/3/9.
 */


$(function(){


	function tanchu(){
		//弹出效果
		$('.mainzong .main .zuo .movie a').hover(function(){
			var i = $(this).index();
			var name = $('.mainzong .main .zuo .movie a .title .name').eq(i).html();
			if($('.mainzong .main .zuo .movie a .tip').eq(i).html()==''){
				// 模拟加载
				$('.mainzong .main .zuo .movie a .tip').eq(i).addClass('tip1').show();
				setTimeout(function () {
					$('.mainzong .main .zuo .movie a .tip').eq(i).removeClass('tip1').html(movieDetail(name));
				}, 800);


				//$.ajax({
				//	url:'read.php',
				//	type:'POST',
				//	data:{
				//		tip:2,
				//		name:name
				//	},
				//	beforeSend:function(){
				//		$('.mainzong .main .zuo .movie a .tip').eq(i).addClass('tip1').show();
				//	},
				//	success:function(response,status,xhr){
				//		$('.mainzong .main .zuo .movie a .tip').eq(i).removeClass('tip1').html(response);
				//	},
				//});
			}else{
				$('.mainzong .main .zuo .movie a .tip').eq(i).show();
			}
		},function(){
			var i = $(this).index();
			$('.mainzong .main .zuo .movie a .tip').eq(i).removeClass('tip1').hide();
		});
	}
	tanchu();

	//点击加载更多
	$('.mainzong .main .zuo .load').on('click',load);

	function load(){
		// 模拟加载
		$('.mainzong .main .zuo .load').off('click');
		$('.mainzong .main .zuo .load').html('正在加载').addClass('deng');
		setTimeout(function () {
			$('.mainzong .main .zuo .movie').append(loadMore);
			$('.mainzong .main .zuo .load').html('点击加载更多').removeClass('deng');
			$('.mainzong .main .zuo .load').on('click',load);
			tanchu();
		}, 1500);




		//$.ajax({
		//	url:'read.php',
		//	type:'POST',
		//	data:{
		//		tip:1,
		//	},
		//	beforeSend:function(){
		//		$('.mainzong .main .zuo .load').off('click');
		//		$('.mainzong .main .zuo .load').html('正在加载').addClass('deng');
		//	},
		//	success:function(response,status,xhr){
		//		$('.mainzong .main .zuo .movie').append(response);
		//		$('.mainzong .main .zuo .load').html('点击加载更多').removeClass('deng');
		//		$('.mainzong .main .zuo .load').on('click',load);
		//		tanchu();
		//	},
		//});
	}
	//影院搜索
	$('.mainzong .main .you .film input').eq(0).focus(function(){
		$('.mainzong .main .you .film .xuan').show().html('<span class="b">沈阳</span><span class="b">北京</span><span class="b">上海</span><span class="b">广州</span><span class="b">深圳</span><span class="b">成都</span><span class="b">武汉</span><span class="b">杭州</span><span class="b">重庆</span><span class="b">真州</span><span class="b">南京</span><span class="b">西安</span><span class="b">苏州</span>');
		if($('.mainzong .main .you .film .xuan').html()!=''){
			$('.mainzong .main .you .film .xuan .b').click(function(){
				var j = $(this).index();
				$('.mainzong .main .you .film input').eq(0).attr('value',$('.mainzong .main .you .film .xuan .b').eq(j).html());
			});
		}
	});

	$('.mainzong .main .you .film input').eq(1).focus(function(){
		$('.mainzong .main .you .film .xuan').show().html('<span class="a">沈阳星美国际影城大悦城店</span><span class="a">沈阳金逸影城龙之梦店</span><span class="a">GGV星星国际影城中街店</span><span class="a">沈阳七星国际影城</span><span class="a">沈阳金逸国际影城超会店</span><span class="a">沈阳华辰影城三好街店</span><span class="a">沈阳金银影城泛华店</span><span class="a">沈阳百丽宫影城恒隆广场店</span><span class="a">新东北影城沈阳中兴店</span><span class="a">星美国际影城长青店</span><span class="a">华谊兄弟沈阳影城</span><span class="a">沈阳光路影城</span><span class="a">沈阳美嘉欢乐影城万象城店</span>');
		if($('.mainzong .main .you .film .xuan').html()!=''){
			$('.mainzong .main .you .film .xuan .a').click(function(){
				var j = $(this).index();
				$('.mainzong .main .you .film input').eq(1).attr('value',$('.mainzong .main .you .film .xuan .a').eq(j).html());
			});
		}
	});

	$('.mainzong .main .you .film').hover(function(){},function(){
		$('.mainzong .main .you .film .xuan').hide();
	});

	//水平轮播
	var i = 1;
	//初始化
	$('.mainzong .main .zuo .banner1 a').eq(0).css('display','block').css('left','0px');
	$('.mainzong .main .zuo .banner1 a').eq(1).css('display','block');

	//预设参数
	var img = $('.mainzong .main .zuo .banner1 a');
	var time = 600;
	var width = '650px';


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
	},5000);

	var loadMore = '<a href="###"><img src="images/a3.jpg"/><div class="title"><span class="name">玛格丽特</span><span class="fen">9.8</span></div><div class="tip"></div></a><a href="###"><img src="images/a4.jpg"/><div class="title"><span class="name">正义联盟冲击</span><span class="fen">4.6</span></div><div class="tip"></div></a><a href="###"><img src="images/a5.jpg"/><div class="title"><span class="name">曼哈顿夜曲</span><span class="fen">6.1</span></div><div class="tip"></div></a><a href="###"><img src="images/a6.jpg"/><div class="title"><span class="name">同等种族</span><span class="fen">8.1</span></div><div class="tip"></div></a><a href="###"><img src="images/a7.jpg"/><div class="title"><span class="name">追逐时间</span><span class="fen">7.3</span></div><div class="tip"></div></a><a href="###"><img src="images/a8.jpg"/><div class="title"><span class="name">遇见你之前</span><span class="fen">9.8</span></div><div class="tip"></div></a><a href="###"><img src="images/a9.jpg"/><div class="title"><span class="name">天空之眼</span><span class="fen">4.6</span></div><div class="tip"></div></a><a href="###"><img src="images/a4.jpg"/><div class="title"><span class="name">正义联盟冲击</span><span class="fen">4.6</span></div><div class="tip"></div></a>';
	var movieDetail = function (title) {
		var a = '<h2>'+title+'</h2><div class="fenshu"></div><div class="biaoqian"><span>'+title+'的标签</span><span>97分钟</span><span>香港</span><span>动作</span><span>犯罪</span><span>徐学文(导演)</span><span>林家栋</span><span>任贤齐</span><span>陈小春</span></div><div class="xiangkan"><span>想看</span><span>看过</span></div><p>《'+title+'》 一个栽在自己人手里，一个栽在大陆武警手中，一个栽在自尊心上，三人结局以九七为界，暗喻回归后港人的命途。树大招风=省港旗兵+黑社会+非常突然，为久违的银河味道加上半星 <span>- Hinkly的短评</span></p>';
		return a;
	}
});
