/**
 * Left-pad a string with a specified character
 * @param {string} str - The string to pad
 * @param {number} length - The target length
 * @param {string} char - The character to pad with (default: ' ')
 * @returns {string} The padded string
 */
function leftPad(str, length, char = " ") {
  if (typeof str !== "string") {
    str = String(str);
  }

  if (typeof length !== "number" || isNaN(length)) {
    throw new TypeError("Length must be a number");
  }

  if (str.length >= length) {
    return str;
  }

  const padLength = length - str.length;
  const padString = char.repeat(padLength);

  return padString + str;
}

module.exports = leftPad;
