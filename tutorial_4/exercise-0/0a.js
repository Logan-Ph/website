var fruit = ["Banana", "Apples", "Oranges", "Blueberries"];

fruit.shift();

console.log(fruit)

fruit.sort();

console.log(fruit);

fruit.push("Kiwi");

console.log(fruit);

fruit.shift();
console.log(fruit);

fruit.reverse();
console.log(fruit);

var fruit2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(fruit2[1][1])