const library = [];

const booksTable = document.querySelector("table");
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
  };
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  library.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "read");
addBookToLibrary(
  "The Lord of the Rings",
  "J.R.R. Tolkien",
  1178,
  "not read yet"
);
addBookToLibrary(
  "The Catcher in the Rye",
  "J.D. Salinger",
  277,
  "not read yet"
);
for (book in library) {
  booksTable.innerHTML += `
  <tr>
    <td>${library[book].title}</td>
    <td>${library[book].author}</td>
    <td>${library[book].pages}</td>
    <td>${library[book].read}</td>
  </tr>
  `;
}
