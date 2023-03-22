// First Pattern
import add from "./math-esm-pattern-2.mjs"
console.log("First Pattern");
console.log(add(5, 5));

// Third Pattern
import math from "./math-esm-pattern-3.mjs"

console.log("Third Pattern");
console.log(math.add(5, 5));
console.log(math.substact(5, 5));

// Forth Pattern
// import {add, substact} from "./math-esm-pattern-4.mjs" -Second Import Method That Also Lets You Destructure
import * as math from "./math-esm-pattern-4.mjs"


//const {add, substact} = math;

console.log(math.add(5, 5));
console.log(math.substact(5, 5));
