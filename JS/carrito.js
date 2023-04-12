let pedidos = JSON.parse(localStorage.getItem("enCarrito"));
const ventas = document.querySelector("#productos-carrito");
const carritoVacio = document.querySelector(".carrito-vacio");
const suCompra = document.querySelector(".su-compra");
const btnpagar = document.querySelector(".btn-secondary");
const tituloTotal = document.querySelector(".titulo-total");
const totalPagar = document.querySelector(".suma-total");
const finalizar = document.querySelector(".btn-primary");
const titutloFin = document.querySelector(".fin-compra");


function listaCompra() {
        ventas.innerHTML = "";
        
        pedidos.forEach(pedido => {
            const unidad = document.createElement("div");
            unidad.classList.add("producto-carrito");
            unidad.innerHTML = `
            <img class="img-producto-carrito" src=${pedido.img} alt=${pedido.nombre}>
              <div class="titulo-producto-carrito">
                  <small>Titulo</small>
                  <p class="producto-info-nombre">${pedido.nombre}</p>
              </div>
              <div class="cantidad-producto-carrito">
                  <small>Cantidad</small>
                  <p class="producto-info-cantidad">${pedido.cantidad}</p>
              </div>
              <div class="precio-producto-carrito">
                  <small>Precio</small>
                  <p class="producto-info-precio">$${pedido.precio}</p>
              </div>
              <div class="subtotal-producto-carrito">
                  <small>Total</small>
                  <p class="producto-info-total">$${pedido.precio * pedido.cantidad}</p>
              </div>
              <button class="btn-eliminar" id=${pedido.id}><i class="fa-solid fa-trash-can"></i></button>
            `
    
            ventas.append(unidad);
        });
   
    eliminarproducto();
}

listaCompra();

function eliminarproducto() {
     vaciar = document.querySelectorAll(".btn-eliminar");
     vaciar.forEach(boton => {
        boton.addEventListener("click", quitarDeCarrito)
     })

     quitarDeCarrito;
}

function quitarDeCarrito(e) {
    const idBoton = e.currentTarget.id;
    const index = pedidos.findIndex(producto => producto.id === idBoton);
    pedidos.splice(index, 1);
    listaCompra();

    localStorage.setItem("enCarrito", JSON.stringify(pedidos));
    
}


function tituloCarrito() {
    if(pedidos != "") {
        carritoVacio.classList.add("disabled");
        suCompra.classList.remove("disabled");
        btnpagar.classList.remove("disabled");
        totalPagar.classList.remove("disabled");
    } else {
        carritoVacio.classList.remove("disabled");
        suCompra.classList.add("disabled");
        btnpagar.classList.add("disabled");
        totalPagar.classList.add("disabled");
        
    }
};

tituloCarrito();

function total() {
    const total = pedidos.reduce((acc, producto) => acc +
    (producto.precio * producto.cantidad), 0);
    totalPagar.innerText = "Total: $" + `${total}`;
}

total();

finalizar.addEventListener("click", cierre);

function cierre() {
        ventas.innerHTML = "";
        pedidos.length = 0;
        localStorage.setItem("enCarrito", JSON.stringify(pedidos));

        carritoVacio.classList.add("disabled");
        suCompra.classList.add("disabled");
        btnpagar.classList.add("disabled");
        totalPagar.classList.add("disabled");
        titutloFin.classList.remove("disabled");
   
}
console.log(pedidos);
