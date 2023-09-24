export {getBook}

// gets book info from modal fields
function getBook() {

    let title = document.querySelector('#title')
    let author = document.querySelector('#author')
    let year = document.querySelector('#year')
    let read = document.querySelector('#read')
    
    return {title, author, year, read}
}