

(function ($) {
    "use strict";

    var $window = $(window),
    $body = $("body");
  
    $( ".section_banner" ).each(function() {
        var attr = $(this).attr('data-image-src');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css("background-image", "url("+attr+")");
        }
    });
    $( ".section_about_banner_ft" ).each(function() {
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

    /*---------------------------------
            Off Canvas toggler Function
        -----------------------------------*/

  var $offCanvasToggle = $(".offcanvas-toggle, .offcanvas-overlay"),
        $offCanvas = $(".offcanvas"),
        $offCanvasOverlay = $(".offcanvas-overlay"),
        $mobileMenuToggle = $(".mobile-menu-toggle");
        $offCanvasToggle.on("click", function (e) {
            e.preventDefault();
            $body.toggleClass("offcanvas-open");
            $offCanvasOverlay.fadeToggle();
            $offCanvas.fadeToggle();
            $(".offcanvas-toggle").toggleClass("close");
        });

        // $(".offcanvas-toggle.close, .offcanvas-overlay").on("click", function (e) {
        // e.preventDefault();
        //     $body.removeClass("offcanvas-open");
        //     $offCanvas.removeClass("offcanvas-open");
        //     $offCanvasOverlay.fadeOut();
        //     $mobileMenuToggle.find("a").removeClass("close");
        // });
        /*----------------------------------
             Off Canvas Menu
         -----------------------------------*/

  function mobileOffCanvasMenu() {
    var $offCanvasNav = $(".offcanvas-menu, .overlay-menu"),
      $offCanvasNavSubMenu = $offCanvasNav.find(".offcanvas-submenu");
    /*Add Toggle Button With Off Canvas Sub Menu*/

    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"></span>');
    /*Category Sub Menu Toggle*/

    $offCanvasNav.on("click", "li a, .menu-expand", function (e) {
      var $this = $(this);

      if ($this.attr("href") === "#" || $this.hasClass("menu-expand")) {
        e.preventDefault();

        if ($this.siblings("ul:visible").length) {
          $this.parent("li").removeClass("active");
          $this.siblings("ul").slideUp();
          $this.parent("li").find("li").removeClass("active");
          $this.parent("li").find("ul:visible").slideUp();
        } else {
          $this.parent("li").addClass("active");
          $this
            .closest("li")
            .siblings("li")
            .removeClass("active")
            .find("li")
            .removeClass("active");
          $this.closest("li").siblings("li").find("ul:visible").slideUp();
          $this.siblings("ul").slideDown();
        }
      }
    });
  }
  mobileOffCanvasMenu()

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
  