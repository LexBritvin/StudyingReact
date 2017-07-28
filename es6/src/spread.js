let staticLanguages = ['C', 'C++', 'Java'];
let dynamicLanguages = ['JS', 'PHP', 'Ruby'];

let languages = [...staticLanguages, 'c#', ...dynamicLanguages, 'Python'];

console.log(languages);

function add(x, y, z) {
  console.log(x + y + z);
}

let numbers = [1, 2, 3];

add(...numbers);


// Task 1
Math.min(...numbers);