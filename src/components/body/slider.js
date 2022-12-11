// $('.card__btn').on('click', function (e) {
//    e.preventDefault();
//    $(this).toggleClass('active').next().stop().slideToggle(500);
//    $('.packets').not( $(this).next() ).slideUp();
//    $('.card__btn').not( this ).removeClass('active');
// })

const buttons = document.querySelectorAll('.card__btn');

buttons.forEach(button => {
   button.addEventListener('click', () => {
      button.classList.toggle('active')
   
      if (button.classList.contains('active')) {
         button.innerHTML = `Свернуть пакеты <span class="icon-showup"></span>`;
      } else {
         button.innerHTML = 'Посмотреть пакеты <span class="icon-showdown"></span>';
      }
   })
});