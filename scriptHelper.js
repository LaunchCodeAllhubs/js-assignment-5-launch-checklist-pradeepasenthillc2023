// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = `
                   <h2>Mission Destination</h2>
   <ol>
       <li>Name: ${name} </li>
       <li>Diameter: ${diameter} </li>
       <li>Star: ${star}</li>
       <li>Distance from Earth: ${distance} </li>
       <li>Number of Moons: ${moons} </li>
   </ol>
   <img src="${imageUrl}"/>
   `
   
   /*             <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src=""> */
   
}

function validateInput(testInput) {
    //let integerTestInput = parseInt(testInput, 10);
            if (testInput === "") {
                 return "Empty";
            } else if(isNaN(testInput)){
                return "Not a Number";
            } else (typeof testInput === "number") 
                return "Is a Number";
            
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
        let copilotStatus = document.getElementById("copilotStatus");
        let fuelStatus = document.getElementById("fuelStatus");
        let cargoStatus = document.getElementById("cargoStatus");
    
        let validatePilot = validateInput(pilot);
        let validateCopilot = validateInput(copilot);
        let validateFuel = validateInput(fuelLevel);
        let validateCargo = validateInput(cargoLevel);

        let launchStatus = document.getElementById("launchStatus");

        if(validatePilot === "Empty" || validateCopilot === "Empty" || validateFuel === "Empty" || validateCargo === "Empty"){
            alert("All fields are required!");
            
        }
        else if (validatePilot === "Is a Number" && validateCopilot === "Is a Number" && validateFuel === "Not a Number" && validateCargo === "Not a Number"){
            alert("Make sure to enter valid information for each field!");
            
        }
        

        /*if (fuelLevel < 10000 || cargoLevel > 10000){
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
            fuelLevel = "too low";
            cargoLevel = "too heavy";
        } else if(fuelLevel >= 10000 && cargoLevel > 10000){
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
            fuelLevel = "high enough";
            cargoLevel = "too heavy";
        } else if(fuelLevel < 10000 && cargoLevel <= 10000){
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle Not Ready for Launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
            fuelLevel = "too low";
            cargoLevel = "low enough";
        } else {
            list.style.visibility = "visible";
            launchStatus.innerHTML = "Shuttle is Ready for Launch";
            launchStatus.style.color = "green";
            fuelLevel = "high enough";
            cargoLevel = "low enough";

        }*/
    else if (validatePilot !== "Is a Number" && validateCopilot !== "Is a Number" && validateFuel !== "Not a Number" && validateCargo !== "Not a Number"){
{    
    if (fuelLevel < 10000) {
        list.style.visibility = "visible";
        document.getElementById("fuelStatus").innerHTML = "Fuel level: Not enough fuel for the journey";
        launchStatus.style.color = "#C7254E";
        launchStatus.innerHTML = "Shuttle not ready for launch";
      } else if (cargoLevel > 10000) {
        list.style.visibility = "visible";
        document.getElementById("cargoStatus").innerHTML = "Cargo mass: Too much mass for the shuttle to take off";
        launchStatus.style.color = "#C7254E";
        launchStatus.innerHTML = "Shuttle not ready for launch";
      } else {
        list.style.visibility = "hidden"; // Hide the faulty items div if everything is fine.
        launchStatus.style.color = "#419F6A";
        launchStatus.innerHTML = "Shuttle is ready for launch";
      }
    }
    } 
    
  
            
            pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
            copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
            fuelStatus.innerHTML = `Fuel level ${fuelLevel} for launch`;
            cargoStatus.innerHTML = `Cargo mass ${cargoLevel} for launch`;

}



async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*6)
        return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
