'use strict';

var add = function add(x, y) {
  return x + y;
};
var sqr = function sqr(x) {
  return x * x;
};
var giveMeAnswer = function giveMeAnswer() {
  return 42;
};

var multiply = function multiply(x, y) {
  var result = x * y;
  return result;
};

var getPerson = function getPerson() {
  {
    name: 'John';
  }
};

(function () {
  return console.log('IIFE');
})();

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var sum = 0;

numbers.forEach(function (num) {
  return sum += num;
});

var person = {
  name: 'Bob',
  greet: function greet() {
    var _this = this;

    setTimeout(function () {
      console.log('Hello, my name is ' + _this.name);
      console.log(_this);
    }, 2000);
  }
};