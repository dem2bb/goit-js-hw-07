const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const allIngs = ingredients.map(item => {
  const items = document.createElement('li');
  items.textContent = item;
  return items;
});

const ingredientsList = document.querySelector('#ingredients');

ingredientsList.append(...allIngs);
