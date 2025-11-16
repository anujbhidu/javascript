
// Closure ek aisa feature hai jisme function apne lexical scope ko yaad rakhta hai—even after 
// parent function return ho jata hai

function outer() {
    let count = 0;

    function inner() {
        count++;
        console.log(count);
        
    }
    return inner
}

let fn = outer();
fn();
fn();
