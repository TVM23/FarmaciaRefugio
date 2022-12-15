import Contacto from "../models/Contacto.js";

const contactoController = {};

contactoController.nuevo = async (req, res) => 
{
        const {nombre, correo, asunto, numero, mensaje} = req.body;
        const newcontacto = new Contacto({nombre:nombre, correo:correo, asunto:asunto, numero:numero, mensaje:mensaje});
        console.log(newcontacto);
        await newcontacto.save();  
        res.redirect("/");
}

export default contactoController;

