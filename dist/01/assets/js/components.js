{
    new Vue({
        el: '#app',
        components: {},
        data() {
            return {
                Year: new Date().getFullYear(),
            }
        },
        mounted() {
            this.headerNav();
        },
        methods: {
            aboutClick(nav) {
                let winWidth = $(window).width();
                let winScrollTop = $(window).scrollTop();
                console.log(winScrollTop)
                if(winWidth > 768) $('html, body').scrollTop($(`#${nav}`).offset().top);
                else {
                    if(winWidth > 520) {
                        if(winScrollTop < 150) $('html, body').scrollTop($(`#${nav}`).offset().top - 280);
                        else $('html, body').scrollTop($(`#${nav}`).offset().top - 150);
                    } else {
                        if(winScrollTop < 150) $('html, body').scrollTop($(`#${nav}`).offset().top - 360);
                        else $('html, body').scrollTop($(`#${nav}`).offset().top - 180);
                    }
                }
            },
            headerNav() {
                var getUrl = window.location.pathname;
                if (getUrl.indexOf('index') >= 0) return $('#index').addClass('on')
                if (getUrl.indexOf('sport') >= 0) return $('#sport').addClass('on')
                if (getUrl.indexOf('live') >= 0) return $('#live').addClass('on')
                if (getUrl.indexOf('lottery') >= 0) return $('#lottery').addClass('on')
                if (getUrl.indexOf('slot') >= 0) return $('#slot').addClass('on')
                if (getUrl.indexOf('event') >= 0) return $('#event').addClass('on')
                if (getUrl.indexOf('promotion') >= 0) return $('#promotion').addClass('on')
            },
            openNav() {
                $('.nav-open').hide()
                $('.nav-close').show()
                $('.navbar-nav').addClass('on')
            },
            closeNav() {
                $('.nav-open').show()
                $('.nav-close').hide()
                $('.navbar-nav').removeClass('on')
            },
        },
    });
    $(document).ready(function () {
        //回頂部
        $(".back-top").click(function () {
            $("html,body").animate({ scrollTop: 0 }, 800);
        });
        //關於我們選單浮動
        let winScrollTop = $(window).scrollTop();
        let aboutHight = $('.about-right').height() -300
        if(winScrollTop > 150 && winScrollTop < aboutHight) {
            $("#aboutNav").addClass('fixed')
        } else {
            $("#aboutNav").removeClass('fixed')
        }
    });
    $(window).scroll(function () {
        //滾動特效
        if ($(window).scrollTop() > 150) {
            $(".back-top").fadeIn();
        } else {
            $(".back-top").fadeOut();
        }
        //關於我們選單浮動
        let winScrollTop = $(window).scrollTop();
        let aboutHight = $('.about-right').height() -300
        if(winScrollTop > 150 && winScrollTop < aboutHight) {
            $("#aboutNav").addClass('fixed')
        } else {
            $("#aboutNav").removeClass('fixed')
        }
    });
}
