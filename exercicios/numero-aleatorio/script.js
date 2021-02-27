let res = document.getElementById('res');
function gerar() {
    let min = 1;
    let aleatorio = Math.random(); // Essa função gera um valor Real aleatório entre 0 e 1
    let num = min + Math.trunc(100 * aleatorio);
    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`;
}
function limpar() {
    res.innerHTML = 'Aqui que vai aparcer os números...';
}
