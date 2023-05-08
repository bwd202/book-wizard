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
    const newBook = new Book(title.value, author.value, year.value, read.checked);
    myLibrary.push(newBook);
    // createCard();
    function createCard() {
      const main = document.querySelector('#main');
      const card = document.createElement('div');
      card.classList.add('border-2', 'flex', 'flex-col', 'justify-between', 'items-center' ,'p-4', 'rounded-lg');
      card.setAttribute('data-book-index', myLibrary.indexOf(newBook))
      main.appendChild(card);
      // card elements
      const removeBookBtn = document.createElement('button')
      removeBookBtn.classList.add('self-end', 'scale-125', 'remove-book-btn')
      removeBookBtn.innerHTML = '&times;'
      removeBookBtn.setAttribute('data-book-index', myLibrary.indexOf(newBook))
      removeBookBtn.addEventListener('click', (()=> {
        card.remove()
      }))
      card.appendChild(removeBookBtn)
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
      if(read.checked) bookRead.checked = true;
      card.appendChild(bookRead);
    }
    return createCard();
  },
};

const addBookBtn = document
  .querySelector('#add-book-btn')
  .addEventListener('click', modalObj.addBook);

const resetModal = document.querySelector('#reset-modal-btn').addEventListener('click', (e)=> {
  e.preventDefault()
  document.querySelectorAll('#modal-content input').forEach((input)=> {
    input.value = ''
  })

})