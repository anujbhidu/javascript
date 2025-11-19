
// currying ka matalab ye hota hai ke bade functions ko tod-tod

// single parameter wale functions mai convert karna yahi currying hota hai

// function without currying

function add(a, b, c) {
    return a + b + c;
}

let res = add(5, 5, 6);
console.log(res);

// function with currying

function add(a) {      // function single parameter mai break kr diya 
    return function(b){
        return function (c) {
            return a + b + c;
        }
    }
}

let res1 = add(10)(12)(14);
console.log(res1);
