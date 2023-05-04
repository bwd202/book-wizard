const myLibrary = [];
const newBook = new Book(title, author, year);

function Book(title, author, year, read) {
    this.title = title,
    this.author = author,
    this.year = year,
    this.read = read;
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

const addBookBtn = document
  .querySelector('#add-book-btn')
  .addEventListener('click', addBook);

function addBook(e) {
  e.preventDefault();

  // const title = document.querySelector('#title').textContent;
  // const author = document.querySelector('#author').value;
  // const year = document.querySelector('#year').value;
  // // let read = document.querySelector('#read').value;

  // myLibrary.push(newBook);

  // createCard(title, author, year);

  document.createElement('div').textContent = 'hello'
}

// Card

function createCard(title, author, year) {
  // for(book in myLibrary) {

  // }
  let mainDiv = document.querySelector('#main');

  // if (myLibrary) {
  //   console.log(myLibrary);
  // }

  let card = document.createElement('div');
  let cardHeader = document.createElement('h2');
  title = this.title;
  let bookAuthor = document.createElement('p');
  let bookYear = document.createElement('p');

  card.append(cardHeader, title, bookAuthor, bookYear);

  mainDiv.appendChild(card);
}
