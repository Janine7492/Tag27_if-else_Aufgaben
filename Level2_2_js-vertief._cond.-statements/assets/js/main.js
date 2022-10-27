function checkAirQuality() {
    const aqi = document.getElementById("aqi").value;

    document.getElementById("value").innerHTML = "Current value: " + aqi;

    if (aqi <= 50) {
        document.getElementById("concern").innerHTML = "Level of health concern: Good";
        document.getElementById("effect").innerHTML = "Level of health effect: Little or no risk";
        let section = document.getElementById("section");
        section.classList.remove("orange");
        section.classList.remove("red");
        section.classList.add("green");
    } else if (aqi > 50 && aqi <= 100) {
        document.getElementById("concern").innerHTML = "Level of health concern: Moderate";
        document.getElementById("effect").innerHTML = "Level of health effect: Acceptable quality";
        let section = document.getElementById("section");
        section.classList.remove("green");
        section.classList.remove("red");
        section.classList.add("orange");
    } else if (aqi > 100 && aqi <= 150) {
        document.getElementById("concern").innerHTML = "Level of health concern: Unhealthy for sensitive groups";
        document.getElementById("effect").innerHTML = "Level of health effect: Generable publics not likely affected";
        let section = document.getElementById("section");
        section.classList.remove("orange");
        section.classList.remove("green");
        section.classList.add("red");
    } else {
        document.getElementById("concern").innerHTML = "No valid input";
        document.getElementById("effect").innerHTML = "No valid input";
        let section = document.getElementById("section");
        section.classList.remove("orange");
        section.classList.remove("red");
        section.classList.remove("green");
    }
}