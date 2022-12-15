$('.modal').fadeOut(0);

$('[data-modal]').on('click', function() {
   $('.modal').fadeIn();
});

$('[data-close]').on('click', function() {
   $('.modal').fadeOut();
});