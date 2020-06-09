// function

const quotesList = () => {

//iterate
for (currentQuote of quotesDataCollection) {

//convert
const quoteHTMLConverted = quotesConverter(currentQuote)

// find querryslectior
const quoteLocation = document.querySelector(".quoteList")


// place the html in the selector

quoteLocation.innerHTML += quoteHTMLConverted
}

}


const quotesVisibilityButton = document.querySelector(".toggleQuotes")

quotesVisibilityButton.addEventListener("click", clickEvent => {
    document.querySelector(".quoteList").classList.toggle("hidden")
})