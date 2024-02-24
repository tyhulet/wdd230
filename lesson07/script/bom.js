const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');
button.addEventListener('click', function () {
    if (input.value != '') {
        input.focus();
    }
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    })
    input.focus();
    input.value = '';
});

btn.addEventListener('click', () => {
    if (input.value != '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        localStorage.setItem('myFavChapters', JSON.stringify(chaptersArray));
        input.value = '';
    }
});
