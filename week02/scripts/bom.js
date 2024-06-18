const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')
const li = document.createElement('li');
const delButton = document.createElement('button');

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        li.textContent = input.value;
        delButton.textContent = '❌';
        li.append(delButton);
        list.append(li);
    } else {
        window.alert('Insert a value');
        input.focus
    }
});

delButton.addEventListener('click', () => {
    list.removeChild(li);
    input.focus();
    input.value = '';
});





