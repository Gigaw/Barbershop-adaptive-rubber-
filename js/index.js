var mainNav = document.querySelector('.main-nav');
var mainNavToggle = document.querySelector('.main-nav__toggle');
mainNav.classList.remove('main-nav--nojs');
mainNavToggle.onclick = function(){
  mainNav.classList.toggle('main-nav--closed');
  mainNav.classList.toggle('main-nav--opened');
};



