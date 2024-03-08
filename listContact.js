class ListContacts {
  constructor(data) {
    this.contacts = data ?? [];
  }

  add(contact) {
    this.contacts.push(contact);
  }

  searchByName = (name) =>
    this.contacts.filter((contact) => contact.name === name)[0] ?? null;

  print = () => console.log(this.contacts);
}

module.exports = ListContacts;
