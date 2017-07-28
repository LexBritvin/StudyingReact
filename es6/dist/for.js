"use strict";

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