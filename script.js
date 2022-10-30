var unaCadena="¡Hola";
var segCadena= " ";
var otraCadena= "vamos a comenzar!";
var result= unaCadena +segCadena + otraCadena;
console.log (result);
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let resultado = nombre + " " + apellido;
console.log(resultado)
let salida = "Bienvenida/o" + " " + nombre + " " + apellido;
alert(salida);
let turno;
do {
  turno =prompt("Ingrese 1.Turno 9 a 15/2.Turno 15 a 21/3.Turno 18 a 00 (solo numero)");
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
} while (turno2 > 2 && turno2 )
;

if (turno2 == 1) {
    var hsTrabajo = parseInt(prompt("ingrese cantidad de horas de trabajo(solo numeros)"));
    var salario = 300 * hsTrabajo;
    alert("Monto a cobrar" + " " + salario);
    alert("Hasta luego");

} else if (turno2 ==2) {
    let fecha = 5
    alert("Fecha de cobro" + " " + fecha + "to" + " " + "dia habil");
    alert("Hasta luego");
}
else if (turno2 == 0) {
    alert("Hasta luego");

}


























