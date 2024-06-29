function onSubmit(sectionId) {
    const emailAddress = document.getElementById('destinationEmail').value;
  const name = document.getElementById('form-input-name').value;
  const phone = document.getElementById('form-input-phone').value;
  const message = document.getElementById('form-input-message').value;
  
  const payload = {
    sectionId,
    emailAddress,
    name,
    phone,
    message,
  };

  console.log(payload);
}
