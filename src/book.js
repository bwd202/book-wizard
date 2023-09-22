
class Book {

    constructor({title = 'title', author = 'author', year = 1970, read = false}) {
  
      this.title = title
      this.author = author
      this.year = year
      this.read = read
    }
  
    get book() {
      return this
    }
  
    addBook(e) {
      e.preventDefault();
      let newBook = this.book()
      myLibrary.push(newBook)
      this._index = myLibrary.indexOf(newBook)
    }
  
    // getBookIndex() {
    //   return 
    // }
  }