
// partial application means functions ke kuch arguments

// pehle he fill kr dena, baaki baad mai

// partial mai hu multiple arguments de skte hai ek baar mai

// normal functions

function add(a,b,c) {
    return a + b + c;
}



// functions with partial

function add1(a) {
    return function (b, c) {
        return add(a, b, c);
    }
}

let add10 = add1(10);
console.log(add10(5,5));
