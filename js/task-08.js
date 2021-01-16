let input = document.querySelector('#boxes');
const getRandom = item => Math.floor(Math.random() * Math.floor(item));

const createBoxes = amount => {
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i++) {
    let div = document.createElement('div');
    div.style.width = width + i * 10 + 'px';
    div.style.height = height + i * 10 + 'px';
    div.style.backgroundColor = `rgb(${getRandom(255)}, ${getRandom(
      255,
    )}, ${getRandom(255)})`;
    input.appendChild(div);
  }
};

const destroyBoxes = () => {
  let cont = document.querySelector('#boxes');
  cont.textContent = '';
};

const addButton = document.querySelector(
  '#controls button[data-action="render"]',
);
const removeButton = document.querySelector(
  '#controls button[data-action="destroy"]',
);

addButton.addEventListener('click', event => {
  createBoxes(event.target.previousElementSibling.value);
});
removeButton.addEventListener('click', destroyBoxes);
