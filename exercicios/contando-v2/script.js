function contagem() {
    var res = document.getElementById('res');
    res.innerHTML = '';
    var fnum1 = document.getElementById('fnum1').value;
    var fnum2 = document.getElementById('fnum2').value;
    var num1 = Number(fnum1);
    var num2 = Number(fnum2);
    if (fnum1.length == 0 || num1 >= num2 || fnum2.length == 0) {
        res.innerHTML = 'Digite um número, o primeiro tem que ser maior que o segundo';
    }
    else {
        res.innerHTML = "Contando de " + num1 + " at\u00E9 " + num2;
        for (num1; num1 <= num2; num1++) {
            res.innerHTML += "<p>" + num1 + "</p>";
        }
    }
}
