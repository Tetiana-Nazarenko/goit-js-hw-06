const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
// *****
const list = document.querySelector('#ingredients');
console.log(list);
list.textContent = 'Ingredients';
//***
for (let i = 0; i < ingredients.length; i += 1) {
    let elementList = document.createElement('li');
    elementList.classList.add('item');
    elementList.textContent = ingredients[i];
    list.append(elementList);
    console.log(elementList);
}

//***
// const markup = ingredients
//     .map(ingredient => `<li class="item">${ingredient}</li>`)
//     .join('');
// console.log(markup);
// list.innerHTML = markup;
//***
