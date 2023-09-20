function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

btnChangeColor.addEventListener("click", function(){
  const randomColor = getRandomHexColor();

  document.body.style.background = randomColor;
  
  spanColor.textContent = randomColor;
});
