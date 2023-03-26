const add = require('./add.js');

//Prompt User For Inputs
const prompt = require("prompt-sync")();

const inputOne = parseInt(prompt("Enter First Number? "));

const inputTwo = parseInt(prompt("Enter Second Number? "));

// Call The Function To Perform Addition
const sum = add(inputOne, inputTwo);


//Display
console.log(sum);

