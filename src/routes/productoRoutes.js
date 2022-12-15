import express from 'express';
import productoController from '../controllers/productoController.js';
const router = express.Router();

const 
{
    obtenerProductosTodos,
    search,
    ofertas,
    obtenerProducto
} = productoController;

// Filtrado

router.get('/productos', obtenerProductosTodos ); // /:idCategoria Indicamos que podemos recibir arametros por la cadena de consulta

router.get('/productos/:query', search );

router.get('/productos/o/:query', ofertas );

router.get('/informacion-producto/:id', obtenerProducto);


export default router;