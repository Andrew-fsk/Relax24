$(document).ready(function () {
    setPopup();

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
})

function setPopup(){
    let mobMenu = $('.mobile-menu-wrap');
    let header = $('header');
    mobMenu.css('top', header.innerHeight());
    mobMenu.css('height', $(this).height() -header.innerHeight());
}

$(window).resize(function () {
    setPopup();
});