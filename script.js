const library = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}.`;
  };
}

const booksTable = document.querySelector("table");
function removeBookFromLibrary(title) {
  const book = document.getElementById(title);
  book.remove();
  console.log(booksTable.innerHTML);
}
function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  console.log(book.info());
  library.push(book);
  booksTable.innerHTML += `
  <tr id="book${library.indexOf(book)}">
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td>${book.read}</td>
    <td><button onclick="removeBookFromLibrary('book${library.indexOf(
      book
    )}')">remove</button></td>
  </tr>
  `;
}
const newBookButton = document.querySelector("button");
const modal = document.querySelector("dialog");
const submitButton = document.querySelector("#submit");
newBookButton.addEventListener("click", () => {
  modal.showModal();
});

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  const title = document.querySelector("[name=title]").value;
  const author = document.querySelector("[name=author]").value;
  const pages = document.querySelector("[name=pages]").value;
  const read = document.querySelector("[name=read]").value;
  console.log("return value", modal.returnValue);
  console.log(title, author, pages, read);
  addBookToLibrary(title, author, pages, read);
  document.querySelector("[name=title]").value = "";
  document.querySelector("[name=author]").value = "";
  document.querySelector("[name=pages]").value = 0;
  document.querySelector("[name=read]").value = "read";
});

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
