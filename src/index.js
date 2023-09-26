import './style.css'
import { createCard } from './createCard'
import { getBook } from './getBook'
import { Book } from './bookClass'

// TESTING

let test = {
  title: 'Doctor Zhivago',
  author: 'Boris Pasternak',
  year: 1970,
  read: true,
}

createCard(new Book(test))

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