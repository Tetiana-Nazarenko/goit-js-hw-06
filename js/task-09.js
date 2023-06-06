function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
const btnChangeColor = document.querySelector('.change-color');
console.log(btnChangeColor);
const color = document.querySelector('.color');
btnChangeColor.addEventListener('click', () => {
    color.textContent = getRandomHexColor();
    document.body.style.backgroundColor = color.textContent;
});
