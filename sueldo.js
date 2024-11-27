let nombre = "Matias";
let apellido = "Heredia";
let sueldoActual = 20000;
let porcentajeDeAumento = 25;

let calculoAumento = (sueldoActual * porcentajeDeAumento) / 100;
let nuevoSueldo = sueldoActual + calculoAumento;

console.log("Hola estimado "+ nombre+" "+apellido);
console.log("En base a su sueldo actual: $"+sueldoActual);
console.log("Ha recibido un aumento del "+porcentajeDeAumento+"%: $"+calculoAumento);
console.log("Y su nuevo saldo es de: $"+nuevoSueldo);