import express from 'express'
import indexController from '../controllers/index.controllers.js';
import helpers from '../helpers/auth.js';

const {isAuthenticated} = helpers;

const {
    renderIndex, 
    renderInicioSesion, 
    renderRegistrarUsuario, 
    renderOlvidarContra, 
    renderContacto, 
    renderDireccion, 
    renderTarjeta, 
    renderProducto, 
    renderDatos, 
    renderDatosTarjeta,
    renderNosotros,
    renderMetodoPago,
    renderCarrito} = indexController;

const router = express.Router();

router.get('/', renderIndex)

//router.get('/registro', renderRegistrarUsuario)

router.get('/contacto', renderContacto)

router.get('/nosotros', renderNosotros)

router.get('/direccion-envio', isAuthenticated, renderDireccion)

router.get('/pago/metodo', isAuthenticated, renderMetodoPago)

router.get('/pago/detalles-tarjeta',isAuthenticated, renderTarjeta)

router.get('/mi-carrito', renderCarrito);

//router.get('/informacion-producto', renderProducto)

//router.get('/detalles-usuario/informacion', renderDatos)

//router.get('/detalles-usuario/tarjeta', renderDatosTarjeta)

export default router;