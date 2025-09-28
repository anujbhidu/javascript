// function longestSrting(str){

// }

// let str = "The quick brown fox jumped over the lazy dog";

// let splits = str.split(",");
// console.log(splits);


// for (const value of str) {
//     console.log(value);
    
// }

function findLongestWordLength(str){
  const words = str.trim().split(/\s+/);
  let maxLength = 0;

  for(const word of words){
    if(word.length > maxLength){
      maxLength = word.length;
    }
  }
  return maxLength;
}

let str = "The quick brown fox jumped over the lazy dog";

console.log(findLongestWordLength(str));
