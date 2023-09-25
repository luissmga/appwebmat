//Strings
const firstName = 'Francisco';
const lastNeme = "López";
const fullName = firstName + " " + lastNeme;

console.log("I'm" + firstName)
console.logg('I\'m' + firstName)

console.log(fullName)

//Strings Multilínea
const menu = `
elige:
1 - Opción 1
2 - Opción 2
3 - Opción 3
`;

console.log(menu);

//Strings Templates
//placeholder ${}

const city = 'Huamantla';
const phone = '2471070644';
const rol = 'proffersor';

const presentation = `
Holaa
Soy ${ fullName}, ${rol} en la UTT
vivo en ${city}
Te puedes comunicar conmigo en ${phone}
`;