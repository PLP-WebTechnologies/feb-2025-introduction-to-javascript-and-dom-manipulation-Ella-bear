// Define an object to store contact information
let contact = {
    email: "example@example.com",
    message: "This is a sample message",
    name: "John Doe"
};

// Log the contact object to the console
console.log(contact);

// Dynamically add list items
const list = document.getElementById("list"); // Select the <ul> element with id "list"
const addButton = document.getElementById("addButton"); // Select the button with id "addButton"

addButton.addEventListener("click", () => {
    const newItem = document.createElement("li"); // Create a new <li> element
    newItem.textContent = "New Item"; // Set the text content of the new list item
    list.appendChild(newItem); // Append the new list item to the <ul>
});

// Modify CSS 
const text = document.getElementById("text"); // Select the <p> element with id "text"
text.style.color = "blue"; // Change the text color to blue
text.style.fontSize = "20px"; // Change the font size to 20px

// Change text dynamically when a button is clicked
const button = document.getElementById("submit"); // Select the button with id "btn"
const message = document.getElementById("message"); // Select the <p> element with id "message"

button.addEventListener("click", () => {
    message.textContent = "You clicked the button!"; // Change the text content of the <p>
});

