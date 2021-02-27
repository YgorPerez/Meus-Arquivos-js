function contagem() {
    var res = document.getElementById('res')
    res.innerHTML = ''
    var fnum = (<HTMLInputElement>document.getElementById('fnum')).value;
    var num = Number(fnum)
    if (fnum.length == 0 || num <= 0) {
        res.innerHTML = 'Digite um número maior que 0'
    }
    else {
        for(let x = 0; x <= num; x++) {
            res.innerHTML += `<p>${x}</p>`
        }
    }    
}