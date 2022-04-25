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
            this.aboutClick();
            $(document).ready(function () {
                //回頂部
                $(".back-top").click(function () {
                    $("html,body").animate({ scrollTop: 0 }, 800);
                });
              });
            $(window).scroll(function () {
                //滾動特效
                if ($(window).scrollTop() > 150) {
                    $(".back-top").fadeIn();
                } else {
                    $(".back-top").fadeOut();
                }
            });
        },
        methods: {
            aboutClick() {
                $("#aboutNav").change(function () { 
                    let nowAbout = $(this).val();
                    $(".about-content .about-item").hide();
                    $(`#${nowAbout}`).show();
                });
            },
            headerNav() {
                var getUrl = window.location.pathname;
                if(getUrl.indexOf('index') >= 0) return $('#index').addClass('on')
                if(getUrl.indexOf('sport') >= 0) return $('#sport').addClass('on_sp')
                if(getUrl.indexOf('live') >= 0) return $('#live').addClass('on_li')
                if(getUrl.indexOf('lottery') >= 0) return $('#lottery').addClass('on_lo')
                if(getUrl.indexOf('slot') >= 0) return $('#slot').addClass('on_sl')
                if(getUrl.indexOf('event') >= 0) return $('#event').addClass('on_even')
                if(getUrl.indexOf('promotion') >= 0) return $('#promotion').addClass('on_pro')
                if(getUrl.indexOf('bulletin') >= 0) return $('#bulletin').addClass('on_bull')
                if(getUrl.indexOf('about') >= 0) return $('#about').addClass('on_about')
                if(getUrl.indexOf('banking') >= 0) return $('#banking').addClass('on_bank')
                if(getUrl.indexOf('affiliate') >= 0) return $('#affiliate').addClass('on_aff')
            },
            openNav() {
                $('#mobileNav').stop().slideToggle(300);
            },
        },
    });
}
