//Reto 4

/*
Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
realizara mediante un método al que le pasamos el número como parámetro. Para
calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por
ejemplo, si introducimos un 5, realizara esta operación 5*4*3*2*1=120.
*/

/*
Autor: Armando Ramos
Version: 1.0
*/

//Input

let numero = parseInt(prompt("Introduce el número del que quieres el factorial."));
let resultadoFinal = 1;

//Proceso

for (let i = 1; i <= numero; i++) {
    resultadoFinal *= i;
}

//Output

console.log(resultadoFinal);

