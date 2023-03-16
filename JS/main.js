class producto {
    constructor (phone, caracteristica, precio) {
        this.phone = phone;
        this.caracteristica = caracteristica;
        this.precio = precio;
    }
}

const iphone12 = new producto("Iphone12", "64GB", 150.000);
const iphone12Pro = new producto("Iphone12Pro", "128GB", 190.000);
const iphone13 = new producto("Iphone13", "128GB", 210.000);
const iphone13Pro = new producto("Iphone13Pro", "256GB", 250.000);

const productosIphone = [iphone12, iphone12Pro, iphone13, iphone13Pro];

// console.log(productosIphone);

const listaIphonePhone = productosIphone.forEach((producto) => {
    console.log(producto.phone);
});

const listaIphonePrecio = productosIphone.forEach((producto) => {
    console.log(producto.precio);
});


const iphone14 = new producto("Iphone14", "256GB", 290.000);
const iphone14Pro = new producto("Iphone14Pro", "500GB", 340.000);


const ingresoIphone14 = [iphone14, iphone14Pro];

// console.log(ingresoIphone14);

const listaContado = productosIphone.concat(ingresoIphone14);

// console.log(listaContado);

const masVendidos = listaContado.filter((producto) => producto.precio > 200 && producto.precio < 300);
// console.log(masVendidos);

const buscarIphone15 = listaContado.some((producto) => producto.phone === "Iphone15");
// console.log(buscarIphone15);

const preciosFinanciados = listaContado.map((producto) => {
    return {
         nombre: producto.nombre,
         caracteristica: producto.caracteristica,
         precio: producto.precio*1.05,
    }
});

// console.log(preciosFinanciados);

alert("Bienvenidos a Iphone Store");

const tipoDeCompra = prompt("Indique como comprar: \n Contado \n Financiado");

while (tipoDeCompra != "contado" && tipoDeCompra != "financiado") {
    tipoDeCompra = prompt("Indique como comprar: \n Contado \n Financiado");
};

function selcLista() {
    if(tipoDeCompra === "contado") {
        console.log(listaContado);
    } else {
        console.log(preciosFinanciados);
    }
};

selcLista();


alert("Bienvenidos a Seccion Prestamos!!");

function ingreseUsuario() {
    let usuario = prompt("Por favor, ingrese su usuario:");
    while (usuario == "") {
        usuario = prompt("Por favor, ingrese su usuario:");
    };
    
    let contraseña = prompt("ingrese su clave:");
    let autoriza = 1234;

    while (contraseña != autoriza) {
         contraseña = prompt("incorrecto, ingrese su clave:");
    };
};

ingreseUsuario();

alert("Prestamos personales");

let ingresos = prompt("Indique sus ingresos en miles de pesos:");

while (ingresos <= 0) {
    ingresos = prompt("Indique sus ingresos en miles de pesos:");
};

function calculoCuota() {
    if (ingresos > 0 && ingresos <= 100) {
        alert("Usted no tiene prestamos disponibles.")
    } else if (ingresos > 100 && ingresos <= 200) {
        alert("Usted tiene prestamo pre aprobado de $ 500.000")
        let cuotas = prompt("ingrese cantidad de cuotas (3, 6 y 12):")
        while (cuotas != 3 && cuotas != 6 && cuotas != 12) {
            cuotas = prompt("ingrese cantidad de cuotas (3, 6 y 12):")
        }
        if (cuotas == 3) {
            alert("Pagas 3 cuotas de 180 mil pesos")
        } else if (cuotas == 6) {
            alert("Pagas 6 cuotas de 100 mil pesos")
        } else if (cuotas == 12) {
            alert("Pagas 12 cuotas de 65 mil pesos")
        }
    } else if (ingresos > 200 && ingresos <= 300) {
        alert("Usted tiene prestamo pre aprobado de $ 1.000.000")
        let cuotas = prompt("ingrese cantidad de cuotas (3, 6 y 12):")
        while (cuotas != 3 && cuotas != 6 && cuotas != 12) {
            cuotas = prompt("ingrese cantidad de cuotas (3, 6 y 12):")
        }
        if (cuotas == 3) {
            alert("Pagas 3 cuotas de 320 mil pesos")
        } else if (cuotas == 6) {
            alert("Pagas 6 cuotas de 200 mil pesos")
        } else if (cuotas == 12) {
            alert("Pagas 12 cuotas de 130 mil pesos")
        }
    } else if (ingresos > 300) {
        alert ("Consulte con un ejecutivo, por mayor monto")
   };
}

calculoCuota();

alert("Muchas gracias por su visita!");

