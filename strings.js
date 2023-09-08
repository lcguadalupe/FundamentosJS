let name = "Pochu";
let lastName = "Lopez";
let age = 24;

console.log("Soy " + name + ' y mi apellido es ' + lastName);

console.log("I'm " + name + " " + lastName);
console.log('I\'m ' + name + " " + lastName);

// imprimir soy pochu Lopez y tengo 24 años
//strings templates o strings literals
//placeholder #{}
console.log(`soy ${ name } ${ lastName } y tengo ${ age } años`)

//metodos y atributos para Strings 
const texto = "Este es un texto";
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto.charAt(5));
console.log(texto.endsWith('s'));
console.log(texto.includes('es'));
console.log(texto.length);
