//funciones em javascript
/*
function nombre(params){
    body function
}
const nombre = function (params){
    body function
}
*/
//funciones sin parametros y sin retorno 
function saludo(){
    console.log('helloo!');
}
saludo();

//funciones con parametros sin retorno 
const saludaA = function (name){
    console.log('hola'+name);

}
saludaA('Clark Kent');

//funciones con parametros y con retorno 
const fact = function (num){
    if (num == 0) return 1;
    return  fact(num-1) * num;
}
const result = fact (5);
console.log(result);
//arrow functions o funciones de flecha 
//sin parametros y sin retornos 
const saludaEnChino = ()=> {
    console.log('Ni hao');

}
saludaEnChino();

//con 1 parametro sin retorno 
const mayuscula = (word) => {
    console.log(word.toUpperCase());
}
mayuscula('hola');

const miniscula = word => {
    console.log(word.toLowerCase());
}
mayuscula('HELLO');

//dos o mas parametro y con retorno 
 const fullname = (firstname, lastname) => {
    return firstname+ ' ' + lastname;
 }
 const nombrecompleto = fullname('bruce', 'wayne');
 console.log(nombrecompleto);

 // si el return es la unica linea se puede simplificar 
 const duplica = num => num * 2;
 const doble = duplica(36);
 console.log(doble);
