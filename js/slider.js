var pc_element = pc_element || {};
! function (p) {
    "use strict";
    pc_element.pc_initialize = {
        init: function () {
            pc_element.pc_initialize.swiperSlider(), pc_element.pc_initialize.owlCarousel()
        },
        swiperSlider: function () {
            p(".swiper-container").each(function () {
                var t = p(this),
                    i = (p(this).attr("id"), p(this).data("perpage") || 1),
                    a = p(this).data("loop"),
                    e = p(this).data("speed") || 1000,
                    o = p(this).data("space") || 0,
                    l = p(this).data("effect"),
                    c = p(this).data("center"),
                    pl = p(this).data("autoplay"),
                    nex = p(this).data("next"),
                    pre = p(this).data("prev"),
                    pag = p(this).data("pagination"),
                    r = p(this).data("breakpoints");
                // new Swiper(t, {
                //     slidesPerView: i,
                //     spaceBetween: o,
                //     loop: a,
                //     speed: e,
                //     effect: l,
                //     breakpoints: r,
                //     centeredSlides: c,
                //     autoplay: {
                //         delay: 3000,
                //         disableOnInteraction: !1
                //     },
                //     autoplay: pl,
                //     pagination: {
                //         el: pag,
                //         type: pagtype,
                //         clickable: !0
                //     },
                //     navigation: {
                //         nextEl: nex,
                //         prevEl: pre
                //     }
                // })
                new Swiper(t , {
                    slidesPerView: i,
                    spaceBetween: o,
                    loop: a,
                    speed: e,
                    effect: l,
                    breakpoints: r,
                    centeredSlides: c,
                    autoplay: {
                        delay: 3000,
                        disableOnInteraction: !1
                    },
                    autoplay: pl,
                    pagination: {
                        el: pag,
                        clickable: true,
                        type: 'bullets'
                    },
                    navigation: {
                        nextEl: nex,
                        prevEl: pre
                    }
                });
            })
        },

        owlCarousel: function () {
            p(".owl-carousel").each(function () {
                var t = p(this),
                    i = (p(this).attr("id"), p(this).data("perpage") || 1),
                    a = p(this).data("loop"),
                    au = p(this).data("autoplay"),
                    e = p(this).data("speed") || 1000,
                    o = p(this).data("margin") || 0,
                    ce = p(this).data("center"),
                    rs = p(this).data("responsive"),
                    dot = p(this).data("dots"),
                    nav = p(this).data("nav")
                t.owlCarousel({
                    items: i,
                    margin: o,
                    loop: a,
                    dots: dot,
                    smartSpeed: e,
                    responsive: rs,
                    center: ce,
                    autoplay: au,
                    autoplayHoverPause: true,
                    nav: nav,
                    navText: ["<i class='ti-angle-left'></i>", "<i class='ti-angle-right'></i>"]
                });
            })
        }
    }, pc_element.documentOnReady = {
        init: function () {
            pc_element.pc_initialize.init()
        }
    }, p(document).ready(pc_element.documentOnReady.init)
}(jQuery);