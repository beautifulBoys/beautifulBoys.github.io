<?php
	header('Content-Type:text/html; charset=gbk2312');
	
	
	if($_POST['tip']==1){
		
		echo '<a href="###"><img src="images/a3.jpg"/><div class="title"><span class="name">玛格丽特</span><span class="fen">9.8</span></div><div class="tip"></div></a><a href="###"><img src="images/a4.jpg"/><div class="title"><span class="name">正义联盟冲击</span><span class="fen">4.6</span></div><div class="tip"></div></a><a href="###"><img src="images/a5.jpg"/><div class="title"><span class="name">曼哈顿夜曲</span><span class="fen">6.1</span></div><div class="tip"></div></a><a href="###"><img src="images/a6.jpg"/><div class="title"><span class="name">同等种族</span><span class="fen">8.1</span></div><div class="tip"></div></a><a href="###"><img src="images/a7.jpg"/><div class="title"><span class="name">追逐时间</span><span class="fen">7.3</span></div><div class="tip"></div></a><a href="###"><img src="images/a8.jpg"/><div class="title"><span class="name">遇见你之前</span><span class="fen">9.8</span></div><div class="tip"></div></a><a href="###"><img src="images/a9.jpg"/><div class="title"><span class="name">天空之眼</span><span class="fen">4.6</span></div><div class="tip"></div></a><a href="###"><img src="images/a4.jpg"/><div class="title"><span class="name">正义联盟冲击</span><span class="fen">4.6</span></div><div class="tip"></div></a>';
	
	}

	
	if($_POST['tip']==2){
		
		$title = $_POST['name'];
		echo '<h2>'.$title.'</h2><div class="fenshu"></div><div class="biaoqian"><span>'.$title.'的标签</span><span>97分钟</span><span>香港</span><span>动作</span><span>犯罪</span><span>徐学文(导演)</span><span>林家栋</span><span>任贤齐</span><span>陈小春</span></div><div class="xiangkan"><span>想看</span><span>看过</span></div><p>《'.$title.'》 一个栽在自己人手里，一个栽在大陆武警手中，一个栽在自尊心上，三人结局以九七为界，暗喻回归后港人的命途。树大招风=省港旗兵+黑社会+非常突然，为久违的银河味道加上半星 <span>- Hinkly的短评</span></p>';
	
	}
	
?>