function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const num = document.querySelector('input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes');

// --------------------------------------------------------
createBtn.addEventListener('click', () => {
  const amount = Number(num.value);
  num.value = null;

  if(amount < 1 || amount > 100) {
    return;
  }

  let div = '';
  for (let i = 0; i < amount; i++) {
    const color = getRandomHexColor();
    const size = 30 + 10 * i + 'px';
    div += `<div style="width: ${size}; height: ${size}; background-color: ${color}"></div>`;
  }

  boxes.innerHTML = div;
})

// --------------------------------------------------------
destroyBtn.addEventListener('click', () => {
  num.value = null;
  boxes.innerHTML = '';
})

