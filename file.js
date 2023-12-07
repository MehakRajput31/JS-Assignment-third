//EXERCISE NO 6.1
// 1. Create a function that takes two parameters, adds them together, and returns the result.
function addNumbers(a, b) {
    return a + b;
}

// 2. Set up two different variables with two different values.
let num1 = 5;
let num2 = 10;

// 3. Use your function on the two variables and output the result using console.log.
let result1 = addNumbers(num1, num2);
console.log(`Result of adding ${num1} and ${num2}: ${result1}`);

// 4. Create a second call to the function using two more numbers as arguments sent to the function.
let num3 = 8;
let num4 = 3;

let result2 = addNumbers(num3, num4);
console.log(`Result of adding ${num3} and ${num4}: ${result2}`);

//Exercise no 6.2
// Step 1: Create an array of descriptive words
const descriptiveWords = ["creative", "adventurous", "innovative", "charismatic", "inspiring"];

// Step 2: Create a function with a prompt asking the user for a name
function generateRandomMessage() {
    // Step 3: Select a random value from the array using Math.random
    const randomIndex = Math.floor(Math.random() * descriptiveWords.length);
    const randomWord = descriptiveWords[randomIndex];

    // Step 4: Output into the console the prompt value and the randomly selected array value
    const userName = prompt("Please enter your name:");
    console.log(`Hello, ${userName}! You are ${randomWord}.`);
}

// Step 5: Invoke the function
generateRandomMessage();



//EXERCISE NO 6.3
// Step 1: Set up two variables containing number values.
let number1 = 10;
let number2 = 5;

// Step 2: Set up a variable to hold an operator, either + or -.
let operator = '+';

// Step 3: Create a function to perform addition or subtraction based on the operator.
function performOperation(value1, value2, operation) {
    if (operation === '+' || operation === undefined) {
        return value1 + value2;
    } else if (operation === '-') {
        return value1 - value2;
    } else {
        console.log("Invalid operator. Defaulting to addition.");
        return value1 + value2;
    }
}

// Step 4: Call the function using the initial variables and output the response to the console.
console.log(`Result of ${number1} ${operator} ${number2}: ${performOperation(number1, number2, operator)}`);

// Step 5: Update the operator value and call the function again.
operator = '-'; // Change the operator to subtraction
console.log(`Result of ${number1} ${operator} ${number2}: ${performOperation(number1, number2, operator)}`);

//EXERCISE NO 6.4
// Step 1: Set up an empty array
let resultArray = [];

// Step 2: Create a loop that runs 10 times
for (let i = 0; i < 10; i++) {
  // For the first value, multiply the value of the loop count by 5
  let value1 = i * 5;
  
  // For the second value, multiply the value of the loop counter by itself
  let value2 = i * i;

  // Step 3: Create a function that adds two parameters
  function calculateSum(param1, param2) {
    return param1 + param2;
  }

  // Step 4: Call the calculation function within the loop
  // Step 5: Push the result values into the array
  let response = calculateSum(value1, value2);
  resultArray.push(response);
}

// Step 6: Output the value of the array into the console
console.log(resultArray);


//EXERCISE NO 6.5
// Step 1
let value = "1000";

// Step 2
(function() {
  let value = "New Value from IIFE";
  console.log("Local value within IIFE:", value);
})();

// Step 3
let result = (function() {
  let value = "New Value from IIFE Expression";
  console.log("Local value within IIFE Expression:", value);
  return value;
})();

console.log("Result variable:", result);

// Step 4
let anonymousFunction = function(parameterValue) {
  let value = parameterValue;
  console.log("Value from anonymous function:", value);
};

// Invoking the anonymous function and passing a desired value
anonymousFunction("New Value from Anonymous Function");
 

// EXERCISE NO 6.6
function calculateFactorial(value) {
    // Base case: if the value is 0, return 1
    if (value === 0) {
        return 1;
    } else {
        // Output the current value for demonstration purposes
        console.log("Current value:", value);

        // Recursively calculate the factorial by multiplying the current value
        // with the factorial of the value - 1
        return value * calculateFactorial(value - 1);
    }
}

// Invoke the function with an initial argument (change the argument as desired)
const Result = calculateFactorial(5);

// Output the final result
console.log("Factorial result:", Result);
 // EXERCISE 6.8
 // Step 1: Set the start variable
let start = 10;

// Step 2: Create a function with countdown as an argument
function countdown(countdownValue) {
    // Step 3: Output the current value to the console
    console.log(countdownValue);

    // Step 4: Check if the value is less than 1 and return if true
    if (countdownValue < 1) {
        return;
    }

    // Step 5 & 6: Continue the loop by calling the function within itself
    countdown(countdownValue - 1);
}

// Step 7 & 8: Create a second countdown
function countdown2(countdownValue) {
    // Step 3: Output the current value to the console
    console.log(countdownValue);

    // Step 9: Check if the condition to continue the loop is met
    if (countdownValue > 0) {
        // Step 8: Use return to invoke the function again
        return countdown2(countdownValue - 1);
    }
}
// Example usage:
console.log("Countdown 1:");
countdown(start);

console.log("\nCountdown 2:");
countdown2(start);

//EXERCISE NO 6.8
// 1. Set a variable name and assign a function expression to it.
const myFunctionExpression = function(parameter) {
    console.log(parameter);
};

// 2. Pass an argument into the function.
myFunctionExpression("Hello, World!");

// 3. Create the same function as a normal function declaration.
function myFunctionDeclaration(parameter) {
    console.log(parameter);
}

// Pass an argument into the function.
myFunctionDeclaration("Hello, World!");

