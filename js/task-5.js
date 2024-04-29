function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const widget = document.querySelector('.widget');
const spanText = document.querySelector('span');
const button = document.querySelector('.change-color');


button.addEventListener('click', () => {
  spanText.textContent = getRandomHexColor();
  widget.style.backgroundColor = getRandomHexColor();
})