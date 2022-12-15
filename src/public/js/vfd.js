const formulario = document.querySelector(".formulario");
const inputs = document.querySelectorAll(".formulario input");
const expresiones = {
  letesp: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  telefono: /^\d{10,15}$/,
  cp: /^\d{5}$/,
  num: /^\d{1,5}$/,
};

const campos = {
  localidadCliente: false,
  estadoCliente: false,
  codigoPostalUsuario: false,
  numeroContacto: false,
  municipioUsuario: false,
  coloniaUsuario: false,
  calleUsuario: false,
  numeroUsuario: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "localidadCliente":
      if (expresiones.letesp.test(e.target.value)) {
        document.getElementById("cloc").classList.remove("incorrecto");
        document.getElementById("cloc").classList.add("correcto");
        campos["localidadCliente"] = true;
      } else {
        document.getElementById("cloc").classList.remove("correcto");
        document.getElementById("cloc").classList.add("incorrecto");
        campos["localidadCliente"] = false;
      }
      break;
    case "estadoCliente":
      if (expresiones.letesp.test(e.target.value)) {
        document.getElementById("cest").classList.remove("incorrecto");
        document.getElementById("cest").classList.add("correcto");
        campos["estadoCliente"] = true;
      } else {
        document.getElementById("cest").classList.remove("correcto");
        document.getElementById("cest").classList.add("incorrecto");
        campos["estadoCliente"] = false;
      }
      break;
    case "codigoPostalUsuario":
      if (expresiones.cp.test(e.target.value)) {
        document.getElementById("ccp").classList.remove("incorrecto");
        document.getElementById("ccp").classList.add("correcto");
        campos["codigoPostalUsuario"] = true;
      } else {
        document.getElementById("ccp").classList.remove("correcto");
        document.getElementById("ccp").classList.add("incorrecto");
        campos["codigoPostalUsuario"] = false;
      }
      break;
    case "numeroContacto":
      if (expresiones.telefono.test(e.target.value)) {
        document.getElementById("cnumc").classList.remove("incorrecto");
        document.getElementById("cnumc").classList.add("correcto");
        campos["numeroContacto"] = true;
      } else {
        document.getElementById("cnumc").classList.remove("correcto");
        document.getElementById("cnumc").classList.add("incorrecto");
        campos["numeroContacto"] = false;
      }
    case "municipioUsuario":
      if (expresiones.letesp.test(e.target.value)) {
        document.getElementById("cmun").classList.remove("incorrecto");
        document.getElementById("cmun").classList.add("correcto");
        campos["municipioUsuario"] = true;
      } else {
        document.getElementById("cmun").classList.remove("correcto");
        document.getElementById("cmun").classList.add("incorrecto");
        campos["municipioUsuario"] = false;
      }
      break;
    case "coloniaUsuario":
      if (expresiones.letesp.test(e.target.value)) {
        document.getElementById("ccol").classList.remove("incorrecto");
        document.getElementById("ccol").classList.add("correcto");
        campos["coloniaUsuario"] = true;
      } else {
        document.getElementById("ccol").classList.remove("correcto");
        document.getElementById("ccol").classList.add("incorrecto");
        campos["coloniaUsuario"] = false;
      }
      break;
    case "calleUsuario":
      if (expresiones.letesp.test(e.target.value)) {
        document.getElementById("ccall").classList.remove("incorrecto");
        document.getElementById("ccall").classList.add("correcto");
        campos["calleUsuario"] = true;
      } else {
        document.getElementById("ccall").classList.remove("correcto");
        document.getElementById("ccall").classList.add("incorrecto");
        campos["calleUsuario"] = false;
      }
      break;
    case "numeroUsuario":
      if (expresiones.num.test(e.target.value)) {
        document.getElementById("cnum").classList.remove("incorrecto");
        document.getElementById("cnum").classList.add("correcto");
        campos["numeroUsuario"] = true;
      } else {
        document.getElementById("cnum").classList.remove("correcto");
        document.getElementById("cnum").classList.add("incorrecto");
        campos["numeroUsuario"] = false;
      }
      break;
  }
};

inputs.forEach((input) => {
  input.addEventListener("keyup", validarFormulario);
  input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    campos.localidadCliente &&
    campos.estadoCliente &&
    campos.codigoPostalUsuario &&
    campos.numeroContacto &&
    campos.municipioUsuario &&
    campos.coloniaUsuario &&
    campos.calleUsuario &&
    campos.numeroUsuario
  ) {
    formulario.submit();
  } else alert("Hay campos vacios o incorrectos.");
});
