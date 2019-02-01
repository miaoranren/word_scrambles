const greeting = 'Hello';
console.log(greeting)


let str = 'Hello there!'
const words = str.split(' ');
console.log(words)

console.log(words.join());
Hello,there!

// pick random index from a list
let arr = [1, 7, 87, 5, 2];
arr[Math.floor(Math.random() * arr.length)];

let randomIndex1;

randomIndex1 = Math.floor(Math.random() * arr.length);

let randomIndex2;

randomIndex2 = Math.floor(Math.random() * arr.length);

const tmp = arr[randomIndex1];

arr[randomIndex1] = arr[randomIndex2];

arr[randomIndex2] = tmp;

arr
// [ 87, 7, 1, 5, 2 ]


let candy = new Map();
candy.set('purple', 'grape');
candy.set('black', 'oreo');
candy.set('pink', 'strawberry');
candy.set('blue', 'blueberry');
candy.set('brown', 'brownies');

for (let [color, flavor] of candy.entries()) {
  console.log(`The ${flavor} is colored ${color}`);
}
// The grape is colored purple
// The oreo is colored black
// The strawberry is colored pink
// The blueberry is colored blue
// The brownies is colored brown

candy.get('purple');
// 'grape'
candy.get('white');
// undefined

function getFlavor(color, candyMap) {
  if (candyMap.has(color)) { return candyMap.get(color);}
  else { console.log('Sorry that color does not have a flavor');}}

getFlavor('purple', candy)


let flavorArray = [];
function getAllFlavor(colorArray) {
  for (let color of colorArray) {
    if (candy.has(color)) {
      let flavor = getFlavor(color,candy)
      flavorArray.push(flavor);

    }

    else
      flavorArray.push(null);
  }
  return flavorArray;

}