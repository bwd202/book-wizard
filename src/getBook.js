export {getBook}

// gets book info from modal fields
function getBook() {

    let title = document.querySelector('#title').value
    let author = document.querySelector('#author').value
    let year = document.querySelector('#year').value
    let read = document.querySelector('#read').checked
    
    return {title, author, year, read}
}