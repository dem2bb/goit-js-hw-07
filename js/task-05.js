const showName = document.querySelector('#name-output');
const input = document.querySelector('#name-input');

// input.addEventListener('change', event => {
//   showName.textContent = event.target.value ? event.target.value : 'незнакомец';
// });

// ЛИБО 2 ВАРИАНТ
input.addEventListener('input', event => {
  showName.textContent = event.target.value ? event.target.value : 'незнакомец';
});
