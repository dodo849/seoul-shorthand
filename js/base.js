/*-------------------캐러셀-------------------*/
const imgList = ["img1.JPG", "img2.JPG", "img3.JPG", "img4.JPG", "img5.JPG"]
const vw = $('body').width();


var imgCnt = 0;
var imgCntNext = 1;
var switchCnt = 0;

$(".carousel .image-1").attr('src', '../img/'+imgList[imgCnt]);
$(".carousel .image-2").attr('src', '../img/'+imgList[imgCntNext]);

setInterval(function() {

    imgCnt++;
    imgCntNext++;

    if(imgCnt == 4) imgCnt = 0;
    if(imgCntNext == 4) imgCntNext = 0;

    if(switchCnt == 0) {
        $(".carousel .image-2").css('left', '100vw');
        $(".carousel .image-2").attr('src', '../img/'+imgList[imgCntNext]);

        $(".carousel .image-1").animate({
            left: '-100vw'
        }, 1500, 'swing');

        $(".carousel .image-2").animate({
            left: '0'
        }, 1500, 'swing');

        switchCnt = 1;
    }
    else {
        $(".carousel .image-1").css('left', '100vw');
        $(".carousel .image-1").attr('src', '../img/'+imgList[imgCntNext]);

        $(".carousel .image-2").animate({
            left: '-100vw'
        }, 1500, 'swing');

        $(".carousel .image-1").animate({
            left: '0'
        }, 1500, 'swing');

        switchCnt = 0;
    }

}, 3000);