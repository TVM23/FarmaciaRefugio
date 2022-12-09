"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var indexController = {};
indexController.renderIndex = function (req, res) {
  res.render('index');
};
indexController.renderInicioSesion = function (req, res) {
  res.render('usuarios/inicio-sesion');
};

/* indexController.renderRegistrarUsuario = (req, res)=>{
    res.render('usuarios/registro')
} */

indexController.renderOlvidarContra = function (req, res) {
  res.render('olvidar-contra');
};
indexController.renderContacto = function (req, res) {
  res.render('contacto');
};
indexController.renderDireccion = function (req, res) {
  res.render('direccion');
};
indexController.renderMetodoPago = function (req, res) {
  res.render('pago/metodo');
};
indexController.renderTarjeta = function (req, res) {
  res.render('pago/tarjeta');
};
indexController.renderProducto = function (req, res) {
  res.render('producto');
};

/* indexController.renderDatos = (req, res)=>{
    res.render('usuarios/datos')
}

indexController.renderDatosTarjeta = (req, res)=>{
    res.render('usuarios/datos-tarjeta')
} */

indexController.renderNosotros = function (req, res) {
  res.render('nosotros');
};
var _default = indexController;
exports["default"] = _default;