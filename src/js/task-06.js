const inputText = document.querySelector('#validation-input');
console.log(inputText.value.length);

function handleControlSymbol() {
    if (inputText.value.length === Number(inputText.dataset.length)) {
        console.log('true');
        return inputText.classList.add('valid');
    } else {
        inputText.classList.add('invalid');
        console.log('false');
    }
}
inputText.addEventListener('blur', handleControlSymbol);
