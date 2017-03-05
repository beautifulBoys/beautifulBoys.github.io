window.onload = function() {
	//二维码弹出功能
	$('.erweima').click(function(){
		var gao = screen.height;
		$('#erweima').show().css('top',gao  / 5 + 'px').css('height',gao *3 / 5 + 'px').animate({
			'attr' : 'o',                     //o透明度  x横坐标    y纵坐标  w  width（宽度）h  height（高度）
			'start' : 0,                  //开始值
			'target' : 100,                  //跨度
			'step' : 7,                    //步长
			'time' : 30,                  //执行时间
			'speed' : 5,                 //速度
			'type' : 1  
		});
		$('#screen').show().css('width',gao + 'px').css('height',gao + 'px').animate({
			'attr' : 'o',                     //o透明度  x横坐标    y纵坐标  w  width（宽度）h  height（高度）
			'start' : 0,                  //开始值
			'target' : 30,                  //跨度
			'step' : 7,                    //步长
			'time' : 30,                  //执行时间
			'speed' : 7,                 //速度
			'type' : 1  
		});
	});
	//二维码功能收回
	$('#erweima').click(function(){
		$('#erweima').animate({
			'attr' : 'o',                     //o透明度  x横坐标    y纵坐标  w  width（宽度）h  height（高度）
			'start' : 100,                  //开始值
			'target' : 0,                  //跨度
			'step' : 7,                    //步长
			'time' : 30,                  //执行时间
			'speed' : 7,                 //速度
			'type' : 1,
			'fn' : function() {
				$('#erweima').hide();
			}
		});
		$('#screen').animate({
			'attr' : 'o',                     //o透明度  x横坐标    y纵坐标  w  width（宽度）h  height（高度）
			'start' : 30,                  //开始值
			'target' : 0,                  //跨度
			'step' : 7,                    //步长
			'time' : 30,                  //执行时间
			'speed' : 7,                 //速度
			'type' : 1,
			'fn' : function() {
				$('#screen').hide();
			}
		});
	});
	//遮罩手动收回
	$('#screen').click(function(){
		$('#erweima').animate({
			'attr' : 'o',                     //o透明度  x横坐标    y纵坐标  w  width（宽度）h  height（高度）
			'start' : 100,                  //开始值
			'target' : 0,                  //跨度
			'step' : 7,                    //步长
			'time' : 30,                  //执行时间
			'speed' : 7,                 //速度
			'type' : 1,
			'fn' : function() {
				$('#erweima').hide();
			}
		});
		$('#screen').animate({
			'attr' : 'o',                     //o透明度  x横坐标    y纵坐标  w  width（宽度）h  height（高度）
			'start' : 30,                  //开始值
			'target' : 0,                  //跨度
			'step' : 7,                    //步长
			'time' : 30,                  //执行时间
			'speed' : 7,                 //速度
			'type' : 1,
			'fn' : function() {
				$('#screen').hide();
			}
		});
	});
	
	//弹出显示信息
	$('.touxiang').xianshi('功能简单，不做了');
	$('.shouji').xianshi('功能简单，不做了');
	$('.qq').xianshi('功能类似，不重复了');
	$('.weixin').xianshi('功能类似，不重复了');
	$('.weibo').xianshi('功能类似，不重复了');
	$('.huiyuan').xianshi('功能类似，不重复了');
	$('.anquan').xianshi('功能类似，不重复了');
	$('.guanyu').xianshi('功能类似，不重复了');
	
	
	
}

