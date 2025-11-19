
// jab koi user baar baar event trigeer kare function

// tabhi execute hoga jab functions ruk jayega

function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(fn, delay);
  };
}

function sayHello() {
  console.log("👉 Hello! (only last click considered)");
}

const debouncedHello = debounce(sayHello, 5000);

// 10 baar click bhi karoge to sirf last wala chalega
let res = document.getElementById("btn").addEventListener("click", debouncedHello);

console.log(res);
