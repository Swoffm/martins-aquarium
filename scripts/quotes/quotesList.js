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