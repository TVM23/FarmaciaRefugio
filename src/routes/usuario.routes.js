import express from 'express'
import usuarioController from '../controllers/usuario.controllers.js';
const {
    renderRegistro, 
    crearUsarioNuevo, 
    renderDatos, 
    renderDatosTarjeta, 
    updateTarjeta, 
    deleteUsuario} = usuarioController;

const router = express.Router();

//Registro de usuario
router.get('/registro', renderRegistro)

router.post('/registro/nuevo-usuario', crearUsarioNuevo)

//Mostrar info usuarios
/* router.get('/detalles-usuario/informacion/:id', renderDatos)
 */

router.get('/detalles-usuario/informacion', renderDatos)

router.get('/detalles-usuario/tarjeta', renderDatosTarjeta)

//Editar info usuario
//Editar tarjeta
router.put('/detalles-usuario/tarjeta/edit/:id', updateTarjeta)


//Eliminiar usuario
router.delete('/detalles-usuario/informacion/delete/:id', deleteUsuario)

export default router;