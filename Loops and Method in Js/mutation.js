function mutation(arr){
  const arr1 = arr[0].toLowerCase();
  const arr2 = arr[1].toLowerCase();

  for(let char of arr2){
    if(!arr1.includes(char)){
      return false;
    }
  }
  return true;
}


//let arr = ["alien", "line"];

let arr = ["hello", "hey"];
console.log(mutation(arr));