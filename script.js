function Saludar() {   
alert("¡Hola vamos a comenzar!");
}
const empresa={
    nombre:"Coderhouse",
    cantidadDeEmpleados:"N°"+" "+"empleados"+ " " + 100,
    calle:"Buenos aires 1234"
}
console.log(empresa["nombre"])
console.log(empresa["cantidadDeEmpleados"])
console.log(empresa["calle"])
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let resultado = nombre + " " + apellido;
console.log(resultado)
let salida = "Bienvenida/o" + " " + nombre + " " + apellido;
alert(salida);
let turno;
do {
    turno = prompt("Ingrese 1.Turno 9 a 15/2.Turno 15 a 21/3.Turno 18 a 00 (solo numero)");
} while (turno > 3 && turno)
switch (turno) {
    case "1":
        alert("Sus vacaciones son del 20/10/22 al 05/11/2022")
        break
    case "2":
        alert("Sus vacaciones son del 05/11/22 al 15/11/2022")
        break
    case "3":
        alert("Sus vacaciones son del 15/11/22 al 30/11/2022")
        break

    default:
        alert("opcion ingresada invalida")
        break
}
console.log("¿Hay algo más que te quisiera consultar?");
let turno2;
do {
    turno2 = prompt("Ingrese 1.Cobros/2.Fecha/0.Salir");
} while (turno2 > 2 && turno2)
    ;
if (turno2 == 1) {
    var hsTrabajo = parseInt(prompt("ingrese cantidad de horas de trabajo(solo numeros)"));
    var salario = 300 * hsTrabajo;
    var deduccion = salario * 10 / 100;
    var monto = salario - deduccion;
    alert("Monto a cobrar" + " " + monto.toFixed(2));
    alert("Hasta luego");

} else if (turno2 == 2) {
    var ultNum = Number(prompt("ingrese su ultimo digito del DNI"));
    }
   
if (ultNum % 2 == 0) {        
      alert("Numero par" + " " +"fecha de cobro" + " " + 1 + "er" + " " + "dia habil");
    
}
else if (ultNum * 3) {
    alert("Numero impar" + " " + "fecha de cobro" + " " + 5 + "to" + " " + "dia habil");
    alert("Hasta luego");

}
else if (turno2 == 0) {
    alert("Hasta luego");
}



