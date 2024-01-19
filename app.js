let addCandidateBtn = document.getElementById("addCandidateBtn");
let candidateInput = document.getElementById("candidateInput");
let candidates = ["Wednesday", "Enid", "Bianca", "Tyler", "Xavier","Thing","Morticia"];

addCandidateBtn.addEventListener("click", () => {
    if (candidateInput.value.trim() === "") {
        alert("Please enter a character's name.");
        return;
    }

    candidates.push(candidateInput.value);
    candidateInput.value = "";
    displayCandidates();
});

function displayCandidates() {
    var actorTable = document.getElementById("actorTable");
    actorTable.innerHTML = "";

    candidates.forEach((candidate, index) => {
        var row = document.createElement("tr");

        var nameCell = document.createElement("td");
        nameCell.textContent = candidate;

        var indexCell = document.createElement("td");
        indexCell.textContent = index + 1;

        var voteCell = document.createElement("td");
        voteCell.textContent = 0;

        row.appendChild(indexCell);
        row.appendChild(nameCell);
        row.appendChild(voteCell);

        row.addEventListener("click", () => {
            voteCell.innerHTML++;
        });

        actorTable.appendChild(row);
    });
}

displayCandidates();