// create  class

class Car {
    constructor(name, model, year) {
        this.name = name;
        this.model = model;
        this.year = year
    }

    age() {
    const date = new Date(); // extract the same date.
    return date.getFullYear() - this.year; //date.getFullYear (2025) - this.year(2020) = 5 year.
  }
}  

const car1 = new Car("Audi", "A5", 2020);
const car2 = new Car("Tata", "Nexon", 2023);

console.log(car1);
console.log(car1.age());

console.log(car2);


