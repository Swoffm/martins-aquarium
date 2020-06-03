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