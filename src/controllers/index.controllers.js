import Usuario from '../models/Usuario.js';
import express from 'express';
import passport from 'passport';

const indexController = {}
const app = express();

indexController.renderIndex = (req, res)=>{
    res.render('index')
}

/* indexController.renderRegistrarUsuario = (req, res)=>{
    res.render('usuarios/registro')
} */

indexController.renderContacto = (req, res)=>{
    res.render('contacto')
}

indexController.renderDireccion = async (req, res)=>{
    const usuarioD = await Usuario.findById(req.params.id).lean();
    console.log(usuarioD)
    res.render('direccion', {usuarioD})
}

indexController.ingresarDireccion = async (req, res)=>{
    try {
        const {localidadCliente, numeroContacto, estadoCliente, codigoPostalUsuario, municipioUsuario, coloniaUsuario, calleUsuario, numeroUsuario, indAdicionalesUsuario} = req.body
        await Usuario.findByIdAndUpdate(req.params.id, {localidadCliente, numeroContacto, estadoCliente, codigoPostalUsuario, municipioUsuario, coloniaUsuario, calleUsuario, numeroUsuario, indAdicionalesUsuario});  
        req.flash('direccion_agregada', 'Direccion de envio establecida');
        res.redirect('/')
    } catch (error) {
        console.log('Error',  error);
    }
}

indexController.renderMetodoPago = (req, res)=>{
    res.render('pago/metodo')
    
}

indexController.renderTarjeta = async (req, res)=>{
    let idd = req.user.id
    const usuario3 = await Usuario.findById(req.params.id).lean();
    console.log(usuario3)
    console.log(usuario3._id)
    res.render('pago/tarjeta', {usuario3})
}

indexController.datosTarjeta = async (req, res)=>{
    try {
        let idD = req.user.id
        const {titular, numeroTarjeta, mesExp, añoExp, CVV} = req.body
        await Usuario.findByIdAndUpdate(req.params.id, {titular, numeroTarjeta, mesExp, añoExp, CVV});  

        req.flash('success_msg', 'Tarjeta obtenida con exito');
        res.redirect('/');

        /* miUsuario = await Usuario.updateOne({_id: Object(idD)}, {$set: {'titular': titular}}); */
        /* res.send(miUsuario); */
    } catch (error) {
        console.log('Error',  error);
    }
    
}

indexController.renderProducto = (req, res)=>{
    // res.render('producto')
}

indexController.renderCarrito = (req, res)=>{
    res.render('carrito');
}

/* indexController.renderDatos = (req, res)=>{
    res.render('usuarios/datos')
}

indexController.renderDatosTarjeta = (req, res)=>{
    res.render('usuarios/datos-tarjeta')
} */

indexController.renderNosotros = (req, res)=>{
    res.render('nosotros')
}

export default indexController;