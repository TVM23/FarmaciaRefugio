import express from 'express'
import dotenv from "dotenv";
import conectarDB from "./database.js";
import exphbs from 'express-handlebars';
import path from 'path'
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import indexRoutes from './routes/index.routes.js';
import usuarioRoutes from './routes/usuario.routes.js';
import morgan from 'morgan';

//Inicializacion
const app = express();
dotenv.config();//Agarra el enlace de la db
conectarDB();

//Setting
app.set('port', 'process.env.PORT' || 4000)
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

//Routes
app.use(indexRoutes);
app.use(usuarioRoutes);

//Flles estaticos
app.use(express.static(path.join(__dirname, 'public')));

export default app;