'use strict';

var staticLanguages = ['C', 'C++', 'Java'];
var dynamicLanguages = ['JS', 'PHP', 'Ruby'];

var languages = [].concat(staticLanguages, ['c#'], dynamicLanguages, ['Python']);

console.log(languages);

function add(x, y, z) {
  console.log(x + y + z);
}

var numbers = [1, 2, 3];

add.apply(undefined, numbers);

// Task 1
Math.min.apply(Math, numbers);