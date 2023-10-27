document.addEventListener("DOMContentLoaded", function () {
  const resultElement = document.querySelector(".result");
  const buttons = document.querySelectorAll(".btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const buttonText = button.innerText;

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
        default:
          resultElement.value += buttonText;
          break;
      }
    });
  });
});
