const locationConverter = (locationObject) => {
    const locationHTMLRepresenation = `<section class="location">
    <div class="">
        <img class="location__picture"
            src="${locationObject.image}"
            alt="Beautiful picture of ${locationObject.name}" />
    </div>
    <div class="location__details">
        ${locationObject.locationDetails}
    </div>
</section>`

return locationHTMLRepresenation;
}