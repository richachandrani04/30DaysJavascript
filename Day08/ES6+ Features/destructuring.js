// Activity 2 -> Destructuring

//Task 3 -> use array destructuring to extract the first and second element from an array.
const array = [1,2,3,4,5,6]
 const [a,b] = array
console.log(a,b)

//Task 4 -> use object destructuring to extract the title and author from book object.
const books = {
    title: "Book 1",
    author: "John Doe",
    year: 2022
}
const {title,author} = books
console.log(`The book with title ${title} is written by author ${author}`)


