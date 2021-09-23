//Reto 12

/*
Crea un array de números de un tamaño pasado por prompt, el array contendrá
números aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un
dígito que nosotros le indiquemos por prompt (debes controlar que se introduce un
número correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un
array de 10 posiciones le indicamos mostrar los números acabados en 5, podría salir
155, 25, etc.
*/

/*
Autor: Armando Ramos
Version: 1.0
*/

//Input

var num;

var tamaño = prompt("Introduce el tamaño del array");
tamaño = parseInt(tamaño);

var array = [];
var arrayConUltimoDigito = [];

var ultimoDigito = prompt("Introduce un número del 0 al 9. \nEste número será el que usaré para seleccionar los números del array creado.\nTodos los números que acaben en ese número serán los seleccionados.\nSi intentas introducir un número de una cifra pero con decimales, se redondeará");
ultimoDigito = parseInt(ultimoDigito);

while (isNaN(ultimoDigito) || ultimoDigito > 9) {
    var ultimoDigito = prompt("Has introducido mal el número. Prueba de nuevo");
    ultimoDigito = parseInt(ultimoDigito);
}


//Proceso

const numRandom = () => {
    num = Math.floor(Math.random() * (301 - 1) + 1);
    return num;
};

const rellenarArray = (array) =>{
    for (let i = 0; i < tamaño; i++) {
        array.push(numRandom());        
    }
}

const saberUltimoDigito = (numero) =>{
    digito = numero % 10;
    return digito;
}

const crearArrayUltimoDigito = () =>{
    array.map(function(numero) {
        if (saberUltimoDigito(numero) == ultimoDigito) {
            arrayConUltimoDigito.push(numero)
        }
    })
}

//Output

rellenarArray(array);
console.log("Este es el primer array: " + array);
crearArrayUltimoDigito();
console.log("Este es el número que elegiste para filtar los números del nuevo array: " + ultimoDigito);
console.log("Este es el nuevo array: " + arrayConUltimoDigito);