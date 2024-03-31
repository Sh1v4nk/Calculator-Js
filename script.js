const resultElement = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");
let hasDecimal = false; // Flag to track if a decimal point has been entered

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonText = button.innerText;
    const lastChar = resultElement.value.slice(-1);

    switch (buttonText) {
      case "AC":
        resultElement.value = "";
        hasDecimal = false;
        break;
      case "DEL":
        resultElement.value = resultElement.value.slice(0, -1);
        hasDecimal = resultElement.value.includes(".") ? true : false;
        break;
      case "=":
        try {
          resultElement.value = eval(resultElement.value);
          hasDecimal = false; // Reset decimal flag after evaluation
        } catch (error) {
          resultElement.value = "Maths Error.";
        }
        break;
      case ".":
        if (!hasDecimal) {
          resultElement.value += buttonText;
          hasDecimal = true;
        }
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        if (["+", "-", "*", "/"].includes(lastChar)) {
          resultElement.value = resultElement.value.slice(0, -1) + buttonText;
        } else {
          resultElement.value += buttonText;
          hasDecimal = false; // Reset decimal flag after operator
        }
        break;
      default:
        resultElement.value += buttonText;
        break;
    }
  });
});
