import Usuario from '../models/Usuario.js';
import express from 'express';
import passport from 'passport';

const usuarioController = {}
const app = express();

//Registro Usuario
usuarioController.renderRegistro = (req, res)=>{
    res.render('usuarios/registro');
}

usuarioController.crearUsarioNuevo = async (req, res)=>{

    const {nombreUsuario, apellidosUsuario, emailUsuario, telefonoUsuario, passwordUsuario} = req.body;
    const existeCliente = await Usuario.findOne({emailUsuario});
    if ( existeCliente ){
        const error = new Error(`El correo elctrónico ${emailUsuario} ya está registrado`);
        req.flash('cuenta_repetida', 'El correo electronico ingresado ya esta registrado')
        //return res.status(400).json({ 'mensaje': error.message });
        res.redirect('/registro');
    }

    try {
        // Guardar el cliente
        const usuario = new Usuario({nombreUsuario, apellidosUsuario, emailUsuario, telefonoUsuario, passwordUsuario});
        /* console.log("Mensaje", req.body); */
        usuario.passwordUsuario = await usuario.encryptPassword(passwordUsuario)
        await usuario.save();
        /* res.json(usuarioGuardado); */
        req.flash('success_msg', 'Usuario registrado con exito');
        res.redirect('/')
    } catch (error) {
        console.log('Error',  error);
    }
    /* res.redirect('/'); */
}

app.get('/registro', (req, res) => {
	res.send(req.flash());
});

//Inicio de sesion
usuarioController.renderInicioSesion = (req, res)=>{
    res.render('usuarios/inicio-sesion')
}

usuarioController.verificacionInicioSesion = passport.authenticate('local', {
    failureRedirect: '/iniciar-sesion',
    successRedirect: '/',
    failureFlash: true
});

app.get('/iniciar-sesion', (req, res) => {
	res.send(req.flash());
});

usuarioController.renderOlvidarContra = (req, res)=>{
    res.render('olvidar-contra')
}

usuarioController.logout = (req, res, next)=>{
    req.logout(function(err) {
        if (err) { return next(err); }
        req.flash('cerrar_sesion', 'Usuario registrado con exito');
        res.redirect('/');
    });

}
app.get('/', (req, res) => {
	res.send(req.flash('cerrar_sesion'));
});


//Mostrar info usuario
usuarioController.renderDatos = async (req, res)=>{
    /* const { correo } = req.body; */
    //Buscar el cliente
    const usuarioDatos = await Usuario.findById(req.user.id).lean();
    res.render('usuarios/datos', {usuarioDatos});

}

usuarioController.renderDatosTarjeta = async (req, res)=>{
    res.render('usuarios/datos-tarjeta')
}

//Editar datos usuario
//Editar tarjeta
usuarioController.updateTarjeta = async (req, res)=>{
    const {titular, numeroTarjeta, mesExp, añoExp, CVV} = req.body;
    /* await Usuario.findByIdAndUpdate(req.params.id, {titular, numeroTarjeta, mesExp, añoExp, CVV})
    req.flash('success_msg', 'Informacion de tarjeta agregada')
    res.redirect('/detalles-usuario/tarjeta') */

    const usuario = new Usuario({titular, numeroTarjeta, mesExp, añoExp, CVV});
    usuario.numeroTarjeta = await usuario.encryptCardNumber(numeroTarjeta)
    usuario.CVV = await usuario.encryptCVV(CVV)
    await Usuario.findByIdAndUpdate(req.params.id, {usuario})
    req.flash('success_msg', 'Informacion de tarjeta agregada')
    res.redirect('/detalles-usuario/tarjeta')

}

//Eliminar usuario
/* usuarioController.deleteUsuario = async (req, res)=>{
    await Usuario.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Usuario eliminado')
    res.redirect('/');
} */



export default usuarioController;

