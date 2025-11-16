// first iterable statement is for in loops

// for in loops works on objects only not arrays

// for in loops it gives the value of keys only

const person = {
    name: "Anuj",
    age: 23,
    course:"B.tech"
}

for (let x in person) {
    console.log(x); // its give the key of the objects 
    
}

for (let x in person) {
    console.log(person[x]); // its give the value of the objects
    
}

// using for in loops count total number of properties in the objects

const student = {
    name: "John",
    age: 22,
    mobile: 8956237845,
    marks: {
        english: 98,
        maths: 87,
        chemistry:78
    }
}

let count = 0;
for (let x1 in student) { // count the total of key are present in objects
    count++;
}

for (let x2 in student) {
    console.log(x2 ,"->",student[x2]); // print the key and value both
    
}

let arr = [];
for (let x3 in student) { // push all objects key into arrays
    arr.push(x3);
    
}

let stringCount = 0;

for (let x4 in person) {
    if (typeof person[x4] == "string") { // count the total number of strings are present in objects
        stringCount++;
    }
}

console.log(stringCount);


console.log(arr);


console.log(count);
