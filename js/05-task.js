/*
5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
*/

const num1 = parseInt(prompt("Ingresa un numero"));
const num2 = parseInt(prompt("Ingresa otro numero"));

console.log(`La suma de ${num1} + ${num2} es: ${num1 + num2}`);
