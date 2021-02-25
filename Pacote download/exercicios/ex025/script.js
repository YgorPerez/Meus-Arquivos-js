function contagem() {
    res.innerHTML = ''
    var fnum = document.getElementById('fnum')
    var num = Number(fnum.value)
    if (fnum.value.length == 0 || num <= 0) {
        res.innerHTML = 'Digite um número maior que 0'
    }
    else {
        for(let x = 0; x <= num; x++) {
            res.innerHTML += `<p>${x}</p>`
        }
    }    
}