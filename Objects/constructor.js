// If we need many objects with the same properties,
// we use a constructor function so that we don't have to write the same code again and again.


function Person(name, age, number,address) {
    this.name = name;
    this.age = age;
    this.number = number
    this.address = address
    
    // method inside a constructor functions.
    this.fullName = function () {
        return this.name + " " + "Srivastav";
    } 
}

const myName = new Person("Anuj", 22, 8956784512, "Greater Noida");
const frndName = new Person("John", 23, 8574964152, "Delhi");

// create a method outside the constructor functions
frndName.changeName = function () {
    return this.name +" "+ "Doe"
}

//console.log(myName);
//console.log(frndName);
console.log(frndName.changeName());

