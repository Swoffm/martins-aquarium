/*
Responsible for generating a list of fish HTML
representations, and putting in the browser
*/

// const fishList = () => {
//     // Iterate the collection of fish objects
//     for (const currentFishObject of fishCollection) {

//         // Convert the current fish to its HTML representation
//         const fishHTML = fishConverter(currentFishObject)

//         // Find the <article> element in index.html
//         const fishArticleElement = document.querySelector(".fishList")

//         // Put the fish HTML representation inside the <article> element
//         fishArticleElement.innerHTML += fishHTML
//     }
// }



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