const refs = {
  input: document.querySelector('#controls'),
  addButton: document.querySelector('button[data-action="render"]'),
  clearButton: document.querySelector('button[data-action="destroy"]'),
};

const randomRgb = num => Math.round(Math.random() * 256);

function createBoxes(amount) {
  const width = 30;
  const height = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = width + i * 10 + 'px';
    box.style.height = height + i * 10 + 'px';
    box.style.backgroundColor = `rgb(${randomRgb()},${randomRgb()},${randomRgb()})`;
    refs.input.append(box);
  }
}

function destroyBoxes() {
  const div = document.querySelectorAll('#controls div');
  div.forEach(item => {
    item.remove();
  });
}

refs.addButton.addEventListener('click', event => {
  createBoxes(event.target.previousElementSibling.value);
});
refs.clearButton.addEventListener('click', destroyBoxes);
