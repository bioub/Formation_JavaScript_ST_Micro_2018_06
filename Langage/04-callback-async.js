setTimeout(function cb1() {
  console.log('cb1');
}, 1000);

setTimeout(function cb2() {
  console.log('cb2');
}, 500);

setTimeout(function cb3() {
  console.log('cb3');
}, 500);

/*
setTimeout(function cb3() {
  console.log('cb3');
}, Math.floor(Math.random() * 1001));

setTimeout(function cb4() {
  console.log('cb4');
}, Math.floor(Math.random() * 1001));
*/

console.log('Fin');

// pile d'appels
// ^
// |
// |
// |
// |
// |
// |                    idle  log   log        log
// |st - st - st - log ...... cb2 - cb3 ...... cb1
// +-----------------------------------------------> temps
// Sortie :        Fin        cb2   cb3        cb1

// file d'attente : 

