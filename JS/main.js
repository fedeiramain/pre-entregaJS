const contenedorProductos = document.querySelector("#productos");
let productos = [];

fetch("prod.json")
    .then(response => response.json())
    .then(data => {
        productos = data,
        productos.forEach(producto => {
            let div = document.createElement("div");
            div.classList.add("producto");
            div.innerHTML = `<img class="img-producto" src= ${producto.img} alt="">
                             <div class="detalle-producto">
                                 <h3 class="titulo-producto">${producto.nombre}</h3>
                                 <p class="producto-precio">Precio: usd ${producto.precio}</p>
                                 <button class="agregar-carrito" id="${producto.id}">Agregar</button>
                             </div>`
            contenedorProductos.append(div);
        });
        cargarCarrito();
    });


function cargarCarrito() {
    botonAgregar = document.querySelectorAll(".agregar-carrito");

    botonAgregar.forEach(producto => {
    producto.addEventListener("click", agregarCarrito);
    })
};

let carrito;
let carritoAct = localStorage.getItem("enCarrito");
if(carritoAct) {
    carrito = JSON.parse(carritoAct);
}else {
    carrito = [];
}
function agregarCarrito(e) {
    const idbtn = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idbtn);
    if(carrito.some(producto => producto.id === idbtn)) {
        const index = carrito.findIndex(producto => producto.id === idbtn);
        carrito[index].cantidad +=1;

    }else {
        productoAgregado.cantidad = 1;
        carrito.push(productoAgregado);
        }
        Toastify({
            text: "Producto Agregado",
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right", 
            stopOnFocus: true, 
            style: {
              background: "green",
              fontSize: "20px",
              padding: "1rem",
              borderRadius: "1rem",
            },
            onClick: function(){} 
          }).showToast();
    
        localStorage.setItem("enCarrito", JSON.stringify(carrito));
    };
   

// MENU MOBILE

const menuBurger = document.querySelector(".open-menu");
const navMobile = document.querySelector(".navbar-mobile");
const closeMenu = document.querySelector(".close-menu");

menuBurger.addEventListener("click", () => navMobile.classList.remove("disabled"));

closeMenu.addEventListener("click", () => navMobile.classList.add("disabled"));



const cotBlue = document.querySelector("#cot-blue");
const cotOf = document.querySelector("#cot-oficial");

const cotizacion = async () => {
    const pagUsd = await fetch("https://api.bluelytics.com.ar/v2/latest");
    const data = await pagUsd.json();
    const blue = data.blue;
    cotBlue.innerText = "Blue: $" + blue.value_avg;
    const oficial = data.oficial;
    cotOf.innerText = "Oficial: $" + oficial.value_avg;
}

cotizacion();