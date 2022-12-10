const object1 = {
    Height : 180,
    Width : 100,
}

class book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.info = function() {
            return title + ' ' + author + ' ' + pages + ' ' + read
        }
    }
}

/* function book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return title + ' ' + author + ' ' + pages + ' ' + read
    }
    
}    */

let myLibrary = [
    {title: 'naruto', author: 'sasuke', pages: 200, read: 'read'},
    {title: 'aqua', author: 'aria', pages: 333, read: 'read'},
];

let newBook;

function addBookToLibrary(title, author, pages, read) {
    const newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
}

// Table
const table = document.querySelector('.mainTable');

function toTable() {

    // experimenting delete all rows
    const header = document.getElementById('header');

    let parentNode = header.parentNode // ambil parent nodenya
    // console.log(parentNode.rows)

    while (parentNode.rows.length > 1) {
        parentNode.removeChild(parentNode.lastChild);
    } // looping selama ada rows length lebih dari satu (ada data selain header) then remove them
    
    /* rowsToDelete = document.querySelectorAll('.test');
    
    for (let i = 0; i < rowsToDelete.length; i++) {
        rowsToDelete[i].remove();
    }
     */
    for (let i = 0; i < myLibrary.length; i++) {
        const newRow = document.createElement('tr');
        newRow.className = 'test';
        const bookTitle = document.createElement('td');
        bookTitle.textContent = myLibrary[i].title;
        const bookAuthor = document.createElement('td');
        bookAuthor.textContent = myLibrary[i].author;
        const bookPages = document.createElement('td');
        bookPages.textContent = myLibrary[i].pages;
        const bookRead = document.createElement('td');
        bookRead.textContent = myLibrary[i].read;

        newRow.appendChild(bookTitle);
        newRow.appendChild(bookAuthor);
        newRow.appendChild(bookPages);
        newRow.appendChild(bookRead);

        table.appendChild(newRow);
    }
}

function deleteAllRows() {
    // experimenting delete all rows
    const header = document.getElementById('header');

    let parentNode = header.parentNode // ambil parent nodenya
    // console.log(parentNode.rows)

    while (parentNode.rows.length > 1) {
        parentNode.removeChild(parentNode.lastChild);
    } // looping selama ada rows length lebih dari satu (ada data selain header) then remove them
}
