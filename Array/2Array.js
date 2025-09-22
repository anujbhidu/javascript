// Create lunches variable
let lunches = [];

// Function to add lunch to the end
function addLunchToEnd(arr, item) {
    arr.push(item);
    console.log(`${item} added to the end of the lunch menu.`);
    return arr;
}

// Function to add lunch to the start
function addLunchToStart(arr, item) {
    arr.unshift(item);
    console.log(`${item} added to the start of the lunch menu.`);
    return arr;
}

// Function to remove last lunch
function removeLastLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches to remove.");
    } else {
        let removed = arr.pop();
        console.log(`${removed} removed from the end of the lunch menu.`);
    }
    return arr;
}

// Function to remove first lunch
function removeFirstLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches to remove.");
    } else {
        let removed = arr.shift();
        console.log(`${removed} removed from the start of the lunch menu.`);
    }
    return arr;
}

// Function to get a random lunch
function getRandomLunch(arr) {
    if (arr.length === 0) {
        console.log("No lunches available.");
    } else {
        let randomIndex = Math.floor(Math.random() * arr.length);
        let randomItem = arr[randomIndex];
        console.log(`Randomly selected lunch: ${randomItem}`);
    }
}

// Function to show the menu
function showLunchMenu(arr) {
    if (arr.length === 0) {
        console.log("The menu is empty.");
    } else {
        console.log("Menu items: " + arr.join(", "));
    }
}

