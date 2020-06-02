

const quotesConverter = (quotesObject) => {
    // add variable with html
    const quotesHTML = `<section class="quote">${quotesObject.quote}<p>${quotesObject.author}</p></section>`

    //return the variable
    return quotesHTML
}