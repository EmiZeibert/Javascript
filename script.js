function Saludar() {
    console.log("¡Hola vamos a comenzar!");

}
Saludar();
const empresa = {
    nombre: "Electronic",
    calle: "Buenos aires 1234",
    informacion: "Venta de productos electronicos"

}
console.log(empresa["nombre"])
console.log(empresa["calle"])
console.log(empresa["informacion"])

let nombre = prompt("Ingrese su nombre completo");
let resultado = nombre;
console.log(resultado)
let salida = "Bienvenida/o" + " " + nombre;
function sumar(descuento1, descuento2){
    return descuento1 + descuento2
}
let result = sumar (2500, 2500);
console.log(result)

function Descuento() {
    console.log("¡Solo por hoy $5000 de descuento!");

}
Descuento();
alert(salida);

const productos = [
    { id: 1, nombre: "notebook", precio: 100000 },
    { id: 2, nombre: "parlante", precio: 20000 },
    { id: 3, nombre: "parlante", precio: 15000 },
    { id: 4, nombre: "celular", precio: 99000 },
    { id: 5, nombre: "smartv", precio: 58000 },
    { id: 6, nombre: "tablet", precio: 28000 },
    { id: 7, nombre: "monitor 22p", precio: 15000 }

];

productos.forEach((producto) => {
    console.log(producto.nombre)
    console.log(producto.precio)
});
let filtro = productos.filter(producto => producto.nombre === "parlante" && producto.precio < 25000)
console.log(filtro);

function Productos(titulo, color) {
    this.titulo = titulo;
    this.color = color;

}
const producto1 = new Productos("notebook", "gris")
const producto2 = new Productos("parlante", "negro")
const producto3 = new Productos("parlante", "azul")
const producto4 = new Productos("celular", "azul")
const producto5 = new Productos("smartv", "negro")
const producto6 = new Productos("tablet", "blanca")
const producto7 = new Productos("monitor", "negro")
console.log(producto1, producto2, producto3, producto4, producto5, producto6)
let opcion;
do {
    opcion = prompt("¿Que producto quiere comprar? \n1.Notebook\n2.Parlante\n3.Parlante azul\n4.Celular\n5.Smartv\n6.Tablet\n7.Monitor22p");
} while (opcion > 7 || opcion == 0  && opcion)
    ;
 
switch (opcion) {
    case "1":
        console.log("se agrego Notebook x $100000")
        cantidad = prompt("¿cantidad?");
        var descuento = 5000
        var subtotal = (100000 * cantidad) - 5000;
        console.log(subtotal)
        alert("Monto a pagar" + " " + subtotal.toFixed(2));

        break;
    case "2":
        console.log("Se agrego Parlante x $20000")
        cantidad = prompt("¿cantidad?");
        var descuento = 5000
        var subtotal = (20000 * cantidad) - descuento;

        console.log(subtotal)
        alert("Monto a pagar" + " " + subtotal.toFixed(2));
        break;
    case "3":
        console.log("Se agrego Parlante x $15000")
        cantidad = prompt("¿cantidad?");
        var descuento = 5000
        var subtotal = (15000 * cantidad) - descuento;

        console.log(subtotal)
        alert("Monto a pagar" + " " + subtotal.toFixed(2));
        break;
    case "4":
        console.log("Se agrego Celular x $99000")
        cantidad = prompt("¿cantidad?");
        var descuento = 5000
        var subtotal = (99000 * cantidad) - descuento;
        console.log(subtotal)
        alert("Monto a pagar" + " " + subtotal.toFixed(2));
        break;
    case "5":
        console.log("Se agrego Smartv x $58000 ")
        cantidad = prompt("¿cantidad?");
        var descuento = 5000
        var subtotal = (58000 * cantidad) - descuento;
        console.log(subtotal)
        alert("Monto a pagar" + " " + subtotal.toFixed(2));
        break;
    case "6":
        console.log("Se agrego Tablet x $28000")
        cantidad = prompt("¿cantidad?");
        var descuento = 5000
        var subtotal = (28000 * cantidad) - descuento;
        console.log(subtotal)
        alert("Monto a pagar" + " " + subtotal.toFixed(2));
        break;
    case "7":
        console.log("Se agrego Monitor x $15000 ")
        cantidad = prompt("¿cantidad?");
        var descuento = 5000
        var subtotal = (15000 * cantidad) - descuento;
        console.log(subtotal)
        alert("Monto a pagar" + " " + subtotal.toFixed(2));
        break;

    default: alert("Producto inexistente")
        break;
}

function Finalizarcompra() {
    console.log("¡Vamos a finalizar la compra!");

}
Finalizarcompra();
var envio=500
var total= subtotal + envio;
alert("Su pago total es" + " " + total)
function Saludar() {
    console.log("¡Gracias por su compra!");

}
Saludar();

let indice = opcion.indexOf("7");
console.log(indice);




























