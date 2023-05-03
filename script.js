// Modal
const modal = document.getElementById('modal');

const modalBtn = document
  .getElementById('modal-toggle-btn')
  .addEventListener('click', () => {
    modal.classList.toggle('hidden');
    modal.classList.toggle('flex');
  });

window.onclick = function (e) {
  if (e.target === modal) {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  }
};

const addBookBtn = document.querySelector('#add-book-btn').addEventListener('click', addBook);

//

let myLibrary = [];

function Book() {
  this.title = title,
  this.author = author,
  this.year = year,
  this.read = read
}

function addBook(e) {
  e.preventDefault();

  // document.createElement(div)
  
}