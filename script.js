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

let myLibrary = [
    {title: 'naruto', author: 'sasuke', pages: 200, read: 'read'},
    {title: 'aqua', author: 'aria', pages: 333, read: 'read'},
];

let newBook;

function addBookToLibrary(title, author, pages, read) {
    const newBook = new book(title, author, pages, read);
    myLibrary.push(newBook);
}

/* function displayBook() {
    myLibrary.forEach(toTable)
} */


// Table
const table = document.querySelector('.mainTable');

function toTable() {

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


// rowsToDelete = document.getElementsByClassName('test');
function deleteARow() {
    rowsToDelete = document.getElementsByClassName('test');
    for (let i = 0; i < rowsToDelete.length; i++) { // ini kondisi length salah sebelumnya 
        let row = rowsToDelete[i];
        // Delete current element from the table

        row.remove() // pake method remove ini aja karena udh spesifik dapetin elemennya
    }
}


function deleteRowws() {
    if (typeof newRow !== undefined) {
        // Get a collection of elements with the class name
        let rowsToDelete = document.getElementsByClassName('test');
        
        // Use a for loop to iterate over the collections of elements
        for (let i = 0; i < rowsToDelete.length; i++) {
            let row = rowsToDelete[i];

            // Delete current element from the table
            table.deleteRow(row);
        }
    
    }
}