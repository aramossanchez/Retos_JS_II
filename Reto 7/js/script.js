//Reto 7

/*
Crea una aplicación que nos convierta una cantidad de euros introducida por prompt
a otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como
parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no
devolverá ningún valor, mostrará un mensaje indicando el cambio.
El cambio de divisas es:
• 0.86 libras es un 1 €
• 1.28611 $ es un 1 €
• 129.852 yenes es un 1 €
*/

/*
Autor: Armando Ramos
Version: 1.0
*/

//Input

var euros = prompt("Introduce los euros a convertir");
euros = parseFloat(euros);
var moneda = prompt("Tipo de moneda:\nlibras\ndolares\nyenes");
const Libras = 0.86;
const Dolares = 1.28611;
const Yenes = 129.852;

//Proceso

function conversion (euros, moneda) {
    switch (moneda) {
        case "libras":
            console.log(euros * Libras);
            break;
        case "dolares":
            console.log(euros * Dolares);
            break;
        case "yenes":
            console.log(euros * Yenes);
            break;
        default:
            break;
    }
}

//Output

conversion(euros, moneda);
