
// event loop.......

// JavaScript single-threaded language hai iska matlab

//Ek time par sirf ek kaam kar sakti hai.

//Agar long task aa jaye, JS ruk jaati hai.

//Isliye Event Loop use hota hai jo tasks ko line me manage karta hai.

//call Stack me code chalta hai

//Agar koi async task milta hai (setTimeout, fetch, promise, etc)…

//Wo task side me chala jata hai (Web APIs)

//Jab task complete ho jaye  Queue me wapas aata hai

//Event Loop check karta hai:

//Agar Call Stack empty hai

// Queue se task uthao

// Stack me daalo

// Macrotask wo hote jo bde bade task hote hai jaise

// setTimeout setInterval

// aur Microtask wo hote hai jo chote chote task hote hai

// jaise ke Promise async await

// microtask pahle execute hota hai aur macrotask baad mai 
console.log("Start");

setTimeout(() => {             // macrotask
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => { // microtask
  console.log("Promise");
});

console.log("End");

// flow of event kaise user krta hai

//  first synchronous -> then microtask -> then macrotask these are the flow of event loop

