const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    img.src = 'images/delete.png';
    notesContainer.appendChild(inputBox).appendChild(img); /* appendChild() method adds a node to the end of the list of children of a specified parent node. */
});