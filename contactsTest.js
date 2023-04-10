let classPerson = require("./person");
let classContacts = require("./contacts");

let contacto1 = new classPerson.Person("Mari","Kong",78,160,"negros","pelirrojo",1968,["limpiar","ordenar"]);
let contacto2 = new classPerson.Person('Carlos','raposo',86,180,'marrones','castaño',2001,["conducir","fumar"]);

let contactos = new classContacts.Contacts();
contactos.arrPersons = [contacto1,contacto2];
contactos.printPersons();