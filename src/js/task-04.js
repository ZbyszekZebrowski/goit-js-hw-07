const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const valueElement = document.querySelector("#value");

let counterValue = 0;

function updateCounterValue() {
  valueElement.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  updateCounterValue();
}

function increment() {
  counterValue += 1;
  updateCounterValue();
}

decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);

updateCounterValue();