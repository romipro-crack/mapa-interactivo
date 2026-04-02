var map = L.map('map').setView([-34.6037, -58.3816], 13);

// Modo claro
var lightLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
});

// Modo oscuro (CartoDB Dark)
var darkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    attribution: '© CartoDB © OpenStreetMap'
});

// agregar capa inicial
lightLayer.addTo(map);

// marcador
L.marker([-34.6037, -58.3816])
   .addTo(map)
   .bindPopup("Ubicación inicial")
   .openPopup();

// control de capas
var capas = { 
   "Mapa normal": lightLayer, 
   "Mapa oscuro": darkLayer
};

L.control.layers(capas).addTo(map);