function cont() {
    var con = 2;
    var res = document.getElementById('res');
    for (con; con <= 10; con += 2) {
        res.innerHTML += "<p>" + con + "</p>";
    }
}
