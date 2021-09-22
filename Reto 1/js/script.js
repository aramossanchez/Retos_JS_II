//Reto 1

/*
Crea una aplicación que nos calcule el área de un círculo, cuadrado o triangulo.
Pediremos al usuario que figura queremos calcular su área y según lo introducido
pedirá los valores necesarios para calcular el área. Para ello has de crear un método
por cada figura para calcular cada área, este devolverá un número real. Muestra el
resultado por consola.
Aquí te mostramos que necesita cada figura:
• Circulo: (radio^2)*PI
• Triangulo: (base * altura) / 2
• Cuadrado: lado * lado
*/

/*
Autor: Armando Ramos
Version: 1.0
*/

//Input

var figura = prompt("Introduce que figura quieres calcular:\ncirculo\ntriangulo\ncuadrado");

const PI = 3.1416;

if (figura == "circulo") {
    var radio = prompt("Introduce el radio del círculo");
    radio = parseFloat(radio);
}

if (figura == "triangulo") {
    var base = prompt("Introduce la base del triángulo");
    base = parseFloat(base);
    var altura = prompt("Introduce la altura del triángulo");
    altura = parseFloat(altura);
}

if (figura == "cuadrado") {
    var lado = prompt("Introduce el lado del cuadrado");
    lado = parseFloat(lado);
}

//Proceso

function Circulo(radio) {
    return (radio ** 2) * PI;    
}

function Triangulo(base, altura) {
    return (base * altura) / 2;
}

function Cuadrado(lado) {
    return lado * lado;
}

//Output

switch (figura) {
    case "circulo":
        console.log(Circulo(radio));
        break;
    case "triangulo":
        console.log(Triangulo(base, altura));
        break;
    case "cuadrado":
        console.log(Cuadrado(lado));
        break;
    default:
        break;
}

