// iteradores de arrays 
const fruits = ['apple', 'melon', 'orange', 'cherry'];
fruits.push


// map()
// regresa un array nuevo a partir del original 
const fruitsMayus = fruits.map(
    fruit => {
        return fruit .toUpperCase();
    }
);
console.log('*'.repeat(20));
console.log(fruits);


const numbers = [1, 2, 3, 4, 5]
const squares = numbers.map(num => num *num);
console.log(numbers);
console.log(squares);

// filter()
// crea un array nuevo a partir de una condición 

const startsWithA = fruits.filter(fruit => fruit.endsWith('e'));
console.log(fruits);
console.log(startsWithA);

const pares = numbers.filter(num => num % 2 !== 0)
console.log(numbers);
console.log(pares);

// reduce()
// retorna un unico valor a poartir del array original 
const sumatoria = numbers.reduce((a, b) => a + b);
console.log(numbers);
console.log(sumatoria);

const factorial = numbers.reduce((a, b) => a * b);
console.log(numbers);
console.log(factorial);

// some()
// evalua cada elemento retorna true si al menos 
// uno cumple una condicion
console.log(numbers.some(num => num >= 5));
console.log(numbers.some(num => num > 6));

// evry()
// regresa true si todos cumplen 
console.log(numbers.some(num => num > 0));
console.log(numbers.some(num => num > 4));

console.log(fruits);
console.log(fruits.join(' - '));
