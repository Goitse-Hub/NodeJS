//path module

const path = require("node:path");

console.log(__filename);
console.log(__dirname);

// Property and Methods 1 (Basename - returns the last portion of a path)
console.log(".....BASENAME.....")
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

// Property and Methods 2 (extname - this returns the extension name of the path)
console.log(".....EXTNAME.....")
console.log(path.extname(__filename));
console.log(path.extname(__dirname));

// Property and Methods 3 (parse - returns an object whose properties represent significant elements of the path)
console.log(".....PARSE.....")
console.log(path.parse(__filename));
console.log(path.parse(__dirname));

// Property and Methods 4 (formate method - returns a path string given an object)
console.log(".....FORMAT.....")
console.log(path.format(path.parse(__filename)));

// Property and Methods 5 (Absolute - returns whether a path is absolute or not)
console.log(".....ABSOLUTE.....")
console.log(path.isAbsolute(__filename));

// Property and Methods 6 (Join - this joins all given paths segments together using the platform specific separater as delimiter)
console.log(".....JOIN.....")
console.log(path.join("folder1", "folder2", "index.html"));
console.log(path.join("/folder1", "folder2", "index.html"));

console.log(path.join("/folder1", "//folder2", "index.html"));

console.log(path.join("/folder1", "//folder2", "../index.html")); // This jumps one folder up

console.log(path.join(__dirname, "data.json"));

// Property and Methods 7 (resolve - this resolves a sequence of paths/paths segments into an absolute path)
console.log(".....RESOLVE.....")
console.log(path.resolve("folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "index.html"));
console.log(path.resolve("/folder1", "//folder2", "../index.html")); 
console.log(path.resolve(__dirname, "data.json"));
