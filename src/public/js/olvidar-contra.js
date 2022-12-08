const formulario = document.getElementById('formulario');
const correo = document.getElementById('txtCorreo');

console.log(correo);

var ban = false;


formulario.addEventListener('submit', e => {
    e.preventDefault();
    resetColor();
	checkInputs();
    if(ban==true){
        formulario.submit();
        window.location = '/html/inicio-sesion.html'
    }
})

function checkInputs(){
    const valorcorreo = correo.value.trim();
    ban = false;
    var cont = 0;

    if(valorcorreo === ''){
        setErrorFor(correo, 'Debes ingresar tu correo.');
    }else if(!isEmail(valorcorreo)){
        setErrorFor(correo, 'Debes ingresar un correo valido');
    }else{
        setSuccessFor(correo)
        cont += 1;
    }

    if(cont==1){
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

document.getElementById('formulario').addEventListener('focusin', (event) => {
    /* event.target.value = ''; */
    removeErrorFor(event.target)
  });
  