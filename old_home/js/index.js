
$(function(){
	
	//手机网站
	$('.phone .main .fen').hover(function(){
		var i = $(this).index();
		$('.phone .main .fen .mazong').eq(i).stop().animate({
			top:0
		},300);
	},function(){
		var i = $(this).index();
		$('.phone .main .fen .mazong').eq(i).stop().animate({
			top:400
		},300);
	});
	//pc端
	$('.pc .main .fen').hover(function(){
		var i = $(this).index();
		$('.pc .main .fen .tipzong').eq(i).stop().animate({
			top:0
		},300);
	},function(){
		var i = $(this).index();
		$('.pc .main .fen .tipzong').eq(i).stop().animate({
			top:'193px'
		},300);
	});
	
	
	
	//弹出窗（遮罩部分）
	$(document).ready(function(){
		weizhi();
		$(window).scroll(function(){
			weizhi();
		});
		$(window).resize(function(){
			weizhi();
		});
	});
	function weizhi(){
		var h = $(window).height();
		var w = $(window).width()+17;
		$('.screen').css('width',w+'px').css('height',h+'px');
	}
	//弹出微信二维码
	$('.lianxi .main a').eq(2).click(function(){
		$('.tan').html('<div class="zong"><div class="title"><span class="title1">微信扫描查看</span><span class="close"></span></div><div class="ma1"><img src="images/h1.png"/><span class="name">微信名：lyxz12345</span></div></div>');
		$('.tan').css('display','block').animate({
			top:0,
			opacity:1
		});
		$('.screen').css('display','block').animate({
			opacity:0.6
		});
		
		//弹出收回
		$('.tan .title .close').click(function(){
			$('.tan').animate({
				top:'-300px',
				opacity:0
			},function(){
				$(this).css('display','block').html('');
			});
			$('.screen').animate({
				opacity:0
			},function(){
				$(this).css('display','none');
			});
		});
	});
	
	//弹出h5二维码
	$('.jianli .main .you a').eq(1).click(function(){
		$('.tan').html('<div class="zong"><div class="title"><span class="title1">H5简历扫描查看</span><span class="close"></span></div><div class="ma1"><img src="images/h2.png"/><span class="name">李鑫-简历</span></div></div>');
		$('.tan').css('display','block').animate({
			top:0,
			opacity:1
		});
		$('.screen').css('display','block').animate({
			opacity:0.6
		});
		
		//弹出收回
		$('.tan .title .close').click(function(){
			$('.tan').animate({
				top:'-300px',
				opacity:0
			},function(){
				$(this).css('display','block').html('');
			});
			$('.screen').animate({
				opacity:0
			},function(){
				$(this).css('display','none');
			});
		});
	});
	
	
	
	
	
	
});