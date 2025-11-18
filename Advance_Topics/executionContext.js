// execution context means ke jab bhi hm javascript ka code hum execute krte hai

// toh ek execution context banati hain

// execution context ka mtlb ke ek kinds of environment jisme code run krta hai

// different different types of environment create hote hai jaise

let a = 10 // ek variable environment banta hai jiske andar variable store hota hai

function sum(a, b) { // ek function environment hota h jiske andar functions store hota hai
    return a + b;
}

let b = 5;  // global execution phase jisme humko variable create krte hai jisko hum creation phase kehte hai 

function sum1(x, y) {
    return x + y;
}

let result = sum(5, 7);

console.log(result); // execution phase jisme humko result 12 mil rha hai 
