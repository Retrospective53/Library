const object1 = {
    Height : 180,
    Width : 100,
}

function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title + ' ' + author + ' ' + pages + ' ' + read
    }
    
}   

let myLibrary = [];

function addBookToLibrary() {
    const newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
}