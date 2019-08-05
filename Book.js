// import { bookList } from './database.js';
// const bookList = require('./database.js');
class Book {
    constructor(title, author, pages, description, read, { currentPage = 1 } = {}) {

            console.log('Testing the class constructor')
            this.title = title; // '' => will not return false or output title
            this.author = author;
            this.pages = Number(pages); //this.pages = Number(''); : passes 0 pages
            this.description = description;
            this.read = read;
            // Do not use Boolean as a constructor.
            // { read = Boolean() } = { 'read' }
            // this.read = Boolean(); // will pass falsy value: no input
            this.currentPage = currentPage;
            // Output creation message
            console.log(`'Created a Book via class: ${title} by ${author}'`)
        }
        /**
         * parameter) read: any
         * 'destructuring binding' is available in ES6 (use 'esversion: 6') or Mozilla JS
         * extensions (use moz). (W104)jshint(W104)
         *
         */

    // readBook method: shows current page for each book: takes a page number as an argument
    readBook(page) {
        // if (page < 1 || page > this.pages) {
        if (page === '' || page < 1 || page > this.pages) {
            return console.warn('page cannot be empty or negative or exceed the total page numbers on the book');
        } else if (page == this.pages) {
            this.currentPage = page;
            this.read = true;
        } else {
            this.currentPage = page;
            console.log(`I'm currently reading page ${this.currentPage} of the book titled ${this.title} by ${this.author}`);
        }
    }

}

// export { Book };
// yarn add global @types/node
module.exports = (Book);

// uncomment to test the class, the instantiated object book
let myBook5 = new Book('Freedom', 'Jomo Kenyatta', 360, 'the story of the African raise to self-independence', false);
let book1 = new Book('Clean Code', 'Robert C. Martin', 434, 'Even bad code can function. But if code isn t clean, it can bring a development organization to itsnknees.', true);

console.log(`The book has total of ${myBook5.pages} pages`); //
console.log(myBook5.description);
console.log(`Instantiated book object with read status as ${myBook5.read}`) // console.log(myBook5.read);
console.log(myBook5.currentPage);
console.log(myBook5.valueOf()); // will  return a function Object
//(method) Object.valueOf(): Object : Returns the primitive value of the specified object.

// invoking object instance with the method: (method) Book.readBook(page: any): void
console.log(book1.readBook(0)); // Output: Please input valid page number
console.log(book1.readBook(7)); // input page number
/**
 * (page: any): void
 * parameter) read: any 'destructuring binding' is available in ES6
 * (use 'esversion: 6') or Mozilla JS extensions (use moz). (W104)jshint(W104)
 */
//console.log(readBook(pages))
// console.log(readBook(page)).indexOf(1)
// importing the mocking database module
// console.log(myBook1.pages);

// to test the mock database.js : uncomment module exports and imports
// console.log(myBook3.read)
// console.log(myBook3.valueOf())