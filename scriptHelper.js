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

        /*if(validatePilot === "Empty" || validateCopilot === "Empty" || validateFuel === "Empty" || validateCargo === "Empty"){
            alert("All fields are required!");
            
        }
        else if (validatePilot === "Is a Number" && validateCopilot === "Is a Number" && validateFuel === "Not a Number" && validateCargo === "Not a Number"){
            alert("Make sure to enter valid information for each field!");
            
        }
    */

       /* if (fuelLevel < 10000 && cargoLevel > 10000){
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
        if (Number(fuelLevel) < 10000) {
            list.style.visibility = 'visible';
            fuelStatus.innerHTML = 'Fuel level too low for launch';       
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = 'rgb(199, 37, 78)';
        } else if (Number(cargoLevel) > 10000) {
            cargoStatus.innerHTML = 'Cargo mass too heavy for launch';
            list.style.visibility = 'visible';
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = 'rgb(199, 37, 78)';
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        }else if (Number(fuelLevel) > 10000 && Number(cargoLevel) > 10000) {
            fuelStatus.innerHTML = "Fuel level high enough for launch";
            cargoStatus.innerHTML = "Cargo mass too heavy for launch";
            launchStatus.innerHTML = "Shuttle is not ready for launch";
            launchStatus.style.color = "rgb(199, 37, 78)";
        }else if((Number(fuelLevel) < 10000 && Number(cargoLevel) > 10000)){
            list.style.visibility = 'visible';
            cargoStatus.innerHTML = 'Cargo mass too heavy for launch';   
            fuelStatus.innerHTML = 'Fuel level too low for launch';     
            launchStatus.innerHTML = 'Shuttle Not Ready for Launch';
            launchStatus.style.color = 'rgb(199, 37, 78)';
        }else {
            list.style.visibility = 'visible';
            launchStatus.style.color = "rgb(65, 159, 106)";
            launchStatus.innerHTML = 'Shuttle is Ready for Launch';
            cargoStatus.innerHTML = 'Cargo mass low enough for launch';
            fuelStatus.innerHTML = "Fuel level high enough for launch";
        } 
        
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
        //fuelStatus.innerHTML = `Fuel level ${fuelLevel} for launch`;
        //cargoStatus.innerHTML = `Cargo mass ${cargoLevel} for launch`;

    }
            
           
   


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = Math.floor(Math.random()*planets.length);
        return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;