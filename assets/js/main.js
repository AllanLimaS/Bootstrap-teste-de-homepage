const year = new Date().getFullYear();
const mensagem = "&copy; Copyright - " + year;
$('#texto-footer').html(mensagem);

/* Preloader */
$(window).on('load', function () {
    $('.preloader').fadeOut();
    $('.preloader').delay(350).fadeOut('slow');
    $('body').delay(350).css({'overflow': 'visible'});
});
