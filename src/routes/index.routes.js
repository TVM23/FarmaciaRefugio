import express from 'express'
import indexController from '../controllers/index.controllers.js';

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
    renderMetodoPago} = indexController;

const router = express.Router();

router.get('/', renderIndex)

//router.get('/registro', renderRegistrarUsuario)

router.get('/contacto', renderContacto)

router.get('/nosotros', renderNosotros)

router.get('/direccion-envio', renderDireccion)

router.get('/pago/metodo', renderMetodoPago)

router.get('/pago/detalles-tarjeta', renderTarjeta)

//router.get('/informacion-producto', renderProducto)

//router.get('/detalles-usuario/informacion', renderDatos)

//router.get('/detalles-usuario/tarjeta', renderDatosTarjeta)

export default router;