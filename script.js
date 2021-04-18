const headerPosition = $('.header-secondary').offset().top;
const firstScreenHeight = $('.first-screen-animation').height();

$(window).scroll(function () {
    const scrollTop = $(this).scrollTop();

    if (scrollTop > headerPosition) {
        $('.header-secondary').addClass('fixed')
        $('.about').addClass('fixed-header')
    } else {
        $('.header-secondary').removeClass('fixed')
        $('.about').removeClass('fixed-header')
    }

    if (scrollTop < firstScreenHeight) {
        const percent = scrollTop / (firstScreenHeight / 100);

        const scale = (1 + (percent / 100) * 5).toFixed(3);
        $('.circles').css({
            'transform': `scale(${scale})`,
        })
    }
})


$('.burger').click(function () {
    $('.header-secondary .list-menu').toggleClass('active')
})



