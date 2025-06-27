const leftPad = require("./index.js");

// Simple test cases
console.log("Running left-pad tests...");

// Test 1: Basic padding with spaces
const test1 = leftPad("hello", 10);
console.log(`Test 1: "${test1}" (length: ${test1.length})`);

// Test 2: Padding with zeros
const test2 = leftPad("42", 5, "0");
console.log(`Test 2: "${test2}"`);

// Test 3: String already long enough
const test3 = leftPad("already long enough", 10);
console.log(`Test 3: "${test3}"`);

// Test 4: Padding with custom character
const test4 = leftPad("test", 8, "-");
console.log(`Test 4: "${test4}"`);

// Test 5: Padding numbers
const test5 = leftPad(123, 6, "0");
console.log(`Test 5: "${test5}"`);

console.log("All tests completed!");
