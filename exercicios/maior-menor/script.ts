function maior() {
    var res = document.getElementById('res')
    var n1 = (<HTMLInputElement>document.getElementById('txtn1')).value;
    var num1 = Number(n1)
    var n2 = (<HTMLInputElement>document.getElementById('txtn2')).value;
    var num2 = Number(n2)
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