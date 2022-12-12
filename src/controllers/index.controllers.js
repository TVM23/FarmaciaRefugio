const indexController = {}

indexController.renderIndex = (req, res)=>{
    res.render('index')
}

/* indexController.renderRegistrarUsuario = (req, res)=>{
    res.render('usuarios/registro')
} */

indexController.renderContacto = (req, res)=>{
    res.render('contacto')
}

indexController.renderDireccion = (req, res)=>{
    res.render('direccion')
}

indexController.renderMetodoPago = (req, res)=>{
    res.render('pago/metodo')
}

indexController.renderTarjeta = (req, res)=>{
    res.render('pago/tarjeta')
}

indexController.renderProducto = (req, res)=>{
    res.render('producto')
}

/* indexController.renderDatos = (req, res)=>{
    res.render('usuarios/datos')
}

indexController.renderDatosTarjeta = (req, res)=>{
    res.render('usuarios/datos-tarjeta')
} */

indexController.renderNosotros = (req, res)=>{
    res.render('nosotros')
}

export default indexController;