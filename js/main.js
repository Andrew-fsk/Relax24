$(document).ready(function () {
    setPopup();

    $('.mobile-menu-wrap').PopupSlider({
        effect: 'right',
        button: '.burger',
        closeButton: '.burger',
        container: '.wrap ',
        onMenuOpen: function () {
            document.activeElement.blur();
        },
        onMenuClose: function () {
            document.activeElement.blur();
        }
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