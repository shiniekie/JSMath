document.getElementById("solveBtn").addEventListener("click", calculate);

function calculate() {
    var n1 = parseFloat(document.getElementById("num1").value);
    var n2 = parseFloat(document.getElementById("num2").value);
    var op = document.getElementById("operator").value;
    var answer;

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("result").innerHTML = "Please enter both numbers.";
        return;
    }

    if (op === "+") {
        answer = n1 + n2;
    } 
    else if (op === "-") {
        answer = n1 - n2;
    } 
    else if (op === "*") {
        answer = n1 * n2;
    } 
    else if (op === "/") {
        if (n2 === 0) {
            answer = "Cannot divide by zero";
        } else {
            answer = n1 / n2;
        }
    }

    document.getElementById("result").innerHTML = "Result: " + answer;
}