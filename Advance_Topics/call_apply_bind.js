
// call explicit binding method hai force karta hai this

// call takes an arguments only objects form 

function greet() {
  console.log("Hello " + this.name);
}

const person = { name: "Anuj" };

greet.call(person); // call(person) ne force kr diya hai this = person


const person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName: "John",
    lastName:"Doe"
}

const person3 = {
    firstName: "David",
    lastName:"Boon"
}

let res = person1.fullName.call(person2); // forcefully this ko set kar rha hain 
console.log(res);

// apply working as same but the one difference is

// apply takes as argument in array form

const man = {
  fullName1: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const man2 = {
  firstName:"John",
  lastName: "Doe"
}

let res1 = man.fullName1.apply(man2, ["Oslo", "Norway"]) // takes arguments as array form 
console.log(res1);

// bind method borrow karta hai method ko

const man3 = {
  fullName1: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}

const man4 = {
  firstName:"John",
  lastName: "Doe"
}

let res2 = man3.fullName1.bind(man4) // borrow the fullname method from man3. 
console.log(res1);