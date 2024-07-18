// Activity 1 -> Array Creation and Access

//Task 1 ->Create an array of number 1 to 5 and log result.
const nums = [1, 2, 3, 4, 5];
console.log("Array nums are:-",nums)

//Task 2 ->Access the first and last element.
const first = nums[0]
const last = nums[nums.length - 1];
console.log("First element:-",first)
console.log("Last element:-",last)


// Activity 2 -> Array Methods(Basic)

//Task 3 ->Use push method to add a new number to the end of the array.
nums.push(6)
console.log("Added number at end:-",nums)
//Task 4 ->Use pop method to remove a number from the end of the array.
nums.pop()
console.log("Removed number from end:-",nums)
//Task 5 ->Use shift method to remove a number from the array.
nums.shift()
console.log("Removed number using shift:-",nums)
//Task 6 ->Use unshift method to add a new number.
nums.unshift(1)
console.log("Added number using unshift:-",nums)


// Activity 3 -> Array Methods(Intermediate)

//Task 7 ->map.
const newNums = nums.map((num) => num*2)
console.log("New Array",newNums)
console.log("Previous Array",nums)
//Task 8 ->filter with newArray that contains only even number.
const evenNums = nums.filter((num) => num % 2 === 0)
console.log("New Array with only even numbers",evenNums)
//Task 9 ->reduce method to calculate sum of array.
const sum = nums.reduce((acc, num) => acc + num, 0)
console.log("Sum of array = ",sum)

// Activity 4 -> Array Iteration

//Task 10 -> use for loop to iterate over array.
for(let i = 1; i <= nums.length; i++) {
    console.log("Using for loop",i)
}
//Task 11 -> use forEach loop to iterate over array.
nums.forEach((num) => console.log("using forEach loop",num))

// Activity 5 -> Multi-dimensional Arrays

//Task 12 -> Create two dimensional array.
const matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(matrix)
//Task 13 -> Access and log specific array.
console.log(matrix[2][2])






















