
//importing the class from fastfood module

const FastFood = require("./FastFood.js");
const Side = require("./side.js")

// instantiate

const fastfood = new FastFood();
const side = new Side()

//attach listeners
fastfood.on("order", (size, drink) => {
    console.log(`Order received! preparing your Burger with ${size} fries and ${drink} `)
    side.serveSide(size);
})

// invoke

fastfood.order("large", "Pepsi") //specify the size and drink
fastfood.displayOrderNumber()







