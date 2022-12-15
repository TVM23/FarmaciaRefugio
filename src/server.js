import express from 'express'
import dotenv from "dotenv";
import conectarDB from "./database.js";
import exphbs from 'express-handlebars';
import Handlebars from 'handlebars';
import allowInsecurePrototypeAccess from '@handlebars/allow-prototype-access'
import path from 'path'
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import indexRoutes from './routes/index.routes.js';
import usuarioRoutes from './routes/usuario.routes.js';
import categoriaRoutes from './routes/categoriaRoutes.js';
import productoRoutes from './routes/productoRoutes.js';
import morgan from 'morgan';
import methodOverride from 'method-override';
import flash from 'connect-flash';
import session from 'express-session';
import passport from "passport";


//Inicializacion
const app = express();
dotenv.config();//Agarra el enlace de la db
conectarDB();
import './config/passport.js';

//Setting
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}));
app.set('view engine', '.hbs');

//Middlewares
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'))
app.use(methodOverride('_method'))
app.use(session({
    secret: 'un gran secerto bastante original',
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//Variables globales
app.use((req, res, next) => {
    res.locals.success_msg = req.flash('success_msg')
    res.locals.cuenta_repetida = req.flash('cuenta_repetida')
    res.locals.error = req.flash('error')
    res.locals.cerrar_sesion = req.flash('cerrar_sesion')
    res.locals.user = req.user || null;
    next();
})


//Routes
app.use(indexRoutes);
app.use(usuarioRoutes);
app.use(productoRoutes);
app.use(categoriaRoutes);

//Flles estaticos
app.use(express.static(path.join(__dirname, 'public')));

export default app;