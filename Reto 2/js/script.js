//Reto 2

/*
Crea una aplicación que nos genere una cantidad de números enteros aleatorios
pasados por el usuario (prompt). Crea un método donde pasamos como parámetros
entre que números queremos que los genere, podemos pedirlas al usuario antes de
generar los números. Este método devolverá un número entero aleatorio. Muestra
estos números por consola.
*/

/*
Autor: Armando Ramos
Version: 1.0
*/

//Input

let cantidad = parseInt(prompt("Introduce la cantidad de numeros que quieres que se generen"));
let limiteInferior = parseInt(prompt("Introduce desde que numero mínimo empezará a generar numeros aleatorios"));
let limiteSuperior = parseInt(prompt("Introduce hasta que numero máximo empezará a generar numeros aleatorios"));
let numeros = [];

//Proceso

const numeroAleatorio = (cantidad, limiteInferior, limiteSuperior) => {
    for (let i = 1; i <= cantidad; i++) {
        numeros.push(parseInt(Math.random() * (limiteSuperior - limiteInferior) + limiteInferior));
    }
}

//Output

numeroAleatorio(cantidad, limiteInferior, limiteSuperior);
console.log(numeros);

