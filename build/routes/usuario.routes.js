"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _usuarioControllers = _interopRequireDefault(require("../controllers/usuario.controllers.js"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var renderRegistro = _usuarioControllers["default"].renderRegistro,
  crearUsarioNuevo = _usuarioControllers["default"].crearUsarioNuevo,
  renderDatos = _usuarioControllers["default"].renderDatos,
  renderDatosTarjeta = _usuarioControllers["default"].renderDatosTarjeta,
  updateTarjeta = _usuarioControllers["default"].updateTarjeta,
  deleteUsuario = _usuarioControllers["default"].deleteUsuario;
var router = _express["default"].Router();

//Registro de usuario
router.get('/registro', renderRegistro);
router.post('/registro/nuevo-usuario', crearUsarioNuevo);

//Mostrar info usuarios
router.get('/detalles-usuario/informacion', renderDatos);
router.get('/detalles-usuario/tarjeta', renderDatosTarjeta);

//Editar info usuario
//Editar tarjeta
router.put('/detalles-usuario/tarjeta/edit/:id', updateTarjeta);

//Eliminiar usuario
router["delete"]('/detalles-usuario/informacion/delete/:id', deleteUsuario);
router["delete"]('/detalles-usuario/tarjeta/delete/:id', deleteUsuario);
var _default = router;
exports["default"] = _default;