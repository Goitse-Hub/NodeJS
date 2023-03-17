function greet(name) {
    console.log(`Hello ${name}`);
}

function greetDev(greetFn) {
    const name = "Que";
    greetFn(name);
}

greetDev(greet);

// function HigherOrderFunction(CallBackFunction) {
//     const name = "Que";
//     CallBackFunction(name);
// }

// HigherOrderFunction(greet);


// Synchronous Callback - is a callback which is executed immediately

// Asynchronous Callback - is used to continue or resume code execution after a asynchronous operation is completed