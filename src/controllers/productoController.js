import Producto from "../models/Productos.js";


const productoController = {}

productoController.obtenerProductosTodos = async (req, res)=>
{
    const productos =  await Producto.find({}).lean(); 

   /*  res.json(productos); */

    res.render('productos', {productos});
}

productoController.obtenerProducto = async (req, res)=>
{   
    const producto =  await Producto.findById(req.params.id).lean();
    console.log(producto);
   /*  res.json(productos); */

    res.render('producto', { producto });
}

productoController.search = async (req, res, next) => 
{
    const productosf =  await Producto.find({categoria: new RegExp(req.params.query, 'i')}).lean(); 
   //res.json(productos);
    res.render('productos', {productosf});

}

productoController.ofertas = async (req, res, next) => 
{
    const productosO =  await Producto.find({oferta: new RegExp(req.params.query, 'i')}).lean(); 
   //res.json(productos);
    res.render('productosof', {productosO});
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