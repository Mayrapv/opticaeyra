function saludar() {
    console.log("Bienvenido a nuestro sistema de turnos Optica Eyra");
}
saludar()
alert("Bienvenido a nuestro sistema de turnos Optica Eyra")

let nombreyapellido = "Mayra Rivas";
nombreyapellido = prompt ("¿Cual es tu nombre y apellido?");
console.log("Mi nombre y apellido es " + nombreyapellido );

let edad = prompt("¿Cual es tu edad?")
if (edad >= 18) {
    alert("Sos mayor de edad, puedes seleccionar un turno")
} else {
    alert("Sos menor de edad, no púedes seleccionar un turno")
}


let cantidaddepacientes = parseInt(prompt("¿Cuantos pacientes atendera hoy el Dr?"));
for (let turno = 1; turno <= cantidaddepacientes; turno++) {
    let nombre = prompt("¿Como se llama el paciente" + turno + "?");
    console.log("El paciente ," + nombre + "tiene asignado el turno numero" + turno);
}


let paciente = {
    Nombre: "Mayra",
    Apellido: "Rivas",
    DNI: "37870963",
    Nacionalidad: "Argentina",
    Celular: 1125356786,
    PrimeraConsulta: "si",
}

console.log(paciente)

class Producto {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre =nombre.toUpperCase();
        this.precio = parseFloat(precio);
    }
    toString = function () {
        return this.nombre;
    };
}

let Productos = [
  new Producto(4098, "Lente de sol Rayban Jackie", 49.000),
  new Producto(1973, "Lente de sol Rayban Square", 51.000),
  new Producto(4101, "Lente de sol Rayban Jackie Ohh", 52.500),
  new Producto(3548, "Lente de sol Rayban Exagonal", 59.000),
  new Producto(5429, "Lente de sol Vogue", 35.000),
  new Producto(5432, "Lente de sol Vogue Azul", 38.000),
  new Producto(4356, "Lente de sol Rayban clasico", 60.000)
]
console.log(Productos);

 console.log("mi array sin convertir", {Productos});
 localStorage.setItem("Productos", JSON.stringify(Productos));

 const recuperadas = localStorage.getItem("productos");
 const convertido = JSON.parse(recuperadas);
 console.log("productos recuperados del localStorage", {convertido});

