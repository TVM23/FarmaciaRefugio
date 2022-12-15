import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const usuarioSchema = mongoose.Schema({
    nombreUsuario:{
        type: String,
        required: true,
        trim: true
    },
    apellidosUsuario:{
        type: String,
        required: true,
        trim: true
    },
    emailUsuario:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    telefonoUsuario:{
        type: String,
        default: null,
        trim: true
    },
    passwordUsuario:{
        type: String,
        required: true,
        trim: true
    },
    localidadCliente:{
        type: String,
        trim: true
    },
    numeroContacto:{
        type: Number,
        default: null,
        trim: true
    },
    estadoCliente:{
        type: String,
        trim: true
    },
    codigoPostalUsuario:{
        type: String,
        trim: true
    },
    municipioUsuario:{
        type: String,
        trim: true
    },
    coloniaUsuario:{
        type: String,
        trim: true
    },
    calleUsuario:{
        type: String,
        trim: true
    },
    numeroUsuario:{
        type: String,
        trim: true
    },
    indAdicionalesUsuario:{
        type: String,
        trim: true
    },
    metodoPago:{
        type: String,
        trim: true
    },
    titular:{
        type: String,
        trim: true
    },
    numeroTarjeta:{
        type: String,
        trim: true
    },
    mesExp:{
        type: String,
        trim: true
    },
    añoExp:{
        type: String,
        trim: true
    },
    CVV:{
        type: String,
        trim: true
    },
    metodoCreacion:{
        type: String,
        default: 'de forma directa'
    },
    token:{
        type: String
    },
    sesion:{
        type: Boolean,
        default: false
    },
    
},{
    timestamps: true
});

usuarioSchema.methods.encryptPassword =  async passwordUsuario => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(passwordUsuario, salt);
};

usuarioSchema.methods.matchPassword = async function(passwordUsuario) {
    return await bcrypt.compare(passwordUsuario, this.passwordUsuario)
}

const Usuario = mongoose.model('Usuario', usuarioSchema);
export default Usuario;