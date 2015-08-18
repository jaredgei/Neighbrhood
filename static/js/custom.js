$(document).ready(function() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > $(window).height()) {
            $('.navbar').css({'position':'fixed', 'top':'0'});
            $('.navbarSpacer').show();
        }
        if ($(window).scrollTop() <= $(window).height()) {
            $('.navbar').css({'position':'static', 'top':''});
            $('.navbarSpacer').hide();
        }
    });

    $('.downArrow').click(function() {
        $('html, body').animate({
        scrollTop: $('.navbar').offset().top
    }, 1000);
    });
});