function anos() {
    var res = document.getElementById('res')
    var txtn = document.getElementById('txtn')
    var nasc = Number(txtn.value)
    var agora = new Date
    var ano = agora.getFullYear()
    var idade = ano - nasc
    if (txtn.value.length == '' || nasc > ano || nasc <= 0) {
        res.innerHTML = 'Digite um ano válido'
    }
    else {
        res.innerHTML = `A pessoa que nasceu em ${nasc} vai completar ${idade} anos em ${ano}`
    }
}
