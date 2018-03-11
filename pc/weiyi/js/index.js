
$(function(){
	
	$('#nav .left').hover(function(){
		$('#nav .left .shade').css('display','block').animate({
			opacity : 0.7
		},200);
	},function(){
		$('#nav .left .shade').animate({
			opacity : 0
		},200,function(){
			$(this).css('display','none');
		});
	});
	
	$('#nav .left ul li').hover(function(){
		var i = $(this).index();
		$('#nav .left .shade').eq(i).stop().animate({
			opacity : 0
		},200,function(){
			$(this).css('display','none');
		});
	},function(){
		var i = $(this).index();
		$('#nav .left .shade').eq(i).css('display','block').stop().animate({
			opacity : 0.7
		},200);
	});
	
	//图片悬浮放大1
	$('.photosquare .photobox').hover(function(){
		var i = $(this).index() / 2;
		$('.photosquare .photobox .photo').eq(i).css('zIndex','20').stop().animate({
			width : '328px',
			height : '520px',
			top : '-30px',
			left : '-20px'
		},250);
		$('.photosquare .photobox .shade').eq(i).css('zIndex','15').stop().animate({
			width : '328px',
			height : '520px',
			opacity : 1,
			top : '-30px',
			left : '-20px'
		},250);
		$('.photosquare .photobox .photo a').eq(i).stop().animate({
			width : '328px',
			height : '520px'
		},250);
		$('.photosquare .photobox .photo .name').eq(i).stop().animate({
			fontSize : '22px',
			lineHeight : '50px',
			textIndent : '15px'
		},250); 
		$('.photosquare .photobox .photo .english').eq(i).stop().animate({
			fontSize : '13px',
			textIndent : '15px'
		},250);
		$('.photosquare .photobox .photo .date').eq(i).stop().animate({
			fontSize : '13px',
			textIndent : '15px'
		},250);
	},function(){
		var i = $(this).index() / 2;
		$('.photosquare .photobox .photo').eq(i).stop().animate({
			width : '288px',
			height : '460px',
			top : '0',
			left : '0'
		},250,function(){
			$('.photosquare .photobox .photo').eq(i).css('zIndex','10');
		});
		$('.photosquare .photobox .shade').eq(i).css('zIndex','5').stop().animate({
			width : '288px',
			height : '460px',
			opacity : 0,
			top : 0,
			left : 0
		},250);
		$('.photosquare .photobox .photo a').eq(i).stop().animate({
			width : '288px',
			height : '460px'
		},250);
		$('.photosquare .photobox .photo .name').eq(i).stop().animate({
			fontSize : '20px',
			lineHeight : '40px',
			textIndent : '10px'
		},250); 
		$('.photosquare .photobox .photo .english').eq(i).stop().animate({
			fontSize : '12px',
			textIndent : '10px'
		},250);
		$('.photosquare .photobox .photo .date').eq(i).stop().animate({
			fontSize : '12px',
			textIndent : '10px'
		},250);
	});
	
	//图片悬浮放大1
	$('.photosquare1 .photobox').hover(function(){
		var i = $(this).index() / 2;
		$('.photosquare1 .photobox .photo').eq(i).css('zIndex','20').stop().animate({
			width : '328px',
			height : '520px',
			top : '-30px',
			left : '-20px'
		},250);
		$('.photosquare1 .photobox .shade').eq(i).css('zIndex','15').stop().animate({
			width : '328px',
			height : '520px',
			opacity : 1,
			top : '-30px',
			left : '-20px'
		},250);
		$('.photosquare1 .photobox .photo a').eq(i).stop().animate({
			width : '328px',
			height : '520px'
		},250);
		$('.photosquare1 .photobox .photo .name').eq(i).stop().animate({
			fontSize : '22px',
			lineHeight : '50px',
			textIndent : '15px'
		},250); 
		$('.photosquare1 .photobox .photo .english').eq(i).stop().animate({
			fontSize : '13px',
			textIndent : '15px'
		},250);
		$('.photosquare1 .photobox .photo .date').eq(i).stop().animate({
			fontSize : '13px',
			textIndent : '15px'
		},250);
	},function(){
		var i = $(this).index() / 2;
		$('.photosquare1 .photobox .photo').eq(i).stop().animate({
			width : '288px',
			height : '460px',
			top : '0',
			left : '0'
		},250,function(){
			$('.photosquare1 .photobox .photo').eq(i).css('zIndex','10');
		});
		$('.photosquare1 .photobox .shade').eq(i).css('zIndex','5').stop().animate({
			width : '288px',
			height : '460px',
			opacity : 0,
			top : 0,
			left : 0
		},250);
		$('.photosquare1 .photobox .photo a').eq(i).stop().animate({
			width : '288px',
			height : '460px'
		},250);
		$('.photosquare1 .photobox .photo .name').eq(i).stop().animate({
			fontSize : '20px',
			lineHeight : '40px',
			textIndent : '10px'
		},250); 
		$('.photosquare1 .photobox .photo .english').eq(i).stop().animate({
			fontSize : '12px',
			textIndent : '10px'
		},250);
		$('.photosquare1 .photobox .photo .date').eq(i).stop().animate({
			fontSize : '12px',
			textIndent : '10px'
		},250);
	});
	
	//全国旅拍
	$('.city .main .cityname').hover(function(){
		var i = $(this).index() / 2;
		$('.city .main .cityname .part').eq(i).css('background','url(images/citybg1.png) no-repeat').stop().animate({
			top : '-15px'
		},250);
	},function(){
		var i = $(this).index() / 2;
		$('.city .main .cityname .part').eq(i).css('background','url(images/citybg.png) no-repeat').stop().animate({
			top : 0
		},250);
	});
	
	
	//微电影播放
	$('.movie .main .movieshow').hover(function(){
		var i = $(this).index();
		$('.movie .main .movieshow .shade').eq(i/2).stop().animate({
			opacity : '0.5'
		},200);
	},function(){
		var i = $(this).index();
		$('.movie .main .movieshow .shade').eq(i/2).stop().animate({
			opacity : '0'
		},200);
	});
	
	//客户评价
	$('.assess .main .text').hover(function(){
		var i = $(this).index();
		$('.assess .main .text .xia .name').eq(i/2).css('color','#f83a66');
	},function(){
		var i = $(this).index();
		$('.assess .main .text .xia .name').eq(i/2).css('color','#000');
	});

	

	//左右飘窗
	window.onscroll = function(){
		var ht=document.documentElement.scrollTop || document.body.scrollTop;
		var height = $(window).height();
		var height1 = ((height - 538) / 2) + 'px';
		var height2 = ((height - 260) / 2) + ht + 'px';
		var _this1 = $('.float_left');
		var _this2 = $('.float_right');
		
		//左边
		if(height > 538){
			if(ht > 400){
				_this1.css('top',height1).css('display','block').stop().animate({
					opacity : 1
				},300);
			}else if(ht <= 400){
				_this1.css('top',height1).stop().animate({
					opacity : 0
				},300,function(){
					_this1.css('display','none');
				});
			}
		}else if(height <= 538){
			if(ht > 500){
				_this1.css('top',0).css('display','block').stop().animate({
					opacity : 1
				},300);
			}else if(ht <= 500){
				_this1.css('top',0).stop().animate({
					opacity : 0
				},300,function(){
					_this1.css('display','none');
				});
			}
		}
		//右边
		if(ht > 400){
			_this2.css('display','block').stop().animate({
				top : height2,
				opacity : '1'
			},500);
		}else if(ht <= 400){
			_this2.stop().animate({
				top : height2,
				opacity : '0'
			},500,function(){
				_this2.css('display','none');
			});
		}
	}
	
	//验证码
	$('.register .main .right').hover(function(){
		$('.register .main .right .code').css('display','block');
	},function(){
		$('.register .main .right .code').css('display','none');
	});
	
	
	
	
	
});