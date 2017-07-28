'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var firstName = 'Bill',
    lastName = 'Gates',
    email = '';

var person = {
  firstName: firstName,
  lastName: lastName,
  email: email,

  sayHello: function sayHello() {
    console.log('Hi my name is ' + this.firstName + ' ' + this.lastName);
  },


  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }
};

console.log(person);
person.sayHello();

var property = 'email';
person = _defineProperty({}, property, 'Bill');

function createCar(property, value) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, property, value), _defineProperty(_ref, '_'.property, value), _ref;
}

console.log(createCar('vin', 1));