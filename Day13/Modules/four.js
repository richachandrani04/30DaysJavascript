// Activity 4 -> Using Third-Party Module.

// Task 6 -> Install third party module using npm(lodash). Import and use a function from this module in a script.
import pkg, {find} from 'lodash';
import axios from "axios";
const {debounce} = pkg;


const myFunction = () => {
    console.log('Function called!');
};

const debouncedFunction = debounce(myFunction, 2000);
// console.log(debouncedFunction)

const users = [
    { 'user': 'barney', 'age': 36, 'active': true },
    { 'user': 'fred', 'age': 40, 'active': false }
];

const foundUser = find(users, { 'age': 36, 'active': true });
// console.log(foundUser);


// Task 7 -> Install a third-party module (axios) using npm. IMport and use this module to make a network request.
axios.get('https://api.example.com/data')
    .then(response => {
        // Handle the response data
        console.log('Data:', response.data);
    })
    .catch(error => {
        // Handle any errors
        console.error('Error:', error);
    });