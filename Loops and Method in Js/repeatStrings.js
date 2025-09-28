function repeatStrings(str, num) {
    if (num < 0) {
        return "";
    }
    let result = "";
    for (let i = 0; i < num; i++) {
        result = result + str;
    }
    return result;
}


let str = "abc";
let num = 2;
console.log(repeatStrings(str,num));
