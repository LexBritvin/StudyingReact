function greet(greeting = 'Hello', name = 'Friend') {
  console.log(`${greeting} ${name}`);
}

greet('Hi', 'Bill');
greet('Hi');
greet(undefined, 'Bill');
greet();

function sum() {
  console.log(arguments);

  var sum = 0;

  Array.prototype.forEach.call(arguments, function (value) {
    sum += value;
  });

  console.log(sum);
}

function sum(...values) {
  let sum = values.reduce(function (prev, curr) {
    return prev + curr;
  });
  console.log(sum);

}

sum(5, 7, 2, 10);