const itemList = document.querySelectorAll('.item');
console.log(`Number of categories: ${itemList.length}`);

itemList.forEach(item => {
    const title = item.querySelector('h2').textContent;
    let oneTitle = item.querySelectorAll('li');
    console.log(`Category: ${title}, Elements:${oneTitle.length}`);
});
