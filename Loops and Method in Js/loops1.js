const fruits = ["apple", "orange", "banana", "kiwi"];

// for of loops used in array set maps collection objects.
for (const value of fruits) {
    console.log(fruits);
    
}

// when we are using for in loops in array or other collection items
// it gives the index of the array not value of the array.
for (const value in fruits) {
    console.log(value);
    
}

let student = {
    name: "Anuj Srivastav",
    age: 20,
    isStudent: true
}

// when we are using for of loops in objects it gives typeerror
// give student is not iterable
 for (const prop of student) {
     console.log(prop);
    
 }


// so if we are using objects then used for in loops 
 // to access the property of the objects.
for (const prop1 in student) {
    console.log(prop1);
    
}


// these are the main differnces of the for of and for in loops

