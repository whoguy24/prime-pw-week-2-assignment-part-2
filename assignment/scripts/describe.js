// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// Define new variable with identifier "name" with string value = "Dane".
// If variable "name" is equal in value and type to the string value "Mary"
// Then output strng value "Hi, Mary!" to the console.
// In all other cases, output to the console the string value "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Initialize new variable with identifier "secret".
// Define new variable with identifier "code" with integer value = 123.
// If variable "code" is equal in value and type to the integer value 123
// Then set the variable "secret" to the string value "super", and  set the variable "code" to the integer value equal to the existing value of "code" * 2.
// If variable "code" is greater than the integer value of 250
// Then set the variable "secret" to the string value of "duper"
// Output the current value of the variable "secret" to the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE

// STUDENT // NOTE:
// I threw some spaces in-between these lines for readability. It became quite verbose otherwise.

// Define new variable with the identifier "isStudent" to the boolean value of "True".
// Define new variable with the identifier "age" to the integer value of 34.
// Define new variable with the identifier "zip" to the integer value of 55407.

// If the variable "isStudent" is equal in value and type to the boolean value of "True" and the variable with the identifier "zip" is greater than the integer value of 80000
// Then output the string value "You're a student on the West Coast!" to the console.
// If the previous conditional returns true, then skip to the end of the code block. Otherwise, proceed to the next conditional.

// If the variable with the identifier "isStudent" is equal in value and type to the boolean value "False" or the variable with the identifier "age" is less than the integer value of 30
// Then output the string value "What are your hobbies?" to the console.
// If the previous conditional returns true, then skip to the end of the code block. Otherwise, proceed to the next conditional.

// If the variable "isStudent" is equal in value and type to the boolean value of "True"
// Then output the string value "Welcome to Prime!" to the console.
// If the previous conditional returns true, then skip to the end of the code block. Otherwise, proceed to the next conditional.

// If no other conditional returned a boolean value of "True"
// Then output the string value "How about the weather?" to the console.
// Hang your head in shame for not considering this situation as a programmer.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment.
// Should be number++.
number--;

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - colorOne and colorTwo are set to the incorrect values.
// Set variables to the following:
// let colorOne = 'blue';
// let colorTwo = 'red';

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - only colorOne is being set to purple, but we want colorTwo to be set to purple also.
// Replace with the following code:
//  if (mix === true) {
//    colorOne = 'purple';
//    colorTwo = 'purple';
//  }
// Additionally, while not technically wrong to use "===" to evaluate conditional, consider the possibility that we may want to use "==" instead. Being new to this, I don't know if this is a good or bad idea, but I just wanted to demonstrate that I'm thinking about it.

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*

// FIX - consider using let instead of const for time, as the conditional below implicitly assumes this value can change. Could cause problems.
// Replace code with the following:
// let temp = 40;
// let time = 4;

let temp = 40;
const time = 4;

// Conditional does not match spec. Change OR to AND.
// Replace code with the following:
//  if (temp > 39 && time >= 4) {
//    console.log('throw away the food!');
//  }

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - Conditional does not match spec. Currently, this checks if the minAge is less than or equal to the age. This is backwards according to the spec.
// Also, desired logic suggests that the minimum age should register as allowed, therefore no "or equal to" is required at this time.
// Replace code with the following:
//  if(age < minAge) {
//    console.log('no entry');
//  } else {
//    console.log('enter');
//  }

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

// DEV // NOTE:
// The above code should be considered a high priority to be updated, as failure to do so could land us in legal trouble, especially when when it comes to minors. We don't want HR to get mad at us again.
