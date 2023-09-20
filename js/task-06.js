const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener("blur", () => {
    const inputValue = validationInput.value.trim().length;


    const expectedLength = parseInt(validationInput.getAttribute('data-length'));

    if (inputValue === expectedLength){
        validationInput.classList.remove('invalid');
        validationInput.classList.add('valid');
    } else {
        validationInput.classList.remove('valid');
        validationInput.classList.add('invalid');
    }
});

