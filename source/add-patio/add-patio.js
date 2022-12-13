document.addEventListener('DOMContentLoaded', () => {
    let add = document.getElementById('submit');
    add.addEventListener('submit', (e) => {
        e.preventDefault();
    });
    document.getElementById("submit").addEventListener("click", function() {
        toastr.success('Дворик успешно добавлен!');
    });
});

function savePatio() {
    let patio = []

    let patioName = document.getElementById("name").value;
    let patioAddress = document.getElementById("address").value;
    let patioDescription = document.getElementById("description").value;

    if (patioName === '') return;
    patio.push([patioAddress, patioDescription]);

    localStorage.setItem(patioName, JSON.stringify(patio));
    reset();
}

function reset() {
    document.getElementById("name").value = '';
    document.getElementById("address").value = '';
    document.getElementById("description").value = '';
}