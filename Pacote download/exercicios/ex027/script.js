function calc() {
    var lista = document.getElementById('lista')
    lista.innerHTML = ('')
    var fnum = document.getElementById('fnum')
    var num = Number(fnum.value)
    if (fnum.value.length == 0) {
        var mostrar = document.createElement('option')
        mostrar.innerHTML = 'Digite um número para calcular'
        lista.appendChild(mostrar)
    }
    else {
        for (var x = 1; x <=10; x++) {
            var mostrar = document.createElement('option')
            mostrar.text += (`${num} x ${x} = ${num*x}`)
            lista.appendChild(mostrar)
        }
    }
}
