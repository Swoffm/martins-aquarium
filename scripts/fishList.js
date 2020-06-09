/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/


// Function to show holy fish in the browser
const showHolyFish = () => {
    //set value equal to the array of mostHoly Fish
    const fishObjectsArray = mostHolyFish()
//iterate the array
    for (const fishObject of fishObjectsArray) {
//use fishConverter
        const fishHTML = fishConverter(fishObject)
//find fish list in the html
        const fishHTMLRepresentation = document.querySelector(".fishList")
//place fish list in the html 
        fishHTMLRepresentation.innerHTML += fishHTML
    }
}


// Function to show holy fish in the browser
const showSoliderFish = () => {
    const fishObjectsArray = soldierFish()

    for (const fishObject of fishObjectsArray) {

        const fishHTML = fishConverter(fishObject)

        const fishHTMLRepresentation = document.querySelector(".fishList")

        fishHTMLRepresentation.innerHTML += fishHTML
    }
}


// Function to show holy fish in the browser
const showNonHolyFish = () => {
    const fishObjectsArray = nonHolyFish()

    for (const fishObject of fishObjectsArray) {

        const fishHTML = fishConverter(fishObject)

        const fishHTMLRepresentation = document.querySelector(".fishList")

        fishHTMLRepresentation.innerHTML += fishHTML
    }
}


const fishList = () => {
    
    // Invoke all three functions here
    showHolyFish();
    showSoliderFish();
    showNonHolyFish();
}



//below impacts the select element and will display only holy fish

const fishTypeDropdown = document.querySelector(".typeChoice")
// const fish = document.querySelector(".fishList")
const fishHTMLRepresentation = document.querySelector(".fishList")


const clearFishList = () => fishHTMLRepresentation.innerHTML = ""

fishTypeDropdown.addEventListener("change", clickEvent => {
    // Get the value of the option chosen by the user
    const userChoice = clickEvent.target.value

    // If the user chose Holy, clear the list and only show holy fish
    if (userChoice === "holy") {
        clearFishList()
        showHolyFish()
    }
    else if (userChoice === "all") {
        clearFishList();
        fishList();
    }
    else if (userChoice === "soldier") {
        clearFishList();
        showSoliderFish();
    }
    else if (userChoice === "plebs") {
        clearFishList();
        showNonHolyFish();
    }
})



const fishVisibilityButton = document.querySelector(".toggleFish")

fishVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".gavin").classList.toggle("hidden")

})