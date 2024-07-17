// Activity 4 -> Function Parameters and default values
//Task 7 ->Write a function that takes two parameters and return their product. Provide default parameter of second
const product = (p1,p2="Biscuit") => {
    return p1 + ',' + p2 ;
}
console.log(product('Apple','Banana'))

//Task 8 ->Write a function for greeting message.
const greet = (name,age= 20) => {
    return `Good Morning ${name}! Welcome to the code zone.`
}
console.log(greet("Richa"))