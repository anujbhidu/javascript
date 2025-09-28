function generatePassword(length) {
    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";

    for (let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * chars.length);
        password = password + chars[randomIndex];
    }
    return password;
}


let password = generatePassword(12);
console.log(password);
