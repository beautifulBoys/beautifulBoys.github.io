
$(function(){

	
	function tanchu(){
		//弹出效果
		$('.mainzong .main .zuo .movie a').hover(function(){
			var i = $(this).index();
			var name = $('.mainzong .main .zuo .movie a .title .name').eq(i).html();
			if($('.mainzong .main .zuo .movie a .tip').eq(i).html()==''){
				$.ajax({
					url:'read.php',
					type:'POST',
					data:{
						tip:2,
						name:name,
					},
					beforeSend:function(){
						$('.mainzong .main .zuo .movie a .tip').eq(i).addClass('tip1').show();
					},
					success:function(response,status,xhr){
						$('.mainzong .main .zuo .movie a .tip').eq(i).removeClass('tip1').html(response);
					},
				});
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
		$.ajax({
			url:'read.php',
			type:'POST',
			data:{
				tip:1,
			},
			beforeSend:function(){
				$('.mainzong .main .zuo .load').off('click');
				$('.mainzong .main .zuo .load').html('正在加载').addClass('deng');
			},
			success:function(response,status,xhr){
				$('.mainzong .main .zuo .movie').append(response);
				$('.mainzong .main .zuo .load').html('点击加载更多').removeClass('deng');
				$('.mainzong .main .zuo .load').on('click',load);
				tanchu();
			},
		});
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
	
});