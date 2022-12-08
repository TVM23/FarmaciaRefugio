const formulario = document.getElementById('formulario');
const nombre = document.getElementById('txtNombre');
const numero = document.getElementById('txtNumero');
const mes = document.getElementById('txtMes');
const año = document.getElementById('txtAño');
const codigo = document.getElementById('txtCodigo');

selectMes();
selectAño();

formulario.addEventListener('submit', e => {
    e.preventDefault();
    resetColor();
	checkInputs();
    if(ban==true){
        /* window.location = '/index.html' */
    }
})

function checkInputs(){
    const valornombre = nombre.value.trim();
    const valornumero = numero.value.trim();
    /* const valorfecha = fecha.value.trim(); */
    const valormes = mes.value.trim();
    const valoraño = año.value.trim();
    const valorcodigo = codigo.value.trim();
    ban = false;
    var cont = 0;
    if(valornombre === ''){
        setErrorFor(nombre, 'Debes ingresar el nombre del titular.');
    }else if(!validarNombre(valornombre)){
        setErrorFor(nombre, 'Ingresaste caracteres incorrectos para el nombre');
    }else{        
        setSuccessFor(nombre)
        cont += 1;
    }

    if(valornumero === ''){
        setErrorFor(numero, 'Debes ingresar tu numero de tarjeta.');
    }else if(!validarNumero(valornumero)){
        setErrorFor(numero, 'Debes ingresar un numero de tarjeta valido');
    }else{
        setSuccessFor(numero)
        cont += 1;
    }

    /* if(valorfecha === ''){
        setErrorFor(fecha, 'Debes ingresar la fecha de expiracion');
    }else if(!validarFecha(valorfecha)){
        setErrorFor(fecha, 'La fecha de expiracion no es valida');
    }else{
        setSuccessFor(fecha)       
        cont += 1;
    } */

    if(valormes === 'mes'){
        setErrorFor(mes, 'Ingresa un mes');
        setErrorFor(año, '');
    }else if(!validarMes(valormes, valoraño)){
        setErrorFor(mes, 'La tarjeta ha expirado');
        setErrorFor(año, '');
    }else{
        setSuccessFor(mes)  
        setSuccessFor(año)  
        cont += 1;
    }

    if(valorcodigo === ''){
        setErrorFor(codigo, 'Debes ingresar el codigo de seguridad.');
    }else if(!validarCodigo(valorcodigo)){
        setErrorFor(codigo, 'El codigo consta de tres numeros')
    }else{
        setSuccessFor(codigo)
        cont += 1;
    }

    if(cont==4){
        ban=true;
        /* window.location = '/index.html' */
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    console.log(formControl);
    const celda = formControl.querySelector('input');
    console.log(celda)
    const mensajeError = formControl.querySelector('.mensaje-error');
    formControl.classList.add('error');
    mensajeError.className = 'mensaje-error error';
    mensajeError.innerText = message;
}

function removeErrorFor(input){
    const formControl = input.parentElement;
    console.log(formControl);
    const celda = formControl.querySelector('input');
    console.log(celda)
    const mensajeError = formControl.querySelector('.mensaje-error');
    formControl.classList.remove('error');
    mensajeError.classList.remove('error');
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.classList.add('success');
}

function resetColor(){
    const datos = document.querySelectorAll(".esp input");
    const mensajes = document.querySelectorAll(".mensaje-error");
    const formControl = document.querySelectorAll('.campos .esp');
    for(var i=0; i<formControl.length; i++){
        formControl[i].classList.remove('error');
        formControl[i].classList.remove('success');
    }
    for(var i=0; i<mensajes.length; i++){
        mensajes[i].classList.remove('error');
    }
}

function validarNumero(numero){
    var patron1 = /^\d{16,19}$/;
    /* var patron2 = /^\d{3}\s\d{3}\s\d{4}$/;
    var patron3 = /^\d{3}-\d{3}-\d{4}$/; */
    if(patron1.test(numero)){
        return true;
    /* }else if(patron2.test(numero)){
        return true;
    }else if(patron3.test(numero)){
        return true; */
    }else{
        return false;
    }
}

function validarNombre(nombre){
    var patronNombre = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{1,40}$/;
    if(patronNombre.test(nombre)){
        return true;
    }else{
        return false;
    }
}

function validarCodigo(codigo){
    var patronCodigo = /^\d{3}$/;
    if(patronCodigo.test(codigo)){
        return true;
    }else{
        return false;
    }
}

function validarMes(mes, año){
    var act = new Date();
    var mAct = act.getMonth()+1;
    var aAct = act.getFullYear();
    var ban = false

    if(año==aAct){
        if(mes<mAct){
            return ban;
        }else{
            return !ban;
        }
    }else{
        return !ban;
    }
}

document.getElementById('formulario').addEventListener('focusin', (event) => {
    /* event.target.value = ''; */
    removeErrorFor(event.target)
  });
  

function selectMes(){
    for(let i = 1; i<=12; i++){
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        formulario.txtMes.appendChild(opcion);
    }
}

function selectAño(){
    var actual = new Date();
    var mesAct = actual.getMonth();
    var añoAct = actual.getFullYear();
    for(let i = añoAct; i<=añoAct+8; i++){
        let opcionA = document.createElement('option');
        opcionA.value = i;
        opcionA.textContent = i;
        formulario.txtAño.appendChild(opcionA);
    }
}