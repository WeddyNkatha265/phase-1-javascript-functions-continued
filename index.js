// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Example usage:
console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
console.log(saturdayFun("bathe my dog")); // "This Saturday, I want to go hiking!"

function mondayWork(works = "go to the office") {
  return `This Monday, I will ${works}.`;
}
console.log(mondayWork());
console.log(mondayWork("work from home"));

function wrapAdjective(highlight) {
  // Return a new function that takes an adjective as an argument
  return function (adjective) {
    return `You are ${highlight}${adjective}${highlight}!`;
  };
}

// Example usage:
const emphaticWithAsterisk = wrapAdjective("*");
const emphaticWithPipe = wrapAdjective("||");

console.log(emphaticWithAsterisk("a hard worker")); // "You are *a hard worker*!"
console.log(emphaticWithPipe("a dedicated programmer")); // "You are ||a dedicated programmer||!"
