const productos = [
 {  nombre: "Iphone 12",
    id: "iphone-12",
    categoria: "iphone",
    precio: 200000,
    img:"./img/iphone.jpg",
},
{   nombre: "Iphone 13",
    id: "iphone-13",
    categoria: "iphone",
    precio: 280000,
    img:"./img/iphone.jpg"
},
{   nombre: "Iphone 14",
    id: "iphone-14",
    categoria: "iphone",
    precio: 320000,
    img:"./img/iphone.jpg"
},
{   nombre: "Ipad Air",
    id: "ipadair",
    categoria: "ipad",
    precio: 240000,
    img:"./img/ipad.jpg"
},
{   nombre: "Ipad 10gen",
    id: "ipad10gren",
    categoria: "ipad",
    precio: 220000,
    img:"./img/ipad.jpg"
},
{  nombre: "Ipad Pro",
   id: "ipadpro",
   categoria: "ipad",
   precio: 280000,
   img:"./img/ipad.jpg"
},
{   nombre: "Airpods",
    id: "airpods",
    categoria: "accesorios",
    precio: 10000,
    img:"./img/erapods.jpg"
},
{   nombre: "Earpods",
    id: "earpods",
    categoria: "accesorios",
    precio: 8000,
    img:"./img/erapods.jpg"
},
{   nombre: "Cargador",
    id: "cargador",
    categoria: "accesorios",
    precio: 6000,
    img:"./img/cargador.jpg"
},
];

const contenedorProductos = document.querySelector("#productos");


function cargaProductos() {
    
    productos.forEach(producto => {
        let div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `<img class="img-producto" src= ${producto.img} alt="">
                         <div class="detalle-producto">
                             <h3 class="titulo-producto">${producto.nombre}</h3>
                             <p>Precio: ${producto.precio}</p>
                             <button class="agregar-carrito" id="${producto.id}">Agregar</button>
                         </div>`
        contenedorProductos.append(div);
    });
    cargarCarrito();
};

cargaProductos();

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
    
        localStorage.setItem("enCarrito", JSON.stringify(carrito));
    };
   

