var Book = function(title, genre, author, read, readDate) {
    this.bookTitle = title;
    this.genre = genre;
    this.author = author;
    this.read = read;
    this.readDate = new Date(readDate);
};



var BookList = function(books){ //books is an array
    this.add = function(oneBook) {
        this.bookShelf.push(oneBook);
        if (oneBook.read === true) {
            this.booksRead.push(oneBook);
        } else {
            this.booksUnread.push(oneBook);
        }
    };
 
    this.numBooksRead = function(){
        return this.booksRead.length;
    };

    this.numBooksUnread = function(){
        return this.booksUnread.length;
    };


    //---------------------------------

    this.booksRead = [];
    this.booksUnread = [];
    this.bookShelf = [];

    for (var i = 0; i < books.length; i++) {
        this.add(books[i]);
    }

}; //end of the booklist

var harryPotter = new Book("Harry Potter & the Sorcerer's Stone", "Fiction", "J.K.Rowling", true, "1998");
var theBible = new Book("The Bible", "Religion", "God", false);
var warAndPeace = new Book("War And Peace", "Fiction", "Leo Tolstoy", false);
var pridePrejudice = new Book("Pride and Prejudice", "Fiction", "Jane Austen", true, "2008");

myBooks = [];
myBooks.push(harryPotter, theBible, warAndPeace);

var micasBookList = new BookList(myBooks);

console.log("How many read books: ", micasBookList.numBooksRead());
micasBookList.add(pridePrejudice);
console.log("How many read books: ", micasBookList.numBooksRead());
