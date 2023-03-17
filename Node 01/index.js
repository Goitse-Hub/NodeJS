/*
require(path) - is used it import a module by path
*/

// To include the add.js Module into the index module
const add = require('./add.js');

//Prompt User For Inputs
const prompt = require("prompt-sync")();

const inputOne = parseInt(prompt("Enter First Number? "));

const inputTwo = parseInt(prompt("Enter Second Number? "));

// Call The Function To Perform Addition
const sum = add(inputOne, inputTwo);


//Display
console.log(sum);

