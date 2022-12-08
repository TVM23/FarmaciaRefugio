import Usuario from '../models/Usuario.js'
const usuarioController = {}

//Registro Usuario
usuarioController.renderRegistro = (req, res)=>{
    res.render('usuarios/registro');
}

usuarioController.crearUsarioNuevo = async (req, res)=>{

    const {nombreUsuario, apellidosUsuario, emailUsuario, telefonoUsuario, passwordUsuario} = req.body;
    const existeCliente = await Usuario.findOne({emailUsuario});
    if ( existeCliente ){
        const error = new Error(`El correo elctrónico ${emailUsuario} ya está registrado`);
        return res.status(400).json({ 'mensaje': error.message });
    }

    try {
        // Guardar el cliente
        const usuario = new Usuario({nombreUsuario, apellidosUsuario, emailUsuario, telefonoUsuario, passwordUsuario});
        console.log("Mensaje", req.body);
        const usuarioGuardado = await usuario.save();
        res.json(usuarioGuardado);
    } catch (error) {
        console.log('Error',  error);
    }
    //res.send('nuevo usuario');

}

//Mostrar info usuario
usuarioController.renderDatos = async (req, res)=>{
    //res.render('usuarios/datos');
    const datos = await Usuario.find();
    res.render('usuarios/datos');
}

usuarioController.renderDatosTarjeta = (req, res)=>{
    res.render('usuarios/datos-tarjeta');
}

//Editar datos usuario
//Editar tarjeta
usuarioController.updateTarjeta = (req, res)=>{
    res.send('editar tarjeta')
}



//Eliminar usuario
usuarioController.deleteUsuario = (req, res)=>{
    res.send('eliminar tarjeta')
}

export default usuarioController;