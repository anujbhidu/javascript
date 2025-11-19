
// this keyword jis object ne functions ko call kiya wohi object this ban jata hain

// jab hum function call krte hai tab javascript this keyword ke value ko decide krta hai

// functions creation ke time koi value decide nahi krta hai

// aur jo this hota hai wo current value ko aacess karta hai

const person = {
    name: "Rahul",
    greet() {
        console.log("hello" + " " + this.name); // simple example of this 
        console.log(`hello ${this.name}`);
        
        
    }
}

person.greet();


// implicit matalb automatic binding this keyword

// implicit this keyword wo hota hai jo jab koi objects function ko call kare

// this automatically us objects ko refer karta hai

const user = {
    name: "Anuj",
    greet1() {
        console.log(`hello ${this.name}`); // aur yaha this jo user objects ko refer kar rha hai 
                                           // matalb ye hai ke this == user 
    }
}

user.greet1(); // user jo hai kisi function ko call kr rha hai jo ke greet1 hai


// explicit binding means forcefully binding

// javascript mai hum this ko force krke set kar skte hai toh whi explicit binding hoti hai

