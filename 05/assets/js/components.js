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
            this.backModal();
            this.backTop();
            this.proToggle();
        },
        methods: {
            backModal() {
                $("body").click(function (e) {
                    if (!$(e.target).closest(".nav-nav, aside > div").length) {
                        $('aside').removeClass('active')
                        $('body').removeClass('aside-hide')
                    }
                });
            },
            //選單
            asideToggle() {
                $('aside').toggleClass('active')
                $('body').toggleClass('aside-hide')
            },


            backTop() {
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
            proToggle() {
                $('.pro-img').click(function () {
                    $(this).next().slideToggle();
                })
            },
        },
    });
}
