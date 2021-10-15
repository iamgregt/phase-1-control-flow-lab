function scuberGreetingForFeet(someValue){
  let result
  if (someValue < 400){
    result = "This one is on me!";
  } else if(someValue > 2000 && someValue <= 2500 ){
    result = "I will gladly take your thirty bucks.";
  } else if(someValue > 2500 ){
    result = 'No can do.';
  }

  return result
}

function ternaryCheckCity(city){
  const reply = (city === "NYC" ? "Ok, sounds good." : "No go.");
  return reply
}

function switchOnCharmFromTip(tip){
  let thanks
  switch (tip){
    case 'generous':
      thanks = "Thank you so much.";
      break;
    case 'not as generous':
      thanks = "Thank you.";
      break;
    default:
      thanks = "Bye.";
      break;
  }
  return thanks
}