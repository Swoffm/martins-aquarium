
//this function allows for the html code to be put into the location and allows 
//a data object to be passed
const tips = (tipsObject) => {
//REMEBER TO SET A VARIABLE EQUAL TO THE HTML SECTION SO IT CAN BE CALLED!!

     const tipsHTML = `<section class="tip"> ${tipsObject.tip}</section>`
     
//remeber to return the value here 
     return tipsHTML
}