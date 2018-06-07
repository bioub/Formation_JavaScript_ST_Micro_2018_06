function timeout(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delay / 1000);
    }, delay);
  });
}

/*
setTimeout(() => {
  console.log('1s');
}, 1000);
*/

timeout(1000)
  .then((sec) => {
    console.log(`${sec}s`);
    return timeout(2000);
  })
  .then((sec) => {
    console.log(`${sec}s`);
  });


const nbs = [2, 3, 4];

function findByIndex(i) {
  return Promise.resolve(nbs[i]);
}

findByIndex(1)
  .then((val) => {
    console.log(val);
  });
  console.log('Fin');


function fakeAjax() {
  return timeout(Math.floor(Math.random() * 1001));
}

Promise.all([
  fakeAjax(),
  fakeAjax(),
  fakeAjax(),
])
  .then(([sec1, sec2, sec3]) => {
    console.log('AJAX 1', sec1);
    console.log('AJAX 2', sec2);
    console.log('AJAX 3', sec3);
    console.log('DONE');
  });