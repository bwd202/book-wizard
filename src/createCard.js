export {createCard}

function createCard({title = 'default', author = 'default', year = 1970, read = false} = {}) {

    let wrapper = new DocumentFragment()
  
    const main = document.querySelector('#main');
    const card = document.createElement('div');
  
    card.classList.add('border','border-gray-500','flex', 'flex-col', 'justify-between', 'items-center' ,'p-4', 'rounded-lg', 'shadow-md');
  
    // card.setAttribute('data-book-index', myLibrary.indexOf(newBook))
  
    main.append(card);
  
    // GUI
    const removeBookBtn = document.createElement('button')
    removeBookBtn.classList.add('self-end', 'scale-125', 'remove-book-btn')
    removeBookBtn.innerHTML = '&times;'
  
    // removeBookBtn.setAttribute('data-book-index', myLibrary.indexOf(newBook))
    removeBookBtn.addEventListener('click', (()=> {
      card.remove()
    }))
    card.appendChild(removeBookBtn)
  
    const bookTitle = document.createElement('h2');
    bookTitle.classList.add('font-bold','text-lg')
    bookTitle.textContent = `${title}`;
  
    card.appendChild(bookTitle);
  
    const bookAuthor = document.createElement('p');
    bookAuthor.textContent = `${author}`;
  
    card.appendChild(bookAuthor);
  
    const bookYear = document.createElement('p');
    bookYear.textContent = `${year}`
  
    card.appendChild(bookYear);
  
    const bookRead = document.createElement('input');
    bookRead.setAttribute('type','checkbox')
    bookRead.classList.add('accent-gray-400')
  
    if(read) bookRead.checked = true;
  
    card.appendChild(bookRead);
    
    // bookRead.addEventListener('change', ()=> {
    //   if(bookRead.checked) newBook.read = true;
    //   else if (!bookRead.checked) newBook.read = false;
    // })
  
    return wrapper
  }