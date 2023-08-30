const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const formObject = {};

  formData.forEach((value, name) => {
    formObject[name] = value;
  });

  if (!formObject.email || !formObject.password) {
    alert("All fields must be filled!");
    return;
  }

  console.log(formObject);
  loginForm.reset();
}
