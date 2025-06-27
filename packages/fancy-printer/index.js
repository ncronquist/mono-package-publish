const leftPad = require("@ncronquist/left-pad");

/**
 * FancyPrinter class for creating beautiful terminal output
 */
class FancyPrinter {
  constructor(options = {}) {
    this.width = options.width || 60;
    this.borderChar = options.borderChar || "=";
    this.paddingChar = options.paddingChar || " ";
  }

  /**
   * Create a fancy header
   */
  header(text) {
    const border = this.borderChar.repeat(this.width);
    const paddedText = this.centerText(text);

    return [border, paddedText, border].join("\n");
  }

  /**
   * Create a fancy box around text
   */
  box(text) {
    const lines = text.split("\n");
    const maxLength = Math.max(...lines.map((line) => line.length));
    const boxWidth = Math.max(maxLength + 4, this.width);

    const border = "+" + "-".repeat(boxWidth - 2) + "+";
    const paddedLines = lines.map(
      (line) => "| " + leftPad(line, boxWidth - 4, this.paddingChar) + " |"
    );

    return [border, ...paddedLines, border].join("\n");
  }

  /**
   * Create a numbered list with fancy formatting
   */
  numberedList(items) {
    const maxNum = items.length.toString().length;

    return items
      .map((item, index) => {
        const num = leftPad((index + 1).toString(), maxNum, "0");
        return `${num}. ${item}`;
      })
      .join("\n");
  }

  /**
   * Create a table-like output
   */
  table(data, headers = []) {
    if (!data.length) return "";

    const columns = headers.length || Object.keys(data[0]).length;
    const keys = headers.length ? headers : Object.keys(data[0]);

    // Calculate column widths
    const colWidths = keys.map((key) => {
      const headerWidth = key.length;
      const dataWidth = Math.max(
        ...data.map((row) => String(row[key] || "").length)
      );
      return Math.max(headerWidth, dataWidth) + 2;
    });

    // Create header
    const headerRow = keys
      .map((key, i) => leftPad(key, colWidths[i]))
      .join("|");

    const separator = colWidths.map((width) => "-".repeat(width)).join("+");

    // Create data rows
    const dataRows = data.map((row) =>
      keys
        .map((key, i) => leftPad(String(row[key] || ""), colWidths[i]))
        .join("|")
    );

    return [headerRow, separator, ...dataRows].join("\n");
  }

  /**
   * Center text within the specified width
   */
  centerText(text) {
    const padding = Math.max(0, this.width - text.length);
    const leftPadding = Math.floor(padding / 2);
    return (
      leftPad(text, text.length + leftPadding) +
      " ".repeat(padding - leftPadding)
    );
  }

  /**
   * Create a progress bar
   */
  progressBar(current, total, label = "") {
    const barWidth = this.width - 20; // Reserve space for percentage and label
    const progress = Math.min(current / total, 1);
    const filledWidth = Math.floor(progress * barWidth);
    const emptyWidth = barWidth - filledWidth;

    const filled = "█".repeat(filledWidth);
    const empty = "░".repeat(emptyWidth);
    const percentage = leftPad(Math.round(progress * 100).toString(), 3) + "%";

    return `${label} [${filled}${empty}] ${percentage}`;
  }
}

module.exports = FancyPrinter;
