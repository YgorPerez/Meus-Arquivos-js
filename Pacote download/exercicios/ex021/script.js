function cont() {
    var res = document.getElementById('res')
    for (var x = 1; x<=10; x++) {
        res.innerHTML += `<p>${x}</p>`
    }
    res.innerHTML += `<p>&#x1F3C1;</p>`
}