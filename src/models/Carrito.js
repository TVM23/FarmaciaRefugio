import mongoose from "mongoose";

const carritoSchema = mongoose.Schema({
    productoNombre:{
        type:String,
        required: true,
    },
    productoImagen:{
        type: String,
        trim: true,
        required: true
    },
    productoCantidad: {
        type: Number,
        required:true
    },
    productoPrecio:{
        type: Number,
        required:true
    },
    productoDescripcion:{
        type: String,
        required: true,
    }
});

const Carrito = mongoose.model('carritos', carritoSchema);

export default Carrito;