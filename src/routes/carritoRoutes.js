import express from 'express';
import carritoController from '../controllers/carritoController';
const router = express.Router();

const 
{
    anadirProductoCarrito,
    eliminarProductoCarrito,
    obtenerProductoCarrito,
    actualizarProductoCarrito
} = carritoController;

// Filtrado

router.get('/mi-carrito', obtenerProductoCarrito );
router.post('/mi-carrito', anadirProductoCarrito );
router.put('/mi-carrito/:id', actualizarProductoCarrito);
router.delete('/mi-carrito/:id', eliminarProductoCarrito);

export default router;