
// event delegation mai ye hua ke tum jis event par click karoge whi element trigger hoga

// sare element pe nahi


document.getElementById("list").addEventListener("click", (event) => {
    console.log("You clicked: ",event.target.innerText);
    
})