export {Book}

class Book {

    // using destructuring and default option (i.e. empty object)
    constructor({title = 'default', author = 'default', year = 1970, read = false} = {}) {
  
      this.title = title
      this.author = author
      this.year = year
      this.read = read
    }
  
    // get book() {
    //   return this
    // }
  
    // addBook(e) {
    //   e.preventDefault();
    //   let newBook = this.book()
    //   myLibrary.push(newBook)
    //   this._index = myLibrary.indexOf(newBook)
    // }
  
    // getBookIndex() {
    //   return 
    // }
  }