'use strict';

function Coords() {
  console.log(this); // en mode strict 'undefined' sinon l'objet global
  this.x = 10;
}

const coords = Coords();
console.log(x);