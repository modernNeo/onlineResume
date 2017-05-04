< script src = "slideout.min.js" > < /script>
window.onload = function () {
    console.log("slideout being declared");
    var slideout = new Slideout({
        'panel': document.getElementById('panel'),
        'menu': document.getElementById('menu'),
        'padding': 256,
        'tolerance': 70
    });
}
