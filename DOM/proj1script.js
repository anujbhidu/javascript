
const redColor = document.querySelector(".red");
const grayColor = document.getElementsByClassName("gray");
const blackColor = document.querySelector(".black");
const cartButton = document.getElementById("button");
const itemTag = document.getElementsByTagName("h3")[0];
const imageCard = document.querySelector(".product-image");
const feedBackbtn = document.querySelector(".feedback"); 

redColor.addEventListener("click", function () {
    cartButton.style.backgroundColor = "red";
    itemTag.style.backgroundColor = "red";
    imageCard.style.backgroundImage = 'url("/DOM/red thar.avif")';
})

grayColor[0].addEventListener("click", function () {
  cartButton.style.backgroundColor = "gray";
  itemTag.style.backgroundColor = "gray";
  imageCard.style.backgroundImage = 'url("/DOM/grayThar.jpg")';
  
});

blackColor.addEventListener("click", function () {
  cartButton.style.backgroundColor = "black";
  itemTag.style.backgroundColor = "black";
  imageCard.style.backgroundImage = 'url("/DOM/blackImage.avif")';
});

const cart = () => {
    cartButton.style.display = "none";
    feedBackbtn.style.display = "block";
}

cartButton.addEventListener("click", cart); 

const feedback = () => {
    cartButton.style.display = "block";
    cartButton.style.display = "none";
}

feedBackbtn.addEventListener("click", feedback);

