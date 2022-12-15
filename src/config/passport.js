import passport from "passport";
import localStrategy from "passport-local";
import Usuario from '../models/Usuario.js';

passport.use(new localStrategy.Strategy({
    usernameField: 'emailUsuario',
    passwordField: 'passwordUsuario',
}, async (emailUsuario, passwordUsuario, done) => {
    //Confirmar si coincide el correo del usuario
    const user = await Usuario.findOne({emailUsuario})
    if(!user){
        return done(null, false, {message: 'Este usuario no esta registrado'});
    }else{
        //Vericar si la contrasena si es igual
        const match = await user.matchPassword(passwordUsuario)
        if(match){
            return done(null, user);
        }else{
            return done(null, false, {message: 'Contraseña incorrecta'});
        }
    }
}))

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Usuario.findById(id, (err, user) => {
        done(err, user);
    })
});