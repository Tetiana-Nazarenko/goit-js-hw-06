function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
const inputNumber = document.querySelector('[type="number"]');
console.log(inputNumber);
const btnCreate = document.querySelector('[data-create]');
console.log(btnCreate);
const btnDestroy = document.querySelector('[data-destroy]');
console.log(btnDestroy);
const divBoxes = document.querySelector('#boxes');
console.log(divBoxes);

inputNumber.addEventListener('input', inputValue);
let inputAmount = 0;

function inputValue(event) {
    let inputAmount = event.currentTarget.value;
    console.log(inputAmount);
}
btnCreate.addEventListener('click', () => {
    createBoxes(Number(inputNumber.value));
});

function createBoxes(amount) {
    const arr = [];
    let stepSize = 30;
    for (let i = 0; i < amount; i += 1) {
        stepSize += 10;
        const newDiv = document.createElement('div');
        newDiv.style.width = `${stepSize}px`;
        newDiv.style.height = `${stepSize}px`;
        newDiv.style.backgroundColor = getRandomHexColor();
        arr.push(newDiv);
        console.log('arr length', arr.length);
    }

    return divBoxes.append(...arr);
}
btnDestroy.addEventListener('click', destroyBoxes);
function destroyBoxes() {
    inputNumber.value = '';
    divBoxes.innerHTML = '';
}
