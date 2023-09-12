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