function chunkArrayInGroups(arr, size) {
  const result = [];
  
  for (let i = 0; i < arr.length; i += size) {
    const chunk = arr.slice(i, i + size);
    result.push(chunk);
  }

  return result;  
}


let arr = [1, 2, 3, 3, 4, 5];
let size = 2;

console.log(chunkArrayInGroups(arr,size));
