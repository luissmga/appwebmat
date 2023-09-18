//funciones en javascript

//función sin parametros y sin retorno
function saluda(){
    console.log('Holaa!');
}

//función con parametros y sin retorno
function addOne(num){
    console.log(`el ${ num } + 1 = ${ num + 1}`);
}
addOne(15);

//función con parámetros y con retorno
function suma(num1, num2) {
    return num1 + num2;
}
const result = suma(12, 34);
console.log(result);

//funciones como constantes
//funcioness anónimas
const resta = function (num1, num2) {
    return num1 - num2;
}
const resultado = resta(12, 2);
console.log(resultado);

//funciones de flecha Arrow Functions
(param1, param2) => {
    //code
    //return
}

const duplica = (num) => {
    return num * 2;
}

const multiplica = (num1, num2) => {
    console.log('Multiplica números');
    return num1 * num2;
}

const doble = duplica(16);
console.log(doble);

const resultM = multiplica(13, 26);
console.log(resultM);

//simplificando Arrow Functions
let cambiaMinusculas = (word) => {
    return word.toLowerCase();
}

//Si solo es un único parámetro se puede omitir paraentesis
//si la única linea es el return se pueden omitir llaves
cambiaMinusculas = word => word.toLowerCase();