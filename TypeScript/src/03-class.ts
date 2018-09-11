class Contact {
  public firstName: string;

  constructor(firstName) {
    this.firstName = firstName;
  }
}

const contact = new Contact('Romain');

function hello(contact: Contact) {
  return `Hello ${contact.firstName.toUpperCase()}`;
}

console.log(hello(contact));

export { hello };