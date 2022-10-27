function difference() {
    const zahl = parseInt(document.getElementById("zahl").value);

    let diff = zahl - 27;

    let ergebnis = "";

    if (diff > 27) {
        ergebnis = diff * 2;
    } else {
        ergebnis = diff;
    }

    console.log(ergebnis);
}