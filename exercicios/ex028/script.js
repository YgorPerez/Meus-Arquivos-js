function fator() {
    res.innerHTML = ''
    var fnum = document.getElementById('fnum')
    var num = Number(fnum.value)
    var tot = num
    if(fnum.value.length == 0 || num <= 0) {
        res.innerHTML = 'Digite um número maior que 0'
    }
    else {
        for (x = num-1; x > 1; x--) {
            res.innerHTML += `<p>${tot} x ${x}</p>`
            tot *= x
        }
        res.innerHTML += `<p>O fatorial de ${num} é igual á ${tot}</p>`
    }
}