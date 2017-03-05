
//跨浏览器事件绑定
function addevent(obj,type,fn) {
	if(typeof obj.addEventListener != 'undefined') {
		obj.addEventListener(type,fn,false);
	} else if (typeof obj.attachEvent != 'undefined') {
		obj.attachEvent('on' + type,fn);
	}
}
//跨浏览器获取视口
function getinner() {
	if(typeof window.innerWidth != 'undefined') {
		return {
			width :window.innerWidth,
			height:window.innerHeight
		}
	} else {
		return {
			width : document.documentElement.clientWidth,
			height : document.documentElement.clientHeight
		}
	}
}

//跨浏览器获取style
function getstyle(element,attr) {
	if (typeof window.getComputedStyle != 'undefined') {//W3C
		return window.getComputedStyle(element, null)[attr];
	} else if (typeof element.currentStyle != 'undeinfed') {//IE
		return element.currentStyle[attr];
	}
}

//跨浏览器获取event
function getevent(event) {
	return event || window.event;
}

//组织默认行为
function predef(event) {
	var e = getevent(event);
	if (typeof e.preventDefault != 'underfined') {
		e.preventDefault();
	} else {
		e.returnValue = false;
	}
}














