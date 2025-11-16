// Ek function ko async declare karo

// Jaha pe future value chahiye → await likho

// Promise resolve hote hi aage ka code chal jayega

// Error ko try...catch se handle krte hain

// Async and await promise ko handle karne ka new way hai


function waitForPizza() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Pizza is ready!"), 2000);
    })
}

async function oredrPizza() {
    console.log("Pizza oredr kare!...");

    let result = await waitForPizza();
    console.log(result);
    console.log("Pizza kha liye");
}

oredrPizza();