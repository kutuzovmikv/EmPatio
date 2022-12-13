import {fetchData} from "../../common/fetch/fetch.js";

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
    createProfile();
});

function createProfile() {
    if(!checkForUser()) {
        return;
    }

    let user = JSON.parse(localStorage.getItem('user'));
    let name = document.getElementById("name");
    let email = document.getElementById("email");

    name.innerHTML = user.name;
    email.innerHTML = user.email;
}

function checkForUser() {
    if (!localStorage.getItem('user')) {
        toastr.error('You are not logged in!');
        document.getElementById('name').innerHTML = 'No user found';
        return false;
    }
    return true;
}