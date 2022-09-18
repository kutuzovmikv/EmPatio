jQuery(document).ready(main)

function main() {
    var map = L.map('map', {zoomControl: false, attributionControl: false}).setView([59.956386, 30.309993], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
}
