import Producto from "../models/Productos.js";


const productoController = {}

productoController.obtenerProductosTodos = async (req, res)=>
{
    const productos =  await Producto.find({}).lean(); 

   /*  res.json(productos); */

    res.render('productos', {productos});
}

export default productoController;



/*     console.log('idCategoria', req.params.idCategoria); // Obtenemos el parametro de la cadena de consulta
    let filtro;
    const idCategoria = req.params.idCategoria;
    // Verificar si tiene algo idCategoria

    if ( isNaN(idCategoria) )
        filtro= {};
    else
        filtro = { 'idCategoria.idCategoria': parseInt(idCategoria) };

    console.log(filtro); */