var res = document.getElementById('res');
function est() {
    var agora = new Date;
    var mes = agora.getMonth();
    var meses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
    switch (mes) {
        case 0:
        case 1:
        case 2:
            res.innerHTML = "<p>Estamos no m\u00EAs de " + meses[mes] + "</p>";
            res.innerHTML += "<p>Ou seja, no inverno os meses de " + meses[0] + ", " + meses[1] + ", " + meses[2] + " s\u00E3o de inverno</p>";
            break;
        case 3:
        case 4:
        case 5:
            res.innerHTML = "<p>Estamos no m\u00EAs de " + meses[mes] + "</p>";
            res.innerHTML += "<p>Ou seja, na primavera os meses de " + meses[3] + ", " + meses[4] + ", " + meses[4] + " s\u00E3o da primavera</p>";
            break;
        case 6:
        case 7:
        case 8:
            res.innerHTML = "<p>Estamos no m\u00EAs de " + meses[mes] + "</p>";
            res.innerHTML += "<p>Ou seja, no ver\u00E3o os meses de " + meses[6] + ", " + meses[7] + ", " + meses[8] + " s\u00E3o do ver\u00E3o</p>";
            break;
        case 9:
        case 10:
        case 11:
            res.innerHTML = "<p>Estamos no m\u00EAs de " + meses[mes] + "</p>";
            res.innerHTML += "<p>Ou seja, no outono os meses de " + meses[1] + ", " + meses[2] + ", " + meses[3] + " s\u00E3o do outono</p>";
            break;
        default:
            res.innerHTML = '<p>Estamos no espaço sideral...</p>';
            break;
    }
}
