document.addEventListener('DOMContentLoaded', mostrarProductos);

function mostrarProductos(){
    // Leer datos de la cadena de consulta
    const url='http://localhost:4000/productos';
    fetch(url)
        .then( respuesta => {
            return respuesta.json();
        } )
        .then( resultado => {
            // console.log(resultado)
            productosHTML(resultado);
        })
}

// Función para renderizar el HTML de categorias
function productosHTML(productos){
    listaProductos = document.getElementById('lista-productos');
    for(let i=0; i < productos.length; i++){
        // Calcular el precio Normal = Costo + Ganancia
        let precioNormal = productos[i].productoPrecio;
        precioNormal = Intl.NumberFormat('es-419').format(precioNormal); // Para formatear el numero
        //console.log(precioNormal);
        // precioOferta = precioNormal - Descuento
        let precioOferta = precioNormal - ( productos[i].productoPrecio * productos[i].productoDescuento / 100 );
        precioOferta = Intl.NumberFormat('es-419').format(precioOferta); // Para formatear el numero

        // Crear el div padre
        const div = document.createElement('div');
        div.classList.add("contenedor-producto");
        div.innerHTML = `
        <div class="imagen">
            <img src="../img/antibioticos/${productos[i].productoImagen}"/>
        </div>   
        <div class="info">
            <p class="texto nombre">"${productos[i].productoNombre}"</p>
            <p class="texto extra">${productos[i].productoExtra}</p>
            <p class="precio">${productos[i].productoPrecio}</p>
            <a href="#" class="boton">Agregar al carrito</a>
        </div>
                        `;
        listaProductos.appendChild(div);
    }
}

function currencyFormatter({ currency, value}) {
    const formatter = new Intl.NumberFormat('en-US', {
      style: currency,
      minimumFractionDigits: 1,
      currency
    }) 
    return formatter.format(value)
  }