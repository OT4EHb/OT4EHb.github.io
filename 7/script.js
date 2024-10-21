$(document).ready(function () {
    $(".multiple-items").slick({
        autoplay: true,
        dots: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        slidesToScroll: 1,
        slidesToShow: 3
    });
});
