function onSubmit() {
  const name = document.getElementById('form-input-name');
  const phone = document.getElementById('form-input-phone');
  const message = document.getElementById('form-input-message');
  console.log(name);
  console.log(phone);
  console.log(message);

  if (name) {
    alert(name.value);
  }
}
