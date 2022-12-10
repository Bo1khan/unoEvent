class AddActive {
   constructor(param) {
      const { burger, menu } = param;
      this.burger = document.querySelector(burger);
      this.menu = document.querySelector(menu);
      this.listeners();
   }

   listeners() {
      const { burger, menu } = this;
      burger.addEventListener('click', function (e) {
         e.preventDefault();
         // menu.classList.toggle('active');
         burger.classList.toggle('active');
         if (menu.classList.contains('active')) {
            menu.classList.remove('active');
            setTimeout(() => {
               menu.style.display = 'none';
            }, 200);
         } else {
            menu.style.display = 'flex';
            setTimeout(() => {
               menu.classList.add('active');
            }, 100);
         }
      });
      document.addEventListener('click', (e) => {
         if (menu.classList.contains('active') && e.target != burger) {
            menu.classList.remove('active');
            burger.classList.remove('active');
         }
      });
   }
}

let active = new AddActive({
   burger: '.icon-phone',
   menu: '.contacts'
});