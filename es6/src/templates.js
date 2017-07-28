function greet(name, name2) {
  console.log(`Hello ${name}, ${name2}`);
}


let name = 'Bill';
let name2 = 'Bill';
let name3 = 'Bill';
let name4 = 'Bill';
console.log(upperName`Hello ${name} ${name2} ${name3} ${name4}`);

function upperName(literals, ...values) {
  return literals[0] + values.toString();
}


// Task 2
function print(name) {
  const reversed = name.split('').reverse().join('');
  const result = `${reversed[0].toUpperCase()}${reversed.slice(1).toLowerCase()}`;

  return `
Привет! ${name}!
Твое и наоборот "${result}"!
`;
}

console.log(print('Александр'));

// Task 3
const comments = [
  [
    "Muad'Dib",
    "The power to destroy a thing is the absolute control over it."
  ],
  [
    "Edd Dumbill",
    "HTML isn't a very good language for making Web pages. However, it has been a very good language for making the Web."
  ],
  [
    "Ian Hickson",
    "Speaking of which, we added the first draft of the <canvas> element to the Web Apps 1.0 draft proposal specification the other day."
  ],
  [
    "l33t haxor",
    "<script>alert(\"pwned!\")</script>"
  ],
  [
    "jsninja",
    "It's kind of hard to find quotes with &s in them!"
  ]
];

function escape(s) {
  return s.replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/'/g, "&apos;")
    .replace(/"/g, "&quot;");
}

function html(strings, ...values) {
  let result = strings[0];
  for (let i = 0; i < values.length; ++i) {
    result += escape(values[i]) + strings[i + 1];
  }
  console.log(result);
}

for (let comment of comments) {
  let result = html`<b>${comment[0]} says</b>: "${comment[1]}"`;
  console.log(result)
}