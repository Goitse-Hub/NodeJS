// import export patterns


// For Pattern 1 & 2 Import Remains The Same

//const add = require("./math2")

//console.log(add(2, 3));

//End

//console.log("____Space___")



// For Pattern 3, 4 & 5 Import Remains The Same
// For Pattern 3 - require will return an object

/* 

const math = require("./math3")

console.log(math.add(2, 3))
console.log(math.substract(2, 3))

*/



// Es2015 feature (pattern 3 same as above)
// destructure the fuctions from the object

const math = require("./math5")

const {add, substract} = math;

console.log(add(2, 3))
console.log(substract(2, 3))