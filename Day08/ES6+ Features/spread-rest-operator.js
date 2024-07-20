// Activity 3 -> Spread and Rest Operator.

//Task 5 -> create new array and add new element with existing array elements.
const arr = ['Programming']
const newArr = ['Competitive',...arr,'With','Javascript']
console.log(newArr)

//Task 6 -> use rest operator in a function to accept an arbitrary number of arguments, sum them and return result.
function sum(...numbers) {
    return numbers.reduce((acc, current) => acc + current, 0);
}
console.log(sum(2,2,2,2,6))




// Activity 4 -> write a functions that takes two parameters and return their product, with second parameter having default value of 1.

const product = (name,quantity= 1) => {
    return `${name} ${quantity}`
}
console.log(product("Biscuit",2))
console.log(product("Biscuit"))





