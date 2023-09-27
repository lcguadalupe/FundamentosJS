//condicional if
//if (expresion){}
let age = 18;
if (age >= 18){
    console.log('Es mayor de edad');
}
//if (exp){} else {}
if (age >= 18){
    console.log('ES mayor de edad');
} else {
    console.log('ES menor de edad');

}

//if ternario (exp)? true: false;
(age >= 18)? console.log('Es mayor'): console.log('es menor');

//if(exp){} else if (exp) else {}
let ppt = Math.random();
if (ppt > 0.33){
    console.log('Cayó piedra');
} else if (ppt < 0.66){
    console.log('Cayó papél');
} else {
    console.log('Cayó tijera');

}

//switch case
let day = Math.floor(Math.random() * 7);
switch(day){
    case 0:
        console.log('Es domingo')
        break;
    case 1:
        console.log('Es lunes')
        break;
    case 2:
        console.log('Es martes')
        break;
    case 3:
        console.log('Es miercoles')
        break;
    case 4:
        console.log('Es jueves')
        break;
    case 5:
        console.log('Es viernes')
        break;
    default:
        console.log('Es Sábado')
}

//truthy or falsy
//''==false
console.log('' === false)
//'a' == true
console.log('a' === true)
//0 == false
console.log(0 === false)
//1 = true
console.log(1 === true)

let username = '';
let defaultName;

if (username){
    defaultName = username;
} else {
    defaultName = 'Exyraño';
}

console.log(defaultName);

username = 'peter';
defaultName = username || 'Extraño';
console.log(defaultName);
