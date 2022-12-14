import 'slick-carousel';

$(document).ready(function () {

   $('.packets').slideUp();
   $('.info').slideUp();

   $('.card__btn').on('click', function (e) {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
         $(this).html(`Свернуть пакеты <span class="icon-showup"></span>`);
         $(this).closest('.card__wrapper').next('.packets').slideDown();
      } else {
         $(this).html('Посмотреть пакеты <span class="icon-showdown"></span>');
         $(this).closest('.card__wrapper').next('.packets').slideUp();
      }
   })

   $('.packet__info').on('click', function (e) {
      e.preventDefault();
      $(this).next('.info').slideToggle();
   });

   $('.more').hover( function() {
      $(this).closest('.packet__info').next('.info').slideDown();
   }, function() {
      $(this).closest('.packet__info').next('.info').slideUp();
   });

   $('.slider').slick({
      dots: true,
   });

   $('.slick-prev').html('<span class="icon-prev"></span>');
   $('.slick-next').html('<span class="icon-next"></span>');

   $('.packets').slick({
      dots: true,
      arrows: false,
      slidesToShow: 1,
      variableWidth: true,
      infinite: false
   });

});