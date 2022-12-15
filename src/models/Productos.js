import mongoose from 'mongoose';

const productoSchema = mongoose.Schema
({
    idProducto:{
        type: Number
    },
    idCategoria:{
        type: Object
    },
    productoNombre:{
        type: String
    },
    productoExtra:{
        type: String
    },
    productoPreciod:{
        type: Number
    },
    productoPrecio:{
        type: Number
    },
    productoDescuento:{
        type: Number
    },
    productoDescripcion:{
        type: String
    },
    productoInstrucciones:{
        type: String
    },
    productoDosis:{
        type: String
    },
    productoCompuesto:{
        type: String
    },
    productoContenido:{
        type: String
    },
    productoImagen:{
        type: String,
        trim: true
    },
    categoria:{
        type: String
    },
    oferta:{
        type: String
    },
});

const Producto = mongoose.model('Producto', productoSchema);

export default Producto;