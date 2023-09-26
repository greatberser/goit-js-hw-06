const counterValue = document.querySelector('#value');
let currentValue = 0;

const decrementValue = document.querySelector('#counter button[data-action="decrement"]');
const incrementValue = document.querySelector('#counter button[data-action="increment"]');

decrementValue.addEventListener("click", () =>{
    currentValue -= 1;
    counterValue.textContent = currentValue;
});

incrementValue.addEventListener("click", () =>{
    currentValue += 1;
    counterValue.textContent = currentValue;
});