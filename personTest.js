let myClassLib = require("./person");

let hobbies = ["UNAGI","kpop","TBBT","origami"];
let persona = new myClassLib.Person('German','strada',80,185,'marrones','castaño',1988,hobbies);

let imc = persona.calcuarIMC();
console.log(`IMC = ${imc}`);

let edad = persona.calcularAge();
console.log(`la edad de ${persona.name} es ${edad}.`);

persona.printAll();

persona.printHobbies();