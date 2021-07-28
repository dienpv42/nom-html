

(function ($) {
    "use strict";
  
    $( ".section_banner" ).each(function() {
        var attr = $(this).attr('data-image-src');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css("background-image", "url("+attr+")");
        }
    });

    $("[data-bg-color]").each(function () {
        $(this).css("background-color", $(this).data("bg-color"));
    });
    

    // Swipper JS
    $(document).ready(function () {

        var productsHome = new Swiper(".product_swiper_home", {
            slidesPerView: 6,
            speed: 1000,
            loop: false,
            spaceBetween: 30,
            autoplay: false,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                1400: {
                    slidesPerView: 6,
                    spaceBetween: 84,
                },
                1200: {
                slidesPerView: 4,
                spaceBetween: 84,
                },

                992: {
                slidesPerView: 3,
                spaceBetween: 30,
                },

                768: {
                slidesPerView: 2,
                spaceBetween: 50,
                },

                576: {
                slidesPerView: 1,
                spaceBetween: 30,
                },

                0: {
                slidesPerView: 1,
                spaceBetween: 30,
                },
            },
        });


    });


    /* ==========================================================================
    Scroll menu
    ========================================================================== */
    $(window).on('scroll', function () {
        let x = $(".section_menu").offset();
        let b = x.top;
        let c = $(".wrap_menu").height() + 40;

        if ($(this).scrollTop() > b ) {
            $('.wrap_menu').addClass('active');
            $('.bl_header').css('padding-bottom', c);
        } else {
            $('.wrap_menu').removeClass('active');
            $('.bl_header').css('padding-bottom', 'unset');
        }

    });

    /* ==========================================================================
    When document is loading, do
    ========================================================================== */

    $(window).on("load", function () {
        AOS.init({
          easing: "ease", // default easing for AOS animations
          once: true, // whether animation should happen only once - while scrolling down
        });
    });
    

})(window.jQuery);
  