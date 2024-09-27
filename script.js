let userInput = document.querySelector("input")

let expression = ""
function calculate(number) {
    expression += number
    userInput.value = expression
    
}

function erase() {
    expression = ""
    userInput.value = expression
}

function equal() {
    try {
        userInput.value = eval(expression)
        
    } catch (error) {
        error =  userInput.value = "Error"
    }
    expression = ""
}