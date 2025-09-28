

function optGenerator(length) {
    let otp = "";

    for (let i = 0; i < length; i++){
        const randomNum = Math.floor(Math.random() * 10);
        otp = otp + randomNum;
    }

    return otp;
}


let res = optGenerator(4);
console.log(res);


