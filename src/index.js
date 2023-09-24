import './style.css'
import { createCard } from './createCard'
import { getBook } from './getBook'
import { myLibrary } from './bookStorage'

let script = document.head.getElementsByTagName('script')[0]

script.setAttribute('type', 'module')

// let test = new Book(getBook())

// createCard(test)

// MODAL
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
})

function displayNewBook(e) {
  
  e.preventDefault()

  document.querySelector('#main').append(createCard(getBook()))

}

// function pushBookToArr(arr) {

//   arr.push()
// }

const addBookBtn = document
  .querySelector('#add-book-btn')
  .addEventListener('click', displayNewBook);

const resetModal = document.querySelector('#reset-modal-btn').addEventListener('click', (e)=> {
  e.preventDefault()
  document.querySelectorAll('#modal-content input').forEach((input)=> {
    input.value = ''
  })
})