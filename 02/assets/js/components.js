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
            $(document).ready(function () {
                //回頂部
                $(".back-top").click(function () {
                    $("html,body").animate({ scrollTop: 0 }, 800);
                });
                //關於我們選單浮動
                let winScrollTop = $(window).scrollTop();
                let aboutHight = $('.about-text').height() -300
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
                let aboutHight = $('.about-text').height() -300
                if(winScrollTop > 150 && winScrollTop < aboutHight) {
                    $("#aboutNav").addClass('fixed')
                } else {
                    $("#aboutNav").removeClass('fixed')
                }
            });
        },
        methods: {
            aboutClick(nav) {
                let winWidth = $(window).width();
                let winScrollTop = $(window).scrollTop();
                if(winWidth > 1024) {
                    if(winScrollTop < 150) $('html, body').scrollTop($(`#${nav}`).offset().top - 266);
                    else $('html, body').scrollTop($(`#${nav}`).offset().top - 143);
                } 
                else if(winWidth > 768) {
                    if(winScrollTop < 150) $('html, body').scrollTop($(`#${nav}`).offset().top - 366);
                    else $('html, body').scrollTop($(`#${nav}`).offset().top - 193);
                } else {
                    if(winScrollTop < 150) $('html, body').scrollTop($(`#${nav}`).offset().top - 306);
                    else $('html, body').scrollTop($(`#${nav}`).offset().top - 83);
                }
                $("#aboutNav ul").removeClass('show')
                $("#aboutNav .nav-toggle .nav-open").show()
                $("#aboutNav .nav-toggle .nav-close").hide()
            },
            toggleAboutNav() {
                let winWidth = $(window).width();
                let winScrollTop = $(window).scrollTop();
                if(winWidth < 769 && winScrollTop >= 150) {
                    $("#aboutNav ul").toggleClass('show')
                    $("#aboutNav .nav-toggle .ico").toggle()
                }               
            },
            headerNav() {
                var getUrl = window.location.pathname;
                if(getUrl.indexOf('index') >= 0) return $('#index').addClass('on')
                if(getUrl.indexOf('sport') >= 0) return $('#sport').addClass('on')
                if(getUrl.indexOf('live') >= 0) return $('#live').addClass('on')
                if(getUrl.indexOf('lottery') >= 0) return $('#lottery').addClass('on')
                if(getUrl.indexOf('slot') >= 0) return $('#slot').addClass('on')
                if(getUrl.indexOf('event') >= 0) return $('#event').addClass('on')
                if(getUrl.indexOf('promotion') >= 0) return $('#promotion').addClass('on')
            },
            toggleNav() {
                $('.nav-open').toggle()
                $('.nav-close').toggle()
                $('.navbar-nav').toggleClass('on')
            },
        },
    });
}
