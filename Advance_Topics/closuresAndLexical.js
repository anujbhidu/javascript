
// closures and lexical scope

// lexical scope wo hota hai jo apne own function ke scope ko access karta hai

// outer functions ke variables ko bhi access karta hai aur global ko bhi access karta hai

let a = 10;

function outer() {
    let b = 20;

    function inner() {     // inner function jo hai own ko access kr rha h outer ko bhi access
        console.log(a, b); // aur global ko bhi access kar rha hai these are called lexical scope 
    }
    inner();
}

outer();


// closures scope

//Closure = Jab ek inner function, apne outer function ke

//variables ko yaad rakhta hai — even after outer function khatam ho chuka ho


function createCounter() {
  let count = 0;  // outer variable

  function increment() { // inner functions outer variable count ko yaad kr rha h 
    count++;
    console.log(count);
  }

  return increment;
}

const counter = createCounter();
counter();  
counter();  
counter();
