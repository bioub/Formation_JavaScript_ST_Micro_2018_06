function externe(msg) {
  // portée sauvegardée : Portée de Closure / Closure
  // 2 conditions :
  // 1/ une fonction dans une portée (fonction ou block)
  // 2/ la référence de la fonction interne soit accessible en dehors
  // valeur de retour, stocker dans une variable globale,
  // stocker dans un objet ou tableaux, ou un callback async
  
  // si msg volumineux et pas utilisé par la suite
  // demander sa suppression en le déréférençant
  // msg = null;
  function interne() {
    console.log(msg);
  }


  return interne; // retourne la référence de la fonction
}

const helloFct = externe('Hello'); // msg = 'Hello'

// ....

helloFct(); // a toujours accès à hello
// pile d'appels
// ^
// |
// |
// |
// |
// |
// |
// |externe - interne/helloFct
// +-------------------------------------------> temps


// Dans 1 sec 3 3 3
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}

// 0 1 2
for (var i = 0; i < 3; i++) {
  setTimeout(externe(i), 1000);
}

// 0 1 2
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, 1000);
}