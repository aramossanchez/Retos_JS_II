//Reto 3

/*
Crea una aplicación que nos pida un número por prompt y con un método se lo
pasamos por parámetro para que nos indique si es o no un número primo, debe
devolver true si es primo sino false. Un número primo es aquel solo puede dividirse
entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin
embargo, 17 si es primo.
*/

/*
Autor: Armando Ramos
Version: 1.0
*/

//Input

let numero = prompt("Introduce un número para saber si es primo");
let primo = true;

//Proceso
numero = parseInt(numero);

for (let i = 2; i < numero; i++) {
    if (numero%i == 0) {
        primo = false;
    }
}

//Output

console.log(primo);

