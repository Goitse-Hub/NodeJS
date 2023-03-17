
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






// // Import A Build In Events Module
// const EventEmitter = require("node:events");

// // Instatiate the Class

// const emitter = new EventEmitter()

// // (2) To Respond To "order-burger" event, register a listener using - on - method

// emitter.on("order-burger", (sideSize, drink) => {
//     console.log(`Order received! preparing your Burger with ${sideSize} fries and ${drink} `)
// })

// // you can register multiple listener for the same event
// //e.g

// emitter.on("order-burger", (sideSize) => {
//     if (sideSize === "large") {
//         console.log("Serving fries with special sauce")
//     }
// })

// // (1) Emitting An Event using Emit Method

// emitter.emit("order-burger", "large", "Orange juice")


