document.addEventListener('DOMContentLoaded', () => {
    loadPatios();
});

function loadPatios() {

    let text = document.getElementById("topScores");
    var playerRow = "";

    for (let i = 0; i < localStorage.length; i++) {
        let name = localStorage.key(i);

        if (name === 'user' || name === 'error') {
            continue;
        }
        let info = JSON.parse(localStorage.getItem(name));

        playerRow += "<tr>";
        playerRow += "<td>" + name + "</td>";
        playerRow += "<td>" + info[0][0] + "</td>";
        playerRow += "<td>" + info[0][1] + "</td></tr>";
    }

    text.innerHTML += playerRow;
}