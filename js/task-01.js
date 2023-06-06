const itemList = document.querySelectorAll('.item');
console.log('Number of categories:' + itemList.length);

itemList.forEach(item => {
    const title = item.firstElementChild.textContent;
    let oneTitle = item.lastElementChild.children;
    console.log('Category:' + title, 'Elements:' + oneTitle.length);
});
