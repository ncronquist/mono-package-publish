#!/usr/bin/env node

const FancyPrinter = require("./index.js");

const args = process.argv.slice(2);

if (args.length === 0) {
  console.log("Usage: fancy-print <command> [options]");
  console.log("");
  console.log("Commands:");
  console.log("  header <text>     - Create a fancy header");
  console.log("  box <text>        - Put text in a box");
  console.log("  demo              - Run the demo");
  console.log("");
  console.log("Examples:");
  console.log('  fancy-print header "Hello World"');
  console.log('  fancy-print box "This is in a box"');
  console.log("  fancy-print demo");
  process.exit(0);
}

const printer = new FancyPrinter();
const command = args[0];
const text = args.slice(1).join(" ");

switch (command) {
  case "header":
    if (!text) {
      console.error("Error: header command requires text");
      process.exit(1);
    }
    console.log(printer.header(text));
    break;

  case "box":
    if (!text) {
      console.error("Error: box command requires text");
      process.exit(1);
    }
    console.log(printer.box(text));
    break;

  case "demo":
    require("./demo.js");
    break;

  default:
    console.error(`Unknown command: ${command}`);
    process.exit(1);
}
