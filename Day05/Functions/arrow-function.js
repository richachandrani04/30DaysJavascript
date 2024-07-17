// Activity 3 -> Arrow Functions
//Task 5 ->Write an arrow function to calculate sum of two number.
const sum = (a,b) => (a + b);
console.log(sum(70,12));

//Task 6 ->Write an arrow function to check if string contains specific character.
const checkCharacter = () => {
    let str = "Richa"
    let result = str.includes('s')
    return result;
}
console.log(checkCharacter())