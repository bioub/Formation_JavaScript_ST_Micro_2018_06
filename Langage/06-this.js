// 'use strict';

/*
function Coords() {
  console.log(this); // en mode strict 'undefined' sinon l'objet global
  this.x = 10;
}

// Attention si oubli de new (this sera l'objet global et x une variable global)
const coords = Coords();
console.log(x);
*/

const contact = {
  prenom: 'Jean',
};

global.prenom = 'Romain';

// On peut choisir sa propre valeur de this
function hello(p1, p2) {
  console.log(`Bonjour ${p1}, ${p2} je m'appelle ${this.prenom}`);
}

hello('Toto', 'Titi');
hello.call(contact, 'Toto', 'Titi');
hello.apply(contact, ['Toto', 'Titi']);
hello.call(contact, ...['Toto', 'Titi']);

function sum() {
  return Array.prototype.reduce.call(arguments, (acc, nb) => acc + nb, 0);
}

console.log(sum(1, 2, 3));

function bind(fn, applyThis, ...args) {
  return function() {
    fn.apply(applyThis, args);
  };
}

const helloContact = bind(hello, contact, 'Toto', 'Titi');
helloContact();
const helloContactES5 = hello.bind(contact, 'Toto', 'Titi');
helloContactES5();

// Mélange de code async et objet

var contactAsyncES3 = {
  prenom: 'Thierry',
  helloAsync: function() {
    var that = this; // self, _this
    setTimeout(function() {
      console.log('Bonjour je m\'appelle ' + that.prenom);
    }, 100);
  },
};

contactAsyncES3.helloAsync();

var contactAsyncES5 = {
  prenom: 'Thierry',
  hello: function() {
    console.log('Bonjour je m\'appelle ' + this.prenom);
  },
  helloAsync: function() {
    setTimeout(this.hello.bind(this), 100);
  },
};

contactAsyncES5.helloAsync();

const contactAsyncES6 = {
  prenom: 'Thierry',
  helloAsync() {
    setTimeout(() => {
      console.log(`Bonjour je m'appelle ${this.prenom}`);
    }, 100);
  },
};

contactAsyncES6.helloAsync();

/* Ne plus utiliser this
$('button').click((event) => {
  $(event.target).val();
});
*/
