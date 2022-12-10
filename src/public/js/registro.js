const icono_ojo = document.querySelector(".icono-ojo");
/* const datos = document.querySelectorAll(".esp input");
const mensajes = document.querySelectorAll(".mensaje-error p");
console.log(datos);
console.log(mensajes); */

icono_ojo.addEventListener('click', function(){

    if(this.previousElementSibling.previousElementSibling.type === 'text'){
        this.previousElementSibling.previousElementSibling.type = 'password';
        icono_ojo.innerHTML = ""+
        "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-eye-off' width='28' height='28' viewBox='0 0 24 24' stroke-width='1.5' stroke='#B8B8B8' fill='none' stroke-linecap='round' stroke-linejoin='round'>"+
            "<path stroke='none' d='M0 0h24v24H0z' fill='none'/>"+
            "<line x1='3' y1='3' x2='21' y2='21' />"+
            "<path d='M10.584 10.587a2 2 0 0 0 2.828 2.83' />"+
            "<path d='M9.363 5.365a9.466 9.466 0 0 1 2.637 -.365c4 0 7.333 2.333 10 7c-.778 1.361 -1.612 2.524 -2.503 3.488m-2.14 1.861c-1.631 1.1 -3.415 1.651 -5.357 1.651c-4 0 -7.333 -2.333 -10 -7c1.369 -2.395 2.913 -4.175 4.632 -5.341' />"+
        "</svg>";
    }else{
        this.previousElementSibling.previousElementSibling.type = 'text';
        icono_ojo.innerHTML = ""+
        "<svg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-eye ojo' width='28' height='28' viewBox='0 0 24 24' stroke-width='1.5' stroke='#B8B8B8' fill='none' stroke-linecap='round' stroke-linejoin='round'>"+
            "<path stroke='none' d='M0 0h24v24H0z' fill='none'/>"+
            "<circle cx='12' cy='12' r='2' />"+
            "<path d='M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7' />"+
        "</svg>";
    }
});

/* datos.addEventListener('click', function(){

}) */

const formulario = document.getElementById('formulario');
const nombre = document.getElementById('txtNombre');
const apellidos = document.getElementById('txtApellido');
const correo = document.getElementById('txtCorreo');
const telefono = document.getElementById('txtNumero');
const contra = document.getElementById('txtContra');
const confcontra = document.getElementById('txtConfContra');

var ban = false;


formulario.addEventListener('submit', e => {
    e.preventDefault();
    resetColor();
	checkInputs();
    if(ban==true){
        formulario.submit();
        /* window.location = '/' */
    }
})

function checkInputs(){
    const valornombre = nombre.value.trim();
    const valorapellido = apellidos.value.trim();
    const valorcorreo = correo.value.trim();
    const valortelefono = telefono.value.trim();
    const valorcontra = contra.value.trim();
    const valorcontra2 = confcontra.value.trim();
    ban = false;
    var cont = 0;
    if(valornombre === ''){
        setErrorFor(nombre, 'Debes ingresar tu nombre.');
    }else if(!validarNombre(valornombre)){
        setErrorFor(nombre, 'Ingresaste caracteres incorrectos');
    }else{        
        setSuccessFor(nombre)
        cont += 1;
    }

    if(valorapellido === ''){
        setErrorFor(apellidos, 'Debes ingresar tus apellidos.');
    }else if(!validarApellidos(valorapellido)){
        setErrorFor(apellidos, 'Ingresaste caracteres incorrectos');
    }else{
        setSuccessFor(apellidos)
        cont += 1;
    }

    if(valorcorreo === ''){
        setErrorFor(correo, 'Debes ingresar tu correo.');
    }else if(!isEmail(valorcorreo)){
        setErrorFor(correo, 'Debes ingresar un correo valido');
    }else{
        setSuccessFor(correo)
        cont += 1;
    }

    if(valortelefono === ''){
        setErrorFor(telefono, 'Debes ingresar tu numero de telefono.');
    }else if(!validarTelefono(valortelefono)){
        setErrorFor(telefono, 'Debes ingresar un numero de telefono valido de 10 digitos');
    }else{
        setSuccessFor(telefono)
        cont += 1;
    }

    if(valorcontra === ''){
        setErrorFor(contra, 'Debes ingresar una contraseña');
       /*  contra.focus();
        return; */
    }else if(!validarPassword(valorcontra)){
        setErrorFor(contra, 'La contraseña debe tener al menos 8 caracteres, con una minuscula, una mayuscula, un numero y un caracter especial');
    }else{
        setSuccessFor(contra)       
        cont += 1;
    }

    if(valorcontra2 === ''){
        setErrorFor(confcontra, 'Debes confirmar tu contraseña.');
    }else if(valorcontra!==valorcontra2){
        setErrorFor(confcontra, 'Las contraseñas no coinciden')
    }else{
        setSuccessFor(confcontra)
        cont += 1;
    }

    if(cont==6){
        ban=true;
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
    mensajeError.textContent = 'Error message';
    formControl.classList.remove('error');
    mensajeError.className = 'mensaje-error';
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    const celda = formControl.querySelector('input');
    celda.classList.add('success');
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

function isEmail(email){
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
} 

function validarTelefono(telefono){
    var patron1 = /^\d{10}$/;
    var patron2 = /^\d{3}\s\d{3}\s\d{4}$/;
    var patron3 = /^\d{3}-\d{3}-\d{4}$/;
    if(patron1.test(telefono)){
        return true;
    }else if(patron2.test(telefono)){
        return true;
    }else if(patron3.test(telefono)){
        return true;
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

function validarApellidos(apellido){
    var patronApellido = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{1,40}$/;
    if(patronApellido.test(apellido)){
        return true;
    }else{
        return false;
    }
}

function validarPassword(password){
    var patronPassword = /(?=(.*[0-9]))(?=.*[\!@#$%^&*()\\[\]{}\-_+=|:;"'<>,./?])(?=.*[a-z])(?=(.*[A-Z]))(?=(.*)).{8,}/    ;
    if(patronPassword.test(password)){
        return true;
    }else{
        return false;
    }
}




document.getElementById('formulario').addEventListener('focusin', (event) => {
    /* event.target.value = ''; */
    removeErrorFor(event.target)
  });
  