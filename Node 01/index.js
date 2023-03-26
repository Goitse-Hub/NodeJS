const add = require('./add.js');

const prompt = require("prompt-sync")();

const inputOne = parseInt(prompt("Enter First Number? "));

const inputTwo = parseInt(prompt("Enter Second Number? "));

const sum = add(inputOne, inputTwo);

console.log(sum);

