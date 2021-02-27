function maior() {
    var res = document.getElementById('res');
    var n1 = document.getElementById('txtn1').value;
    var num1 = Number(n1);
    var n2 = document.getElementById('txtn2').value;
    var num2 = Number(n2);
    if (num1 > num2) {
        res.innerHTML = "O n\u00FAmero " + num1 + " \u00E9 maior que " + num2;
    }
    else if (num1 == num2) {
        res.innerHTML = "O n\u00FAmero " + num1 + " \u00E9 igual \u00E0 " + num2;
    }
    else {
        res.innerHTML = "O n\u00FAmero " + num1 + " \u00E9 menor que " + num2;
    }
}
