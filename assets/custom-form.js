function onSubmit(sectionId) {
  const emailAddress = document.getElementById(
    `${sectionId}-destinationEmail`,
  )?.value;
  const name = document.getElementById(`${sectionId}-form-input-name`)?.value;
  const phone = document.getElementById(`${sectionId}-form-input-phone`)?.value;
  const message = document.getElementById(
    `${sectionId}-form-input-message`,
  )?.value;

  const payload = {
    sectionId,
    emailAddress,
    name,
    phone,
    message,
  };

  console.log(payload);
}
