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
        res.redirect('/pago/metodo')
    } catch (error) {
        console.log('Error',  error);
    }
}

indexController.renderMetodoPago = async (req, res)=>{
    const usuarioMetodo = await Usuario.findById(req.user.id).lean();
    res.render('pago/metodo', {usuarioMetodo})
    
}

indexController.getMetodoPago = async (req, res)=>{
    try {
        const usuarioMetodoGet = await Usuario.findById(req.user.id).lean();
        const {metodoPago} = req.body
        await Usuario.findByIdAndUpdate(req.user.id, {metodoPago});  
        res.redirect('/pago/detalles-tarjeta/:id', {usuarioMetodoGet});

        /* miUsuario = await Usuario.updateOne({_id: Object(idD)}, {$set: {'titular': titular}}); */
        /* res.send(miUsuario); */
    } catch (error) {
        console.log('Error',  error);
    }
    
}

indexController.renderTarjeta = async (req, res)=>{
    let idd = req.user.id
    const usuario3 = await Usuario.findById(req.params.id).lean();
    console.log(usuario3)
    console.log(usuario3._id)
    console.log(req.user.id)
    console.log(req.params.id)
    res.render('pago/tarjeta', {usuario3})
}

indexController.datosTarjeta = async (req, res)=>{
    try {
        let idD = req.user.id
        const {titular, numeroTarjeta, mesExp, añoExp, CVV} = req.body
        await Usuario.findByIdAndUpdate(req.params.id, {titular, numeroTarjeta, mesExp, añoExp, CVV});  

        req.flash('success_msg', 'Compra finalizada con exito');
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

indexController.renderCarrito = async (req, res)=>{
    const usuarioCarrito = await Usuario.findById(req.user.id).lean();
    res.render('carrito', {usuarioCarrito});
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