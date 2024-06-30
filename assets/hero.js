document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('herodateinput').value ?? "";
    var currentDate = moment.now().format('MM/DD/YYYY hh:mm:ss');
    console.log({ releaseDate, currentDate, dateInput });
})