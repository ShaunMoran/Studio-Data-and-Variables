// FORK this starter file and save it to your own Repl.it account.
const input = require('readline-sync');

//Take in user input - take in astronaut count
let astronautCount = input.question("What is the astronaut count?");
astronautCount = Number(astronautCount);





// Declare and initialize the 12 variables here:
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
//let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius = -225;
let fuelLevel = "100%";
let weatherStatus = "clear"
let theLine = "-------------------------------------";


// Write code to generate the LC04 report here:


console.log(theLine);
console.log("> LC04 - LAUNCH CHECKLIST");
console.log(theLine);
console.log("* Date:" + date);
console.log("* Time:" + time);
console.log();
console.log(theLine);
console.log("> ASTRONAUT INFO");
console.log(theLine);
console.log("* Count:" + astronautCount);
console.log("* Status:" + astronautStatus);
console.log();
console.log(theLine);
console.log("> FUEL DATA")
console.log(theLine);
console.log("* Fuel temp celsius:" + fuelTempCelsius);
console.log("* Fuel level: " + fuelLevel);
console.log();
console.log(theLine);
console.log("> MASS DATA")
console.log(theLine);
console.log("* Crew mass: " + averageAstronautMassKg);
console.log("* Fuel mass: " + crewMassKg);
console.log("* Shuttle mass: " + shuttleMassKg);
console.log("* Total mass:" + totalMassKg);
console.log();
console.log(theLine);
console.log("> FLIGHT PLAN")
console.log(theLine);
console.log("* The weather:"+ weatherStatus);
console.log();
console.log(theLine);
console.log("> OVERALL STATUS")
console.log(theLine);
console.log("* Clear for takeoff: Yes");



// When done, have your TA check your code.




// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.