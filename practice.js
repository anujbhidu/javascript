//Array.length
const fruits = ["apple", "orange", "mango", "banana"]
const result = fruits.length
console.log(result);
//fruits.length = 3;
console.log(fruits)

//array.delete
// delete are not used because after deleting it lefts hole thats why use pop istead of delete using 
const res = delete fruits[2];
console.log(res);

//array.toString
const string = fruits.toString();
console.log(string);

//array.at
const get = fruits.at(1);
console.log(get);
//array.join
const join = fruits.join("*");
console.log(join);


//array.pop
fruits.pop(2);
console.log(fruits)
//array.push
fruits.push("kiwi")
console.log(fruits)
//array.shift
const shift = fruits.shift();
console.log(shift);
console.log(fruits);
//array.unshift
const unshift = fruits.unshift("cheeku");
console.log(unshift);
console.log(fruits);

//array.concat
const secA = ["anuj", "rahul", "deepak", "vivek"]
const secB = ["shivam", "sushant", "abhay", "sahil"]

const concat = secA.concat(secB);
console.log(concat);


//array.copyWithin

const copy = secA.copyWithin(2, 0);
console.log(copy);
const copy2 = secA.copyWithin(2, 0, 2);
console.log(copy2);
//array.slice
//array.splice
//array.toSpliced
//array.flatMap
const num = [1, 2, 3, 4, 5, 6];
const flat1 = num.flatMap(num => [num,num * 10]);
console.log(flat1);


let studentName = "john"
let age = 22
let isStudent = true

let person = {
    name: "david",
    age:22
} 



console.log(person.age);
console.log(person.name);


let name = "David"
let num1 = "John"
document.writeln(name);
document.writeln(num1);
console.log(name);
console.log(num1);
document.writeln(5 + "5");
document.writeln(5 - "5")


let count = 1;
while (count <= 5) {
    document.writeln("Hello" + count + "<br>");
    count++;
}
document.writeln("<br");

let str = "Learning JavaScript is important";
let ans = str.includes("JavaScript"); // includes its check whether the substring is present or not 
document.writeln(ans);

let str2 = "Hello Folks";
let ans2 = str2.slice(6,11);
console.log(ans2);

let ans3 = str.slice(9, -5);
console.log(ans3);

let word = "Logic Building";
let convert = word.toLocaleLowerCase();
console.log(convert);

let convert2 = word.toUpperCase();
console.log(convert2);

let str4 = "The quick brown fox jumps over the lazy fox. Another fox!"
let ans4 = str4.replace("fox/g", "dog"); 
console.log(ans4);

let phrase = "freeCodeCamp is awesome!";
let updatedPhrase = phrase.replace("freeCodeCamp", "fCC");

console.log(updatedPhrase);

let word2 = "Aello";
let res2 = word2.charCodeAt(0);
console.log(res2);

let random = Math.random();
console.log(random) ;
// Primitive data types
let num4 = 20;
let num5 = num4;
console.log(num4);
console.log(num5);


num4 = 25;
console.log(num4);
console.log(num5);

// Reference Data types
object1 = {
    name: "anuj",
    age:25
}
console.log(object1);
object2 = object1;
console.log(object2);

object1.age = 30;
console.log(object2);

// copy

let obj1 = { name: "Anuj", age: 22 };
let obj2 = obj1;

obj2.age = 30;

console.log(obj1.age);

let obj3 = { name: "Anuj", age: 22 };
let obj4 = { city: "Noida", age: 25 };


let merged = {};

for (let key in obj3) {
    merged[key] = obj3[key];
}

for (let key in obj4) {
    merged[key] = obj4[key];
}

console.log(merged);

// this keyword

let user = {
  name: "Anuj",
  greet() {
    console.log(this.name);
  }
};
user.greet();

// Object in javascript

let car = {

  brand: "Tesla",
  model: "Model S",
  year: 2024,
  color: "Black",

  
  start() {
    console.log(`${this.brand} ${this.model} is starting...`);
  },

  drive(speed) {
    console.log(`${this.brand} ${this.model} is driving at ${speed} km/h`);
  }
};


console.log(car.brand);   
console.log(car.year);    


car.start();              
car.drive(120);           


// optional chaining

// without uisng optional chaning 
let user6 = {};


//console.log(user6.address.city); 

// using optioal chaining

let user7 = {};  

console.log(user7?.address?.city); 


function dosomething() {
  console.log("Hello Anuj");
  
}

let store = dosomething();
console.log(store);
