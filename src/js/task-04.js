let counterValue = 0;
const increment = () => {
    counterValue += 1;

    document.getElementById('value').textContent = counterValue;
};

const decrement = () => {
    counterValue -= 1;

    document.getElementById('value').textContent = counterValue;
};
const btnElDecrem = document.querySelector('[data-action= "decrement"]');
btnElDecrem.addEventListener('click', decrement);
const btnElIncrem = document.querySelector('[data-action= "increment"]');

btnElIncrem.addEventListener('click', increment);
