let counterValue = 0;

const addButton = document.querySelector(
  '#counter button[data-action="increment"]',
);
const removeButton = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');

value.textContent = counterValue;

const increment = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

addButton.addEventListener('click', increment);
removeButton.addEventListener('click', decrement);
