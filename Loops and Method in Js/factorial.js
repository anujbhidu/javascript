function factorial(num) {
    let fact = 1;
    if (num == 1 || num == 0) {
        return 1;
    }
    else {
        if (num > 1) {
            for (let i = 2; i <= num; i++){
                fact = fact * i;
            }
        }
    }
    return fact;
}

let num = 0;
console.log(factorial(num));
