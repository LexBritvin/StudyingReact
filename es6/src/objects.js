let firstName = 'Bill',
  lastName = 'Gates',
  email = '';

let person = {
  firstName,
  lastName,
  email,

  sayHello() {
    console.log(`Hi my name is ${this.firstName} ${this.lastName}`);
  },

  get fullName() {
    return `${this.firstName} ${this.lastName}`
  }
};

console.log(person);
person.sayHello();

let property = 'email';
person = {
  [property]: 'Bill'
};

function createCar(property, value) {
  return {
    [property]: value,
    ['_' . property]: value,

  };
}

console.log(createCar('vin', 1));
