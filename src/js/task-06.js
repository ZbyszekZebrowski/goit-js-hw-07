input.addEventListener("blur", () => {
  const desiredLength = parseInt(input.dataset.length, 10);
  const enteredLength = input.value.length;

  if (enteredLength === desiredLength) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});