// Activity 5 -> Higher Order Function
//Task 9 ->Write a higher order function and number, and call the function that many times.

const greetMessage = (name) => console.log(`Hello, ${name}!`)

const greet = (func,n) => {
    for(let i = 0; i < n; i++) {
        func("Shubh")
    }
}
console.log(greet(greetMessage,5))

//Task 10 ->Write a higher order function that takes two function and a value, applies the first function to that value and then applies the second function to the result.

const fun1 = (name) => {
    return `${name} from function 1`
}
const fun2 = (result) => console.log(`${result} from function 2`)

const dualFunction = (func1, func2 , value) => {
    const result = func1(value)
    func2(result)
}
dualFunction(fun1,fun2,"Richa")
