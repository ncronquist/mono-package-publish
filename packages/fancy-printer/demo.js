const FancyPrinter = require("./index.js");

const printer = new FancyPrinter({ width: 70 });

console.log(printer.header("🎨 FANCY PRINTER DEMO 🎨"));
console.log();

console.log(
  printer.box(
    "Welcome to the Fancy Printer!\nThis package uses @ncronquist/left-pad\nto create beautiful terminal output."
  )
);
console.log();

console.log("📋 Sample Todo List:");
const todos = [
  "Create awesome packages",
  "Set up automated publishing",
  "Write comprehensive tests",
  "Deploy to production",
];
console.log(printer.numberedList(todos));
console.log();

console.log("📊 Sample Data Table:");
const sampleData = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 25, city: "San Francisco" },
  { name: "Charlie", age: 35, city: "Chicago" },
];
console.log(printer.table(sampleData));
console.log();

console.log("📈 Progress Bars:");
console.log(printer.progressBar(25, 100, "Download"));
console.log(printer.progressBar(67, 100, "Upload  "));
console.log(printer.progressBar(100, 100, "Complete"));
console.log();

console.log(printer.header("✨ Demo Complete! ✨"));
