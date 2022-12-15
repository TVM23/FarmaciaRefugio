const formulario = document.querySelector('.formulario');
const inputs = document.querySelectorAll('.formulario input');
const expresiones =
{
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{10,15}$/, // 7 a 14 numeros.
    asunto: /^[a-zA-ZÀ-ÿ\s]{1,30}$/
}

const campos =
{
	nombre: false, 
	correo: false,
	telefono: false, 
    asunto: false
}

const validarFormulario = (e)=> 
{
    switch (e.target.name)
    {
        case "nombre":
            if(expresiones.nombre.test(e.target.value))
            {
                document.getElementById('cnom').classList.remove('incorrecto');  
                document.getElementById('cnom').classList.add('correcto');  
                campos['nombre']=true;
            }
            else
            {
                document.getElementById('cnom').classList.remove('correcto');  
                document.getElementById('cnom').classList.add('incorrecto'); 
                campos['nombre']=false;
            }
        break;
        case "correo":
            if(expresiones.correo.test(e.target.value))
            {
                document.getElementById('ccor').classList.remove('incorrecto');  
                document.getElementById('ccor').classList.add('correcto'); 
                campos['correo']=true; 
            }
            else
            {
                document.getElementById('ccor').classList.remove('correcto');  
                document.getElementById('ccor').classList.add('incorrecto'); 
                campos['correo']=false;
            }
        break;
        case "asunto":
            if(expresiones.asunto.test(e.target.value))
            {
                document.getElementById('casu').classList.remove('incorrecto');  
                document.getElementById('casu').classList.add('correcto');  
                campos['asunto']=true;
            }
            else
            {
                document.getElementById('casu').classList.remove('correcto');  
                document.getElementById('casu').classList.add('incorrecto'); 
                campos['asunto']=false;
            }
        break;
        case "numero":
            if(expresiones.telefono.test(e.target.value))
            {
                document.getElementById('ctel').classList.remove('incorrecto');  
                document.getElementById('ctel').classList.add('correcto'); 
                campos['telefono']=true; 
            }
            else
            {
                document.getElementById('ctel').classList.remove('correcto');  
                document.getElementById('ctel').classList.add('incorrecto'); 
                campos['telefono']=false;
            }
        break;
    }
}

inputs.forEach((input)=>
{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e)=> 
{
    e.preventDefault();
    let texto = document.getElementById('txtMensaje').value;
    if(campos.nombre && campos.correo && campos.asunto && campos.telefono && texto!=='')
        formulario.submit();
    else{
        e.preventDefault();
        alert('Hay campos vacios o incorrectos.');
    }
});