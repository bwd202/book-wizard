export {getBook}
import { myLibrary } from './bookStorage'

class Book {
    
    constructor({title = 'default', author = 'default', year = 1970, read = false} = {}) {
  
      this.title = title
      this.author = author
      this.year = year
      this.read = read
    }
  }

// gets book info from modal and returns new book obj
// pushes book to library
function getBook(testObj) {

    if(testObj) return testObj

    // modal fields
    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let year = document.querySelector('#year').value
    let read = document.querySelector('#read').checked

    // myLibrary.push(book)
    console.log(myLibrary)

    return new Book({title, author, year, read})
}
