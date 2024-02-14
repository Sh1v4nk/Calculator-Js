const resultElement = document.querySelector(".result");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const buttonText = button.innerText;
    const lastChar = resultElement.value.slice(-1);

    switch (buttonText) {
      case "AC":
        resultElement.value = "";
        break;
      case "DEL":
        resultElement.value = resultElement.value.slice(0, -1);
        break;
      case "=":
        try {
          resultElement.value = eval(resultElement.value);
        } catch (error) {
          resultElement.value = "Error";
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
        }
        break;
      default:
        resultElement.value += buttonText;
        break;
    }
  });
});
