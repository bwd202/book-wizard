export {createCard}

function createCard(bookObj) {

    let wrapper = new DocumentFragment()
  
    const main = document.querySelector('#main');

    const card = document.createElement('div');
    card.classList.add('card');
  
    // card.setAttribute('data-book-index', myLibrary.indexOf(newBook))
  
    main.append(card);
  
    // GUI
    const removeBookBtn = document.createElement('button')
    removeBookBtn.classList.add('button')
    removeBookBtn.innerHTML = '&times;'
  
    // removeBookBtn.setAttribute('data-book-index', myLibrary.indexOf(newBook))
    removeBookBtn.addEventListener('click', (()=> {
      card.remove()
    }))
    card.appendChild(removeBookBtn)
  
    const bookTitle = document.createElement('h2');
    // bookTitle.classList.add('')
    bookTitle.textContent = bookObj.title
    card.appendChild(bookTitle);
  
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = bookObj.author
    card.appendChild(bookAuthor);
  
    const bookYear = document.createElement('p');
    bookYear.textContent = bookObj.year
    card.appendChild(bookYear);
  
    const bookRead = document.createElement('input');
    bookRead.setAttribute('type','checkbox')
  
    if(bookObj.read) bookRead.checked = true;
    card.appendChild(bookRead);
    
    // bookRead.addEventListener('change', ()=> {
    //   if(bookRead.checked) newBook.read = true;
    //   else if (!bookRead.checked) newBook.read = false;
    // })
  
    return wrapper
  }