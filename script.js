//--- DOM Elements ---//
const newBookBtn = document.getElementById('new-book-btn');
const bookShelf = document.getElementById('bookshelf');
const bookTemplate = document.getElementById('book-template');
const popupForm = document.getElementById('form-modal-container');

// Library Data

let myLibrary = [
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkein',
    pages: 1965,
    readIt: true,
  },
  {
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkein',
    pages: 1965,
    readIt: true,
  },
  {
    title: 'The Fifth Circle',
    author: 'Alexander Solzhenitsyn',
    pages: 354,
    readIt: false,
  },
];

// Library Data management

function Book(title, author, pages, readIt) {
  // constructor for new books
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readIt = readIt;
  this.info = function () {
    return (infoStr = `Title: ${this.title} 
    \nAuthor: ${this.author} 
    \nPages: ${this.pages} 
    \nRead: ${this.readIt}`);
  };
}

function addBookToLibrary(book) {
  // store new book objects in myLibrary array
  myLibrary.push(book);
}

// UI management
function renderBooks() {
  myLibrary.forEach((book) => {
    // Clone the book template
    const bookCard = bookTemplate.content.cloneNode(true);

    // Add the book data to the bookCard
    bookCard.querySelector('.title').textContent = book.title;
    bookCard.querySelector('.author').textContent = book.author;
    bookCard.querySelector('.pages').textContent = book.pages;
    bookCard.querySelector('.readIt').textContent = book.readIt;

    // Add the book card to the bookshelf
    bookShelf.appendChild(bookCard);
  });
}

// UI > Modal functions

function showFormModal() {
  popupForm.classList.remove('hidden');
  popupForm.classList.add('showing');

  document.addEventListener('click', clickOutsideModal);
}

function hideFormModal() {
  popupForm.classList.remove('showing');
  popupForm.classList.add('hidden');
}


//--- Event Listeners ---//

document.addEventListener('DOMContentLoaded', startApp);

newBookBtn.addEventListener('click', function () {
  // Open the popup modal form
  showFormModal();
});

function startApp() {
  // Calls these functions only after the DOM is ready
  renderBooks();
}



