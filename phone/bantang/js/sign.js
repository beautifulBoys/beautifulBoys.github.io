
$(function(){
	$(window).load(function(){
		$('.zong .images').css('height',$('.zong .images img').css('height'));
		$(window).resize(function(){
			$('.zong .images').css('height',$('.zong .images img').css('height'));
		});
		
		var img = $('.zong .images img');
		img.eq(3).click(function(){
			img.eq(1).show();
			img.eq(3).animate({opacity:0},function(){img.eq(3).css('display','none')});
		});
		$('.zong .rili .you').click(function(){
			if(img.eq(1).css('display')=='block'){
				img.eq(1).hide();
				img.eq(2).show();
				$('.zong .rili .you').css('background','url(images/ka1.png) no-repeat 100% 10px').css('background-size','40px');
			}else if(img.eq(1).css('display')=='none'){
				img.eq(1).show();
				img.eq(2).hide();
				$('.zong .rili .you').css('background','url(images/ka.png) no-repeat 100% 10px').css('background-size','40px');
			}
		});
		//分享弹窗
		var wh = $(window).height(),
				ww = $(window).width();
		var fh = $('.fenxiang').height();

		$('.fenxiang').css('top',wh+'px');
		$('.header .you').click(function(){
			$('.fenxiang').animate({top:wh-fh},250);
			$('.screen').css('display','block').css('width',ww+'px').css('height',wh+'px').animate({opacity:0.4},250);
		});
		$('.screen').click(function(){
			$('.fenxiang').animate({top:wh},250);
			$('.screen').animate({opacity:0},250,function(){
				$('.screen').css('display','none');
			});
		});
		
		
		
	});
	
});


