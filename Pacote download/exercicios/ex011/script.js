var res = document.getElementById('res')
function calcular() {
    var n1 = document.getElementById('txtn1')
    var n2 = document.getElementById('txtn2')
    var no = document.getElementById('txt')
    var num1 = Number(n1.value)
    var num2 = Number(n2.value)
    var nome = String(no.value)
    var med = (num1 + num2)/2
    res.innerHTML = `<p>Calculando a média de ${nome}</p>`
    res.innerHTML += `<p>A primeira nota foi ${num1} e a segunda ${num2}</p>`
    res.innerHTML += `<p>A média é de ${med}</p>`
    if (med >= 6) {
        res.innerHTML += `<p>Parábens, você foi muito bem e passou!</p>`
    }
    else {
        res.innerHTML += `<p>Você repetiu, tente denovo.</p>`
    }
}