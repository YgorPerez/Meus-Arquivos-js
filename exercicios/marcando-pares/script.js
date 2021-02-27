function cont() {
    var res = document.getElementById('res');
    var con = 1;
    for (con; con <= 10; con++) {
        if (con % 2 == 0) {
            res.innerHTML += "<p><mark>" + con + "</mark></p>";
        }
        else {
            res.innerHTML += "<p>" + con + "</p>";
        }
    }
}
