import mongoose from 'mongoose';

const contactoSchema = mongoose.Schema
({
    nombre:{
        type: String
    },
    correo:{
        type: String
    },
    asunto:{
        type: String
    },
    numero:{
        type: Number
    },
    mensaje:{
        type: String
    },
});

const Contacto = mongoose.model('Contacto', contactoSchema);

export default Contacto;