/*
All datatypes in js are primitive types, except for the last one:
Number: Any number, including numbers with decimals: 4, 8, 1516, 23.42.
String: Any grouping of characters on your keyboard (letters, numbers, spaces, symbols, etc.) surrounded by single quotes: ' ... ' or double quotes " ... ", 
though we prefer single quotes. Some people like to think of string as a fancy word for text.
Boolean: This data type only has two possible values— either true or false (without quotes). It’s helpful to think of booleans as on and off switches 
or as the answers to a “yes” or “no” question.
Null: This data type represents the intentional absence of a value, and is represented by the keyword null (without quotes).
Undefined: This data type is denoted by the keyword undefined (without quotes). It also represents the absence of a value though it has a different use than null. 
undefined means that a given value does not exist.
Symbol: A newer feature to the language, symbols are unique identifiers, useful in more complex coding. No need to worry about these for now.
Object: Collections of related data.
*/

/* numbers can be manipulated with the standard manipulation functions */

/* strings can be concatenated with 'string' + 'string' */ 

console.log('something'); // prints the string in the console
console.log(69); // prints the number in the console
console.log(68 + 1); // prints the number in the console
console.log('string'.length); // prints the length of the string

'example string'.methodName(); //calling a method

console.log('hello'.toUpperCase()); // Prints 'HELLO'
console.log('Hey'.startsWith('H')); // Prints true
console.log('Ney'.startsWith('H')); // Prints false

console.log(Math.floor(Math.random() * 100)); //rand number
console.log(Math.ceil(43.8)); // round a number
console.log(Number.isInteger(2017)); //returns true if number 

var myName = 'Arya'; //declaring a variable
console.log(myName); // prints it to the console

// By convention we name the variables in camelCaseStyle.
// Variable names cannot start with numbers.
// Variable names are case sensitive, so myName and myname is not the same.
// Variable names cannot be the same as keywords.

let meal = 'Enchiladas';
console.log(meal); // Output: Enchiladas
meal = 'Burrito';
console.log(meal); // Output: Burrito

// var and let both declares a variable but there is a scope difference
// Variables declared by var keyword are scoped to the immediate function body (hence the function scope) 
// while let variables are scoped to the immediate enclosing block denoted by { } (hence the block scope).

// If we don’t assign a value to a variable declared using the let or var keyword, it automatically has a value of undefined.
// We can reassign the value of the variable.

const myName = 'Gilberto';
console.log(myName); // Output: Gilberto

// const can't change it's value and must be assigned a value when declared

let num = 1;
//num++ == ++num

let myPet = 'armadillo';
console.log('I own a pet ' + myPet + '.'); 
// Output: 'I own a pet armadillo.'

const myPet = 'armadillo';
console.log(`I own a pet ${myPet}.`); // everything between the backtick (`) is called template literal. ${} is placeholder for a variable
// Output: I own a pet armadillo.

//datatype check:
const unknown1 = 'foo';
console.log(typeof unknown1); // Output: string

//Conditionals

if (true) {
    console.log('This message will print!'); 
  }
  // Prints: This message will print!

if (false) {
  console.log('The code in this block will not run.');
} else {
  console.log('But the code in this block will!');
} 
// Prints: But the code in this block will!

let stopLight = 'yellow';
 
if (stopLight === 'red') {
  console.log('Stop!');
} else if (stopLight === 'yellow') {
  console.log('Slow down.');
} else if (stopLight === 'green') {
  console.log('Go!');
} else {
  console.log('Caution, unknown!');
}

// Less than: <
// Greater than: >
// Less than or equal to: <=
// Greater than or equal to: >=
// Is equal to: ===
// Is not equal to: !==

// Truthy and Falsy
let myVariable = 'I Exist!';
 
if (myVariable) {
   console.log(myVariable)
} else {
   console.log('The variable does not exist.')
}

// The list of falsy values includes:
// 0
// Empty strings like "" or ''
// null which represent when there is no value at all
// undefined which represent when a declared variable lacks a value
// NaN, or Not a Number
// Here’s an example with num

// Ternary Operator

let isNightTime = true;
 
if (isNightTime) {
  console.log('Turn on the lights!');
} else {
  console.log('Turn off the lights!');
}

//We can use a ternary operator to perform the same functionality:
isNightTime ? console.log('Turn on the lights!') : console.log('Turn off the lights!');
//the condition ? what to do if the condition    : what to do if the condition
//that we check ? is true                        : is false

// The switch keyword
let groceryItem = 'papaya';
 
switch (groceryItem) {
  case 'tomato':
    console.log('Tomatoes are $0.49');
    break;
  case 'lime':
    console.log('Limes are $1.49');
    break;
  case 'papaya':
    console.log('Papayas are $1.29');
    break;
  default:
    console.log('Invalid item');
    break;
}
// Prints 'Papayas are $1.29'

function sayThanks(){  // Declaring a func
    // The body of a func
    console.log('Thank you for your purchase! We appreciate your business.');
  }
  
  // Calling the func
  sayThanks()

// function with parameters
function sayThanks(name) {// 'name' here is placeholder for parameter. Then we call the function with a argument
  console.log('Thank you for your purchase, '+ name + '! We appreciate your business.');
}

sayThanks('Cole');  //example call

function greeting (name = 'stranger') {  // this is how we define a default parameter
  console.log(`Hello, ${name}!`)
}
 
greeting('Cole')  // Output: Hello, Cole!
greeting()        // Output: Hello, stranger!
 
function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return 'You need positive integers to calculate area!';
  }
  return width * height;
}
// By default the return value of a func is undefined if it is not defined like above.

function monitorCount(rows, columns){
  return rows*columns;
}

const numOfMonitors = monitorCount(5, 4);  //calling the function and assigning the returned value to a variable
console.log(numOfMonitors)  // Prints 20

// we can call functions from other functions
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns){
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost);

// Function expression is when you assign an anonymous function to a variable
const plantNeedsWater = function(day){
  if (day === 'Wednesday'){
    return true;
  }
  return false;
}
console.log(plantNeedsWater('Tuesday'));

// arrow function notation (=> fat arrow)
const plantNeedsWater = (day) => {
  if (day === 'Wednesday'){
    return true;
  }
  return false;
};// same as above but saves the function key word

//Concise Body Arrow Functions

// Zero parameters
const functionName = () => {};

// One parameter
const functionName = paramOne => {};

// Two or more parameters
const functionName = (paramOne, paramTwo) => {};

// A function body composed of a single-line block does not need curly braces. 
// Without the curly braces, whatever that line evaluates will be automatically returned. 

// Single-line block
const sumNumbers = number => number + number;

// Multi-line block
const sumNumbers = number => {
  const sum = number + number;
  return sum; // Return statement
}

// Example
const squareNum = (num) => {
  return num * num;
};
// above block can be refactored into this:
const squareNum = num => num * num;

// Notice the following changes:
// 1. The parentheses around num have been removed, since it has a single parameter.
// 2. The curly braces { } have been removed since the function consists of a single-line block.
// 3. The return keyword has been removed since the function consists of a single-line block.

// Scope

var1 = "Gancho" // This is a local variable
cosnt var2 = "Mancho" // This is a global variable

function stupidNames(name, name){
  //var1 is not visible here
  let var3 = "Dancho"
  const var4 = "Sancho"  // This is a local variable as well
  return var2 + var3 //but var2 is visible here
}
// but var3 is not visible here because it is local variable for the block of code above, 
// just like var4. Even if var4 is defined as constant

// Scope Pollution = Scope pollution is when we have too many global variables that exist in the global namespace, 
// or when we reuse variables across different scopes.

// Arrays

// An array can hold up any datatype and is enclosed with square brackets [].
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn to juggle'];

// Arrays are indexed from 0 so accessing the second element from newYearsResolutions would be:
newYearsResolutions[1];

// The same is true for strings:
console.log(var1[4]);
console.log(newYearsResolutions[1][3]);

newYearsResolutions[1] = 'Learn JavaScript'; // this is how we change elements in the array with item indexes

// Variables declared with the const keyword cannot be reassigned. However, elements in an array declared with const remain mutable. 
// Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.

const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length)    // logs the length of the array
console.log(objectives.length[0]) // logs the length of the first object of the array

// Manipulating the array
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('nap', 'code JS') // Adds the items at the end of the array
chores.pop()                  // removes the items at the end of the array

// Concatenating the array
const grocery1 = ['blueberries', 'eggs', 'artichoke'];
const grocery2 = ['milk', 'cookies'];

const grocery = grocery1.concat(grocery2);

console.log(grocery);
// Output: [ 'blueberries', 'eggs', 'artichoke', 'milk', 'cookies' ]

grocery.shift(); // Removes the first element from the array
// Output: ['eggs', 'artichoke', 'milk', 'cookies' ]

grocery.unshift('popcorn'); // Adds the item on the first index to the array
// Output: ['popcorn', 'eggs', 'artichoke', 'milk', 'cookies' ]

let newGrocery = grocery.slice(1, 4);
// Output: ['eggs', 'artichoke', 'milk']

grocery.indexOf('milk')
// Returns the index of the the item. In this case 3

// Create a nested array
const food = [
  ['Apple', 'Orange', 'Banana'],
  ['Strawberry', 'Blueberry', 'Raspberry'],
  ['Potato', 'Carrot', 'Broccoli'],
];

// There are many more array methods

// Arrays can be mutated inside a function

// The for loop syntax looks like this:
// |init the iterator|condition|  |Iteration  
for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}

// For loops can be nested
for (let i = 0; i < food.length; i++){
  for (let j = 0; j < grocery.length; j++){
      if(food[i] === grocery[j]){
        console.log("yeah");
      }
    }
  }

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}
 
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;  //If this is omitted the while loop will never be exited
}

// While vs while do = while do will run at least once => the block of code will run and then the condition is evaluated. 
// If true, the block will be executed again.
let countString = '';
let i = 0;
 
do {
  countString = countString + i;
  i++;
} while (i < 5);
 
console.log(countString);

// break statement
for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}
 
console.log('Orange you glad I broke out the loop!');

// Higher-order functions are functions that accept other functions as arguments and/or return functions as output.
// A callback function is a function passed as an argument into another function.

// Iterators
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// .forEach Iterate over fruits
fruits.forEach(function(item){
  console.log(' - ' + item);
});
// here 'function' is the callback function

// .map() like .forEach() but returns new array instead
const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});
// Output: [10, 20, 30, 40, 50]

// .filter() like .map() However, it returns an array of elements 
// after filtering out certain elements from the original array

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
 
const shortWords = words.filter(word => {
  return word.length < 6;
  //console.log(word.length < 6);
});
console.log(words);  // will return all word from the array
console.log(shortWords);  // will return all words shorter than 6 letters

// Some more examples of that (by the time of learning, this seemed hard):
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(item =>{
  return item < 250;
});

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(item =>{
  return item.length > 7;
});

// Calling .findIndex() on an array will return the index of the first element
const jumbledNums = [123, 25, 78, 5, 9]; 
 
const lessThanTen = jumbledNums.findIndex(num => {
  return num < 10;
});
console.log(lessThanTen);  // index 3 is for number 5 so it is correct
// If there isn’t a single element in the array that satisfies the condition in the callback, 
// then .findIndex() will return -1.

//The .reduce() method returns a single value after iterating through the elements of an array, 
// thereby reducing the array.
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
   console.log('The value of accumulator: ', accumulator);
   console.log('The value of currentValue: ', currentValue);
   return accumulator + currentValue;
})

 console.log(newSum);
// Output:
// The value of accumulator:  1
// The value of currentValue:  3
// The value of accumulator:  4
// The value of currentValue:  5
// The value of accumulator:  9
// The value of currentValue:  7
// 16

// Objects \\
let ship = {}; // spaceship is an empty object
let shit = []; // spaceship is an empty array

// The data in abject is organized into key-value pairs

let spaceship = {
  'Fuel Type': 'Turbo Fuel',
  homePlanet: 'Earth',
  color: 'silver',
  'Active Duty': true,
  numCrew: 5
};

// Accessing object's properties
spaceship.homePlanet; // Returns 'Earth'
spaceship.color; // Returns 'silver'
spaceship.favoriteIcecream; // Returns undefined

spaceship['Active Duty'];   // Returns true
spaceship['Fuel Type'];   // Returns  'Turbo Fuel'
spaceship['numCrew'];   // Returns 5
spaceship['!!!!!!!!!!!!!!!'];   // Returns undefined

// We MUST use bracket notation when accessing keys that have 
// numbers, spaces, or special characters in them.

let returnAnyProp = (objectName, propName) => objectName[propName];
returnAnyProp(spaceship, 'homePlanet'); // Returns 'Earth'

// Property Assignment
// One of two things can happen with property assignment:

// If the property already exists on the object, whatever value it held before 
// will be replaced with the newly assigned value.
// If there was no property with that name, a new property will be added to the object.

// It’s important to know that although we can’t reassign an object declared with const, 
// we can still mutate it, meaning we can add new properties and change the properties that are there.

const spaceshit = {type: 'shuttle'};
spaceshit = {type: 'alien'}; // TypeError: Assignment to constant variable.
spaceshit.type = 'alien';    // Changes the value of the type property
spaceshit.speed = 'Mach 5';  // Creates a new key of 'speed' with a value of 'Mach 5'

// Methods
// When the data stored on an object is a function we call that a method. 
// A property is what an object has, while a method is what an object does.

// We can include methods in our object literals by creating ordinary, colon-separated key-value pairs. 
// The key serves as our method’s name, while the value is an anonymous function expression.

const alienShip = {
  invade: function () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};

alienShip.invade()  // prints the text from console.log()

const alienShip = {
  invade () { 
    console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
  }
};
alienShip.invade()
// Does exactly the same

let otherShip = {
  retreat(){
    console.log(retreatMessage);
  }, //<-- When multiple methods, they are separated with
  takeOff(){
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};

// Nested Objects
const newShip = {
  telescope: {
     yearBuilt: 2018,
     model: '91031-XLT',
     focalLength: 2032 
  },
 crew: {
     captain: { 
         name: 'Sandra', 
         degree: 'Computer Engineering', 
         encourageTeam() { console.log('We got this!') } 
      }
 },
 engine: {
     model: 'Nimbus2000'
  },
  nanoelectronics: {
      computer: {
         terabytes: 100,
         monitors: 'HD'
      },
     'back-up': {
        battery: 'Lithium',
        terabytes: 50
      }
 }
};

// Nested objects
const spaceship = {
  telescope: {
     yearBuilt: 2018,
     model: '91031-XLT',
     focalLength: 2032 
  },
  crew: {
     captain: { 
         name: 'Sandra', 
         degree: 'Computer Engineering', 
         encourageTeam() { console.log('We got this!') } 
      }
  },
  engine: {
     model: 'Nimbus2000'
   },
  nanoelectronics: {
      computer: {
         terabytes: 100,
         monitors: 'HD'
      },
     'back-up': {
        battery: 'Lithium',
        terabytes: 50
      }
  }
};

console.log(spaceship.nanoelectronics['back-up'].battery); // Returns 'Lithium'

//Pass By Reference
//Objects are passed by reference. This means when we pass a variable assigned to an object into a function as an argument, 
//the computer interprets the parameter name as pointing to the space in memory holding that object. 
//As a result, functions which change object properties actually mutate the object permanently 
//(even when the object is assigned to a const variable).

const spaceship = {
  homePlanet : 'Earth',
  color : 'silver'
};
 
let paintIt = obj => {
  obj.color = 'glorious gold'
};
 
paintIt(spaceship);
 
console.log(spaceship.color) // Returns 'glorious gold'
// That was kind of hard at the time of writing. Here are some more examples:
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
  obj.disabled = true;
}

greenEnergy(spaceship);
remotelyDisable(spaceship);

console.log(spaceship)

//Looping Through Objects
let spaceship = {
  crew: {
    captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
    },
    'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
    },
    medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
    translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
    }
  }
}; 
 
// for...in
for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}// crewMember is just a variable name
 // spaceship.crew is the object which properties we are iterating over

 let spaceship = {
  crew: {
  captain: { 
      name: 'Lily', 
      degree: 'Computer Engineering', 
      cheerTeam() { console.log('You got this!') } 
      },
  'chief officer': { 
      name: 'Dan', 
      degree: 'Aerospace Engineering', 
      agree() { console.log('I agree, captain!') } 
      },
  medic: { 
      name: 'Clementine', 
      degree: 'Physics', 
      announce() { console.log(`Jets on!`) } },
  translator: {
      name: 'Shauna', 
      degree: 'Conservation Science', 
      powerFuel() { console.log('The tank is full!') } 
      }
  }
}; 

for (let crewMember in spaceship.crew) {
console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

for (let crewMember in spaceship.crew) {
console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
}

// The this Keyword
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet(); 
// Output will be "ReferenceError: dietType is not defined"

const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};
 
goat.diet(); 
// Output: herbivore
// The properties and sub objects does not "see" each other
// We use 'this' to reference to property inside the object

// Arrow Functions and "this"
// Don't use => inside objects

// Privacy
// One common convention is to place an underscore _ before the name of a property to mean that the property should not be altered.
const bankAccount = {
  _amount: 1000
}

// Getters
const person = {
  _firstName: 'John',
  _lastName: 'Doe',
  get fullName() {
    if (this._firstName && this._lastName){
      return `${this._firstName} ${this._lastName}`;
    } else {
      return 'Missing a first name or a last name.';
    }
  }
}
 
// To call the getter method: 
person.fullName; // 'John Doe'

// We are using the getter method because we need to 
// return the return value of the internal property
// Also we use geteter to get properties that should not be accessed directly - _property

// Setters
const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};

person.age = 12;
console.log(person._age);
person.age = '40';

// Another example:
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if (typeof num === 'number' && num >= 0){
      this._numOfSensors = num;
    }else{
      console.log('Pass in a number that is greater than or equal to 0')
    }
  }
};

robot.numOfSensors = 100;  // this is how we use the setter. not robot.numOfSensors(100)
                           // even though I thought is correct

// Factory Functions
// A factory function is a function that returns an object and can be reused to make multiple object instances. 
// Factory functions can also have parameters allowing us to customize the object that gets returned.
const monsterFactory = (name, age, energySource, catchPhrase) => {
  return { 
    name: name,
    age: age, 
    energySource: energySource,
    scare() {
      console.log(catchPhrase);
    } 
  }
};

const ghost = monsterFactory('Ghouly', 251, 'ectoplasm', 'BOO!');
ghost.scare(); // 'BOO!'
// Now we have a ghost object as a result of calling monsterFactory() with the needed arguments.

// Property Value Shorthand
const monsterFactory = (name, age) => {
  return { 
    name: name,
    age: age
  }
}

// The above block will be exactly the same as this one:
const monsterFactory = (name, age) => {
  return { 
    name,
    age 
  }
};
// Because the arguments' names are the same as the properties

// Destructured Assignment
const vampire = {
  name: 'Dracula',
  residence: 'Transylvania',
  preferences: {
    day: 'stay inside',
    night: 'satisfy appetite'
  }
};

// Normal method of assigning
const residence = vampire.residence; 
console.log(residence); // Prints 'Transylvania' 

// Destructured
const { residence } = vampire; 
console.log(residence); // Prints 'Transylvania'
// We create a variable with the name of an object’s key 
// that is wrapped in curly braces { } and assign to it the object.

// For nested properties:
const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'

// An object
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const {functionality} = robot;  // would be the same as const functionality = robot.functionality.beep()
// since now functionality is a variable, we can call the nested method like this:
functionality.beep()

// Built-in Object Methods
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

const robotKeys = Object.keys(robot);  // Returns a list of all keys in the object
console.log(robotKeys);

const robotEntries = Object.entries(robot); // Returns a list of lists with all key:value pairs in the object
console.log(robotEntries);

const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true},robot);
// const returnedTarget = Object.assign(target, source);
// Adds new properties to the object
console.log(newRobot); // will return this:
// { laserBlaster: true,
//   voiceRecognition: true,
//   model: 'SAL-1000',
//   mobile: true,
//   sentient: false,
//   armor: 'Steel-plated',
//   energyLevel: 75 }

/////// Here ends beginner level \\\\\\\

// Classes
// Classes are a tool that developers use to quickly produce similar objects.

// Constructor
// JavaScript calls the constructor() method every time it creates a new instance of a class.
class Dog {
  constructor(name) {
    this.name = name;
    this.behavior = 0;
  }
}
// Dog is the name of our class. By convention, we capitalize and PascalCase class names.
// This constructor() method accepts one argument, name. But a constructor() can take as many as needed.
// Inside of the constructor() method, we use the 'this' keyword. 
// In the context of a class, 'this' refers to an instance of that class.
// Under this.name, we create a property called behavior, 
// which will keep track of the number of times a dog misbehaves. 
// The behavior property is always initialized to zero.

// Instance
const halley = new Dog('Halley'); // Create new Dog instance

console.log(halley.name); // Log the name value saved to halley
// Output: 'Halley'
console.log(halley)
// - We create a new variable named halley that will store an instance of our Dog class.
// - We use the new keyword to generate a new instance of the Dog class. The new keyword calls the constructor(), 
// runs the code inside of it, and then returns the new instance.
// - We pass the 'Halley' string to the Dog constructor, which sets the name property to 'Halley'.
// - Finally, we log the value saved to the name key in our halley object, which logs 'Halley' to the console.

// just another example:
class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular')
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics')

// Methods
// Class method and getter syntax is the same as it is for objects except 
// !you can not include commas between methods!
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
}

// And another example 
class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  get name(){
    return this._name;
  }
  get department(){
    return this._department;
  }
  get remainingVacationDays(){
    return this._remainingVacationDays;
  }
  takeVacationDays(daysOff){
    //this._remainingVacationDays = daysOff - this._remainingVacationDays
    this._remainingVacationDays -= daysOff
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

// Method calls
class Dog {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
}
 
const halley = new Dog('Halley');
// The syntax for calling methods and getters on an instance is the same as calling them on an object — 
// append the instance with a period, then the property or method name. 
// For methods, you must also include opening and closing parentheses.

let nikko = new Dog('Nikko');       // Create dog named Nikko
nikko.incrementBehavior();          // Add 1 to nikko instance's behavior
let bradford = new Dog('Bradford'); // Create dog name Bradford
console.log(nikko.behavior);        // Logs 1 to the console
console.log(bradford.behavior);     // Logs 0 to the console

class Surgeon {
  constructor(name, department) {
    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get department() {
    return this._department;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

const surgeonRomero = new Surgeon('Francisco Romero', 'Cardiovascular');
const surgeonJackson = new Surgeon('Ruth Jackson', 'Orthopedics');

console.log(surgeonRomero.name)  // Returns Francisco Romero
surgeonRomero.takeVacationDays(3)
console.log(surgeonRomero.remainingVacationDays)  // Returns 17

// Inheritance
class Cat {
  constructor(name, usesLitter) {
    this._name = name;
    this._usesLitter = usesLitter;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get usesLitter() {
    return this._usesLitter;
  }
 
  get behavior() {
    return this._behavior;
  }  
 
  incrementBehavior() {
    this._behavior++;
  }
}
// The class 'cat' almost the same as the 'dog' class from above, but with  additional method.
// So we can create Parent Class (or Superclass) with properties and methods that multiple
// child classes (or subclass) share/ Like so:
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }   
 
  incrementBehavior() {
    this._behavior++;
  }
} 

// Creating a subclass
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}
// - The extends keyword makes the methods of the animal class available inside the cat class.
// - The constructor, called when you create a new Cat object, accepts two arguments, name and usesLitter.
// - The super keyword calls the constructor of the parent class. In this case, super(name).
// You must always call the super method before you can use the this keyword — if you do not, 
// JavaScript will throw a reference error. To avoid reference errors, 
// it is best practice to call super on the first line of subclass constructors.
// passes the name argument of the Cat class to the constructor of the Animal class. 
// When the Animal constructor runs, it sets this._name = name; for new Cat instances.
// - _usesLitter is a new property that is unique to the Cat class, so we set it in the Cat constructor.
// When we call extends in a class declaration, all of the parent methods are available to the child class.

// Example
// Creating a parent class
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

// Creating a child class
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    super(_remainingVacationDays);
    this._certifications = certifications;
  }
}

// Creating an object from the class
const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);

// Another example

// Parent class
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  get name() {
    return this._name;
  }
 
  get behavior() {
    return this._behavior;
  }
 
  incrementBehavior() {
    this._behavior++;
  }
} 
 
//Subclass 
class Cat extends Animal {
  constructor(name, usesLitter) {
    super(name);
    this._usesLitter = usesLitter;
  }
}

// Object
const bryceCat = new Cat('Bryce', false);

console.log(bryceCat.name);  // Prints "Bryce"

// Example that covers everything about classes and inheritance

// Parent class
class HospitalEmployee {
  constructor(name) {
    this._name = name;
    this._remainingVacationDays = 20;
  }
  
  get name() {
    return this._name;
  }
  
  get remainingVacationDays() {
    return this._remainingVacationDays;
  }
  
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

// subclass
class Nurse extends HospitalEmployee {
  constructor(name, certifications) {
    super(name);
    this._certifications = certifications;
  }
  get certifications(){
    return this._certifications;
  }
  // Adding a method that is not inherited
  addCertification (newCertification){
    this._certifications.push(newCertification);
  }
}

// New object from the subclass
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);  // Prints 15

nurseOlynyk.addCertification('Genetics');

console.log(nurseOlynyk.certifications);  
// prints [ 'Trauma', 'Pediatrics', 'Genetics' ] because we've called the new add method in the instance, 
// and passed 'Genetics' to it

// Static method is called directly from the class, not from an instance of the class
class Animal {
  constructor(name) {
    this._name = name;
    this._behavior = 0;
  }
 
  static generateName() {
    const names = ['Angel', 'Spike', 'Buffy', 'Willow', 'Tara'];
    const randomNumber = Math.floor(Math.random()*5);
    return names[randomNumber];
  }
} 

console.log(Animal.generateName()); // returns a name

const tyson = new Animal('Tyson'); 
tyson.generateName(); // TypeError
// Because you can't call static methods from an instance of the class

// JAVASCRIPT PROMISES - Asynchronous programming

// It seems that we are going to use node.js as environment from now on

// Constructing a Promise Object
const executorFunction = (resolve, reject) => { };
const myFirstPromise = new Promise(executorFunction);
// new - keyword
// Promise - constructor method
// The Promise constructor method takes a function parameter called the executor function 
// which runs automatically when the constructor is called. The executor function generally 
// starts an asynchronous operation and dictates how the promise should be settled.

//The executor function has two function parameters, usually referred to as the resolve() and reject() functions. 
// The resolve() and reject() functions aren’t defined by the programmer. When the Promise constructor runs, 
// JavaScript will pass its own resolve() and reject() functions into the executor function.

// resolve is a function with one argument. Under the hood, if invoked, 
// resolve() will change the promise’s status from pending to fulfilled, 
// and the promise’s resolved value will be set to the argument passed into resolve().
// reject is a function that takes a reason or error as an argument. Under the hood, if invoked, 
// reject() will change the promise’s status from pending to rejected, and the promise’s rejection 
// reason will be set to the argument passed into reject().

const executorFunction = (resolve, reject) => {
  if (someCondition) {
      resolve('I resolved!');
  } else {
      reject('I rejected!'); 
  }
}
const myFirstPromise = new Promise(executorFunction);
// - We declare a variable myFirstPromise
// - myFirstPromise is constructed using new Promise() which is the Promise constructor method.
// - executorFunction() is passed to the constructor and has two functions as parameters: resolve and reject.
// - If someCondition evaluates to true, we invoke resolve() with the string 'I resolved!'
// - If not, we invoke reject() with the string 'I rejected!'

// Example
const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

// Write your code below:
const myExecutor = (resolve, reject) => {
  if (inventory.sunglasses > 0) {
    resolve("Sunglasses order processed.");
  } else {
    reject("That item is sold out.");
  }
};

const orderSunglasses = () => {
  return new Promise(myExecutor);
};

const orderPromise = orderSunglasses();

console.log(orderPromise);

// The Node setTimeout() Function
// setTimeout() is a Node API (a comparable API is provided by web browsers) that uses callback functions 
// to schedule tasks to be performed after a delay. setTimeout() has two parameters: a callback function and a delay in millisecond
const delayedHello = () => {
  console.log('Hi! This is an asynchronous greeting!');
};
 
setTimeout(delayedHello, 2000);
// Here, we invoke setTimeout() with the callback function delayedHello() and 2000. 
// In at least two seconds delayedHello() will be invoked.
// Asynchronous JavaScript uses something called the event-loop. After two seconds, delayedHello() is added to a line of code waiting to be run. 
//Before it can run, any synchronous code from the program will run. Next, any code in front of it in the line will run. 
//This means it might be more than two seconds before delayedHello() is actually executed.

// An example-blueprint
const returnPromiseFunction = () => {
  return new Promise((resolve, reject) => {
    setTimeout(( ) => {resolve('I resolved!')}, 1000);
  });
};
 
const prom = returnPromiseFunction();

console.log("This is the first line of code in app.js.");

const usingSTO = () => {
  console.log("Ogromno neshto");
}

setTimeout(usingSTO, Math.floor(Math.random() * 3000))

console.log("This is the last line of code in app.js.");
// Since we are calling usingSTO() with timeout, the first and the last console.log()
// Will be printed and then the console.log() from usingSTO, with random delay.

// Consuming Promises
// Success and Failure Callback Functions

// To handle a “successful” promise, or a promise that resolved, 
// we invoke .then() on the promise, passing in a success handler callback function:
const prom = new Promise((resolve, reject) => {
  resolve('Yay!');
});
 
const handleSuccess = (resolvedValue) => {
  console.log(resolvedValue);
};
 
prom.then(handleSuccess); // Prints: 'Yay!'  