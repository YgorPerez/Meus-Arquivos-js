function contagem() {
    res.innerHTML = ''
    var fnum1 = document.getElementById('fnum1')
    var fnum2 = document.getElementById('fnum2')
    var num1 = Number(fnum1.value)
    var num2 = Number(fnum2.value)
    if (fnum1.value.length == 0 || num1 >= num2 || fnum2.value.length == 0) {
        res.innerHTML = 'Digite um número, o primeiro tem que ser maior que o segundo'
    }
    else {
        res.innerHTML = `Contando de ${num1} até ${num2}`
        for(num1; num1 <= num2; num1++) {
            res.innerHTML += `<p>${num1}</p>`
        }
    }    
}