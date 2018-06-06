const nbs = [2, 3, 4];

// forEach apparue en ES5, implémentation programmation fonctionnelle

console.time('algo');
nbs
.filter((nb) => nb % 2 === 0)
.map((nb) => nb ** 2)
.forEach(function feCb(nb, i) {
  console.log(nb);
});
console.timeEnd('algo');

console.log('Fin');

// pile d'appels
// ^
// |
// |
// |
// |
// |                    log    log
// |=> => =>    => =>   feCb - feCb
// |filter   -  map   - forEach     - log
// +-------------------------------------------> temps
//  2      3      4                   Fin

