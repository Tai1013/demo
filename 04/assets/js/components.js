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
            this.backTop();
            this.proToggle();
            this.aboutClick();
        },
        methods: {
            aboutClick() {
                $("#aboutNav").change(function () { 
                    let nowAbout = $(this).val();
                    $("#aboutContent .about-item").hide();
                    $(`#${nowAbout}`).show();
                });
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
            gameNav(val) {
                $('#gameInto').find('.game-item').removeClass('active')
                $(`#${val}`).addClass('active')
            },
            proToggle() {
                $('.probox .pro-item img').click(function () {
                    $(this).next().slideToggle();
                })
            },
        },
    });
}
