const inputChangeRange = document.querySelector('#font-size-control');
console.log(inputChangeRange);
const textFontChange = document.querySelector('#text');
console.log(textFontChange);
function handleChangeFont(event) {
    textFontChange.style.fontSize = event.currentTarget.value + 'px';
}
inputChangeRange.addEventListener('input', handleChangeFont);
