let scores = [3, [4, 5]];

//let [low, ...rest] = scores;
//let [low, [high, higher]] = scores;

function compureScore([low, mid]) {
  console.log(low, mid);
}

compureScore([3, 4]);

function getScores() {
  return[3, 4, 5];
}

let [low, mid, high] = getScores();

let person = {
  firstname: 'john',
  lastname: 'Doe',
  social: {
    facebook: 'johndoe',
    twitter: 'jdoe',
  }
};

//let {firstname, lastname} = person;
//let {firstname: first, lastname: last} = person;

console.log(first, last);

let {firstname: first, lastname: last, social: { facebook: fb }, age = 25} = person;

console.log(first, last, fb, age);

function post(url, { data: { firstname, lastname }, cache }) {
  console.log(firstname, lastname, cache);
}

let result = post('api/users', { data: user, cache: false});