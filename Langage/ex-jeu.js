function getRandom() {
  return Math.random();
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}




// Dépendances de fichiers
const readline = require('readline');

// Readline = abstraction
// Configuration
const rl = readline.createInterface({
  input: process.stdin, // clavier en entrée
  output: process.stdout // console en sortie
});

const entierAlea = getRandomIntInclusive(0, 100);
const essais = [];

// Pose une question et récupère la réponse de manière async
function jouer() {

  if (essais.length) {
    console.log('Vous avez déjà joué : ' + essais.join(' | '));
  }

  rl.question('Quel est le nombre ? ', (answer) => {
    
    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return jouer();
    }

    essais.push(entierSaisi);
  
    if (entierSaisi < entierAlea) {
      console.log('Trop petit');
      return jouer();
    }

    if (entierSaisi > entierAlea) {
      console.log('Trop grand');
      return jouer();
    }

    console.log('Gagné !');
    rl.close();
  });
}

jouer();

// pile d'appels
// ^
// |
// |
// |
// |
// |                                       question
// |               question          log - jouer
// |require - ci - jouer    ........ =>             ........
// +---------------------------------ENTREE---------------------> temps
// Sortie : 

// file d'attente : 

