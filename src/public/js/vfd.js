const formulario = document.querySelector(".formulario");
const inputs = document.querySelectorAll(".formulario input");
const expresiones = {
  letesp: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  telefono: /^\d{10,15}$/,
  cp: /^\d{5}$/,
  num: /^\d{1,5}$/,
};

const campos = {
  loc: false,
  est: false,
  cp: false,
  numc: false,
  mun: false,
  col: false,
  call: false,
  num: false,
};

const validarFormulario = (e) => {
  switch (e.target.name) {
    case "loc":
      if (expresiones.letesp.test(e.target.value)) {
        document.getElementById("cloc").classList.remove("incorrecto");
        document.getElementById("cloc").classList.add("correcto");
        campos["loc"] = true;
      } else {
        document.getElementById("cloc").classList.remove("correcto");
        document.getElementById("cloc").classList.add("incorrecto");
        campos["loc"] = false;
      }
      break;
    case "est":
      if (expresiones.letesp.test(e.target.value)) {
        document.getElementById("cest").classList.remove("incorrecto");
        document.getElementById("cest").classList.add("correcto");
        campos["est"] = true;
      } else {
        document.getElementById("cest").classList.remove("correcto");
        document.getElementById("cest").classList.add("incorrecto");
        campos["est"] = false;
      }
      break;
    case "cp":
      if (expresiones.cp.test(e.target.value)) {
        document.getElementById("ccp").classList.remove("incorrecto");
        document.getElementById("ccp").classList.add("correcto");
        campos["cp"] = true;
      } else {
        document.getElementById("ccp").classList.remove("correcto");
        document.getElementById("ccp").classList.add("incorrecto");
        campos["cp"] = false;
      }
      break;
    case "numc":
      if (expresiones.telefono.test(e.target.value)) {
        document.getElementById("cnumc").classList.remove("incorrecto");
        document.getElementById("cnumc").classList.add("correcto");
        campos["numc"] = true;
      } else {
        document.getElementById("cnumc").classList.remove("correcto");
        document.getElementById("cnumc").classList.add("incorrecto");
        campos["numc"] = false;
      }
    case "mun":
      if (expresiones.letesp.test(e.target.value)) {
        document.getElementById("cmun").classList.remove("incorrecto");
        document.getElementById("cmun").classList.add("correcto");
        campos["mun"] = true;
      } else {
        document.getElementById("cmun").classList.remove("correcto");
        document.getElementById("cmun").classList.add("incorrecto");
        campos["mun"] = false;
      }
      break;
    case "col":
      if (expresiones.letesp.test(e.target.value)) {
        document.getElementById("ccol").classList.remove("incorrecto");
        document.getElementById("ccol").classList.add("correcto");
        campos["col"] = true;
      } else {
        document.getElementById("ccol").classList.remove("correcto");
        document.getElementById("ccol").classList.add("incorrecto");
        campos["col"] = false;
      }
      break;
    case "call":
      if (expresiones.letesp.test(e.target.value)) {
        document.getElementById("ccall").classList.remove("incorrecto");
        document.getElementById("ccall").classList.add("correcto");
        campos["call"] = true;
      } else {
        document.getElementById("ccall").classList.remove("correcto");
        document.getElementById("ccall").classList.add("incorrecto");
        campos["call"] = false;
      }
      break;
    case "num":
      if (expresiones.num.test(e.target.value)) {
        document.getElementById("cnum").classList.remove("incorrecto");
        document.getElementById("cnum").classList.add("correcto");
        campos["num"] = true;
      } else {
        document.getElementById("cnum").classList.remove("correcto");
        document.getElementById("cnum").classList.add("incorrecto");
        campos["num"] = false;
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
    campos.loc &&
    campos.est &&
    campos.cp &&
    campos.numc &&
    campos.loc &&
    campos.mun &&
    campos.col &&
    campos.call &&
    campos.num
  ) {
    /* formulario.reset(); */
    formulario.submit();
  } else alert("Hay campos vacios o incorrectos.");
});
