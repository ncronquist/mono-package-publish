# @ncronquist/left-pad

A simple utility for left-padding strings with a specified character.

## Installation

```bash
npm install @ncronquist/left-pad@1.0.1
```

## Usage

```javascript
const leftPad = require('@ncronquist/left-pad');

// Basic padding with spaces (default)
leftPad('hello', 10);
// => '     hello'

// Padding with zeros
leftPad('42', 5, '0');
// => '00042'

// Padding with custom characters
leftPad('test', 8, '-');
// => '----test'

// Numbers are automatically converted to strings
leftPad(123, 6, '0');
// => '000123'

// If string is already long enough, returns original string
leftPad('already long enough', 10);
// => 'already long enough'
```

## API

### leftPad(str, length, char)

Left-pads a string with a specified character to reach the target length.

#### Parameters

- `str` (string|number): The string to pad. Numbers will be converted to strings.
- `length` (number): The target length of the resulting string.
- `char` (string, optional): The character to pad with. Defaults to `' '` (space).

#### Returns

- (string): The padded string.

#### Throws

- `TypeError`: If `length` is not a valid number.

## Examples

```javascript
const leftPad = require('@ncronquist/left-pad');

// Format numbers with leading zeros
const formatId = (id) => leftPad(id, 6, '0');
console.log(formatId(42)); // => '000042'

// Align text in fixed-width displays
const formatName = (name) => leftPad(name, 20);
console.log(formatName('John')); // => '                John'

// Create visual separators
const separator = leftPad('', 40, '=');
console.log(separator); // => '========================================'
```

## License

MIT
