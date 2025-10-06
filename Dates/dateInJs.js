let now = Date;
console.log(now);
console.log(typeof now);


let now1 = new Date;
console.log(now1);
console.log(typeof now1);

// total six ways to create a date in js 
let a = new Date(2020, 12)
console.log("2020 Date is ",a);

let b = new Date(2020, 1, 22)
console.log(b);



//let c = new Date(year, month, day, hours)
//console.log(c);

//let d = new Date(year, month, day, hours, minutes)
//console.log(d);

//let e = new Date(year, month, day, hours, minutes, seconds)
//console.log(e);

//let f = new Date(year, month, day, hours, minutes, seconds, ms)
//console.log(f);

// the date get
let d = new Date("2020-10-22");
let res = d.getFullYear()+" "+ d.getMonth()+" "+d.getDate();

console.log(res);


// the date set

let date = new Date("2020-10-25");
let r1 = date.setFullYear(2025);
console.log(r1); // return timestamp

let r2 = date.setMonth(11);
console.log(r2);// return timestamp

console.log(date);

