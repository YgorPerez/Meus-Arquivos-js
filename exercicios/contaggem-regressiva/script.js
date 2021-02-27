function cont() {
    var res = document.getElementById('res');
    for (var x = 10; x >= 1; x--) {
        res.innerHTML += "<p>" + x + "</p>";
    }
    res.innerHTML += "<p>&#x1F3C1;</p>";
}
