function weatherQuality(event) {
    event.preventDefault();
    let weather = parseInt(document.getElementById("weather").value);

    let weatherQ = "";

    if (weather >= 8 && weather <= 10) {
        weatherQ = "super";
    } else if (weather >= 6 && weather <= 7) {
        weatherQ = "gut";
    } else if (weather >= 3 && weather <= 5) {
        weatherQ = "okay";
    } else if (weather >= 0 && weather <= 2) {
        weatherQ = "schlecht";
    } else {
        weatherQ = "Kein gültiger Wert"
    }

    document.getElementById("weatherQualityStatement").innerHTML = "Die Wetterqualität ist " + weatherQ;
}