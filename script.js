const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();

function updateStorage() { /* the notes will be saved in the browser */
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener('click', () => {
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className = 'input-box';
    inputBox.setAttribute('contenteditable', 'true'); /* setAttribute() allows user to edit inputBox */
    img.src = 'images/delete.png';
    notesContainer.appendChild(inputBox).appendChild(img); /* appendChild() displays inputBox & img */
})

notesContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'IMG') {
       e.target.parentElement.remove(); /* remove() removes inputBox & img */
       updateStorage();
    }
    else if(e.target.tagName === 'P') {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function() {
                updateStorage();
            }
        })
    }
})

document.addEventListener('keydown', event => {
    if(event.key === 'Enter') {
        document.execCommand('insertLineBreak');
        event.preventDefault(); /* preventDefault() prevents the default action of the event */
    }
})