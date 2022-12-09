"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _indexControllers = _interopRequireDefault(require("../controllers/index.controllers.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var renderIndex = _indexControllers["default"].renderIndex,
  renderInicioSesion = _indexControllers["default"].renderInicioSesion,
  renderRegistrarUsuario = _indexControllers["default"].renderRegistrarUsuario,
  renderOlvidarContra = _indexControllers["default"].renderOlvidarContra,
  renderContacto = _indexControllers["default"].renderContacto,
  renderDireccion = _indexControllers["default"].renderDireccion,
  renderTarjeta = _indexControllers["default"].renderTarjeta,
  renderProducto = _indexControllers["default"].renderProducto,
  renderDatos = _indexControllers["default"].renderDatos,
  renderDatosTarjeta = _indexControllers["default"].renderDatosTarjeta,
  renderNosotros = _indexControllers["default"].renderNosotros,
  renderMetodoPago = _indexControllers["default"].renderMetodoPago;
var router = _express["default"].Router();
router.get('/', renderIndex);
router.get('/iniciar-sesion', renderInicioSesion);

//router.get('/registro', renderRegistrarUsuario)

router.get('/recuperar-clave', renderOlvidarContra);
router.get('/contacto', renderContacto);
router.get('/nosotros', renderNosotros);
router.get('/direccion-envio', renderDireccion);
router.get('/pago/metodo', renderMetodoPago);
router.get('/pago/detalles-tarjeta', renderTarjeta);
router.get('/informacion-producto', renderProducto);

//router.get('/detalles-usuario/informacion', renderDatos)

//router.get('/detalles-usuario/tarjeta', renderDatosTarjeta)
var _default = router;
exports["default"] = _default;