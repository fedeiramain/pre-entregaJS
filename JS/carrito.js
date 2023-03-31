let pedidos = JSON.parse(localStorage.getItem("enCarrito"));
const ventas = document.querySelector("#productos-carrito");
const carritoVacio = document.querySelector(".carrito-vacio");
const suCompra = document.querySelector(".su-compra");
const carritoAcc = document.querySelector(".agregar-vaciar");
const btnpagar = document.querySelector(".btn-carrito");


function listaCompra() {
    ventas.innerHTML = "";
    if(pedidos) {
        carritoVacio.classList.add("disabled");
        pedidos.forEach(pedido => {
            const unidad = document.createElement("div");
            unidad.classList.add("producto-carrito");
            unidad.innerHTML = `
            <img class="img-producto-carrito" src=${pedido.img} alt=${pedido.nombre}>
              <div class="titulo-producto-carrito">
                  <small>Titulo</small>
                  <p>${pedido.nombre}</p>
              </div>
              <div class="cantidad-producto-carrito">
                  <small>Cantidad</small>
                  <p class="producto-cantidad">${pedido.cantidad}</p>
              </div>
              <div class="precio-producto-carrito">
                  <small>Precio</small>
                  <p>$${pedido.precio}</p>
              </div>
              <div class="subtotal-producto-carrito">
                  <small>Total</small>
                  <p class="producto-total">$${pedido.precio * pedido.cantidad}</p>
              </div>
              <button class="btn-eliminar" id=${pedido.id}><i class="fa-solid fa-trash-can"></i></button>
            `
    
            ventas.append(unidad);
        });
    }else {
        carritoVacio.classList.remove("disabled");
        suCompra.classList.add("disabled");
        carritoAcc.classList.add("disabled");
    }
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


btnpagar.addEventListener("click", pagarCompras);

function pagarCompras() {
    alert("Muchas Gracias por Su Compra");
}