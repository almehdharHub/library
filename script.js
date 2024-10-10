// array to store books
const library = [];

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.toggleRead = function () {
    this.read = !this.read;
  };
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
  };
}

function displayBooks() {
  const books = document.getElementById("books");
  books.innerHTML = "";
  library.forEach((book, index) => {
    books.innerHTML += `
    <tr>
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.pages}</td>
      <td>${book.read ? "Yes" : "No"}</td>
      <td><button class="remove-book" data-index="${index}">Remove</button></td>
      <td><button class="toggle-read" data-index="${index}">${
      book.read ? "Mark as Unread" : "Mark as Read"
    }</button></td>
    </tr>
    `;
  });

  // Add event listeners for toggle read and remove buttons
  document.querySelectorAll(".toggle-read").forEach((button) => {
    button.addEventListener("click", toggleReadStatus);
  });
  document.querySelectorAll(".remove-book").forEach((button) => {
    button.addEventListener("click", removeBook);
  });
}
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  library.push(book);
  displayBooks();
}
function toggleReadStatus(e) {
  const index = e.target.getAttribute("data-index");
  library[index].toggleRead();
  displayBooks();
}

function removeBook(e) {
  const index = e.target.getAttribute("data-index");
  library.splice(index, 1); // Remove book from array
  displayBooks();
}
const newBookButton = document.getElementById("newBookButton");
const modal = document.querySelector("dialog");
newBookButton.addEventListener("click", () => {
  modal.showModal();
});
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;

  // Add the new book to library
  addBookToLibrary(title, author, pages, read);

  // reset the form
  form.reset();
});
const closeButton = document.getElementById("closeButton");
closeButton.addEventListener("click", () => {
  modal.close();
});
addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, true);
addBookToLibrary("The Lord of the Rings", "J.R.R. Tolkien", 1178, false);
addBookToLibrary("The Catcher in the Rye", "J.D. Salinger", 277, false);
displayBooks();
