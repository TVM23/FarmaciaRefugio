import Categoria from "../models/Categoria.js";

const obtenerCategorias = async (req,res) => {
    const categorias =  await Categoria.find();
    //res.send('Obteniendo categorias');  // Envia texto al cliente
    //res.json({nombre: 'Juanito Guanavacoa', edad: 20});
    res.json(categorias);
};

export {
    obtenerCategorias
}