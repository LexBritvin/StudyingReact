'use strict';

function greet() {
  var greeting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Hello';
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Friend';

  console.log(greeting + ' ' + name);
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

function sum() {
  for (var _len = arguments.length, values = Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  var sum = values.reduce(function (prev, curr) {
    return prev + curr;
  });
  console.log(sum);
}

sum(5, 7, 2, 10);