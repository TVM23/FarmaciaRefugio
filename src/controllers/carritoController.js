import Carrito from "../models/Carrito";
import Producto from "../models/Productos";

const carritoController = {};

carritoController.anadirProductoCarrito = async (req, res) => {
  const {
    productoNombre,
    productoImagen,
    productoPrecio,
    productoDescripcion,
  } = req.body;

  const estaenProductos = await Producto.findOne({ productoNombre }).lean;

  const noEstaVacio =
    productoNombre !== "" &&
    productoImagen !== "" &&
    productoPrecio !== "" &&
    productoDescripcion !== "";

  const estaEnElCarrito = await Carrito.findOne({ productoNombre }).lean;

  if (!estaenProductos) {
    res.status(400).render({ mensaje: "Este producto no existe" });
  } else if (noEstaVacio && !estaEnElCarrito) {
    const nuevoProductoCarrito = new Carrito({
      productoNombre,
      productoImagen,
      productoCantidad: 1,
      productoDescripcion,
    });
    await Producto.findByIdAndUpdate(
      estaenProductos?._id,
      { productoCarrito: true },
      { new: true }
    )
      .lean.then((producto) => {
        nuevoProductoCarrito.save();
        res.render({ mensaje: "El producto fue agregado al carrito" });
      })
      .catch((error) => console.error(error));
  }
};

carritoController.eliminarProductoCarrito = async (req, res) => {
  const { productoId } = req.params;

  const productoEnCarrito = await Carrito.findById(productoId).lean;

  const {
    productoNombre,
    productoImagen,
    productoPrecio,
    _id,
    productoDescripcion,
  } = await Producto.findOne({
    productoNombre: productoEnCarrito.productoNombre,
  }).lean;

  await Carrito.findByIdAndDelete(productoId).lean;

  await Producto.findOneAndUpdate(
    _id,
    {
      productoCarrito: false,
      productoNombre,
      productoImagen,
      productoPrecio,
      productoDescripcion,
    },
    { new: true }
  )
    .then((producto) => {
      res.render({ mensaje: `El producto fue eliminado del carrito` });
    })
    .catch((error) => res.render({ mensaje: "Hubo un error" }));
};

carritoController.obtenerProductoCarrito = async (req, res) => {
  const productosCarrito = await Carrito.find().lean();

  if (productosCarrito) {
    res.render("carrito", { productosCarrito });
  } else {
    res.render({ mensaje: "No hay productos en el carrito" });
  }
};

carritoController.actualizarProductoCarrito = async (req, res) => {
  const { productoId } = req.params;
  const { query } = req.query;
  const body = req.body;

  const porductoBuscado = await Carrito.findById(productoId).lean;

  if (!query) {
    res.status(404).render({ mensaje: "Debes enviar un query" });
  } else if (porductoBuscado && query == "add") {
    body.productoCantidad = body.productoCantidad + 1;
    await Carrito.findByIdAndUpdate(productoId, body, { new: true }).lean.then(
      (producto) => {
        res.render({ mensaje: `El producto fue actualizado`, producto });
      }
    );
  } else if (porductoBuscado && query == "del") {
    body.productoCantidad = body.productoCantidad - 1;
    await Carrito.findByIdAndUpdate(productoId, body, { new: true }).lean.then(
      (producto) => {
        res.render({ mensaje: `El producto fue actualizado`, producto });
      }
    );
  } else {
    res.status.render({ mensaje: "Ocurrio un error" });
  }
};

export default carritoController;
