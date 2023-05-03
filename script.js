const myLibrary = [];

function Book(title, author, year, read) {
  this.title = title,
  this.author = author,
  this.year = year,
  this.read = read
}

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

function addBook(e) {
  e.preventDefault();

  let title = document.querySelector('#title').value;
  let author = document.querySelector('#author').value;
  let year = document.querySelector('#year').value;
  // let read = document.querySelector('#read').value;

  const newBook = new Book(title, author, year);

  myLibrary.push(newBook);
}
