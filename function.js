// // //  function maskEmail(email) {
// // //      let [username, domain] = email.split("@");
// // //      let firstChar = username.slice(0, 1);
// // //      let lastChar = username.slice(-1);

// // //      let masked = firstChar + "*".repeat(username.length - 2) + lastChar;

// // //      let result = masked + "@" + domain;
// // //      return result;
// // // }

// // // let email = "freecodecamp@example.com"

// // // let resultOfMaskEmail = maskEmail(email);
// // // console.log(resultOfMaskEmail);

 
// // // // // // function convertCtoF(num) {
// // // // // //  let   num1 = num * (9 / 5) + 32;
// // // // // //     return num1;
// // // // // // }
// // // // // // let num = -30;
// // // // // // console.log(convertCtoF(num));


// // // // // // let count = 0;

// // // // // // function cc(card) {
// // // // // //     if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
// // // // // //         count = count + 1;
// // // // // //         return (`${count} Bet`)
// // // // // //     } else if (card == 7 || card == 8 || card == 9) {
// // // // // //         count = count;
// // // // // //         return (`${count} Bet`)
// // // // // //     } else if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
// // // // // //         count = count - 1;
// // // // // //         return (`${count} Hold`)
// // // // // //     }
// // // // // // }

// // // // // // console.log(cc(2));
// // // // // // console.log(cc(2));
// // // // // // console.log(cc(10));


// // // // // let count = 0;

// // // // // function cc(card) {
// // // // //     if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
// // // // //         count = count + 1;
// // // // //         return (`${count} Bet`)
// // // // //     } else if (card == 7 || card == 8) {
// // // // //         count = count;
// // // // //         return (`${count} Bet`);
// // // // //     } else if(card == 9){
// // // // //       count = count ;
// // // // //       return (`${count} Hold`)
// // // // //     }
    
// // // // //     else if (card == 10 || card == 'J' || card == 'Q' || card == 'K' || card == 'A') {
// // // // //         count = count - 1;
// // // // //         if(count == 1){
// // // // //           return (`${count} Bet`)
// // // // //         }
// // // // //         return (`${count} Hold`)
// // // // //     }
// // // // // }

// // // // // Check Leap Year Using Function

// // function isLeapYear(year) {
// //     if (year % 4 == 0) {
// //          return `${year} is a leap year`;
// //      } else if (year % 400 == 0) {
// //          return `${year} is a leap year`;
// //      }
// //      else if (year % 100 != 0) {
// //          return `${year} is not a leap year`;
// //      }
// //  }
// //  let year = 1900;
// //  let result = isLeapYear(year)
// //  console.log(result);


// // // // Truncate String

// function trucateString(str, num) {
//      if (str.length > num) {
//          return str.slice(0, 8) + "...";
//     }
//      return str;
//  }

//  let str = "A-tisket a-tasket A green and yellow basket"
// let num = 8;

//  console.log(trucateString(str,num));

// // // // Build a confirm the Ending Tool

// // // function confirmEnding(str1,str2) {
// // //     if (str1[str1.length - 1] == str2 && str1[str1.length - 2] == str2) {
// // //         return true;
// // //     }   
// // //     return false;
// // // }

// // // let str1 = "Open"; // first string to check
// // // let str2 = "en" // second string string to against.

// // // console.log(confirmEnding(str1, str2));
