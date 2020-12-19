(function ($) {
    "use strict";

    //sticky menu
    $(window).on('scroll', function () {
        var window_top = $(window).scrollTop() + 0;
        if (window_top > 200) {
            $('.header_part , .classic_header, .fixed_menu ').addClass('menu_fixed animated slideInDown');
        } else {
            $('.header_part , .classic_header, .fixed_menu').removeClass('menu_fixed animated slideInDown');
        }
    });


    //menu icon
    $('.close_icon').on('click', function () {
        $('.body_wrapper').removeClass('promotion').find('.promo_banner').css({
            top: '-70px',
            WebkitTransition: 'all 0.3s ease-in-out',
            MozTransition: 'all 0.3s ease-in-out',
            MsTransition: 'all 0.3s ease-in-out',
            OTransition: 'all 0.3s ease-in-out',
            transition: 'all 0.3s ease-in-out'
        });

    });

    //count up
    var counter = $('.counter');
    if (counter.length > 0) {
        counter.counterUp({
            time: 2000
        });
    }

    //wow js
    var wow = new WOW({
        animateClass: 'animated',
        offset: 100,
        mobile: false,
        duration: 1000,
    });
    wow.init();

    //offcanvus menu js
    $("#cy_collaps_menu_icon").on('click', function () {
        $('.canvus_menu').addClass("canvus_active")
    });
    $(".canvus_close_icon").on('click', function () {
        $(".canvus_menu").removeClass("canvus_active")
    });

    //canvus menu js
    $(".offcanvus_menu_trigger").on('click', function () {
        $("body").addClass("active_off_canvus")
        $(".offcanvas_overlay").addClass("active_offcanvas_overlay")
    });
    $(".close_icon, .offcanvas_overlay").on('click', function () {
        $("body").removeClass("active_off_canvus")
        $(".offcanvas_overlay").removeClass("active_offcanvas_overlay")
    });

    // dropdown-toggle class not added for submenus by current WP Bootstrap Navwalker as of November 15, 2017.
    $('.dropdown-menu > .dropdown > a').addClass('dropdown-toggle');

    $('.dropdown-menu a.dropdown-toggle').on('click', function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');
        $(this).parents('li.nav-item.dropdown.show').on('.dropdown', function (e) {
            $('.dropdown-menu > .dropdown .show').removeClass("show");
        });
        $('.dropdown-menu a.dropdown-toggle').removeClass("show_dropdown");
        if ($(this).next().hasClass('show')) {
            $(this).addClass("show_dropdown");
        }
        return false;
    });
    $('.classic_header .dropdown-menu > .dropdown').hover(
        function () {
            $(this).find('.dropdown-toggle').toggleClass("active_icon");
        }
    );

    $('.off_canvus_menu .dropdown-menu > .dropdown > .dropdown-toggle').on('click', function () {
        $('.off_canvus_menu .dropdown-menu > .dropdown > .dropdown-toggle').removeClass("active_icon");
        if ($(this).next().hasClass('show')) {
            $(this).addClass("active_icon");
        }
    });


    // easying js code 
    $('.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        var headerH = '115';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });


    //niceselect js
    var nc_select = $('.nc_select');
    if (nc_select.length > 0) {
        nc_select.niceSelect();
    }

    // easying js code 
    $('.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        var headerH = '115';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    if ($('.parallax_shap').length > 0) {
        $('.parallax_shap').parallax({
            scalarX: 10.0,
            scalarY: 10.0
        });
    }

    //video popup
    var video_popup = $('.video_popup_area');
    if (video_popup.length > 0) {
        video_popup.magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
    }

    // easying js code 
    $('.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        var headerH = '115';
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //load more btn
    $(".load_more_btn_active .load_more_section_active").slice(0, 3).show();
    $("#seeMore").click(function (e) {
        e.preventDefault();
        $(".load_more_section_active:hidden").slice(0, 3).fadeIn("slow");

        if ($(".load_more_section_active:hidden").length == 0) {
            $("#seeMore").fadeOut("slow");
        }
    });

    var bttHeadroom = new Headroom(document.getElementById("cy_scorl_top"), {
        tolerance: 0,
        offset: 500,
        tolerance: {
            up: 0,
            down: 0
        },
        classes: {
            initial: "slide",
            top: "headroom--top",
            pinned: "slide--reset",
            unpinned: "slide--down"
        }
    });
    bttHeadroom.init();

    var cy_scorl_top = $('#cy_scorl_top');
    cy_scorl_top.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });

    //parallaxie back ground image
    var parallaxie = $('.parallaxie');
    if (parallaxie.length) {
        parallaxie.parallaxie({
            speed: 0.5,
            offset: 50,
        });
    };

    //style map js
    var style_map = $('.style_map');
    if (style_map.length) {
        style_map.gmap3({
                center: [41.850033, -87.650052],
                zoom: 12,
                mapTypeId: "shadeOfGrey", // to select it directly
                mapTypeControlOptions: {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
                }
            })
            .marker({
                position: [41.850033, -87.650052],
                icon: 'http://droitthemes.com/palash/Location_icon.png'
            })
            .styledmaptype(
                "shadeOfGrey",
                [{
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": [{
                            "saturation": 36
                        }, {
                            "color": "#000000"
                        }, {
                            "lightness": 40
                        }]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": [{
                            "visibility": "on"
                        }, {
                            "color": "#ffffff"
                        }, {
                            "lightness": 16
                        }]
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.icon",
                        "stylers": [{
                            "visibility": "off"
                        }]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#dddddd"
                        }, {
                            "lightness": 20
                        }]
                    },
                    {
                        "featureType": "administrative",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#fafafa"
                        }, {
                            "lightness": 17
                        }, {
                            "weight": 1.2
                        }]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#ddddd"
                        }, {
                            "lightness": 20
                        }]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#888"
                        }, {
                            "lightness": 21
                        }]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.fill",
                        "stylers": [{
                            "color": "#999"
                        }, {
                            "lightness": 17
                        }]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "geometry.stroke",
                        "stylers": [{
                            "color": "#777"
                        }, {
                            "lightness": 29
                        }, {
                            "weight": 0.2
                        }]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#ffffff"
                        }, {
                            "lightness": 18
                        }]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#cccccc"
                        }, {
                            "lightness": 16
                        }]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#fff"
                        }, {
                            "lightness": 19
                        }]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [{
                            "color": "#eeeeee"
                        }, {
                            "lightness": 17
                        }]
                    }
                ], {
                    name: "Shades of Grey"
                }
            );

    };


    

    function myFunction(x) {
        if (x.matches) { // If media query matches
          // Preset
            if ($(".cy_color-theme-demos").length > 0) {
                //switcher 
                var switchs = true;
                $(".settingBtn").on("click", function (e) {
                    e.preventDefault();
                    if (switchs) {
                        $(this).addClass("active");
                        $(".cy_color-theme-demos").animate({
                            "right": "0px"
                        }, 400);
                        switchs = false;
                    } else {
                        $(this).removeClass("active");
                        $(".cy_color-theme-demos").animate({
                            "right": "-270px"
                        }, 400);
                        switchs = true;
                    }
                    $('.cy_color-theme-demos').toggleClass('active');
                });
            }
        } else {
          // Preset
            if ($(".cy_color-theme-demos").length > 0) {
                //switcher 
                var switchs = true;
                $(".settingBtn").on("click", function (e) {
                    e.preventDefault();
                    if (switchs) {
                        $(this).addClass("active");
                        $(".cy_color-theme-demos").animate({
                            "right": "0px"
                        }, 400);
                        switchs = false;
                    } else {
                        $(this).removeClass("active");
                        $(".cy_color-theme-demos").animate({
                            "right": "-350px"
                        }, 400);
                        switchs = true;
                    }
                    $('.cy_color-theme-demos').toggleClass('active');
                });
            }
        }
    }
      
    var x = window.matchMedia("(max-width: 768px)")
    myFunction(x) // Call listener function at run time
    x.addListener(myFunction) // Attach listener function on state changes

    // Preloader js
    $(window).on('load', function () {
        $(".preloder_part").fadeOut();
        $(".sk-chase-dot").delay(1000).fadeOut("slow");
    });

    

    //banner slider
    var swiper_slider_active = document.getElementsByClassName("swiper_slider_active");
    if (swiper_slider_active.length) {
        var mySwiper = new Swiper('.swiper_slider_active', {
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            effect: "fade",
            autoplay: {
                delay: 500000000,
            },
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })
    }

    //banner slider
    var store_breadcrumb_slider_active = document.getElementsByClassName("store_breadcrumb_slider_active");
    if (store_breadcrumb_slider_active.length) {
        var mySwiper = new Swiper('.store_breadcrumb_slider_active', {
            slidesPerView: 1,
            loop: true,
            effect: "fade",
            fadeEffect: {
                crossFade: true
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            autoplay: {
                delay: 500000000,
            }
        })
    }

    //banner slider
    var cy_instagram_slider = document.getElementsByClassName("cy_instagram_slider");
    if (cy_instagram_slider.length) {
        var mySwiper = new Swiper('.cy_instagram_slider', {
            slidesPerView: 3,
            loop: true,
            spaceBetween: 15,
            pagination: {
                el: '.swiper_pagination',
                type: 'progressbar',
                clickable: true
            },
            autoplay: {
                delay: 500000000,
            }
        })
    }
    //banner slider
    var cy_testimonial_slider = document.getElementsByClassName("cy_testimonial_slider ");
    if (cy_testimonial_slider.length) {
        var mySwiper = new Swiper('.cy_testimonial_slider ', {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 15,
            pagination: {
                el: '.swiper_pagination',
                clickable: true
            },
            autoplay: {
                delay: 500000000,
            },
            breakpoints: {
                // when window width is >= 320px
                320: {
                   spaceBetween: 40
                },
                768: {
                    spaceBetween: 20
                },
                1024: {
                    spaceBetween: 100
                }
            }
        })
    }
    //banner slider
    var cy_about_page_testimonial_wrapper = document.getElementsByClassName("cy_about_page_testimonial_wrapper");
    if (cy_about_page_testimonial_wrapper.length) {
        var mySwiper = new Swiper('.cy_about_page_testimonial_wrapper ', {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 100,
            pagination: {
                el: '.swiper_pagination',
                clickable: true
            },
            autoplay: {
                delay: 500000000,
            },
            // Responsive breakpoints
            breakpoints: {
                // when window width is >= 320px
                320: {
                   spaceBetween: 40
                },
                768: {
                    spaceBetween: 20
                },
                1024: {
                    spaceBetween: 100
                }
            }
        })
    }
    //banner slider
    var cy_blog_post_slider_active = document.getElementsByClassName("cy_blog_post_slider_active");
    if (cy_blog_post_slider_active.length) {
        var mySwiper = new Swiper('.cy_blog_post_slider_active ', {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 100,
            autoplay: {
                delay: 500000000,
            }
        })
    }

    //banner slider
    var cy_blog_breadcrumb_wrapper_slider = document.getElementsByClassName("cy_blog_breadcrumb_wrapper_slider");
    if (cy_blog_breadcrumb_wrapper_slider.length) {
        var mySwiper = new Swiper('.cy_blog_breadcrumb_wrapper_slider ', {
            slidesPerView: 1,
            loop: true,
            spaceBetween: 100,
            autoplay: {
                delay: 500000000,
            },
            navigation: {
                nextEl: '.swiper_button_next',
                prevEl: '.swiper_button_prev',
            },
        })
    }

    //thumbnail slider
    var cy_thumbnail_testimonial_slider = document.getElementsByClassName("cy_thumbnail_testimonial_slider ");
    if (cy_thumbnail_testimonial_slider.length) {
        var galleryThumbs = new Swiper('.testimonial_gallery_top', {
            spaceBetween: 20,
            slidesPerView: 3,
            centeredSlides: true,
            loop: true,
            freeMode: true,
            loopedSlides: 1, //looped slides should be the same
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var galleryTop = new Swiper('.testimonial_gallery_thumbs', {
            slidesPerView: 1,
            loop: true,
            centeredSlides: true,
            loopedSlides: 3, //looped slides should be the same
            thumbs: {
                swiper: galleryThumbs,
            },
        });
    }

    //maasonry js
    $(".cy_grid_metro").each(function () {
        var cy_grid_metro = $('.cy_grid_metro');
        if (cy_grid_metro.length) {
            $(this).dlAddonsGridLayout();
        }
    });

    var galleryWrapper = $('.cy_grid_wrapper_popup');
    if(galleryWrapper.length){
        galleryWrapper.magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
        });
    }

    //data bg img
    $("[data-bg-img]").each(function () {
        var bg = $(this).data("bg-img");
        $(this).css({
            "background": "no-repeat center/cover url(" + bg + ")",
        })
    })

    $("[data-bg-color]").each(function () {
        var bg_color = $(this).data("bg-color");
        $(this).css({
            "background-color": (bg_color)
        })
    })

    //product count 
    var incrementPlus;
    var incrementMinus;
    var buttonPlus = $(".cart-qty-plus");
    var buttonMinus = $(".cart-qty-minus");

    var incrementPlus = buttonPlus.click(function() {
        var $n = $(this)
            .parent(".product_count")
            .find(".qty");
        $n.val(Number($n.val()) + 1);
    });

    var incrementMinus = buttonMinus.click(function() {
        var $n = $(this)
            .parent(".product_count")
            .find(".qty");
        var amount = Number($n.val());
        if (amount > 0) {
            $n.val(amount - 1);
        }
    });

    //banner slider
    var swiper_slider_active = document.getElementsByClassName("swiper_slider_active");
    if (swiper_slider_active.length) {
        var swiper_slider_active = $('.swiper_slider_active');
        if (swiper_slider_active.length) {
            var menu = ['Gray Metallic', 'Gray Allic', 'Metallic']
            var mySwiper = new Swiper('.swiper_slider_active', {
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span class="' + className + '"><p> ' + (menu[index]) + '</p> </span>';
                    },
                },
                effect: "fade",
                autoplay: {
                    delay: 500000000,
                },
                fadeEffect: {
                    crossFade: true
                },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
            })
        };
    }
    
    //product count 
    var incrementPlus;
    var incrementMinus;
    var buttonPlus = $(".cart-qty-plus");
    var buttonMinus = $(".cart-qty-minus");

    var incrementPlus = buttonPlus.click(function() {
        var $n = $(this)
            .parent(".product_count, .popup_product_count")
            .find(".qty");
        $n.val(Number($n.val()) + 1);
    });

    var incrementMinus = buttonMinus.click(function() {
        var $n = $(this)
            .parent(".product_count, .popup_product_count")
            .find(".qty");
        var amount = Number($n.val());
        if (amount > 0) {
            $n.val(amount - 1);
        }
    });


}(jQuery));