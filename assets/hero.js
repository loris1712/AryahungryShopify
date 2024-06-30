document.addEventListener('DOMContentLoaded', function() {
    console.log("LOADING")
    const dateInput = document.getElementById('herodateinput').value ?? "";
    console.log({ dateInput });

    const bannerDate = document.getElementById('banner-date');
    bannerDate.innerHTML = "WELCOME";
        console.log('DONE');

})