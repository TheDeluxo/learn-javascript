// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el")
//console.log(welcomeEl)



// Create two variables (name & greeting) that contains your name
// and the greeting we want to render on the page
let Name = "Sapuncho"
let greeting = "Hello, "

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = greeting + Name
//document.getElementById("welcome-el").innerText = greeting + name