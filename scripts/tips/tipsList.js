const tipsList = () => {
    for (currentTips of tipsDataCollection) {
        
        //convert
        const convertedTips = tips(currentTips)
        //find
        const tipsLocation = document.querySelector('.tipList')

        //place 

        tipsLocation.innerHTML += convertedTips
    }
}


const tipVisibilityButton = document.querySelector(".toggleTips")

tipVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".tipList").classList.toggle("hidden")
})