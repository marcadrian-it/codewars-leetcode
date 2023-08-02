// aoc 4.2
const fs = require("fs");

const pairs = fs.readFileSync(`${__dirname}/input.txt`).toString().split("\n");

function doesItContain(first_pair, second_pair) {
  first_pair = first_pair.map((element) => parseInt(element));
  second_pair = second_pair.map((element) => parseInt(element));

  // .2345678.
  // ..34567..

  if (first_pair[0] >= second_pair[0] && first_pair[0] <= second_pair[1]) {
    return true;
  } else if (
    first_pair[1] >= second_pair[0] &&
    first_pair[0] <= second_pair[0]
  ) {
    return true;
  }
  return false;
}

let counter = 0;
for (element of pairs) {
  const first_pair = element.split(",")[0].split("-");
  const second_pair = element.split(",")[1].split("-");
  console.log(first_pair, second_pair);
  console.log(doesItContain(first_pair, second_pair));
  if (doesItContain(first_pair, second_pair)) {
    counter++;
  }
}

console.log(counter);
