alert("Bienvenidos a Prestamos!!");

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
