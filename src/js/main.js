do {
    var firstNumber = prompt("Type first number"),
        secondNumber = prompt("Type second number"),
        operation = prompt("Which operation would you like to do: +, -, /, *? \n " +
            "For quit type 'q'");

    switch (operation) {
        case "+":
        case "plus":
            var result = +firstNumber + +secondNumber;
            break;
        case "-":
        case "minus":
            result = firstNumber - secondNumber;
            break;
        case "/":
        case "divide":
            result = firstNumber / secondNumber;
            break;
        case "*":
        case "multiply":
            result = firstNumber * secondNumber;
            break;
        case "q":
            result = "Thank you for using our APP";
            break;
    }
    console.log(result);
} while (operation !== "q");


