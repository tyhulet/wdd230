const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('ul');
button.addEventListener('click', function () {
    if (input.value != '') {
    }
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = input.value;
    deleteButton.textcontent = '📌';
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        input.focus();
    })
    input.focus();
    input.value = '';
});




