var res = document.getElementById('res');
function parimp() {
    var res = document.getElementById('res');
    var n = document.getElementById('txtn').value;
    var num = Number(n);
    if (n.length == 0) {
        res.innerHTML = 'Digite um número';
    }
    else if (num % 2 == 0 && num != 0) {
        res.innerHTML = "O n\u00FAmero " + num + " \u00E9 par";
    }
    else if (num == 0) {
        res.innerHTML = '0 é nulo';
    }
    else {
        res.innerHTML = "O n\u00FAmero " + num + " \u00E9 impar";
    }
}
