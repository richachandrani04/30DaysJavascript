// Activity 3 -> Importing Entire Module.

// Task 5 -> Create a module that export multiple constants and functions.

const module = () => {

    let age = 20;
    function happyBirthday() {
        return `Wish you happy Birthday! Your age is ${age} years.`
    }

    return { happyBirthday };

}

export default module;