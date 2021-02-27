function fator() {
    var res = document.getElementById('res');
    res.innerHTML = '';
    var fnum = document.getElementById('fnum').value;
    var num = Number(fnum);
    var tot = num;
    if (fnum.length == 0 || num <= 0) {
        res.innerHTML = 'Digite um número maior que 0';
    }
    else {
        for (var x = num - 1; x > 1; x--) {
            res.innerHTML += "<p>" + tot + " x " + x + "</p>";
            tot *= x;
        }
        res.innerHTML += "<p>O fatorial de " + num + " \u00E9 igual \u00E1 " + tot + "</p>";
    }
}
