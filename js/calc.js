const display = document.getElementById("display")
const history = document.getElementById("history")

let historyString = ""
let currentString = ""

function displayValue(str) {
    currentString += str
    display.innerHTML = currentString
    console.log([str, currentString])
}