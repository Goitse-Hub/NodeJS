// Inheritance - FastFood Class is going to inherit from the event emmiter class (ts fuctionality)

// First import Events Emitter Class
const EventEmitter = require("node:events");

//Creating Our Own Module That Build On Top Of The Event Emitter Class
// using the extends keyword from events module with the fastfood class

// inheritance allows us to use the FastFood class as if its an event emitter class
class FastFood extends EventEmitter {
    constructor() {
        //invoke super (events module)
        super();
        this.orderNumber = 0;
    }

    // Add two Methods placing order & displaying order number
    order(size, drink) {
        this.orderNumber++;

        // emit an event
        this.emit("order", size, drink);
    }

    displayOrderNumber(){
        console.log(`Current order number: ${this.orderNumber}`);
    }
}

module.exports = FastFood;