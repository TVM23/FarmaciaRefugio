"use strict";

var formulario = document.getElementById('formulario');
var correo = document.getElementById('txtCorreo');
console.log(correo);
var ban = false;
formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  resetColor();
  checkInputs();
  if (ban == true) {
    formulario.submit();
    window.location = '/html/inicio-sesion.html';
  }
});
function checkInputs() {
  var valorcorreo = correo.value.trim();
  ban = false;
  var cont = 0;
  if (valorcorreo === '') {
    setErrorFor(correo, 'Debes ingresar tu correo.');
  } else if (!isEmail(valorcorreo)) {
    setErrorFor(correo, 'Debes ingresar un correo valido');
  } else {
    setSuccessFor(correo);
    cont += 1;
  }
  if (cont == 1) {
    ban = true;
  }
}
function setErrorFor(input, message) {
  var formControl = input.parentElement;
  console.log(formControl);
  var celda = formControl.querySelector('input');
  console.log(celda);
  var mensajeError = formControl.querySelector('.mensaje-error');
  formControl.classList.add('error');
  mensajeError.className = 'mensaje-error error';
  mensajeError.innerText = message;
}
function removeErrorFor(input) {
  var formControl = input.parentElement;
  console.log(formControl);
  var celda = formControl.querySelector('input');
  console.log(celda);
  var mensajeError = formControl.querySelector('.mensaje-error');
  mensajeError.textContent = 'Error message';
  formControl.classList.remove('error');
  mensajeError.className = 'mensaje-error';
}
function setSuccessFor(input) {
  var formControl = input.parentElement;
  var celda = formControl.querySelector('input');
  celda.classList.add('success');
  formControl.classList.add('success');
}
function resetColor() {
  var datos = document.querySelectorAll(".esp input");
  var mensajes = document.querySelectorAll(".mensaje-error");
  var formControl = document.querySelectorAll('.campos .esp');
  for (var i = 0; i < formControl.length; i++) {
    formControl[i].classList.remove('error');
    formControl[i].classList.remove('success');
  }
  for (var i = 0; i < mensajes.length; i++) {
    mensajes[i].classList.remove('error');
  }
}
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
document.getElementById('formulario').addEventListener('focusin', function (event) {
  /* event.target.value = ''; */
  removeErrorFor(event.target);
});