//Objetos en Javascript
/* 
objeto = {
    key: value,
    key: value
}
objeto.key
objeto['key']
*/

const subject = {
    name: 'aplicaciones web',
    cuatri: '3',
    professor:'Francisco',
    'classroom': 'Lab Redes I',
    'total hours': 70,
    weekhours: 5
}


console.log(subject);
console.log(subject.name);
console.log(subject.professor);
console.log(subject['classroom']);
console.log(subject['total hours']);

subject.professor = 'Francisco López';
subject.career = 'TIADSM';
console.log(subject);

const student = {
    name: 'Laura Alicia',
    age: 21,
    califications: [10, 10, 8],
    city: 'Apizaco'
}

const group = {
    name: '4B',
    students: [student, student, student],
    students: [subject, subject, subject],
}

console.log(group);
console.log(group).subject[0].professor;
console.log(group).students[1].califications;
console.log(group).student[1].califications[0];