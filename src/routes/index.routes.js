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
    ingresarDireccion,
    renderTarjeta, 
    renderProducto, 
    renderDatos, 
    renderDatosTarjeta,
    datosTarjeta,
    renderNosotros,
    renderMetodoPago,
    renderCarrito} = indexController;

const router = express.Router();

router.get('/', renderIndex)

//router.get('/registro', renderRegistrarUsuario)

router.get('/contacto', renderContacto)

router.get('/nosotros', renderNosotros)

router.get('/direccion-envio/:id', isAuthenticated, renderDireccion)

router.put('/direccion-envio/update/:id', isAuthenticated, ingresarDireccion)

router.get('/pago/metodo', isAuthenticated, renderMetodoPago)

router.get('/pago/detalles-tarjeta/:id',isAuthenticated, renderTarjeta)

router.put('/pago/detalles-tarjeta/update/:id',isAuthenticated, datosTarjeta)

router.get('/mi-carrito', renderCarrito);

//router.get('/informacion-producto', renderProducto)

//router.get('/detalles-usuario/informacion', renderDatos)

//router.get('/detalles-usuario/tarjeta', renderDatosTarjeta)

export default router;