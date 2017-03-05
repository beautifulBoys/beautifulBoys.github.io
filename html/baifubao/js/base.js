
//前台调用
var $ = function (args) {
	return new Base(args);
}

//基础库
function Base (args) {
	//创建一个数组保存获取的节点数组
	this.elements = [];
	
	if(typeof args == 'string') {
		switch(args.substring(0,1)) {
			case '#' :
				this.getid(args.substring(1));
				break;
			case '.' :
				this.getClass(args.substring(1));
				break;
			default :
				this.gettagname(args);
				break;
		}
	} else if (typeof args =='object'){
		if(args != undefined) {
			this.elements[0] = args;
		}
	}
}

//获得ID节点
Base.prototype.getid = function (id) {
	this.elements.push(document.getElementById(id));
	return this;
};

//获取元素节点
Base.prototype.gettagname = function (tag) {
	var tags = document.getElementsByTagName(tag);
	for (var i = 0; i < tags.length; i ++) {
		this.elements.push(tags[i]);
	}
	return this;
};

//设置CSS
Base.prototype.css = function (attr,value) {
	for (var i = 0; i < this.elements.length; i ++) {
		if (arguments.length == 1) {
			return getstyle(this.elements[i],attr);
		}
		this.elements[i].style[attr] = value;
	}
	return this;
};

//获取class节点数组
Base.prototype.getClass = function (className, idName) {
	var node = null;
	if (arguments.length == 2) {
		node = document.getElementById(idName);
	} else {
		node = document;
	}
	var all = node.getElementsByTagName('*');
	for (var i = 0; i < all.length; i ++) {
		if (all[i].className == className) {
			this.elements.push(all[i]);
		}
	}
	return this;
}


//触发click事件
Base.prototype.click = function (fn) {
	for(var i = 0;i < this.elements.length;i++) {
		this.elements[i].onclick = fn;
	}
	return this;
}

//设置innerHTML
Base.prototype.html = function (str) {
	for (var i=0;i<this.elements.length;i++) {
		if (arguments.length == 0) {
			return this.elements[i].innerHTML;
		}
		this.elements[i].innerHTML = str;
	}
	return this;
}

//设置鼠标移入移出方法
Base.prototype.hover = function (over,out) {
	for(var i=0;i<this.elements.length;i++) {
		this.elements[i].onmouseover = over;
		this.elements[i].onmouseout = out;
	}
	return this;
}


//设置显示
Base.prototype.show = function () {
	for (var i = 0; i < this.elements.length; i ++) {
		this.elements[i].style.display = 'block';
	}
	return this;
}

//设置隐藏
Base.prototype.hide = function () {
	for (var i = 0; i < this.elements.length; i ++) {
		this.elements[i].style.display = 'none';
	}
	return this;
}



//动画
Base.prototype.animate = function (obj) {
	for (var i = 0; i < this.elements.length; i ++) {
		var element = this.elements[i];
		var attr = obj['attr'] == 'x' ? 'left' : obj['attr'] == 'y' ? 'top' : 
					   obj['attr'] == 'w' ? 'width' : obj['attr'] == 'h' ? 'height' : 
					   obj['attr'] == 'o' ? 'opacity' : 'left';
		var start = obj['start'] != undefined ? obj['start'] : 
						attr == 'opacity' ? getstyle(element, attr) * 100 : 
												   parseInt(getstyle(element, attr));
		var t = obj['t'] != undefined ? obj['t'] : 30;												//可选，默认30毫秒执行一次
		var step = obj['step'] != undefined ? obj['step'] : 10;								//可选，每次运行10像素
		var alter = obj['alter'];
		var target = obj['target'];
		var speed = obj['speed'] != undefined ? obj['speed'] : 10;							//可选，默认缓冲速度为6
		var type = obj['type'] == 0 ? 'constant' : obj['type'] == 1 ? 'buffer' : 'buffer';		//可选，0表示匀速，1表示缓冲，默认缓冲
		
		
		if (alter != undefined && target == undefined) {
			target = alter + start;
		} else if (alter == undefined && target == undefined) {
			throw new Error('alter增量或target目标量必须传一个！');
		}
		
		if (start > target) step = -step;
		
		if (attr == 'opacity') {
			element.style.opacity = parseInt(start) / 100;
			element.style.filter = 'alpha(opacity=' + parseInt(start) +')';
		} else {
			element.style[attr] = start + 'px';
		}
		
		
		clearInterval(element.timer);
		element.timer = setInterval(function () {
		
			if (type == 'buffer') {
				step = attr == 'opacity' ? (target - getstyle(element, attr) * 100) / speed :
														 (target - parseInt(getstyle(element, attr))) / speed;
				step = step > 0 ? Math.ceil(step) : Math.floor(step);
			}
			
			
			
			if (attr == 'opacity') {
				if (step == 0) {
					setOpacity();
				} else if (step > 0 && Math.abs(getstyle(element, attr) * 100 - target) <= step) {
					setOpacity();
				} else if (step < 0 && (getstyle(element, attr) * 100 - target) <= Math.abs(step)) {
					setOpacity();
				} else {
					var temp = getstyle(element, attr) * 100;
					element.style.opacity = parseInt(temp + step) / 100;
					element.style.filter = 'alpha(opacity=' + parseInt(temp + step) + ')'
				}

			} else {
				if (step == 0) {
					setTarget();
				} else if (step > 0 && Math.abs(parseInt(getstyle(element, attr)) - target) <= step) {
					setTarget();
				} else if (step < 0 && (parseInt(getstyle(element, attr)) - target) <= Math.abs(step)) {
					setTarget();
				} else {
					element.style[attr] = parseInt(getstyle(element, attr)) + step + 'px';
				}
			}

		}, t);
		
		function setTarget() {
			element.style[attr] = target + 'px';
			clearInterval(element.timer);
			if (obj.fn != undefined) obj.fn();
		}
		
		function setOpacity() {
			element.style.opacity = parseInt(target) / 100;
			element.style.filter = 'alpha(opacity=' + parseInt(target) + ')';
			clearInterval(element.timer);
			if (obj.fn != undefined) obj.fn();
		}
	}
	return this;
};

//设置innerHTML
Base.prototype.html = function (str) {
	for (var i=0;i<this.elements.length;i++) {
		if (arguments.length == 0) {
			return this.elements[i].innerHTML;
		}
		this.elements[i].innerHTML = str;
	}
	return this;
}

//弹出信息显示
Base.prototype.xianshi = function(a) {
	for (var i = 0; i < this.elements.length; i++) {
		this.elements[i].onclick = function(){
			$('.shuoming').html(a);
			$('#shuoming').show().animate({
				'attr' : 'o',                     //o透明度  x横坐标    y纵坐标  w  width（宽度）h  height（高度）
				'start' : 0,                  //开始值
				'target' : 60,                  //跨度
				'step' : 7,                    //步长
				'time' : 30,                  //执行时间
				'speed' : 7,                 //速度
				'type' : 1
			});
			setTimeout(function(){
				$('#shuoming').animate({
					'attr' : 'o',                     //o透明度  x横坐标    y纵坐标  w  width（宽度）h  height（高度）
					'start' : 60,                  //开始值
					'target' : 0,                  //跨度
					'step' : 7,                    //步长
					'time' : 30,                  //执行时间
					'speed' : 7,                 //速度
					'type' : 1,
					'fn' : function() {
						$('#shuoming').hide();
					}
				});
			},2000);
		};
	}
	return this;
}

//插件入口
Base.prototype.extend = function (name, fn) {
	Base.prototype[name] = fn;
};













