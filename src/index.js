import './style.css'
import { createCard } from './createCard'
import { getBook } from './getBook'

// TESTING

let defaultBook = {
  title: 'The Dharma Bums',
  author: 'Jack Kerouac',
  year: 1958,
  read: false,
}

let defaultBook1 = {
  title: 'To Kill a Mockingbird',
  author: 'Harper Lee',
  year: 1960,
  read: true,
}

document.querySelector('#main').append(createCard(getBook(defaultBook)))
document.querySelector('#main').append(createCard(getBook(defaultBook1)))

// 

let script = document.head.getElementsByTagName('script')[0]

script.setAttribute('type', 'module')

const modal = document.getElementById('modal');

const modalBtn = document
  .getElementById('modal-toggle-btn')
  .addEventListener('click', () => {
    modal.classList.remove('hidden');
    modal.classList.add('visible');
  });

window.onclick = function (e) {
  if (e.target === modal) {
    modal.classList.remove('visible');
    modal.classList.add('hidden');
  }
};

const modalCloseBtn = document.querySelector('#modal-close-btn').addEventListener('click', () => {
  modal.classList.add('hidden');
  modal.classList.remove('visible');
})

function displayNewBook(e) {
  
  e.preventDefault()

  document.querySelector('#main').append(createCard(getBook()))

}

const addBookBtn = document
  .querySelector('#add-book-btn')
  .addEventListener('click', displayNewBook);

const resetModal = document.querySelector('#reset-modal-btn').addEventListener('click', (e)=> {
  e.preventDefault()
  document.querySelectorAll('#modal-content input').forEach((input)=> {
    input.value = ''
  })
})