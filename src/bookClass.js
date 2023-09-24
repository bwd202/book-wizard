export {Book}
import { myLibrary } from "./bookStorage"

class Book {
    
  constructor({title = 'default', author = 'default', year = 1970, read = false} = {}) {

    this.title = title
    this.author = author
    this.year = year
    this.read = read
  }

  // get book() {
  //   return this
  // }

  // static {
    
  //   let newBook = new Book(newBook.book)
  //   myLibrary.push(newBook)
  //   console.log(myLibrary)
  // }

}