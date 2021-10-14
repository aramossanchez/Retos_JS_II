//Reto 11

/*
Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos
estará rellenado con números aleatorios y el otro apuntará al array anterior, reasigna
los valores del segundo array con valores aleatorios. Después, crea un método que
tenga como parámetros, los dos arrays y devuelva uno nuevo con la multiplicación
de la posición 0 del array1 con el del array2 y así sucesivamente. Por último, muestra
el contenido de cada array.
*/

/*
Autor: Armando Ramos
Version: 1.0
*/

//Input

let num;

let tamaño = prompt("Introduce el tamaño que quieres que tengan ambos arrays");

let array1 = [];
let array2 = [];
let arrayCajon = [];


//Proceso

const numRandom = () => {
    num = Math.floor(Math.random() * 100);
    return num;
};
const rellenarArray = (array, tamaño) => {
    while (array.length < tamaño) {
        array.push(numRandom());
    }
};
const guardarArray1EnArray2 = (array1, array2) =>{
    for (let i = 0; i < array1.length; i++) {
        array2.push(array1[i]);        
    }
}
const sustituirValoresArray = (array) =>{
    for (let i = 0; i < array.length; i++) {
        array.shift();
        array.push(numRandom());
    }
};
const multiplicarValoresArray = (array1, array2) =>{
    for (let i = 0; i < array1.length; i++) {
        arrayCajon[i] = array1[i] * array2[i];        
    }
}

rellenarArray(array1, tamaño);
guardarArray1EnArray2(array1, array2);
sustituirValoresArray(array2);
multiplicarValoresArray(array1, array2);

//Output

console.log("Array 1: " + array1 + "\nArray 2: " + array2 + "\nArray multiplicación: " + arrayCajon);