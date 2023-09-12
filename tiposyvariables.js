// tipos en javascript
//number, string, boolean, object, undefined
//typeof nos dice el tipo de dato
console.log(12);
console.log(tipeof(12));

console.log('string');
console.log(typeof('string'));

console.log(true);
console.log(typeof(true));

let variable;
console.log(typeof(variable));

console.log([1, 2, 3]);
console.log(typeof([1, 2, 3]));

//variables en javascript
//versiones anteriores ES6 var
var firstName = 'Tony Stark';

//coonst y let de ES6 en adelante
//constantes const (variables de solo lectura)
//siempre debe  inicializarse
//No permite reasignacion

const PI =3.14;
//PI = 3.14

//Variables con let
//declara
let lastNeme; //undefined
lastNeme = 'Pérez';
lastNeme = true;
lastNeme = 25;