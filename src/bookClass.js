export {Book}

class Book {

    constructor({title = 'default', author = 'default', year = 1970, read = false} = {}) {
  
      this.title = title
      this.author = author
      this.year = year
      this.read = read
    }

  }