JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The object data type can contain:
1. An object
2. An array
3. A date

// Create a function (you decide the name) that logs out the number 42 to the console
function create() {
    console.log(42)
}
// Call/invoke the function
create();

let saveEl = document.getElementById("save-el") // save the content of a html object with the passed id as variable in js
let sumEl = document.querySelector("#sum-el")   // or target a selector
let sumEl = document.querySelector(".sum-el")   // or target a class
document.getElementById("count-el").innerText = 69 // assign value to html object with id passed to document.getElementById()
// or the better way:
document.getElementById("sum-el").textContent = 69

let cards = [firstCard, secondCard] // declaring an array. Calling elements just like in python
console.log(cards.length)			// returns the length of the array (2)
cards.push("new card.")				// pushes new element at the end of the array
cards.pop()							// pops out the last element from the array

let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

largeCountries.pop()			// removes last item of the array
largeCountries.push("Pakistan") // pushes the passed item at the end of the array
largeCountries.shift()			// removes the first item of the array
largeCountries.unshift("China") // pushes the passed item at the beggining of the array
console.log(largeCountries)
// logs out ["China", "India", "USA", "Indonesia", "Pakistan"]

//    START           FINISH       STEP SIZE
for ( let count = 1;  count < 11;  count += 1 )  {
    console.log(count)
}

let options = [11,22,33,44,55,66,67,68,69,70]

for (var i = 0; i < options.length; i++){
    console.log(options[i])
}

let sentence = ["Hello", "my", "name", "is", "Per"] 
let greetingEl = document.getElementById("greeting-el")

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for (let i = 0; i < sentence.length; i++){
    greetingEl.textContent += sentence[i] + " ";  //use the += to keep the previous array item
}

Math.random() // random num betweeen 0 and 1, not includes 1 //0.0000 ~ 0.99999
let flooredNumber = Math.floor(Math.random()) // the floored version of the above
let randomNumber = Math.floor( Math.random() * 7 ) + 1 //returns from 1 to 7

//object  // Can contain any data types, even other objects (nested objects), comma delimited.
let castle = {
    stupid:true,
    age:10,
    name:"mojoDojoCasaHouse",
    people:["they", "me", "you"]
}
console.log(castle.age)
console.log(castle.name)

//Method is a function in an object
let player = {
    name: "Per",
    chips: 200,
    sayHello: function() {
        console.log("Heisann!")
    }
}
player.sayHello()
//Output: Heisann!

_____________________________________________________________
function saveLead() {
    console.log("Button clicked from onclick attribute")
}
// above can be transleted like so:
let inputBtn = document.getElementById("input-btn")

inputBtn.addEventListener("click", function() {
    console.log("Button clicked from addEventListener")
})
// using this, we add a event listener in the .js and remove it from th .html
// the idea is for better separation between the two languages

_____________________________________________________________
let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const ulEl = document.getElementById("ul-el")
for (let i = 0; i < myLeads.length; i++) {
    ulEl.textContent += myLeads[i] + " "
	ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"  //innerHTML will make the browser to parse the tags properly. Kind of instead of Jinja tags
}  // this will render the whole array in a unsorted list tag <ul></ul> with id="ul-el"

//Another example:
const container = document.getElementById("container")

container.innerHTML = "<button onclick='buy()'>Buy!</button>"
// When clicked, render a paragraph under the button (in the container)
// that says "Thank you for buying!"
function buy() {
    container.innerHTML += "<p>Thanks for buying!</p>"  // note the += notion
}

// Alternative way of rendering an array as unsorted list
const li = document.createElement("li")
li.textContent = myLeads[i]
ulEl.append(li)

listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>
// above line should render a working url in unsorted list
// Alternative we can use tamplet strings, wraped with back tick "`"
listItems += `<li><a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a></li>`
listItems += `
            <li>
                <a target='_blank' href='${myLeads[i]}'>
                    ${myLeads[i]}
                </a>
            </li>
        `
// everything betweeen the `` is considered a string, but the we can use JavaScript variables like so ${myLeads[i]}
// the rest will be rendered as normal html

_____________________________________________________________
//LocalStorage is persistant primative DB. It is unique for the user. 
//It is saved after a page refresh. It can be manupulated like so:
localStorage.setItem("name", "Sapuncho") // Save a key-value pair in localStorage
localStorage.getItem("name") 			 // Refresh the page. Get the value and log it to the console
localStorage.clear()					 // Clear localStorage

// Main limitation is that localStorage can store only strings. 
//So we use JSON to go back and forth converting strings to arays and the other way around
let myLeads = `["www.awesomelead.com"]`

// Turn the myLeads string into an array
myLeads = JSON.parse(myLeads)
// Push a new value to the array
myLeads.push("www.lead2.com")
// Turn the array into a string again
myLeads = JSON.stringify(myLeads)
// Console.log the string using typeof to verify that it's a string
console.log(typeof myLeads)

_____________________________________________________________
// truthy
true and everithing else that has a value

// falsy values
false
0
"" //empty string
let null -> how you as a developer signalize emptiness
undefined -> how JavaScript signalizes emptiness. Usually returned in the console
NaN // Not a Number
