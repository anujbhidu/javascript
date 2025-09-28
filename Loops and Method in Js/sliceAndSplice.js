// Here we show how to use the slice and splice mehtod in javascript.


// let res = arr.slice(0, 4);

// but in slice method do not modify the original array.
// console.log(res);

// console.log(arr);

// let res2 = arr.splice(0, 4);

// after splice use also modify the original array.
// console.log(res2);

// console.log(arr);

//  let arr3 = [4, 5, 6, 7, 8, 9];

// let arr = [10, 20, 30, 40, 50, 60];

// let newArr = arr3.slice();

// let res3 = newArr.splice(0, 0, ...arr);

// console.log(res3);

// console.log(newArr);

function frankenSplice(arr1, arr2, index) {
    // Make a copy of arr2 so original stays unchanged
    let newArr = arr2.slice();

    // Insert arr1 into newArr at the given index
    newArr.splice(index, 0, ...arr1);

    return newArr;

}

 let arr1 = [4, 5, 6, 7, 8, 9];

let arr2 = [10, 20, 30, 40, 50, 60];

console.log(frankenSplice(arr1,arr2,1));
