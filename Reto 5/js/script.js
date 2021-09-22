//Reto 5

/*
Crea una aplicación que nos convierta un número en base decimal a binario. Esto lo
realizará un método al que le pasaremos el número como parámetro, devolverá un
String con el numero convertido a binario. Para convertir un número decimal a
binario, debemos dividir entre 2 el número y el resultado de esa división se divide
entre 2 de nuevo hasta que no se pueda dividir más, el resto que obtengamos de
cada división formara el número binario, de abajo a arriba.
*/

/*
Autor: Armando Ramos
Version: 1.0
*/

//Input

var numero = prompt("Indica que número quiere convertir a binario");
numero = parseInt(numero);
var binario = [];

//Proceso

if (numero == 0) {
    binario.push(0);
}

while (numero > 0) {
    binario.push(numero % 2);
    numero = parseInt(numero / 2);
}

binario.reverse(binario);

//Output

console.log(binario);