// 5.- Crear una clase llamada ``Contacto`` con los siguientes datos:
// Nombre
// Apellidos
// Teléfono
// Después crear una clase que sea ListaContactos la cual tendrá dos métodos:
// Agregar un contacto.
// Buscar un contacto por nombre.

const Contact = require("./contact");
const ListContact = require("./listContact");

const contact1 = new Contact("Angel", "Garcia", "1231231231");
const contact2 = new Contact("Pedro", "Garcia", "1231231231");
const contact3 = new Contact("Manuel", "Garcia", "1231231231");
const contact4 = new Contact("Ismael", "Garcia", "1231231231");

const listContacts = new ListContact();

listContacts.add(contact1);
listContacts.add(contact2);
listContacts.add(contact3);
listContacts.add(contact4);
listContacts.print();
console.log(
  "Search Angel: ",
  listContacts.searchByName("Angel") ?? "No encontrado"
);
console.log(
  "Search Marcos: ",
  listContacts.searchByName("Marcos") ?? "No encontrado"
);
