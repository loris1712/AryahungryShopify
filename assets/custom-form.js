function onSubmit() {
    const emailAddress = '{{ section.setting.emailDestination }}'; ;
  const name = document.getElementById('form-input-name');
  const phone = document.getElementById('form-input-phone');
  const message = document.getElementById('form-input-message');
  
  const payload = {
    emailAddress,
    name,
    phone,
    message,
  };

  console.log(payload);
}
