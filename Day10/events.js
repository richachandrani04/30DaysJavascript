// Activity 1 -> Basic Event Handling.

//Task 1 -> Add Click event and change the text.
const btn = document.querySelector('.button')
const p = document.querySelector('.txt')
btn.addEventListener('click', (event) => {
    p.textContent = "You clicked the button!"
})

//Task 2 -> Add Double-Click event listener to image and toggle its visibility.
const img = document.querySelector('.img')
img.addEventListener('dblclick', (event) => {
    if(img.style.display === "none") {
        img.style.display = "block";
    } else {
        img.style.display = "none";
    }
})



// Activity 2 -> Mouse Events.
//Task 3 -> Add Mouseover event listener that changes background color.
p.addEventListener('mouseover', (event) => {
    p.style.color = "red";
})
//Task 4 -> Add Mouseout event listener that reset its background color.
p.addEventListener('mouseout', (event) => {
    p.style.color = "white";
})


// Activity 3 -> Keyboard Events.
//Task 5 -> Add Keydown event listener to an input field that logs the key pressed to console.
const input = document.querySelector("input[type=text]")
input.addEventListener('keydown', (event) => {
    console.log("Key Pressed")
})

//Task 6 -> Add Keyup event listener to an input field that displays the current value.
const display = document.querySelector('.display')
input.addEventListener('keyup', (event) => {
    display.textContent =event.target.value
})


// Activity 4 -> Form Events.
//Task 7 -> Add submit event listener to a form that prevents the default submission and log the form data to console.
const form = document.getElementById('form')
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    for (let [name, value] of formData) {
        console.log(`${name}: ${value}`);
    }
})

//Task 8 -> Add change event listener to select dropdown that displays the selected value in paragraph.
const select = document.querySelector('.dropdown');
const displayParagraph = document.querySelector('.display2');

select.addEventListener('change', (event) => {
    displayParagraph.textContent = `Selected value: ${event.target.value}`;
});


// Activity 5 -> Delegation Events.
//Task 9 -> Add a click event listener to a list that log the text content of a clicked list item using event delegation.

const list = document.querySelector('.list');

list.addEventListener('click', (event) => {
    if (event.target && event.target.nodeName === 'LI') {
        console.log(`Clicked item text: ${event.target.textContent}`);
    }
});




