// Third Pattern
//if you have to export more than one variable or function

// Accepts Two Parameters And Returns The Sum
const add = (a, b) =>{
    return a + b;
};

// Accepts Two Parameters And Returns The Differences
const substract = (a, b) =>{
    return a - b;
};

//Module Exports Will Be Equal To An Object
module.exports = {
    add,
    substract
};