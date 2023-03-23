//Language
$('#header__language').click(function () {
  if ($(this).html() === 'RU') {
    $(this).html('EN');
  } else {
    $(this).html('RU');
  }
  return false;
});

//Burger
const menuBtn = $('.menu__btn');
const menu = $('.menu');
const body = $('.body');

menuBtn.on('click', function () {
  menuBtn.toggleClass('menu__btn--active');
  menu.toggleClass('menu__list--active');
  body.toggleClass('lock');
});

menu.on('click', '.menu__list-link', function () {
  menuBtn.removeClass('menu__btn--active');
  menu.removeClass('menu__list--active');
  body.toggleClass('lock');
});

//Accordion
const questionItem = $('.accordion__item');
const questionInner = $('.accordion__item-inner');

questionInner.on('click', function () {
  $(this).closest(questionItem).toggleClass('questions__item--active');
});

//Animate
var animations = [
  { container: document.getElementById('animation__flower'), path: '/img/json/Flower.json' },
  { container: document.getElementById('animation__kitten'), path: '/img/json/Kitten.json' },
];

animations.forEach(function (animation) {
  bodymovin.loadAnimation({
    container: animation.container,
    path: animation.path,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: 'Demo Animation',
  });
});
