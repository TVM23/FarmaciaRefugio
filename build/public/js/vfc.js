"use strict";

var formulario = document.querySelector('.formulario');
var inputs = document.querySelectorAll('.formulario input');
var expresiones = {
  nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  // Letras y espacios, pueden llevar acentos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^\d{10,15}$/,
  // 7 a 14 numeros.
  asunto: /^[a-zA-ZÀ-ÿ\s]{1,30}$/
};
var campos = {
  nombre: false,
  correo: false,
  telefono: false,
  asunto: false
};
var validarFormulario = function validarFormulario(e) {
  switch (e.target.name) {
    case "nom":
      if (expresiones.nombre.test(e.target.value)) {
        document.getElementById('cnom').classList.remove('incorrecto');
        document.getElementById('cnom').classList.add('correcto');
        campos['nombre'] = true;
      } else {
        document.getElementById('cnom').classList.remove('correcto');
        document.getElementById('cnom').classList.add('incorrecto');
        campos['nombre'] = false;
      }
      break;
    case "cor":
      if (expresiones.correo.test(e.target.value)) {
        document.getElementById('ccor').classList.remove('incorrecto');
        document.getElementById('ccor').classList.add('correcto');
        campos['correo'] = true;
      } else {
        document.getElementById('ccor').classList.remove('correcto');
        document.getElementById('ccor').classList.add('incorrecto');
        campos['correo'] = false;
      }
      break;
    case "asu":
      if (expresiones.asunto.test(e.target.value)) {
        document.getElementById('casu').classList.remove('incorrecto');
        document.getElementById('casu').classList.add('correcto');
        campos['asunto'] = true;
      } else {
        document.getElementById('casu').classList.remove('correcto');
        document.getElementById('casu').classList.add('incorrecto');
        campos['asunto'] = false;
      }
      break;
    case "tel":
      if (expresiones.telefono.test(e.target.value)) {
        document.getElementById('ctel').classList.remove('incorrecto');
        document.getElementById('ctel').classList.add('correcto');
        campos['telefono'] = true;
      } else {
        document.getElementById('ctel').classList.remove('correcto');
        document.getElementById('ctel').classList.add('incorrecto');
        campos['telefono'] = false;
      }
      break;
  }
};
inputs.forEach(function (input) {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
});
formulario.addEventListener('submit', function (e) {
  e.preventDefault;
  var texto = document.getElementById('txtMensaje').value;
  if (campos.nombre && campos.correo && campos.asunto && campos.telefono && texto !== '') formulario.reset();else alert('Hay campos vacios o incorrectos.');
});