
$(function(){
	$(window).load(function(){
		var height1=$('.banner img').height();
		var ht=document.documentElement.scrollTop || document.body.scrollTop;
		$('.header .box .beijing').css('opacity',ht/(height1-55));
		
		//获取url中键值对
		function GetRequest() {
			var url = location.search; //获取url中"?"符后的字串
			var theRequest = new Object();
			if (url.indexOf("?") != -1) {
				var str = url.substr(1);
				strs = str.split("&");
				for(var i = 0; i < strs.length; i ++) {
					theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
				}
			}
			return theRequest;
		}
		var Request = new Object();
		Request = GetRequest();
		var id = Request['id']-1;
		//模拟分屏		
		var title1 = ['假日女神必备装扮术','适合跟闺蜜一起分享的变美清单','换手机是没钱了，那就换个手机壳吧','没有清爽的蓝裙子怎么过夏天','潮湿季必备！防潮去霉我有妙招','这个夏季的舌尖应该是墨西哥味的','音乐就要躁起来，跑男耳机首选','指尖作画，要做的就是精致美','简简单单！我的style是清新范','爆好吃的超人气韩国零食TOP10'];
		$('.banner .tip .title').html(title1[id]);
		$('.banner img').attr('src','images/a'+(id+1)+'.jpg');
		
		
		
		$(window).scroll(function(){
			var ht=document.documentElement.scrollTop || document.body.scrollTop;
			$('.header .box .beijing').css('opacity',ht/(height1-55));
			
			//导航悬浮
			var mtm = document.getElementsByClassName('main');
			var mat = mtm.item(0).offsetTop;
			var mts = document.getElementsByClassName('menu');
			var oft = mts.item(0).offsetTop;
			var ht=document.documentElement.scrollTop || document.body.scrollTop;
			
			if(ht>=oft-95){
				$('.menu').addClass('fix');
				$('.zong .main').css('margin-top','40px');
			}
			if (mat>95+ht){
				$('.menu').removeClass('fix');
				$('.zong .main').css('margin-top','0');
			}
		});
		//导航切换
		$('.menu .zuo').addClass('xian');
		$('.menu .you').click(function(){
			$('.menu .zuo').removeClass('xian');
			$(this).addClass('xian');
		});
		$('.menu .zuo').click(function(){
			$('.menu .you').removeClass('xian');
			$(this).addClass('xian');
		});
		//加载数据（模拟数据库）
		var title=['Hamee 迪士尼便携口红充电宝','Hamee 迪士尼便利手机挂绳','mr.leaf 同道大叔入耳式耳机','米妮米奇补光灯手机镜头','Momodiz 卡通硅胶耳机包','喵星人指环支架','可妮兔布朗熊二合一数据线','迷你单肩手机包','Bone iphone耳机塞','卡通手机防水袋'];
		var tip=['日本Hamee公司与Disney合作的充电宝，口红大小的身材，搭配经典迪士尼角色元素，不带包包直接往口袋一塞就能带出门，超级方便。2900mAh容量，虽然容量不算大，但是关键时刻能将手机“起死回生”，重新恢复满满电力。','像是公交卡、手机和数码相机这些出门要常用的东西，用挂绳配戴在胸前使用起来会方便的多。这款米老鼠造型的多功能挂绳，轴承带可以随时取下，只要按下中间按钮即可，Ring环挂扣套在手指上使用非常方便，还免去了以往颈带需要从头部穿脱的烦恼。','这是一款拥有超萌外型的星座系列入耳式耳机，暖萌的模样和亮眼的配色，不想成为你颜值担当都不行啊。采用人耳工程开发的无毒硅胶耳塞，能够完美契合你的耳槽弧度，跑步也不会掉。重低音，隔音效果不错。性价比高高的，买来送人也非常合适哦。','懂点拍照技巧的妹子应该都知道，拍照的时候光线一定要找好。这款可爱的米老鼠镜头不仅是个广角镜，还是个补光神器。有两档光线强弱可以调节，还有2款镜头盖可以更换不同的光源效果。有了它再也不用担心在黑暗的地方拍照看不清了。','耳机是大家经常随身携带的东西，平时散落在包里，一不注意耳线就会绕成一团乱麻，使用时还得费劲的解开。Momodiz是韩国的牌子，它家这款萌萌的耳机包就是能让耳机线乖乖听话的好帮手。硅胶质地，柔软有弹性，可以更好的保护物品，还能当挂件配饰。','很迷你的手机指环支架，全部都是可爱的喵星人，手机平板通用，只要是光滑的平面都可以贴。指环支架能让你的手与手机紧紧相扣，避免手机滑落，再也不用担心躺着玩手机被砸脸啦，指环可以360度随意旋转，还可以作为支架使用。','超迷你的卡通数据线，既好看又实用。安卓苹果二合一，连自拍神器都可以用。而且是收缩的哟，拉开长度有1米，绝对够用。平常iPhone数据线最苦恼的就是接口那个地方容易断掉，有这个完全不用担心了，充电端盖子打开的头是充苹果的，中间一段拔开就是安卓的，都有保护头哦。','现在手机功能越来越强大，有时候出门游玩带个手机就足够。但手机做的也越来越大，不能像以前一样直接放在衣服袋子里。这款手机保护套与斜跨包的完美结合，在保护手机的基础上便于携带。书本造型独特设计，不用担心会撞包，内部透明PVC开窗，可以手指自由滑动触摸手机屏幕，内置多个卡位，拉链内袋，可以放置卡片、零钱等，背着出门，超级方便。','Bone是来自台湾知名的创意数码品牌。可爱的卡通造型耳机塞，做工精致细腻，不掉色，软质角色不会刮伤机身。全新垂吊式设计不受耳机孔位限制，垂吊直挂都很棒。8款造型可选择，小小的防尘塞也能活泼又逗趣。','图案超级萌的防水袋，全透明的前膜设计，超多款式可选，外出游玩时必须收一个。而且手机在防水袋里，所有功能都可以正常使用，接打电话、拍照、上网等都完全没有问题。它还配备了挂绳，也适合跑步、游泳的时候使用。'];
		var price=[156,78,79,43,26,11.8,30,54,36,15];
		var shoucang=[115,92,112,177,130,321,180,306,156,253];
		var pinglun=[15,9,11,17,13,21,18,6,16,23];
		var xihuan=[3253,922,1812,1377,4130,4321,1680,3062,1536,2453];
		var number=[2,1,2,2,2,2,2,2,2,2];
		var biao=['a','b','c','d','e','f','g','h','i','j'];
		var imgcontent = '',imgicon = '';
		for(var i =0;i<10;i++){
			for (var j=0;j<number[i];j++){
				imgcontent += '<img src="images1/'+biao[i]+(j+1)+'.jpg"/>';
			}
			for (var k=0;k<7;k++){
				imgicon += '<a href="###"><img src="icon/a'+(k+1)+'.jpg"/></a>';
			}
			$('.zong .main').append('<div class="danpin"><a href="###"><div class="title"><span class="tu">'+(i+1)+'</span><span class="title1">'+title[i]+'</span></div><div class="descript">'+tip[i]+'</div>'+imgcontent+'<div class="price">参考价格：￥'+price[i]+'</div></a><div class="user"><div class="xihuan">'+xihuan[i]+'人喜欢</div><div class="main1">'+imgicon+'</div></div><div class="gong"><div class="neng1">'+pinglun[i]+'</div><div class="neng2">'+shoucang[i]+'</div><div class="neng3">购买</div></div></div>');
			imgcontent = '';
			imgicon = '';
		}
		
		//分享弹窗
		var wh = $(window).height(),
				ww = $(window).width();
		var fh = $('.fenxiang').height();

		$('.fenxiang').css('top',wh+'px');
		$('.header .box .gong .you .you2').click(function(){
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


