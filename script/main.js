function saludar() {
    console.log("Bienvenido a nuestro sistema de turnos Optica Eyra");
}
saludar()

let paciente = {
    Nombre: "Mayra",
    Apellido: "Rivas",
    DNI: "37870963",
    Nacionalidad: "Argentina",
    Celular: 1125356786,
    PrimeraConsulta: "si",
}

console.log(paciente)

const miBoton = document.getElementById("miBoton");
miBoton.addEventListener("click" , function() {
  alert("¡Estaras recibiendo confirmacion en tu mail!");
});

class Producto {
    constructor(id, nombre, precio, img) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;

    }
}

let Productos = [
    new Producto(4098, "Lente de sol Rayban Jackie", 49.000, "../img/sol1.jpg"),
    new Producto(1973, "Lente de sol Rayban Square", 51.000), "../img/sol2.jpg",
    new Producto(4101, "Lente de sol Rayban Jackie Ohh", 52.500, "../img/sol3.jpg"),
    new Producto(3548, "Lente de sol Rayban Exagonal", 59.000, "../img/sol4.jpg"),
    new Producto(5429, "Lente de sol Vogue", 35.000, "../img/sol.vogue1.jpg"),
    new Producto(5432, "Lente de sol Vogue Azul", 38.000, "../img/sol.vogue2.jpg"),
    new Producto(4356, "Lente de sol Rayban clasico", 60.000, "../img/sol5.jpg")
]

console.log(Productos);

console.log("mi array sin convertir", { Productos });
localStorage.setItem("Productos", JSON.stringify(Productos));

const recuperadas = localStorage.getItem("productos");
const convertido = JSON.parse(recuperadas);
console.log("productos recuperados del localStorage", { convertido });

const contenedor = document.querySelector('#productos');

function obtenerProductos() {
    return [
      { nombre: "Producto 1", descripcion: "Descripción del producto 1", precio: "$100" },
      { nombre: "Producto 2", descripcion: "Descripción del producto 2", precio: "$200" },
      { nombre: "Producto 3", descripcion: "Descripción del producto 3", precio: "$300" }
    ];
  }

  function mostrarProductos() {
    const productos = obtenerProductos();
    const contenedorProductos = document.getElementById("productos");
    productos.forEach(producto => {
      const productoHTML = document.createElement("div");
      productoHTML.classList.add("producto");
      productoHTML.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <span>${producto.precio}</span>`;
      contenedorProductos.appendChild(productoHTML);
    });
  }

  mostrarProductos();
