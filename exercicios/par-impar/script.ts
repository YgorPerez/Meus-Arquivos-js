var res = document.getElementById('res')
function parimp() {
    var res = document.getElementById('res')
    var n = (<HTMLInputElement>document.getElementById('txtn')).value;
    var num = Number(n)
    if (n.length == 0) {
        res.innerHTML = 'Digite um número'
    }
    else if (num%2 == 0 && num != 0) {
        res.innerHTML = `O número ${num} é par`
    }
    else if (num == 0) {
        res.innerHTML = '0 é nulo'
    }
    else {
        res.innerHTML = `O número ${num} é impar`
    }
}

