function anos() {
    var res = document.getElementById('res')
    var txtn = (<HTMLInputElement>document.getElementById('txtn')).value;
    var nasc = Number(txtn)
    var agora = new Date
    var ano = agora.getFullYear()
    var idade = ano - nasc
    if (txtn.length == 0 || nasc > ano || nasc <= 0) {
        res.innerHTML = 'Digite um ano válido'
    }
    else {
        res.innerHTML = `A pessoa que nasceu em ${nasc} vai completar ${idade} anos em ${ano}`
    }
}
