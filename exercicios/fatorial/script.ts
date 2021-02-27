function fator() {
    var res = document.getElementById('res')
    res.innerHTML = ''
    var fnum = (<HTMLInputElement>document.getElementById('fnum')).value;
    var num = Number(fnum)
    var tot = num
    if(fnum.length == 0 || num <= 0) {
        res.innerHTML = 'Digite um número maior que 0'
    }
    else {
        for (let x = num-1; x > 1; x--) {
            res.innerHTML += `<p>${tot} x ${x}</p>`
            tot *= x
        }
        res.innerHTML += `<p>O fatorial de ${num} é igual á ${tot}</p>`
    }
}