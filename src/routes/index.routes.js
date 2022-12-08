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
    renderDatosTarjeta} = indexController;

const router = express.Router();

router.get('/', renderIndex)

router.get('/iniciar-sesion', renderInicioSesion)

//router.get('/registro', renderRegistrarUsuario)

router.get('/recuperar-clave', renderOlvidarContra)

router.get('/recuperar-clave', renderOlvidarContra)

router.get('/contacto', renderContacto)

router.get('/direccion-envio', renderDireccion)

router.get('/detalles-tarjeta', renderTarjeta)

router.get('/informacion-producto', renderProducto)

//router.get('/detalles-usuario/informacion', renderDatos)

//router.get('/detalles-usuario/tarjeta', renderDatosTarjeta)

export default router;