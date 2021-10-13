//Reto 9

/*
Crea un array de números donde le indicamos por prompt el tamaño del array,
rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola
el valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un
método para rellenar el array(que tenga como parámetros los números entre los que
tenga que generar) y otro para mostrar el contenido y la suma del array.
*/

/*
Autor: Armando Ramos
Version: 1.0
*/

//Input

var array = [];
var tamaño = prompt("Introduce el tamaño del array");
tamaño = parseInt(tamaño);
var suma = 0;

//Proceso
const rellenarArray = () =>{
    for (let i = 1; i <= tamaño; i++) {
        array.push(parseInt(Math.random() * (10 - 0)));
    }
}

const mostrarDatos = () =>{
    for (let i = 0; i < array.length; i++) {
        console.log("La posición " + i + " del array es " + array[i]);
        suma = suma + array[i];
        
    }
    console.log(`La suma de todos los valores es ${suma}`);
}

//Output
rellenarArray();
mostrarDatos();
