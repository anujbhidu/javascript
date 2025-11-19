
// prototype means a javascript have a hidden property so those hidden property are called prototype

// prototype matalb ye hai ke ek object jo dusre object ke proprty ko backup mai rakhta hai

const person = {
    greet() {
        console.log("hello");
        
    }
}

const user = {
    name: "Anuj"
}

user.__proto__= person;

console.log(user.name);  // user mai mila 

user.greet();            // user mai nahi mila uske prototype mai mila 
