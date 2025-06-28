# 🎨 Fancy Printer

A fun terminal text formatter that creates beautiful output using left-pad for precise alignment. Perfect for CLI applications, logging, and creating visually appealing terminal displays.

## ✨ Features

- 📦 **Headers**: Create eye-catching bordered headers
- 📋 **Boxes**: Wrap text in attractive bordered boxes
- 🔢 **Numbered Lists**: Generate properly aligned numbered lists
- 📊 **Tables**: Format data into clean table layouts
- 📈 **Progress Bars**: Display progress with visual bars
- 🎯 **Text Centering**: Center text with customizable padding
- 🛠️ **CLI Interface**: Use from command line with simple commands
- ⚙️ **Configurable**: Customize width, border characters, and padding

## 📦 Installation

```bash
npm install @ncronquist/fancy-printer
```

## 🚀 Quick Start

### Programmatic Usage

```javascript
const FancyPrinter = require('@ncronquist/fancy-printer');

const printer = new FancyPrinter({ width: 60 });

// Create a fancy header
console.log(printer.header('Welcome to My App!'));

// Put text in a box
console.log(printer.box('This is important information\nthat spans multiple lines'));

// Create a numbered list
const items = ['First item', 'Second item', 'Third item'];
console.log(printer.numberedList(items));
```

### CLI Usage

```bash
# Install globally for CLI access
npm install -g @ncronquist/fancy-printer

# Create headers
fancy-print header "My Application"

# Create boxes
fancy-print box "Important: Please read carefully"

# Run the interactive demo
fancy-print demo
```

## 📖 API Reference

### Constructor

```javascript
new FancyPrinter(options)
```

**Options:**
- `width` (number): Output width in characters (default: 60)
- `borderChar` (string): Character for borders (default: "=")
- `paddingChar` (string): Character for padding (default: " ")

### Methods

#### `header(text)`

Creates a fancy header with top and bottom borders.

```javascript
printer.header('Section Title');
```

#### `box(text)`

Wraps text in a bordered box. Supports multi-line text.

```javascript
printer.box('Single line');
printer.box('Multi-line\ntext\nsupported');
```

#### `numberedList(items)`

Creates a numbered list with proper alignment.

```javascript
const todos = ['Task 1', 'Task 2', 'Task 3'];
printer.numberedList(todos);
```

#### `table(data, headers)`

Formats data into a table layout.

```javascript
const data = [
  { name: 'Alice', age: 30, city: 'NYC' },
  { name: 'Bob', age: 25, city: 'SF' }
];
printer.table(data);

// With custom headers
printer.table(data, ['Name', 'Age', 'Location']);
```

#### `progressBar(current, total, label)`

Creates a visual progress bar.

```javascript
printer.progressBar(75, 100, 'Loading');
// Output: Loading [████████████░░░░] 75%
```

#### `centerText(text)`

Centers text within the configured width.

```javascript
printer.centerText('Centered Text');
```

## 🛠️ CLI Commands

### Global Installation

```bash
npm install -g @ncronquist/fancy-printer
```

### Available Commands

```bash
# Display help
fancy-print

# Create headers
fancy-print header "My Header Text"

# Create boxes
fancy-print box "Box content here"

# Run demo with examples
fancy-print demo
```

## 📋 Examples

### Basic Usage

```javascript
const FancyPrinter = require('@ncronquist/fancy-printer');
const printer = new FancyPrinter();

console.log(printer.header('🚀 Application Started'));
console.log(printer.box('System initialized successfully\nAll modules loaded'));
```

### Custom Configuration

```javascript
const printer = new FancyPrinter({
  width: 80,
  borderChar: '*',
  paddingChar: '.'
});

console.log(printer.header('Custom Style'));
```

### Data Table Example

```javascript
const users = [
  { id: 1, name: 'Alice Johnson', role: 'Admin', active: true },
  { id: 2, name: 'Bob Smith', role: 'User', active: false },
  { id: 3, name: 'Carol Williams', role: 'Editor', active: true }
];

console.log(printer.table(users, ['ID', 'Name', 'Role', 'Status']));
```

### Progress Tracking

```javascript
// Simulate progress
for (let i = 0; i <= 100; i += 10) {
  console.clear();
  console.log(printer.progressBar(i, 100, 'Processing'));
  // Add delay for demo purposes
}
```

## 🔗 Dependencies

- `@ncronquist/left-pad`: Used for precise text alignment and padding

## 🧪 Testing

```bash
npm test
```

## 🎮 Demo

Run the interactive demo to see all features in action:

```bash
npm run demo
# or
fancy-print demo
```

## 📄 License

MIT

## 👤 Author

Nick Cronquist

## 🐛 Issues & Contributions

Please report issues and submit pull requests on [GitHub](https://github.com/ncronquist/mono-package-publish).

## 📝 Changelog

See [CHANGELOG.md](./CHANGELOG.md) for version history and updates.