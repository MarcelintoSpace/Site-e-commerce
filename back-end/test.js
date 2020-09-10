class newBook {
  constructor (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
}

let myBook = Book (
  title = "l'histoire de ma vie",
  author = "Alexander",
  pages = 250
);

console.log(myBook);
