"use strict";

var productos = [{
  id: 100,
  nombre: 'Treda',
  extra: '20 tabletas',
  precio: 220.00,
  descuento: 50,
  imagen: '/img/medicamentos/treda.webp'
}, {
  id: 200,
  nombre: 'Motrin Infantil',
  extra: 'Solucion 120 ml',
  precio: 225.00,
  descuento: 25,
  imagen: '/img/medicamentos/motrin-inf.webp'
}, {
  id: 100,
  nombre: 'Pepto-Bismol',
  extra: '24 tabletas masticables',
  precio: 50.00,
  descuento: 0,
  imagen: '/img/medicamentos/pepto-bismol.webp'
}, {
  id: 400,
  nombre: 'Buscapina Duo',
  extra: '10 tabletas 10 mg',
  precio: 130.00,
  descuento: 0,
  imagen: '/img/medicamentos/buscapina-Duo-10mg.jpg'
}, {
  id: 500,
  nombre: 'Aspirina',
  extra: '40 tabletas 500 mg',
  precio: 30.00,
  descuento: 0,
  imagen: '/img/medicamentos/aspirina-40tabs-500mg.webp'
}, {
  id: 600,
  nombre: 'Sedalmerck',
  extra: '24 tabletas 650 mg',
  precio: 80.00,
  descuento: 0,
  imagen: '/img/medicamentos/sedalmerck-24tabs-650mg.webp'
}, {
  id: 700,
  nombre: 'Redoxon Forte',
  extra: '10 Tableta Tubo Vitamina 2g',
  precio: 118.00,
  descuento: 0,
  imagen: '/img/medicamentos/redoxon-forte-2g.jpg'
}, {
  id: 800,
  nombre: 'Nesajar',
  extra: '32 capsulas 100 mg',
  precio: 400.00,
  descuento: 25,
  imagen: '/img/medicamentos/nesajar-100mg.jpg'
}, {
  id: 900,
  nombre: 'Advil Analgesico',
  extra: '20 capsulas 400 mg',
  precio: 160.00,
  descuento: 10,
  imagen: '/img/medicamentos/advil-analgesico-400mg.webp'
}, {
  id: 1000,
  nombre: 'Dramamine Infantil',
  extra: 'Jarabe 120 ml',
  precio: 140.00,
  descuento: 0,
  imagen: '/img/medicamentos/dramamine.webp'
}, {
  id: 1100,
  nombre: 'Tabcin Efervescente',
  extra: '12 tabletas 50 mg',
  precio: 40.00,
  descuento: 0,
  imagen: '/img/medicamentos/tabcin_eferv-12tabs-500mg.webp'
}, {
  id: 1200,
  nombre: 'Afrin Adulto Cong. Nasal',
  extra: 'Solucion 20ml',
  precio: 115.00,
  descuento: 10,
  imagen: '/img/medicamentos/Afrin-Lub-Adulto-20ml.webp'
}, {
  id: 1300,
  nombre: 'Desenfriol D',
  extra: '24 tabletas 500 mg',
  precio: 80.00,
  descuento: 10,
  imagen: '/img/medicamentos/desenfrioD-24tabs-500mg.jpg'
}, {
  id: 1400,
  nombre: 'Next Gripa',
  extra: '10 tabletas 500 mg',
  precio: 35.00,
  descuento: 0,
  imagen: '/img/medicamentos/NextGripa-10tabs-500mg.jpg'
}, {
  id: 1500,
  nombre: 'Vastionin',
  extra: '30 capsulas 10 mg',
  precio: 850.00,
  descuento: 0,
  imagen: '/img/medicamentos/vastionin-30caps-10mg.jpg'
}];
var slideIndex2 = 1;
function llenarProductos() {
  var padre = document.getElementById('slides-padre');
  var dotsContainer = document.getElementById('contenedor-dots');
  var contadorDots = 1;
  var divmySlides;
  var divcontenedorproductos;
  var numero = 4;
  if (window.innerWidth <= 900 && window.innerWidth > 500) {
    numero = 2;
  } else if (window.innerWidth <= 500) {
    numero = 1;
  }
  for (i = 0; i < productos.length; i++) {
    if (i % numero == 0) {
      divmySlides = document.createElement('div');
      divmySlides.classList.add("mySlides");
      divmySlides.classList.add("mySlides2");
      /* divmySlides.classList.add("fade"); */
      divmySlides.classList.add("elim");
      divcontenedorproductos = document.createElement('div');
      divcontenedorproductos.classList.add("divcontenedorproductos");
      divmySlides.append(divcontenedorproductos);
      padre.append(divmySlides);
      dotsContainer.innerHTML += ' <span class="dot dot2 elim" onclick="currentSlide2(' + contadorDots + ')"></span>';
      contadorDots++;
    }
    divcontenedorproductos.append(retornarObjeto(productos[i]));
  }
  showSlides2(slideIndex2);
}
function retornarObjeto(producto) {
  var cadena = document.createElement('div');
  cadena.classList.add("contenedor-med");
  var precio_desc = producto.precio - producto.precio * (producto.descuento / 100);
  //var div = document.createElement('div');
  // cadena.innerHTML = "<p>"+producto.nombre+"</p>"+
  cadena.innerHTML = "" + "<div class='img-med'>" + " <a href='/informacion-producto'>" + "   <img class='imagen' src=" + producto.imagen + ">" + " </a>" + "</div>" + "<div class='med-info'>" + " <div class='nom-med'>" + "   <p>" + producto.nombre + "</p>" + " </div>" + " <div class='extra-med'>" + "   <p>" + producto.extra + "</p>" + " </div>" + "</div>";
  if (producto.descuento != 0) {
    cadena.innerHTML += "<div class='precios-med'>" + " <div class='pre1'>" + "     <p>$" + producto.precio.toLocaleString('es-MX', {
      minimumFractionDigits: 2
    }) + "</p>" + " </div>" + " <div class='pre2'>" + "     <p>$" + precio_desc.toLocaleString('es-MX', {
      minimumFractionDigits: 2
    }) + "</p>";
    " </div>" + "</div>";
  } else {
    cadena.innerHTML += "<div class='precios-med'>" + " <div class='pre1 v-hidden'>" + "     <p>$" + producto.precio.toLocaleString('es-MX', {
      minimumFractionDigits: 2
    }) + "</p>" + " </div>" + " <div class='pre2'>" + "     <p>$" + producto.precio.toLocaleString('es-MX', {
      minimumFractionDigits: 2
    }) + "</p>";
    " </div>" + "</div>";
  }
  cadena.innerHTML += "<div class='carrito-med'>" + " <div class='btn-carrito'>" + "   <a href='#'>Agregar al carrito</a>" + " </div>" + "</div>" + "";
  return cadena;
}

/*
 <div class="mySlides mySlides2 fade">
          <div style="display: flex; width: 100%;height:27.4rem;">
            <div class="miprod"></div>
            <div class="miprod"></div>
            <div class="miprod"></div>
            <div class="miprod"></div>
          </div>
        </div>
*/

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controles
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// imagen controles
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides1");
  var dots = document.getElementsByClassName("dot1");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Next/previous controles
function plusSlides2(n) {
  showSlides2(slideIndex2 += n);
}

//  imagen controles
function currentSlide2(n) {
  showSlides2(slideIndex2 = n);
}
function showSlides2(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides2");
  var dots = document.getElementsByClassName("dot2");
  console.log(slides.length);
  console.log(n);
  if (n > slides.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";
}

/* ----------------------------- */

var ofertas = [{
  id: 100,
  nombre: 'Treda',
  extra: '20 tabletas',
  precio: 220.00,
  descuento: 50,
  imagen: '/img/medicamentos/treda.webp'
}, {
  id: 200,
  nombre: 'Motrin Infantil',
  extra: 'Solucion 120 ml',
  precio: 225.00,
  descuento: 25,
  imagen: '/img/medicamentos/motrin-inf.webp'
}, {
  id: 300,
  nombre: 'Avamys 2A',
  extra: 'Suspensión 120 Disparos',
  precio: 637.00,
  descuento: 40,
  imagen: '/img/medicamentos/avamys-2A.jpeg'
}, {
  id: 400,
  nombre: 'Histiacil Infantil Sabor Fresa',
  extra: 'Jarabe 140 ml',
  precio: 160.00,
  descuento: 20,
  imagen: '/img/medicamentos/histiacil-inf-fresa.jpg'
}, {
  id: 500,
  nombre: 'Andantol',
  extra: 'Jalea 40 gr',
  precio: 317.00,
  descuento: 40,
  imagen: '/img/medicamentos/andantol.jpg'
}, {
  id: 600,
  nombre: 'Dabex',
  extra: '30 tabletas 850 mg',
  precio: 450.00,
  descuento: 15,
  imagen: '/img/medicamentos/dabex.jpg'
}, {
  id: 700,
  nombre: 'Panclasa',
  extra: '20 capsulas 80 mg',
  precio: 230.00,
  descuento: 30,
  imagen: '/img/medicamentos/panclasa.webp'
}, {
  id: 800,
  nombre: 'Nesajar',
  extra: '32 capsulas 100 mg',
  precio: 400.00,
  descuento: 25,
  imagen: '/img/medicamentos/nesajar-100mg.jpg'
}, {
  id: 900,
  nombre: 'Advil Analgesico',
  extra: '20 capsulas 400 mg',
  precio: 160.00,
  descuento: 10,
  imagen: '/img/medicamentos/advil-analgesico-400mg.webp'
}, {
  id: 1000,
  nombre: 'Excedrin Migraña',
  extra: '24 tabletas 250 mg',
  precio: 110.00,
  descuento: 32,
  imagen: '/img/medicamentos/excedrin-migrana-24cap-250mg.jpg'
}, {
  id: 1100,
  nombre: 'Desenfriol-ito Plus Niños',
  extra: '24 tabletas masticables 1 mg',
  precio: 75.00,
  descuento: 30,
  imagen: '/img/medicamentos/Desenfriol-ito-tabsmasticables-1mg.jpg'
}, {
  id: 1200,
  nombre: 'Afrin Adulto Cong. Nasal',
  extra: 'Solucion 20ml',
  precio: 115.00,
  descuento: 10,
  imagen: '/img/medicamentos/Afrin-Lub-Adulto-20ml.webp'
}, {
  id: 1300,
  nombre: 'Desenfriol D',
  extra: '24 tabletas 500 mg',
  precio: 80.00,
  descuento: 10,
  imagen: '/img/medicamentos/desenfrioD-24tabs-500mg.jpg'
}];
var slideIndex3 = 1;
function llenarOfertas() {
  var padre = document.getElementById('slides-padre2');
  var dotsContainer = document.getElementById('contenedor-dots2');
  var contadorDots = 1;
  var divmySlides;
  var divcontenedorproductos;
  var numero = 4;
  if (window.innerWidth <= 900 && window.innerWidth > 500) {
    numero = 2;
  } else if (window.innerWidth <= 500) {
    numero = 1;
  }
  for (i = 0; i < ofertas.length; i++) {
    if (i % numero == 0) {
      divmySlides = document.createElement('div');
      divmySlides.classList.add("mySlides");
      divmySlides.classList.add("mySlides3");
      /* divmySlides.classList.add("fade"); */
      divmySlides.classList.add("elim");
      divcontenedorproductos = document.createElement('div');
      divcontenedorproductos.classList.add("divcontenedorproductos");
      divmySlides.append(divcontenedorproductos);
      padre.append(divmySlides);
      dotsContainer.innerHTML += ' <span class="dot dot3 elim" onclick="currentSlide3(' + contadorDots + ')"></span>';
      contadorDots++;
    }
    divcontenedorproductos.append(retornarObjetoOfertas(ofertas[i]));
  }
  showSlides3(slideIndex3);
}
function retornarObjetoOfertas(ofertas) {
  var cadena = document.createElement('div');
  cadena.classList.add("contenedor-med");
  var precio_desc = ofertas.precio - ofertas.precio * (ofertas.descuento / 100);
  //var div = document.createElement('div');
  // cadena.innerHTML = "<p>"+producto.nombre+"</p>"+
  cadena.innerHTML = "" + "<div class='img-med'>" + " <a href='/informacion-producto'>" + "   <img class='imagen' src=" + ofertas.imagen + ">" + " </a>" + "</div>" + "<div class='med-info'>" + " <div class='nom-med'>" + "   <p>" + ofertas.nombre + "</p>" + " </div>" + " <div class='extra-med'>" + "   <p>" + ofertas.extra + "</p>" + " </div>" + "</div>";
  if (ofertas.descuento != 0) {
    cadena.innerHTML += "<div class='precios-med'>" + " <div class='pre1'>" + "     <p>$" + ofertas.precio.toLocaleString('es-MX', {
      minimumFractionDigits: 2
    }) + "</p>" + " </div>" + " <div class='pre2'>" + "     <p>$" + precio_desc.toLocaleString('es-MX', {
      minimumFractionDigits: 2
    }) + "</p>";
    " </div>" + "</div>";
  } else {
    ofertas.innerHTML += "<div class='precios-med'>" + " <div class='pre1 v-hidden'>" + "     <p>$" + ofertas.precio.toLocaleString('es-MX', {
      minimumFractionDigits: 2
    }) + "</p>" + " </div>" + " <div class='pre2'>" + "     <p>$" + ofertas.precio.toLocaleString('es-MX', {
      minimumFractionDigits: 2
    }) + "</p>";
    " </div>" + "</div>";
  }
  cadena.innerHTML += "<div class='carrito-med'>" + " <div class='btn-carrito'>" + "   <a href='#'>Agregar al carrito</a>" + " </div>" + "</div>" + "";
  return cadena;
}

// Next/previous controles
function plusSlides3(n) {
  showSlides3(slideIndex3 += n);
}

// imagen controles
function currentSlide3(n) {
  showSlides3(slideIndex3 = n);
}
function showSlides3(n) {
  console.log(n);
  var i;
  var slides = document.getElementsByClassName("mySlides3");
  var dots = document.getElementsByClassName("dot3");
  if (n > slides.length) {
    slideIndex3 = 1;
  }
  if (n < 1) {
    slideIndex3 = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex3 - 1].style.display = "block";
  dots[slideIndex3 - 1].className += " active";
}

/* ------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function (event) {
  /* llenarProductos();
  llenarOfertas(); */
  /* borrarElementos(); */
  window.addEventListener('resize', resisePage);
});
/* ------------------------------------------------------------------ */

function resisePage() {
  borrarElementos();
  llenarOfertas();
  llenarProductos();
}
resisePage(); //run once on page load

//then attach to the event listener
/*  window.addEventListener('resize',resisePage); */

function borrarElementos() {
  var array = document.getElementsByClassName('elim');
  console.log(array);
  Array.from(array).forEach(function (element) {
    console.log(element);
    element.remove();
  });
}