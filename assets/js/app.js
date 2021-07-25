

(function ($) {
    "use strict";
  
    $( ".section_banner" ).each(function() {
        var attr = $(this).attr('data-image-src');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css("background-image", "url("+attr+")");
        }
    });
    

    // Swipper JS
    $(document).ready(function () {

        var productsHome = new Swiper(".product_swiper_home", {
            slidesPerView: 6,
            speed: 1000,
            loop: true,
            spaceBetween: 30,
            autoplay: false,
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
                slidesPerView: 2,
                spaceBetween: 30,
                },

                0: {
                slidesPerView: 1,
                },
            },
        });


    });

})(window.jQuery);
  