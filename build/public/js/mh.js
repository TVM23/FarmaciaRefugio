"use strict";

var menuIcono = document.getElementById("toggle-menu");
var menuDesplegable = document.getElementById("menu-desplegable");
var menu = document.querySelectorAll('.menu-item-show');
var menuSub = document.querySelectorAll('.menu-item-show-2');
var body = document.querySelector('body');
menuIcono.addEventListener('click', function () {
  menuDesplegable.classList.toggle("mostrar-menu-desplegable");
  body.classList.toggle('no-scroll');
});
menu.forEach(function (item) {
  item.addEventListener('click', function (i) {
    var elemento = i.target.parentNode;
    console.log(elemento.children[1]);
    elemento.children[1].classList.toggle('activo');
    console.log(elemento.children[1]);
  });
});
menuSub.forEach(function (item2) {
  item2.addEventListener('click', function (a) {
    var elemento2 = a.target.parentNode;
    console.log(elemento2.children[0]);
    elemento2.children[0].classList.toggle('activo');
    console.log(elemento2.children[0]);
  });
});