function maior() {
    var res = document.getElementById('res')
    var n1 = document.getElementById('txtn1')
    var num1 = Number(n1.value)
    var n2 = document.getElementById('txtn2')
    var num2 = Number(n2.value)
    if (num1 > num2) {
        res.innerHTML = `O número ${num1} é maior que ${num2}`
    }
    else if (num1 == num2) {
        res.innerHTML = `O número ${num1} é igual à ${num2}`
    }
    else {
        res.innerHTML = `O número ${num1} é menor que ${num2}`
    }
}