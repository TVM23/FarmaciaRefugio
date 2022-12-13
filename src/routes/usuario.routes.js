import express from 'express'
import usuarioController from '../controllers/usuario.controllers.js';
import helpers from '../helpers/auth.js';

const {isAuthenticated} = helpers;

const {
    renderRegistro, 
    crearUsarioNuevo, 
    renderInicioSesion,
    verificacionInicioSesion,
    renderOlvidarContra,
    logout,
    renderDatos, 
    renderDatosTarjeta, 
    updateTarjeta, 
    deleteUsuario} = usuarioController;

const router = express.Router();

//Registro de usuario
router.get('/registro', renderRegistro)

router.post('/registro/nuevo-usuario', crearUsarioNuevo)

//Inicio sesion de usuario
router.get('/iniciar-sesion', renderInicioSesion)

router.post('/iniciar-sesion', verificacionInicioSesion)

router.get('/recuperar-clave', renderOlvidarContra)

router.get('/logout', isAuthenticated, logout)

//Mostrar info usuarios
/* router.get('/detalles-usuario/informacion/:id', renderDatos)
 */

router.get('/detalles-usuario/informacion', isAuthenticated, renderDatos)

router.get('/detalles-usuario/tarjeta', isAuthenticated, renderDatosTarjeta)

//Editar info usuario
//Editar tarjeta
router.put('/detalles-usuario/tarjeta/edit/:id', isAuthenticated, updateTarjeta)


//Eliminiar usuario
router.delete('/detalles-usuario/informacion/delete/:id', isAuthenticated, deleteUsuario)

export default router;