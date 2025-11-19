
// jab koi kaam baar baar chal rha hai toh

// throtling ensures karta hai ke fixed time mai sirf ek he baar chale

function throttle(fn, delay) {
  let last = 0;
  return function () {
    let now = Date.now();
    if (now - last >= delay) {
      fn();
      last = now;
    }
  };
}

function showScroll() {
  console.log("👉 Scrolling... (every 1 sec)");
}

const throttledScroll = throttle(showScroll, 1000);

window.addEventListener("scroll", throttledScroll);
