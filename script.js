 var inputBox = document.getElementById("InputBox");
    var buttons = document.querySelectorAll("#btn");

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        var value = this.value;

        if (value === "AC") {
          inputBox.value = "";
        } else if (value === "DEL") {
          inputBox.value = inputBox.value.slice(0, -1);
        } else if (value === "=") {
          calculateResult();
        } else {
          inputBox.value += value;
        }
      });
    }

    function calculateResult() {
      try {
        var expression = inputBox.value;
        var result = eval(expression); // Use only for basic arithmetic operations
        inputBox.value = result;
      } catch (error) {
        inputBox.value = "Error";
      }
    }
      