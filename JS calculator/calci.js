function calculated() {
    let num1 = document.getElementById('num1').value;
    parseInt(num1);

    let num2 = document.getElementById('num2').value;
    parseInt(num2);

    let operator = document.getElementById('operator').value;
    parseInt(operator);
    let result = 0;
    if (parseInt(operator) == 0) {
        result = parseInt(num1) + parseInt(num2);
    }
    else if (parseInt(operator) == 1) {
        result = parseInt(num1) - parseInt(num2);
    }
    else if (parseInt(operator) == 2) {
        result = parseInt(num1) / parseInt(num2);
    }
    else if (parseInt(operator) == 3) {
        result = parseInt(num1) * parseInt(num2);
    }
    document.getElementById('result').value = result;
};