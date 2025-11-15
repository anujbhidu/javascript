
// agar hum static method ko class se call krte h toh work karta hai
// lekin agar hum static method ko object se call krte hai toh work nahi karta hai

class Car {
  static showBrand() {
    console.log("This is a Car class");
  }
  
  normalMethod() {
    console.log("This is a normal method");
  }
}

Car.showBrand();         // Works (class se call)
let c = new Car();

c.normalMethod();        //  Works (object se call)
c.showBrand();           //  Error (static object se access nahi hota)
