document.addEventListener('DOMContentLoaded', function () {
  console.log('LOADING');
  const dateInput = document.getElementById('herodateinput')?.value;
  if (dateInput) {
    const countdownDate = new Date(dateInput).getTime();

    const countDownFunction = setInterval(function () {
      const now = new Date().getTime();
      var distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const bannerDate = document.getElementById('banner-date');
      bannerDate.innerHTML = `${days} DAYS  ${hours} HR ${minutes} MIN ${seconds} SEC`;

      if(distance < 0){
        clearInterval(countDownFunction);
      }
    }, 1000);
  }
  console.log('DONE');
});
