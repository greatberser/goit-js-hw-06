function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('#controls input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const containerBoxes = document.querySelector('#boxes');

createBtn.addEventListener("click", () => {
  createBoxes(Number(input.value))
});
destroyBtn.addEventListener("click", removeBoxes);


function createBoxes(amount) {
  const containerBoxes = document.querySelector("#boxes");

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    const size = 30 + i * 10;
    const color = getRandomHexColor();

    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = color;

    containerBoxes.appendChild(box);
  }
}

function removeBoxes(){
  containerBoxes.innerHTML = '';
}