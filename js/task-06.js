const inputText = document.querySelector('#validation-input');
console.log(inputText.value.length);

function handleControlSymbol() {
    if (inputText.value.length == Number(inputText.dataset.length)) {
        console.log('true');
        inputText.classList.add('valid');
        inputText.classList.remove('invalid');
    } else {
        inputText.classList.add('invalid');
        inputText.classList.remove('valid');
        console.log('false');
    }
}
inputText.addEventListener('blur', handleControlSymbol);
