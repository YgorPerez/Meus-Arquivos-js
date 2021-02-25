function ver() {
    var res = document.getElementById('res')
    var semana = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']
    var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    var data = new Date
    var ano = data.getFullYear()
    var mes = data.getMonth()
    var dia = data.getDay()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    res.innerHTML = `<p>Estamos no ano de ${ano}</p>`
    res.innerHTML += `<p>No mês de ${meses[mes]}</p>`
    res.innerHTML += `<p>Hoje é ${semana[dia]}</p>`
    res.innerHTML += `<p>Agora são ${hora} horas</p>`
    res.innerHTML += `<p>${minuto} minutos</p>`
    res.innerHTML += `<p>e ${segundo} segundos</p>`
}