let count = 0; 

function cardCountingAssistant(card) {
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++; 
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--; 
      break;
    
    default:
      
      break;
  }

  if (count > 0) {
    return `${count} Bet`; 
  } else {
    return `${count} Hold`; 
  }
}


console.log(cardCountingAssistant(2)); 
console.log(cardCountingAssistant(7)); 
console.log(cardCountingAssistant("K")); 
console.log(cardCountingAssistant(5)); 
console.log(cardCountingAssistant("A")); 