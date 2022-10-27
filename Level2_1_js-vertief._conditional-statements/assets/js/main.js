function winner() {
    const age1 = parseInt(document.getElementById("age1").value);

    const height1 = parseInt(document.getElementById("height1").value);

    let firstContestant = (age1 * 5) + height1;

    const age2 = parseInt(document.getElementById("age2").value);

    const height2 = parseInt(document.getElementById("height2").value);

    let secondContestant = (age2 * 5) + height2;

    let winner = "";

    if (firstContestant > secondContestant) {
        winner = "Teilnehmer 1 mit " + firstContestant + " Punkten";
    } else if (secondContestant > firstContestant) {
        winner = "Teilnehmer 2 mit " + secondContestant + " Punkten";
    } else {
        winner = "Es gibt keinen Gewinner"
    }

    document.getElementById("winner").innerHTML = winner;
}