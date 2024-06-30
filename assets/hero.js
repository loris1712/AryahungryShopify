document.addEventListener('DOMContentLoaded', function() {
    console.log("LOADING")
    const dateInput = document.getElementById('herodateinput').value ?? "";
    var currentDate = moment.now().format('MM/DD/YYYY hh:mm:ss');
    console.log({ currentDate, dateInput });

    const bannerDate = document.getElementById('banner-date');
    bannerDate.innerHTML = "WELCOME";
        console.log('DONE');

})