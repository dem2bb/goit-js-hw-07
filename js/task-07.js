const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
input.addEventListener('input', event => {
  let value = (16 * event.target.value) / 50;
  text.setAttribute('style', `font-size: ${value}px`);
});
