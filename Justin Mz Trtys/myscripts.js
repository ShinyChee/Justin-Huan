function change_picture() {
    let Spieler = document.getElementById('list').value;
    switch (Spieler) {
        case "LeBron":
            wechseln("../Bilder/LeBron.png")
            document.getElementById("LeBron").style.visibility = "visible";
            document.getElementById("Kobe").style.visibility = "hidden";
            document.getElementById("Nowitzki").style.visibility = "hidden";
            break;
        case "Kobe":
            wechseln("../Bilder/Kobe.png")
            document.getElementById("Kobe").style.visibility = "visible";
            document.getElementById("LeBron").style.visibility = "hidden";
            document.getElementById("Nowitzki").style.visibility = "hidden";
            break;
        case "Nowitzki":
            wechseln("../Bilder/Nowitzki.png")
            document.getElementById("Nowitzki").style.visibility = "visible";
            document.getElementById("Kobe").style.visibility = "hidden";
            document.getElementById("LeBron").style.visibility = "hidden";
            break;
        default:
            wechseln("../Bilder/BasketBall.png")
    }
    document.getElementById('list').value;

}

function wechseln(source) {
    var img = document.getElementById("Bild");
    img.src = source;
}

function go_somewhere(destination) {
    window.location.href = destination;
}

function refresh() {

}