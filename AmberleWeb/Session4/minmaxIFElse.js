function findMinNumber() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

    if (num1 < num2 && num1 < num3) {
         minNumberResult = num1;
    } 
    else if (num2 < num1 && num2 < num3) {
        minNumberResult = num2;
    } 
    else {
        minNumberResult = num3;
    }

    // let minNumberResult = Math.min(num1, num2, num3);

    document.getElementById("minNumber").textContent = "Min is: " + minNumberResult;
}

function findMaxNumber() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let num3 = parseFloat(document.getElementById("num3").value);

    if (num1 > num2 && num1 > num3) {
        maxNumberResult = num1;
    } 
    else if (num2 > num1 && num2 > num3) {
        maxNumberResult = num2;
    } else {
        maxNumberResult = num3;
    }
    
    // var maxNumberResult = Math.max(num1, num2, num3);

    document.getElementById("maxNumber").textContent = "Max is: " + maxNumberResult
}