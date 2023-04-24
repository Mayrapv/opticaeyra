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


const Productos = ["LenteDeSol", "LentesConGraduacion", "LentesDeContacto"]



