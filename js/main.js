$(document).ready(function () {
    setPopup();
    setWrap();
    $('.mobile-menu-wrap').PopupSlider({
        effect: 'right',
        button: '.burger',
        closeButton: '.burger',
        container: '.wrap ',
        onMenuOpen: function () {
            document.activeElement.blur();
            if($('.show-filter').hasClass('menu-open')){
                $('.close-filter').click();
            }
        },
        onMenuClose: function () {
            document.activeElement.blur();
        }
    });

    $('.filter').PopupSlider({
        effect: 'left',
        button: '.show-filter',
        closeButton: '.close-filter',
        container: '.wrap ',
        breakpoint: 1024,
        onMenuOpen: function () {
            document.activeElement.blur();
        },
        onMenuClose: function () {
            document.activeElement.blur();
        }
    });

    $('.close-filter').on('click touchend', function () {
        $('.back-layer.menu-open').click();
        return false;
    })

    $('.banner').slick({
        fade: true,
        infinite: true,
        swipeToSlide: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.model-slider').slick({
        infinite: true,
        swipeToSlide: true,
        autoplay: true,
        dots: true,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.program-slider').slick({
        infinite: true,
        swipeToSlide: true,
        autoplay: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.interier-slider').slick({
        infinite: true,
        swipeToSlide: true,
        autoplay: true,
        dots: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    $('.stock-slider').slick({
        infinite: true,
        swipeToSlide: true,
        autoplay: true,
        dots: false,
        arrows: true,
        appendArrows: '.stock-arrows',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.girls-slider').slick({
        infinite: true,
        swipeToSlide: true,
        autoplay: true,
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.master-slider').slick({
        infinite: false,
        swipeToSlide: true,
        autoplay: true,
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(' .address').on('click touchend', function () {
        let contactBlock = $('.contact');
        if (contactBlock){
            if(isMobile.any()){
                $('.burger.menu-open').click();
                $([document.documentElement, document.body]).animate({
                    scrollTop: contactBlock.offset().top - $('header').innerHeight()
                }, 1200);
            }else{
                $([document.documentElement, document.body]).animate({
                    scrollTop: contactBlock.offset().top
                }, 1200);
            }
        }
        return false;
    })

    $('.contact .contact-item').on('click touchend', function () {
        $('.contact .contact-item').removeClass('active');
        $(this).addClass('active');
        return false;
    })

    $('.footer-top .logo').on('click touchend', function () {
        $([document.documentElement, document.body]).animate({
            scrollTop: 0
        }, 1200);
    })

    $('.model-popup-slider-nav').slick({
        infinite: true,
        swipeToSlide: true,
        autoplay: true,
        dots: false,
        arrows: true,
        asNavFor:'.model-popup-slider',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive:[
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.model-popup-slider').slick({
        infinite: true,
        swipeToSlide: true,
        autoplay: true,
        dots: false,
        arrows: true,
        asNavFor:'.model-popup-slider-nav',
        slidesToShow: 1,
        slidesToScroll: 1,
    });

    let heightSlider = document.getElementById('slider-height');
    let sizeSlider = document.getElementById('slider-size');

    if(heightSlider || sizeSlider){
        noUiSlider.create(heightSlider, {
            start: 170,
            connect: 'lower',
            tooltips: [true],
            step: 1,
            range: {
                'min': 0,
                'max': 210
            },
            format: {
                to: function ( value ) {
                    return parseInt(value);
                },
                from: function ( value ) {
                    return parseInt(value);
                }
            }
        });

        noUiSlider.create(sizeSlider, {
            start: 3,
            connect: 'lower',
            tooltips: [true],
            step: 1,
            range: {
                'min': 0,
                'max': 6
            },
            format: {
                to: function ( value ) {
                    return parseInt(value);
                },
                from: function ( value ) {
                    return parseInt(value);
                }
            }
        });
    }

    let movementStrength = 25;
    let height = movementStrength / $(window).height();
    let width = movementStrength / $(window).width();
    $(".girl-choose").mousemove(function(e){
        let pageX = e.pageX - ($(window).width() / 2);
        let pageY = e.pageY - ($(window).height() / 2);
        let newvalueX = width * pageX * -1;
        let newvalueY = height * pageY * -1;
        $('.girl-choose .girl').css("background-position", newvalueX+"px     "+newvalueY+"px");
    });

    $('.validation-field input[type="text"],.validation-field textarea, .validation-field input[type="password"]').on("blur", function () {
        $(this).val() ? $(this).parent().addClass('active') : $(this).parent().removeClass('active');
    }).each(function () {
        $(this).val() ? $(this).parent().addClass('active') : $(this).parent().removeClass('active');
    });


    $('.js-popup__close').click(close_popup);

    $('.js-btn-popup').click(function (e) {
        e.preventDefault();
        let index_btn_popup = $(this).attr('href');
        openPopup(index_btn_popup);
    });

    $('.js-popup').click(function (e) {
        let popup = $('.js-popup__wrapp');
        if (!popup.is(e.target) && popup.has(e.target).length === 0)
            close_popup();
    });
})

function setPopup(){
    let mobMenu = $('.mobile-menu-wrap');
    let header = $('header');
    mobMenu.css('top', header.innerHeight());
    mobMenu.css('height', $(this).height() -header.innerHeight());
}

function setWrap(){
    if($(window).innerWidth() < 767){
        $('.wrap').css('padding-top', $('header').innerHeight());
    }
}

$(window).resize(function () {
    setPopup();
    setWrap();
});

$(window).scroll(function () {
    if ($(this).scrollTop() > $(this).height() - $('header').height()) {
        $(".to-up").css({
            bottom: "4%",
            opacity: 1,
        });
    } else {
        $(".to-up").css({
            bottom: "-50%",
        });
    }
});
$(".to-up").on("click", function () {
    $("html, body").animate(
        {
            scrollTop: 0,
        },
        1000
    );
    return false;
});


function openPopup(id) {
    $(".js-popup[data-id-popup='" + id + "']").fadeIn(300);
}

function close_popup() {
    $('.js-popup').fadeOut(300);
}


/* Проверка mobile усройств*/

isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
