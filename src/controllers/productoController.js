import Producto from "../models/Productos.js";


const productoController = {}

productoController.obtenerProductosTodos = async (req, res)=>
{
    const productos =  await Producto.find({}).lean(); 

   /*  res.json(productos); */

    res.render('productos', {productos});
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