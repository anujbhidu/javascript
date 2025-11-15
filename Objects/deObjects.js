
const person = {
    name: "Anuj Srivastav",
    age:22
}

let { name, age } = person; // objects destructing

console.log(name);

console.log(age);

// string destructing

let str = "aurBhaiKyaHallHai";

let [ a1, a2, a3, a4, ...r ] = str; // using rest operator concept 

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(r);