const input = document.querySelector('#validation-input');

input.addEventListener('change', event => {
  input.classList.remove('valid', 'invalid');
  event.target.value.length <= input.getAttribute('data-length')
    ? input.classList.add('valid')
    : input.classList.add('invalid');
});
