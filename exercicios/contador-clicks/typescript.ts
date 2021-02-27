var cont = Number(0)
let res = document.getElementById('res')
function clicou() {
    cont ++
    res.innerHTML = `<p>${cont}</p>`
}
function zerar() {
    cont = 0
    res.innerHTML = `<p>${cont}</p>`
}