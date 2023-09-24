export {getBook}
import {Book} from './bookClass'

// gets book info from modal and returns new book obj
function getBook() {

    // modal fields
    title = document.querySelector('#title').value
    author = document.querySelector('#author').value
    year = document.querySelector('#year').value
    read = document.querySelector('#read').checked

    return new Book({title, author, year, read})
}