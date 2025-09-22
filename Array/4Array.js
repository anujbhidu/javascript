function reverseString(str) {
  return str.split("").reverse().join("");
}

let str = "Greeting from Earth";
console.log(reverseString(str));

// let fruits = ["apples", "oranges", "grapes", "kiwi"];
//fruits.splice(0, 2);
//console.log(fruits);

// fruits.splice(0, 2, "guava", "banana");
// console.log(fruits);
