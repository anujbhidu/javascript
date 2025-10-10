// function displaySum(sum) {
//     console.log(sum);
// }

// function calculateSum(num1,num2,myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
// }

// calculateSum(5, 6, displaySum);

// function getData(callback) {
//   setTimeout(() => {
//     let data = "User data received";
//     callback(data);
//   }, 2000);
// }

// getData((result) => {
//   console.log(result);
// });

// anonymous function as a callback

//function greet(name, callback) {
//   console.log(`hello ${name}`)
//   callback();
// }

// greet("Anuj", function () {
//   console.log("Welcome to js");
// })


// asynchronous callback

// console.log("start");

// setTimeout(() => {
//   console.log("execute after two seconds");
  
// }, 2000);

// console.log("end");

// CallBack Hell

setTimeout(() => {
  console.log("task 1 execute");
  setTimeout(() => {
    console.log("task 2 execute");
    setTimeout(() => {
      console.log("task 3 execute");
    },1000);
  },1000);
}, 1000);
