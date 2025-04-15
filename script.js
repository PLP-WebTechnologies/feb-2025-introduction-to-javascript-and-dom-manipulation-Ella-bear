// Define an empty object
let contact = {
    email: "example@example.com",
    message: "This is a sample message",
    name: "John Doe"
};

// Log the variables to the console
console.log(contact);

// Dynamically changes text content
document.querySelector('.hero-text h1').textContent = "Welcome to the Coffee Shop!";
document.querySelector('.hero-text p').textContent = "Enjoy the best coffee blends crafted just for you.";

//modify css 
const heading = document.querySelector('.hero-text h1'); // Select the heading
heading.style.color = 'grey'; // Change the text color
heading.style.fontSize = '48px'; // Change the font size
heading.style.textAlign = 'center'; // Center the text

