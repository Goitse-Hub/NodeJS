function greet(name) {
    console.log(`Hello ${name}`);
}

function greetDev(greetFn) {
    const name = "Que";
    greetFn(name);
}

greetDev(greet);

