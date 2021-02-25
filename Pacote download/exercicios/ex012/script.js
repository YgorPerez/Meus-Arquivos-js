function parimp() {
    var res = document.getElementById('res')
    var n = document.getElementById('txtn')
    var num = Number(n.value)
    if (num%2 == 0) {
        res.innerHTML = `O número ${num} é par`
    }
    else {
        res.innerHTML = `O número ${num} é impar`
    }
}

