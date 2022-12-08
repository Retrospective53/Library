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
    rowsToDelete = document.getElementsByClassName('test');

    const rowStartsFrom = rowsToDelete.length

    for (let i = 0; i < myLibrary.length; i++) {
        const newRow = document.createElement('tr');
        const bookTitle = document.createElement('td');
        bookTitle.textContent = myLibrary[i].title;
        const bookAuthor = document.createElement('td');
        bookAuthor.textContent = myLibrary[i].author;
        const bookPages = document.createElement('td');
        bookPages.textContent = myLibrary[i].pages;
        const bookRead = document.createElement('td');
        bookRead.textContent = myLibrary[i].read;
        
        newRow.className = `test item-${i+rowStartsFrom}`;

        newRow.appendChild(bookTitle);
        newRow.appendChild(bookAuthor);
        newRow.appendChild(bookPages);
        newRow.appendChild(bookRead);

        table.appendChild(newRow);
    }
}

function deleteARow() {
    // experimenting delete a row
    const header = document.getElementById('header');
    const rowsToDelete = header.parentNode.rows[header.rowIndex + 1]; // ambil row pertama setelah header

    if (rowsToDelete) rowsToDelete.remove() // remove

    /* -- Ini agak neh 
    
    rowsToDelete = document.getElementsByClassName('test');
    for (let i = 0; i < rowsToDelete.length; i++) { // ini kondisi length salah sebelumnya 
        let row = rowsToDelete[i];
        // Delete current element from the table

        row.remove() // pake method remove ini aja karena udh spesifik dapetin elemennya
    }

    -- */
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