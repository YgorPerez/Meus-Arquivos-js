function contagem() {
    var res = document.getElementById('res');
    res.innerHTML = '';
    var fnum = document.getElementById('fnum').value;
    var num = Number(fnum);
    if (fnum.length == 0 || num <= 0) {
        res.innerHTML = 'Digite um número maior que 0';
    }
    else {
        for (var x = 0; x <= num; x++) {
            res.innerHTML += "<p>" + x + "</p>";
        }
    }
}
