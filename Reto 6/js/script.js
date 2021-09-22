//Reto 6

/*
Crea una aplicación que nos cuente el número de cifras de un número entero positivo
(hay que controlarlo) pedido por prompt. Crea un método que realice esta acción,
pasando el número por parámetro devolverá el número de cifras.
*/

/*
Autor: Armando Ramos
Version: 1.0
*/

//Input

var numero = prompt("Introduce el número que quieras saber cuantas cifras tiene");
var cifras = Array.from(numero);

//Proceso

//Output

console.log(cifras.length);

