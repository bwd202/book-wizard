const myLibrary = [];

function Book(title, author, year, read) {
  (this.title = title),
    (this.author = author),
    (this.year = year),
    (this.read = read);
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

const modalObj = {
  title: document.querySelector('#title'),
  author: document.querySelector('#author'),
  year: document.querySelector('#year'),
  read: document.querySelector('#read'),
  addBook: function (e) {
    e.preventDefault();
    const newBook = new Book(title.value, author.value, year.value, read.value);
    myLibrary.push(newBook);
    createCard();
  },
};

const addBookBtn = document
  .querySelector('#add-book-btn')
  .addEventListener('click', modalObj.addBook);

// Card
function createCard() {
  for (book of myLibrary) {
    const card = document.createElement('div');
    document.querySelector('#main').appendChild(card);
    card.outerHTML = `<div id='bookTitle' class='bg-slate-500 w-6 h-10'>${book.title}</div>`;

    // const heading = document.createElement('h2');
    // const title = document.createElement('p');
    // title.createTextNode(book.title);
    // const author = document.createElement('p');
    // const year = document.createElement('p');
    // card.append(heading, title, author, year);
    
  }

}
