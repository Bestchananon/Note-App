const addBtn = document.querySelector('#add');
const textArea = document.querySelector('.text-area textarea');
const notes = document.querySelector('.notes');
const colorInput = document.querySelector('#color');
const sizeInput = document.querySelector('#size')

addBtn.addEventListener('click',(e) => {
    if(textArea.value === '') {
        alert('Please Enter a note.');
        box.remove();
    }

    const box = document.createElement('div');
    box.className = 'box';
    const text = document.createElement('p');
    const closeBtn = document.createElement('button');
    notes.appendChild(box);
    box.appendChild(text);
    box.appendChild(closeBtn);
    closeBtn.innerHTML = 'X';
    closeBtn.addEventListener('click',() => {
        box.remove();
    })
    text.innerHTML = textArea.value;
    text.style.color = colorInput.value;
    text.style.fontSize = sizeInput.value + 'px';
    
    if(textArea.value === text.innerHTML) {
        textArea.value = '';
    }
});

colorInput.addEventListener('change',() => {
    textArea.style.color = colorInput.value;
});

sizeInput.addEventListener('change',() => {
    textArea.style.fontSize = sizeInput.value + 'px';
});