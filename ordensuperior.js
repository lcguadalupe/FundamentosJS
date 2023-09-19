// funciones de orden superior
// high order functions
// funciones que reciben como parametros 
// mas funciones 

const myFunctionWithBigName  = () => {
    console.log('Funcion inicial');
}

console.log(myFunctionWithBigName);
myFunctionWithBigName();
const myFun = myFunctionWithBigName;
myFun();

const funOne = () => {
    console.log('Ejecuita funcion uno');
}

const funTwo = (nombre) => {
    console.log("hi!" + nombre);
    console.log('ejecuta funcion 2');
}

funOne();
funTwo('Frank');

const funThree = (otherFunction) => {
    console.log('inicia funcion tres');
    otherFunction();
    console.log('termina funcion tres');
}

funOne(funOne);
funThree(() => console.log('funcio de flecha'));
