let add = (x, y) => x + y;
let sqr = x => x * x;
let giveMeAnswer = () => 42;

let multiply = (x, y) => {
  let result = x * y;
  return result;
};

let getPerson = () => {
  {
    name: 'John'
  }
};

(() => console.log('IIFE'))();

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = 0;

numbers.forEach(num => sum += num);

let person = {
  name: 'Bob',
  greet: function() {
    setTimeout(() => {
      console.log('Hello, my name is ' + this.name);
      console.log(this);
    }, 2000);
  }
};