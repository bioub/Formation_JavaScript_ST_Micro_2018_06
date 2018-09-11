const firstName = 'Romain';

function hello(firstName: string) {
  return `Hello ${firstName.toUpperCase()}`;
}

console.log(hello(firstName));