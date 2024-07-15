// Activity 2 -> Nested If-Else Statements
//Task 3 ->Find largest number among 3 numbers.

const largestNumber = (n1, n2, n3) => {
    if (n1 >= n2 && n1 >= n3) {
        console.log(`${n1} is the greatest`);
    } else if (n2 >= n1 && n2 >= n3) {
        console.log(`${n2} is the greatest`);
    } else {
        console.log(`${n3} is the greatest`);
    }
}
largestNumber(6,4,1)

