$(".banner-box").slick({
    slidesToShow: 1,
    autoplay: true,        //自動撥放
    autoplaySpeed: 5000,   //播放時間(毫秒)
    draggable: false,   //滑鼠禁止拖動
    // touchMove: false,   //手指禁止拖動
    arrows: true, //是否顯示左右箭頭功能
    prevArrow:
        '<button type="button" class="slick-prev btn-prev arrow-btn"><svg class="ico"><use xlink:href="#ico-left"></use></svg></button>',
    nextArrow:
        '<button type="button" class="slick-next btn-next arrow-btn"><svg class="ico"><use xlink:href="#ico-right"></use></svg></button>',
});