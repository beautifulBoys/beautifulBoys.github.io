/**
 * Created by guan.xch on 2017/10/12.
 */
var index = function () {
    // 初始化loading
    var loadingImg = `<div class="loading-div">
                        <div class="circle-outer">
                        <div class="circle-inner"></div>
                        </div>
                        <div class="circle-small"></div>
                        </div>`;
    var domApp = document.getElementById('mo-app');
    domApp && (domApp.innerHTML = loadingImg);

    // 竖屏显示
    var verticalScreenImg = '<div class="vertical-screen"><img src="assets/img/vertical-screen.png"/></div>';
    var nullDom = document.createElement("div");
    document.body.appendChild(nullDom);
    nullDom.innerHTML = verticalScreenImg;


};

// 屏幕翻转设置
function VerticalScreen() {
    if (window.orientation === 90 || window.orientation === -90) {
        document.getElementsByClassName('vertical-screen')[0].style.display = 'block';
    }
    if (window.orientation === 180 || window.orientation === 0) {
        document.getElementsByClassName('vertical-screen')[0].style.display = 'none';
    }
}

setTimeout(()=> {
    index();
    window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", VerticalScreen, false);
}, 0);
