export {getBook}
import {Book} from './bookClass'
import { myLibrary } from './bookStorage'

// gets book info from modal and returns new book obj
// pushes book to library
function getBook() {

    // modal fields
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let year = document.querySelector('#year').value
    let read = document.querySelector('#read').checked

    let book = new Book({title, author, year, read})

    myLibrary.push(book)
    console.log(myLibrary)

    return book
}