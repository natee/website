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

$(window).resize(function () {
    resize();
});

$(function(){
    initRain();
    resize();

    $(".toggle-contact").on("click",function(){
        $(".contact").toggleClass("active");
    })
});