// Tests automatisés (unitaires)
const assert = require('assert');
const pileOuFace = () => Math.random() > 0.5 ? 'pile' : 'face';

const backupRandom = Math.random;

Math.random = () => 0.75;
assert.strictEqual(pileOuFace(), 'pile');

Math.random = () => 0.25;
assert.strictEqual(pileOuFace(), 'face');

Math.random = backupRandom;

// 1 - Créer un objet une seule fois
// ou suffisamment simple pour se passer d'une fonction
// -> object literal

const coords = {
  x: 10,
  y: 20,
};

const obj = {
  number: 0,
  boolean: false,
  string: '',
  array: [],
  object: {},
  regex: /[a-b]/,
};

const json = JSON.stringify(obj);
console.log(json); // {"number":0,"boolean":false,"string":"","array":[],"object":{},"regex":{}}

// ... reseau ...

const data = JSON.parse(json);
console.log(data.boolean); // false


// ajouter/modifier des clés
console.log(coords.x); // 10
coords.z = 30;

console.log(coords.z); // 30
// autre syntaxe pour accéder au contenu :
console['log'](coords['z']); // 30

// supprimer des clés
delete coords.z;

console.log(coords.z); // undefined
console.log(coords['z']); // undefined

for (let key in coords) {
  console.log(key, typeof key); // x, y
  console.log(coords[key]); // 10, 20
}

console.log('coords instanceof Object', coords instanceof Object);


// 2 - Créer un objet plusieurs fois
// ou suffisamment compliqués pour devoir passer par une fonction
// sans méthodes et sans types
// -> factory function

function coords3dFactory(x, y, z) {
  x = x || 0;
  y = y || 0;
  z = z || 0;

  return {
    x: x,
    y: y,
    z: z,
    getX: function() {
      return x;
    }
  };
}

const coords3dA = coords3dFactory(10, undefined, 20);
const coords3dB = coords3dFactory(10, 20);
const coords3dC = coords3dFactory(false, 20);

console.log(coords3dA.getX()); // 10
console.log(coords3dC.getX()); // 0

// Mauvaise pratique
console.log(coords3dA.getX === coords3dC.getX); // false


// 3 - Créer un objet plusieurs fois
// ou suffisamment compliqués pour devoir passer par une fonction
// avec méthodes et/ou avec types
// -> constructor function

function Coords(x, y, z) {
  this.x = x || 0;
  this.y = y || 0;
  this.z = z || 0;
}

console.log(typeof Coords.prototype); // object

Coords.getClass = () => 'Coords';

Coords.prototype.getX = function() {
  return this.x;
};

const coordsA = new Coords(10, 20);
const coordsB = new Coords(10, 20, 30);
console.log(typeof coordsA);
console.log(coordsA instanceof Coords); // true
console.log(coordsA.x); // 10
console.log(coordsB.getX()); // 10
console.log('x', coordsB.hasOwnProperty('x')); // true
console.log('getX', coordsB.hasOwnProperty('getX')); // false
console.log(Coords.getClass());

console.log(coordsA.getX === coordsB.getX); // true

for (let key in coordsB) {
  if (coordsB.hasOwnProperty(key)) {
    console.log(key);
  }
}