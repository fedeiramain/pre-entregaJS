const productos = [
 {nombre: "Iphone 12",
    categoria: "iphone",
    precio: 200000,
    img:"./img/iphone.jpg"
},
{nombre: "Iphone 13",
    categoria: "iphone",
    precio: 280000,
    img:"./img/iphone.jpg"
},
{nombre: "Iphone 14",
    categoria: "iphone",
    precio: 320000,
    img:"./img/iphone.jpg"
},
{nombre: "Ipad Air",
    categoria: "ipad",
    precio: 240000,
    img:"./img/ipad.jpg"
},
{nombre: "Ipad 10gen",
    categoria: "ipad",
    precio: 220000,
    img:"./img/ipad.jpg"
},
{nombre: "Ipad Pro",
categoria: "ipad",
precio: 280000,
img:"./img/ipad.jpg"
},
{nombre: "Airpods",
    categoria: "accesorios",
    precio: 45000,
    img:"./img/airpod.jfif"
},
{nombre: "Earpods",
    categoria: "accesorios",
    precio: 8000,
    img:"./img/erapods.jpg"
},
{nombre: "Cargador",
    categoria: "accesorios",
    precio: 6000,
    img:"./img/cargador.jpg"
},
];

const contenedorProductos = document.querySelector(".productos");

productos.forEach(producto => {
    let div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `<img class="img-producto" src= ${producto.img} alt="">
                     <div class="detalle-producto">
                         <h3 class="titulo-producto">${producto.nombre}</h3>
                         <p>Precio: ${producto.precio}</p>
                         <button class="agregar-carrito">Agregar</button>
                     </div>`
    contenedorProductos.append(div);
})