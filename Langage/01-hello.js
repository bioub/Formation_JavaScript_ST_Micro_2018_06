// @ts-check
'use strict';

/**
 * Additionne 2 nombres
 * @param {number} a Le premier nombre
 * @param {number} b Le 2e nombre
 * @returns {number} La somme
 */
const sum = (a, b) => a + b;

for (let i = 0; i < 3; i++) {
  console.log(sum(i, i));
}
