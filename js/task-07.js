const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');
console.log(text);
input.addEventListener('input', event => {
  const defaultValue = 16;
  let value = (defaultValue * event.target.value) / 50;
  text.setAttribute('style', `font-size: ${value}px`);
});

//ЛИБО МОЖНО БЫЛО СДЕЛАТЬ ПРОЩЕ
//text.setAttribute('style', `font-size: ${event.target.value}px`);
