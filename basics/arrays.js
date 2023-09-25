const resultado = document.getElementById('resultado');
const inputFood = document.getElementById('itemFood');
// arrays en javascript
//Colección ordenada de datos

//Declarar o inicialización
const enteros = new Array(1, 2, 3, 4, 5, 6);
console.log(enteros);
console.log(enteros[0]); //ultimo .length -1
enteros[0] = 10;
enteros[2] *= 2;
console.log(enteros);

const fruits = ['apple' , '🍓', '🍐', '🍋'];

console.log(fruits);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length); //numero de elementos
fruits[0] = '🍎';
console.log(fruits);
resultado.innerText = fruits.join(' - ');

//métodos para agregar/eliminar elementos
const food = [];
food.push('🍔');//push inserta al final
food.push('🍗');
food.push('🍳');
food.unshift('🧀');//unshift inserta al innicio
food.unshift('🍟');
food.unshift('🍕');
console.log(food);

let itemFood = food.pop()//extraemos del final
console.log(itemFood);
itemFood = food.shift();//extraemos del inincio
console.log(itemFood);
console.log(food);

const showLista = () => {
    //ciclo for para Iterar
    let listaHtml = ''
    for(let i = 0; i< food.length; i++){
        listaHtml += `<li>${ food[i] } </li>`;
        //console.log(`<li>${ food[i] }</li>`);
       //console.log(`El item ${ i } es ${ food[i] }`); es una lista pero los agrara con un numero
    }
    //console.log(listaHtml);
    const ulFood = document.getElementById('comida');
    ulFood.innerHTML = listaHtml;
}

const addFruit = () => {
    const fruit = inputFood.value;
    food.push(fruit);
    inputFood.value = '';
    showLista();
}