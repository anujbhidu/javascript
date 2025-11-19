
// event bubbling

//Jab tum kisi element par event fire karte ho (click, input, etc),

//wo inner element se start hota hai

//aur baahar wale parent element tak upar chadhta hai.

//This is called event bubbling.

document.getElementById("child").addEventListener("click", function() {
  console.log("Child clicked");
});

document.getElementById("parent").addEventListener("click", function() {
  console.log("Parent clicked");
});


// evnent capturing top to bottom jate hai

// parents pahle call hoga then child 
