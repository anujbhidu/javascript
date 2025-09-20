 function maskEmail(email) {
     let [username, domain] = email.split("@");
     let firstChar = username.slice(0, 1);
     let lastChar = username.slice(-1);

     let masked = firstChar + "*".repeat(username.length - 2) + lastChar;

     let result = masked + "@" + domain;
     return result;
}

let email = "freecodecamp@example.com"

let resultOfMaskEmail = maskEmail(email);
console.log(resultOfMaskEmail);