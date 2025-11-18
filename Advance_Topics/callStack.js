
// call stack ka matalb hota hai ke kis flow mai execution context execute ho rahi h

// its means its decide which one is execute first its a data structure conecpt

// its uses a LIFO concept to store the and execute the execution context

function one() {
    console.log("First functions");
    two();
}

function two() {
    console.log("Second functions");
    three();
}

function three() {
    console.log("Third functions")
}

one();

