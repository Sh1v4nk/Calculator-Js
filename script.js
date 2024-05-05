const resultElement = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");
let hasDecimal = false; // Flag to track if a decimal point has been entered

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonText = button.innerText;
    const lastChar = resultElement.value.slice(-1);

    switch (buttonText) {
      case "AC":
        clearResult();
        break;
      case "DEL":
        deleteLastCharacter();
        break;
      case "=":
        evaluateExpression();
        break;
      case ".":
        handleDecimal();
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        handleOperator(buttonText, lastChar);
        break;
      default:
        appendCharacter(buttonText);
        break;
    }
  });
});

function clearResult() {
  resultElement.value = "";
  hasDecimal = false;
}

function deleteLastCharacter() {
  resultElement.value = resultElement.value.slice(0, -1);
  hasDecimal = resultElement.value.includes(".") ? true : false;
}

function evaluateExpression() {
  try {
    resultElement.value = eval(resultElement.value);
    hasDecimal = false; // Reset decimal flag after evaluation
  } catch (error) {
    resultElement.value = "Invalid Expression";
  }
}

function handleDecimal() {
  if (resultElement.value === "Invalid Expression") clearResult();
  if (!hasDecimal) {
    resultElement.value += ".";
    hasDecimal = true;
  }
}

function handleOperator(character, lastChar) {
  if (["+", "-", "*", "/", "."].includes(lastChar)) {
    resultElement.value = resultElement.value.slice(0, -1) + character;
  } else {
    resultElement.value += character;
    hasDecimal = false; // Reset decimal flag after operator
  }
}

function appendCharacter(character) {
  if (resultElement.value === "Invalid Expression") clearResult();
  resultElement.value += character;
}
