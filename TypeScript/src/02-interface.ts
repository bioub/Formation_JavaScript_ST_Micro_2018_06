interface Contact {
  firstName: string;
}

const contact: Contact = {
  firstName: 'Romain',
};

function helloContact(contact: Contact) {
  return `Hello ${contact.firstName.toUpperCase()}`;
}

console.log(helloContact(contact));
