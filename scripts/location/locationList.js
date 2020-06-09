const locationList = () => {
    // iterate using for of loop
    for (const currentLocationObject of locationCollection) {
        // convert the current LOCATION TO ITS HTML REPRESENTATION
        const locationHtml = locationConverter(currentLocationObject)

        // this looks for the article element in the index 
        const locationArticleElement = document.querySelector(".locationList")

        //put the Location HTML representation inside the article tag during each loop
        locationArticleElement.innerHTML += locationHtml

        //innerHTML allows editing to happen inside of the html document 
        //locationArticleElement has already be set equal to the .locationList class

    }
}


const locationVisibilityButton = document.querySelector(".toggleLocation")

locationVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".locationList").classList.toggle("hidden")
})