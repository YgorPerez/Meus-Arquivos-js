function est() {
    var agora = new Date
    var mes = agora.getMonth()
    var meses = ['janeiro', 'fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro']
    switch (mes) {
        case 0: case 1: case 2:
            res.innerHTML = `<p>Estamos no mês de ${meses[mes]}</p>`
            res.innerHTML += `<p>Ou seja, no inverno os meses de ${meses[0]}, ${meses[1]}, ${meses[2]} são de inverno</p>`
            break;
        case 3: case 4: case 5:
            res.innerHTML = `<p>Estamos no mês de ${meses[mes]}</p>`
            res.innerHTML += `<p>Ou seja, na primavera os meses de ${meses[3]}, ${meses[4]}, ${meses[4]} são da primavera</p>`
            break;
        case 6: case 7: case 8:
            res.innerHTML = `<p>Estamos no mês de ${meses[mes]}</p>`
            res.innerHTML += `<p>Ou seja, no verão os meses de ${meses[6]}, ${meses[7]}, ${meses[8]} são do verão</p>`
            break;
        case 9: case 10: case 11:
            res.innerHTML = `<p>Estamos no mês de ${meses[mes]}</p>`
            res.innerHTML += `<p>Ou seja, no outono os meses de ${meses[1]}, ${meses[2]}, ${meses[3]} são do outono</p>`
            break;
        default:
            res.innerHTML = '<p>Estamos no espaço sideral...</p>'
            break;
    }
}