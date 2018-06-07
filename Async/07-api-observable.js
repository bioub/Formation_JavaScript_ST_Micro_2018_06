const { Observable, interval: intervalRx } = require('rxjs');
const { filter, map } = require('rxjs/operators');


function interval(delay) {
  return new Observable((observer) => {
    setInterval(() => {
      observer.next(delay / 1000);
    }, delay);
  });
}

interval(1000)
  .subscribe(() => {
    console.log('1s');
  });


intervalRx(1000)
  .pipe(
    filter((val) => val % 2 === 0),
    map((val) => val + 1),
  )
  .subscribe((val) => {
    console.log(`rx ${val}s`);
  });