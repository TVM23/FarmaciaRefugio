const menuIcono=document.getElementById("toggle-menu");
const menuDesplegable=document.getElementById("menu-desplegable");
var menu = document.querySelectorAll('.menu-item-show');
var menuSub = document.querySelectorAll('.menu-item-show-2');

const body = document.querySelector('body');

const cuerpo = document.querySelector('cuerpo');


menuIcono.addEventListener('click', ()=>{
    menuDesplegable.classList.toggle("mostrar-menu-desplegable");
    body.classList.toggle('no-scroll');
});

body.addEventListener('dblclick', ()=>{
    if(menuDesplegable.classList.contains('mostrar-menu-desplegable')){
        menuDesplegable.classList.toggle("mostrar-menu-desplegable");
        body.classList.toggle('no-scroll');
    }
})

menu.forEach(function(item){
    item.addEventListener('click', function(i){
        var elemento = i.target.parentNode;
        console.log(elemento.children[1])
        elemento.children[1].classList.toggle('activo');
        console.log(elemento.children[1])
    })
})

menuSub.forEach(function(item2){
    console.log(item2.firstElementChild)
    item2.addEventListener('click', function(a){
        var elemento2 = a.target.parentNode;
        console.log(menuSub)
        console.log(item2)
        console.log(elemento2.children[0])
        console.log(a)
        elemento2.children[0].classList.toggle('activo');
        console.log(elemento2.children[0])
    })
})