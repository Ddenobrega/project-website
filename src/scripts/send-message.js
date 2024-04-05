function sendMessage(e) {
  e.preventDefault();
  const email = document.getElementsByName("email")[0];
  const message = document.getElementsByName("message")[0];
  console.log(email.value);
}
