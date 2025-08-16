// ==========================
// Part 2: Functions Demo
// ==========================

// Function with parameters + return value
function addNumbers(a, b) {
  return a + b;
}

// Function showing local vs global scope
let globalMessage = "Hello from Global Scope!";

function showSum(a, b) {
  let localMessage = "Inside Function Scope"; // local
  let result = addNumbers(a, b);

  // Show result on page
  document.getElementById("functionResult").innerText =
    `${globalMessage} | ${localMessage} | Result: ${result}`;
}

// ==========================
// Part 3: Combining JS + CSS
// ==========================

const animateBtn = document.getElementById("animateBtn");
const magicBox = document.getElementById("magicBox");

// Toggle animation on click
animateBtn.addEventListener("click", () => {
  magicBox.classList.toggle("animate");
});
