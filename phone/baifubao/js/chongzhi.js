window.onload = function() {
	$('.a1').hover(function(){
		$('.a1').html('<a href="###">' + 9.88 + '<span>元</span></a>');
	},function(){
		$('.a1').html('<a href="###">' + 10 + '<span>元</span></a>');
	})
};
