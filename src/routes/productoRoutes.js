import express from 'express';
import productoController from '../controllers/productoController.js';
const router = express.Router();

const 
{
    obtenerProductosTodos
} = productoController;

// Filtrado

router.get('/productos', obtenerProductosTodos ); // /:idCategoria Indicamos que podemos recibir arametros por la cadena de consulta

export default router;