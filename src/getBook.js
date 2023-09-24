export {getBook}
import {Book} from './bookClass'

// gets book info from modal and returns new book obj
function getBook() {

    // modal fields
   let title = document.querySelector('#title').value
   let author = document.querySelector('#author').value
   let year = document.querySelector('#year').value
   let read = document.querySelector('#read').checked

    return new Book({title, author, year, read})
}