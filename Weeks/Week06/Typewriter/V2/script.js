const input = document.getElementById("inputText");
const startBtn = document.getElementById("startBtn");
const output = document.getElementById("typewriter");

startBtn.addEventListener("click", () => {
  const text = input.value;
  typeText(text);
});

function typeText(text) {
  output.innerHTML = "";
  let index = 0;

  const caret = document.createElement("span");
  caret.className = "caret";
  output.appendChild(caret);

  function type() {
    if (index <= text.length) {
      output.firstChild && output.firstChild.remove(); // remove old caret
      output.textContent = text.slice(0, index);
      output.appendChild(caret);
      index++;
      setTimeout(type, 80);
    }
  }
  type();
}
