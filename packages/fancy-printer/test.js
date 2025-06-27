const FancyPrinter = require("./index.js");

console.log("🧪 Running fancy-printer tests...\n");

const printer = new FancyPrinter({ width: 50 });

// Test 1: Header
console.log("Test 1: Header");
console.log(printer.header("Test Header"));
console.log("✅ Header test passed\n");

// Test 2: Box
console.log("Test 2: Box");
console.log(printer.box("This is a test\nwith multiple lines"));
console.log("✅ Box test passed\n");

// Test 3: Numbered List
console.log("Test 3: Numbered List");
const testItems = ["First item", "Second item", "Third item"];
console.log(printer.numberedList(testItems));
console.log("✅ Numbered list test passed\n");

// Test 4: Table
console.log("Test 4: Table");
const testData = [
  { name: "Test1", value: 100 },
  { name: "Test2", value: 200 },
];
console.log(printer.table(testData));
console.log("✅ Table test passed\n");

// Test 5: Progress Bar
console.log("Test 5: Progress Bar");
console.log(printer.progressBar(50, 100, "Progress"));
console.log("✅ Progress bar test passed\n");

console.log("🎉 All tests completed successfully!");
