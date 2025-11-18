

// hoisting ka matalb hota hai ke jab hum varibale ko assign krte hai ya functions ko

// toh wo sabko top pe leke chala jata hai memory mai

// matalb ye hai ke hoisting ke case mai sirf varibale ke name ko top pe leke

// jata hai pure code ko nahi same as functions ko bhi

// var ke case mai undefined hot hai aur hoist jo jaati h

// var ke case undeifine output aati hai

// let and const ke case mai TDZ mai chala jata hai mtltab variable ke name memory mai assign

// ho jate hai lekin hum isko access nahi kr skte hai isko ke hum TDZ bolte hai

// let and const ke case mai refernce error output aata hai 

// function ke case mai full hoisting hoti hai




console.log(a);  // undefined
// console.log(b);  // TDZ error
// console.log(c);  // TDZ error
console.log(sum(5,5)); // 10 - works (full hoisting)

var a = 100;
let b = 200;
const c = 300;

function sum(x, y) {
  return x + y;
}

const minus = function(x, y) {
  return x - y;
};

minus(10,3);  // works because after definition
