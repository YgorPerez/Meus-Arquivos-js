var res = document.getElementById('res')
function calcular() {
    var n1 = (<HTMLInputElement>document.getElementById('txtn1')).value;
    var n2 = (<HTMLInputElement>document.getElementById('txtn2')).value;
    var no = (<HTMLInputElement>document.getElementById('txt')).value;
    var num1 = Number(n1)
    var num2 = Number(n2)
    var nome = String(no)
    var med = (num1 + num2)/2
    res.innerHTML = `<p>Calculando a média de ${nome}</p>`
    res.innerHTML += `<p>A primeira nota foi ${num1} e a segunda ${num2}</p>`
    res.innerHTML += `<p>A média é de ${med}</p>`
    if (n1.length == 0 || n2.length == 0 || no.length == 0 || num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {
        res.innerHTML = 'Digite os dados acima corretamente'
    }
    else if (med >= 6) {
        res.innerHTML += `<p>Parábens, você foi muito bem e passou!</p>`
    }
    else {
        res.innerHTML += `<p>Você repetiu, tente denovo.</p>`
    }
}