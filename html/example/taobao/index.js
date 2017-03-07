
$(function(){
	
	$(window).ready(function(){
		init();
	});
	function init () {
		var images = new Image();
		images.src = $('.main .yuan img').attr('src');
		images.onload = function () {
			console.log('success');

			var xx = images.width;         //原图宽度
			var x = 160000/xx;      //移动区域宽度

			//移动区域
			$('.main .shou').css('width',x+'px').css('height',x+'px');
			$('.main').hover(function(){
				$('.main .show').css('display','block');
				$('.main .shou').css('display','block');
			},function(){
				$('.main .show').css('display','none');
				$('.main .shou').css('display','none');
			});
			//图像显示
			document.onmousemove = function move(e){
				var e = e || window.event,
					moux = e.clientX,
					ex = 100,
					mouy = e.clientY,
					ey = 70,
					left = moux - ex-(x/2),
					top = mouy - ey-(x/2);
				if($('.main .show').css('display')=='block'){
					if(left<=0){
						left=0;
					}else if(left>=(400-x)){
						left=400-x;
					}
					if(top<=0){
						top=0;
					}else if(top>=400-x){
						top=400-x;
					}
					$('.main .shou').css('left',left + 'px').css('top',top +'px');
				}
				//图像比例变化
				var left1 = parseInt($('.main .shou').css('left')),
					top1 = parseInt($('.main .shou').css('top'));
				$('.main .show .images img').css('top',-(xx/400)*top1+'px').css('left',-(xx/400)*left1+'px');

			}
		};
	}
});










