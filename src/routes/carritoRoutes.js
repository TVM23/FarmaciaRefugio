import express from 'express';
import carritoController from '../controllers/carritoController';
const router = express.Router();
import helpers from '../helpers/auth.js';

const {isAuthenticated} = helpers;

const 
{
    anadirProductoCarrito,
    eliminarProductoCarrito,
    obtenerProductoCarrito,
    actualizarProductoCarrito
} = carritoController;

// Filtrado

router.get('/mi-carrito', isAuthenticated, obtenerProductoCarrito );
router.post('/mi-carrito', isAuthenticated, anadirProductoCarrito );
router.put('/mi-carrito/:id', isAuthenticated, actualizarProductoCarrito);
router.delete('/mi-carrito/:id', isAuthenticated, eliminarProductoCarrito);

export default router;