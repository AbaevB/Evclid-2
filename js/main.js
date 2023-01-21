//burger
/*
Назначение переменных для классов .burger-btn, header__nav, nav__link.
*/
let burger = document.querySelector(".burger-btn");
let menuClose = document.querySelector('.menu-close');
let menu = document.querySelector(".header__nav");
let menuLinks = document.querySelectorAll('.nav__link');

// Открытие меню по нажатию на бургер
burger.addEventListener('click', function () {
  menu.classList.add('header__nav_active');
  menuClose.classList.add('menu-close_active');
  document.body.classList.add('stop-scroll');
});

// Закрытие меню по нажатию на крестик
menuClose.addEventListener('click', function () {
  menu.classList.remove('header__nav_active');
  menuClose.classList.remove('menu-close_active');
  document.body.classList.remove('stop-scroll');
});

// Закрытие меню по нажатию на пункт меню
menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {
    burger.classList.remove('burger-btn_active'); //Не работает
    menu.classList.remove('header__nav_active');
    document.body.classList.remove('stop-scroll');
  });
});



//search
let seachOpen = document.querySelector('.search-btn');
let search = document.querySelector('.search');
let searchClose = document.querySelector('.search-close');

seachOpen.addEventListener('click', () => {
  search.classList.add('search_open');
});

searchClose.addEventListener('click', () => {
  search.classList.remove('search_open');
});


//Tabs

let tabsLink = document.querySelectorAll('.tabs-nav__btn');
let tabsItem = document.querySelectorAll('.tabs-item');

tabsLink.forEach(function (element) {
  element.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsLink.forEach(function (btn) { btn.classList.remove('tabs-nav__btn_active') });
    e.currentTarget.classList.add('tabs-nav__btn_active');

    tabsItem.forEach(function (element) { element.classList.remove('tabs-item_active') });
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item_active');
  });
});

// slider

new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
          return `<button class="btn btn_round ${className}" aria-label="Переключение слайда"></button>`
      }
  },
});

// Accordion

new Accordion('.accordion-list', {
	elementClass: 'accordion',
	triggerClass: 'accorion__control',
	panelClass: 'accordion__content',
	activeClass: 'accordion_active',
});
