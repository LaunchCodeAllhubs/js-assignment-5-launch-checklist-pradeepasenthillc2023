// Write your JavaScript code here!

window.addEventListener("load", function() {
    //validation alerts when the user submits the form with empty fields:
    let form = this.document.querySelector("form");
    form.addEventListener("submit", function(event){
        event.preventDefault();
        

        // Get user input values
        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let coPilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");

        formSubmission(document, pilotNameInput, coPilotNameInput, fuelLevelInput, cargoMassInput);
        //Validate input values against empty
        if (
            pilotNameInput.value === "" ||
            coPilotNameInput.value === "" ||
            fuelLevelInput.value === "" ||
            cargoMassInput.value === ""
          ) {
            alert("All fields are required!");
            return;
          }
          
    });

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse= myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let planetIndex = pickPlanet(listedPlanets);
        addDestinationInfo(document, planetIndex.name, planetIndex.diameter, planetIndex.star, planetIndex.distance, planetIndex.moons, planetIndex.image);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});