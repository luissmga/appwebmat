//Funciones de Orden superior
// High Order Functions
//Funciones que reciben otras funciones como parametros

const myFunctionWithBigName = () => {
    console.log('Esta es una Función');
}

myFunctionWithBigName();

const myFun = myFunctionWithBigName;

myFun();

const funOne = () =>{
    console.log('Ejecuta función 1');
}

const funTwo = (name) => {
    console.log('Hola' + name);
    console.log('Ejecuta función 2');
}


funOne();
funTwo('Frank');

const funThree = (otherFunction) => {
    otherFunction();
    console.log('Ejecuta función 3');
}

funThree(funOne);