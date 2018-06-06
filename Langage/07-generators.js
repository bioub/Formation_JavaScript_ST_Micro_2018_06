function *count() {
  const prenoms = ['Jean'];
  yield 1;
  prenoms.push('Eric');
  yield 2;
  yield prenoms;
}

const gen = count();

console.log(gen.next()); // 1
console.log(gen.next()); // 2
console.log(gen.next()); // 'Jean'