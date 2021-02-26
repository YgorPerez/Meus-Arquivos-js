var res = document.getElementById('res');
function calcular() {
    var n1 = document.getElementById('txtn1').value;
    var n2 = document.getElementById('txtn2').value;
    var no = document.getElementById('txt').value;
    var num1 = Number(n1);
    var num2 = Number(n2);
    var nome = String(no);
    var med = (num1 + num2) / 2;
    res.innerHTML = "<p>Calculando a m\u00E9dia de " + nome + "</p>";
    res.innerHTML += "<p>A primeira nota foi " + num1 + " e a segunda " + num2 + "</p>";
    res.innerHTML += "<p>A m\u00E9dia \u00E9 de " + med + "</p>";
    if (n1.length == 0 || n2.length == 0 || no.length == 0 || num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {
        res.innerHTML = 'Digite os dados acima corretamente';
    }
    else if (med >= 6) {
        res.innerHTML += "<p>Par\u00E1bens, voc\u00EA foi muito bem e passou!</p>";
    }
    else {
        res.innerHTML += "<p>Voc\u00EA repetiu, tente denovo.</p>";
    }
}
