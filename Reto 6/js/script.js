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

//Proceso

if (numero >= 0 && !numero.includes(".")) {
    var cifras = Array.from(numero);
}else{
    alert("No has introducido un numero correcto.");
}

//Output

console.log(cifras.length);

