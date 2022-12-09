import mongoose from "mongoose";
mongoose.set('strictQuery', false);

const conectarDB = async () => {
    try {
        /* const db = await mongoose.connect(process.env.MONGO_URI, { */
        const db = await mongoose.connect('mongodb+srv://ad-t23:519.Itj@clusteritj.jsn9u39.mongodb.net/prueba', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const url = `${db.connection.host} : ${db.connection.port}`
        console.log(`mongoDB conenctado en ${url}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1); //Imprime un mensaje de error y termina el programa
    }
};

export default conectarDB;