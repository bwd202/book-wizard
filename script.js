const myLibrary = [];

function Book(title, author, year, read) {
    this.title = title
    this.author = author
    this.year = year
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

const modalCloseBtn = document.querySelector('#modal-close-btn').addEventListener('click', () => {
    modal.classList.remove('flex');
    modal.classList.add('hidden');
});

const modalObj = {
  title: document.querySelector('#title'),
  author: document.querySelector('#author'),
  year: document.querySelector('#year'),
  read: document.querySelector('#read'),
  addBook: function (e) {
    e.preventDefault();
    const newBook = new Book(title.value, author.value, year.value, read.value);
    myLibrary.push(newBook);
    // createCard();
    function createCard() {
      const main = document.querySelector('#main');
      const card = document.createElement('div');
      card.classList.add('border-2', 'flex', 'flex-col', 'justify-between', 'items-center' ,'p-4', 'rounded-lg');
      main.appendChild(card);
      // card content
      const cardCloseBtn = document.createElement('button')
      cardCloseBtn.classList.add('self-end')
      cardCloseBtn.innerHTML = '&times;'
      card.appendChild(cardCloseBtn)
      const bookTitle = document.createElement('h2');
      bookTitle.textContent = `${newBook.title}`;
      card.appendChild(bookTitle);
      const bookAuthor = document.createElement('p');
      bookAuthor.textContent = `${newBook.author}`;
      card.appendChild(bookAuthor);
      const bookYear = document.createElement('p');
      bookYear.textContent = `${newBook.year}`
      card.appendChild(bookYear);
      const bookRead = document.createElement('input');
      bookRead.setAttribute('type','checkbox')
      bookRead.classList.add('accent-gray-400')
      bookRead.checked = true
      card.appendChild(bookRead);
    }
    return createCard();
  },
};

const addBookBtn = document
  .querySelector('#add-book-btn')
  .addEventListener('click', modalObj.addBook);
