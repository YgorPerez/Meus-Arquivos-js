var min = 1
var aleatorio = Math.random()
var num = min + Math.trunc(100 * aleatorio)
var res = document.getElementById('res')
res.innerHTML += `<p>Número gerado</p>`
function gerar() {
    aleatorio = Math.random()
    num = min + Math.trunc(100 * aleatorio)
    res.innerHTML += `<p>Novo número gerado</p>`
}
function limpar() {
    res.innerHTML = 'Aqui que vai aparcer os números...'
}
var cont = 1
function advinhar() {
    var txtn = (<HTMLInputElement>document.getElementById('txtn')).value;
    var adv = Number(txtn)
    if (txtn.length == 0 || adv < 1 || adv > 100) {
        res.innerHTML += '<p>Digite um número entre 1 e 100</p>'
    }
    else if (adv < num) {
        res.innerHTML += `<p>${adv}</p>`
        res.innerHTML += `<p>Mais</p>`
        cont ++
    }
    else if (adv > num) {
        res.innerHTML += `<p>${adv}</p>`
        res.innerHTML += `<p>Menos</p>`
        cont++
    }
    else if (adv == num) {
        res.innerHTML += `<p>${adv}</p>`
        res.innerHTML += `<p>Parabens, você descobriu, eu estava pensando no ${num}, você acertou em ${cont} tentativas</p>`
        gerar()
    }
}