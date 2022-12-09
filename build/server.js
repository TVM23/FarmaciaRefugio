"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _database = _interopRequireDefault(require("./database.js"));
var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));
var _path = _interopRequireDefault(require("path"));
var _url = require("url");
var _indexRoutes = _interopRequireDefault(require("./routes/index.routes.js"));
var _usuarioRoutes = _interopRequireDefault(require("./routes/usuario.routes.js"));
var _morgan = _interopRequireDefault(require("morgan"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _filename = (0, _url.fileURLToPath)(import.meta.url);
var _dirname = _path["default"].dirname(_filename);
//Inicializacion
var app = (0, _express["default"])();
_dotenv["default"].config(); //Agarra el enlace de la db
(0, _database["default"])();

//Setting
app.set('port', process.env.PORT || 4000);
app.set('views', _path["default"].join(_dirname, 'views'));
app.engine('.hbs', _expressHandlebars["default"].engine({
  defaultLayout: 'main',
  layoutsDir: _path["default"].join(app.get('views'), 'layouts'),
  partialsDir: _path["default"].join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use((0, _morgan["default"])('dev'));

//Routes
app.use(_indexRoutes["default"]);
app.use(_usuarioRoutes["default"]);

//Flles estaticos
app.use(_express["default"]["static"](_path["default"].join(_dirname, 'public')));
var _default = app;
exports["default"] = _default;