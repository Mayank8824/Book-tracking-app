// import { Book } from './Book.js';
const Book = require('./Book.js');

/*create three or four instances of the Book class
 * (using the new keyword).
 *
 */
// the class is imported from Book class module book
// we use new to instantiate the class instance variables: importing the Book class

let myBook1 = new Book('Freedom', 'Jomo Kenyatta', 360, 'the story of the African raise to self-independence', true);
let myBook2 = new Book('Lost Treasures of the Eastern Antiquity', 'Dr. Lucy Williams', 250, 'Redacting the 5000 most valued manuscripts', false);
let myBook3 = new Book('ESV Bible', 'Crossway', 2000, 'Global Study Bible', 2, true);
let myBook4 = new Book('The 300 men', 'John Fox', 770, 'The true story of the 300 warriors', 1, false);

// Create a bookList array which contains these instances.
// export const bookList = [myBook1, myBook2, myBook3, myBook4];
const bookList = [
    myBook1,
    myBook2,
    myBook3,
    myBook4
];

// export { bookList };
module.exports = (bookList)

// module.exports = bookList;
// export * from './Book'; // export everything