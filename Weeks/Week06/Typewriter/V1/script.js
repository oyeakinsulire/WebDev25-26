const lines = [
  "My trust keeps growing",
  "until thought itself",
  "falls silent."
];

const container = document.getElementById("typewriter");

let lineIndex = 0;
let charIndex = 0;

const caret = document.createElement("span");
caret.className = "caret";
container.appendChild(caret);

function type() {
  if (lineIndex < lines.length) {
    const currentLine = lines[lineIndex];

    if (charIndex <= currentLine.length) {
      container.textContent = currentLine.substring(0, charIndex);
      container.appendChild(caret);
      charIndex++;
      setTimeout(type, 90);
    } else {
      // pause before next line
      container.textContent += "\n";
      charIndex = 0;
      lineIndex++;
      setTimeout(type, 400);
    }
  }
}

type();
