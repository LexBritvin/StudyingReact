let xmen = ['Cyclop', 'Wolverine', 'Rogue'];

for (let xman of xmen) {
  console.log(xman);
}

let iterator = xmen[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());

