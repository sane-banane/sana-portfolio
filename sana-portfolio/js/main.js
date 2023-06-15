$(function () {
    $(".latest-list").slick({
        autoplay: true,
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    centerPadding: "40px",
                    slidesToShow: 1,
                },
            },
        ],
    });

    $("#hamburger").on("click", function () {
        $("header").toggleClass("open");
    });
    $("#nav a").on("click", function () {
        $("header").toggleClass("open");
    });
    $('#mask').on("click", function () {
        $("header").removeClass('open');
    });
    $('a[href="#contact"]').on("click", function () {
        $("header").removeClass('open');
    });

    $('button').on('click', function () {
        $('#shop').toggleClass('appear');
    });

    $(window).scroll(function () {
        $(".fadein").each(function () {
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeight = $(window).height();
            if (scroll > target - windowHeight + $(".fadein").height()) {
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });
    });

});