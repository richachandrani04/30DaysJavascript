// Activity 1 -> Object Creation and Access

//Task 1 ->Create an object of books.
const books = {
    title: "Book 1",
    author: "John Doe",
    year: 2022
}
console.log("Object", books)
//Task 2 ->Access and log title and author property.
console.log(`The Title of books is ${books.title} written by author ${books.author} `)


// Activity 2 -> Object Methods

//Task 3 ->Add method to object.
books.getString = function () {
    return `${books.title} by ${books.author}`;
}
console.log(books.getString())
//Task 4 ->Add method to object that takes parameter and update the object.
books.updateYear = function (newYear) {
    this.year = newYear;
}
console.log(books.updateYear(2000))
console.log("Updated books", books)


// Activity 3 -> Nested Objects

//Task 5 ->Create nested object.
const library = {
    name: "Somayaji Library",
    books: [{
        title: "Book 1",
        author: "John Doe",
        year: 2022
    }, {
        title: "Book 2",
        author: "Bloody Marry",
        year: 2021
    }
    ]
}
console.log("library",library)
//Task 6 ->Access and log library name and title of books.
console.log(`${library.name} has books with title: ${library.books.map(book => book.title)}`)



// Activity 4 -> this keyword
//Task 7 ->add method to books object.
books.getStringByThis = function () {
    return `${this.title} by ${this.author}`;
}
console.log(books.getStringByThis())

// Activity 5 -> Object iteration
//Task 8 ->for in.
for (let i in books) {
    console.log(i, books[i]);
}
//Task 9 ->Object.keys.
Object.keys(books).map(key => console.log(key));
Object.values(books).map(book => console.log(book))








