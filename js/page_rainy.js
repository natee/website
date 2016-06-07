function initRain() {
    var image = document.getElementById('rainImg');
    image.onload = function () {
        var engine = new RainyDay({
            image: this,
            parentElement: document.getElementById("rainCanvas")
        });
        engine.gravity = engine.GRAVITY_NON_LINEAR;
        engine.trail = engine.TRAIL_SMUDGE;
        engine.rain(
            [
                [1, 0, 2],         // add 20 drops of size 1...
                [3, 3, 1]           // ... and 1 drop of size from 3 - 6 ...
            ],
            50);
    };
    image.crossOrigin = 'anonymous';
    image.src = 'img/bg.jpg';
}
function resize() {
    var win_height = $(window).outerHeight(),
        win_width = $(window).outerWidth(),
        img_height = $('#rainImg').outerHeight(),
        img_width = $('#rainImg').outerWidth();

    var fraction_height = win_height / img_height,
        fraction_width = win_width / img_width,
        fraction_result = ( fraction_height > fraction_width ) ? fraction_height : fraction_width;

    $('canvas').css({
        height:Math.ceil(fraction_result * img_height) + 'px',
        width:Math.ceil(fraction_result * img_width) + 'px',
        top:Math.floor((win_height - fraction_result * img_height) / 2) + 'px',
        left:Math.floor((win_width - fraction_result * img_width) / 2) + 'px'
    });

}

function checkIsMobile(){
    // 判断是否为移动端运行环境
    if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))) {
        if (window.location.href.indexOf("?mobile") < 0) {
            if (/Android|webOS|iPhone|iPod|BlackBerry|MX/i.test(navigator.userAgent)) {// 判断访问环境是 Android|webOS|iPhone|iPod|BlackBerry 则加载以下样式
                return 'phone';
            }
            else if (/iPad/i.test(navigator.userAgent)) {// 判断访问环境是 iPad 则加载以下样式
                return 'iPad';
            }
            else {// 判断访问环境是 其他移动设备 则加载以下样式
                return 'other';
            }
        }
    }
    return 'pc'
}

$(window).resize(function () {
    resize();
});

$(function(){
    var ua = checkIsMobile();
    if(ua === 'pc'){
        initRain();
        resize();
    }else{
        // 性能原因移动端不调用canvas画水滴，用背景色代替。
        $(".container").find(".introduce").addClass("bg-green");
    }

    $(".toggle-contact").on("click",function(){
        if($(".contact").hasClass("active")){
            $(".contact").removeClass("active");
            $(".back").hide();
        }else{
            $(".contact").addClass("active");
            $(".back").show();
        }
    });

    $("#showNav").on("click",function(){
        if($(".ft-nav .first").hasClass("show-i")){
            $(".ft-nav .third").addClass('hide-i').removeClass('show-i');
            setTimeout(function(){
                $(".ft-nav .second").addClass('hide-i').removeClass('show-i');
            },100);
            setTimeout(function(){
                $(".ft-nav .first").addClass('hide-i').removeClass('show-i');
            },200);
        }else{
            $(".ft-nav").show();
            $(".ft-nav .first").addClass('show-i').removeClass('hide-i');
            setTimeout(function(){
                $(".ft-nav .second").addClass('show-i').removeClass('hide-i');
            },100);
            setTimeout(function(){
                $(".ft-nav .third").addClass('show-i').removeClass('hide-i');
            },200);
        }

    });
});