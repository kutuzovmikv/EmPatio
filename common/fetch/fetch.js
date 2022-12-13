export function fetchData() {
    // generate a random numer from 1 to 10
    let random = Math.floor(Math.random() * 10) + 1;
    fetch('https://jsonplaceholder.typicode.com/users/' + random)
        .then(response => response.json())
        .then(user => {
            localStorage.removeItem('error');
            localStorage.setItem('user', JSON.stringify(user));
        })
        .catch((error) => {
            localStorage.removeItem('user');
            localStorage.setItem('error', JSON.stringify(error));
        });
}