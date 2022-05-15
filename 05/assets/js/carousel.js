var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    // effect: 'fade',
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
//滑鼠覆蓋停止自動切換
swiper.el.onmouseover = function () {
    swiper.autoplay.stop();
}
//滑鼠離開開始自動切換
swiper.el.onmouseout = function () {
    swiper.autoplay.start();
}