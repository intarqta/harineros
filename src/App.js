import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { ModalTitle } from 'react-bootstrap';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// Si estás importando el JSON localmente
import placesData from './assets/places.json';

import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import institutionalLogo from './assets/IMG/logo_inta.png'; // Importar el logo institucional

// Importamos los SVG
import logo1 from './assets/IMG/4_reinos_transp.svg';
import logo2 from './assets/IMG/Coliqueo.png';
import logo3 from './assets/IMG/Don Paisa.png';
import logo4 from './assets/IMG/la clarita.svg';
import logo5 from './assets/IMG/LA CONSTANCIA.svg';
import logo6 from './assets/IMG/Fincas el paraiso.svg';
import logo7 from './assets/IMG/Ecocampo la amistad.svg';
import logo8 from './assets/IMG/Masabia.svg';
import logo9 from './assets/IMG/Milpa.svg';
import logo10 from './assets/IMG/Monte callado.svg';
import logo11 from './assets/IMG/Rama negra.svg';
import logo12 from './assets/IMG/Vuelta al campo.svg';
import logo13 from './assets/IMG/argelanda.svg';
import logo14 from './assets/IMG/el huerto interior.svg';
import logo15 from './assets/IMG/en ronda.svg';
import logo16 from './assets/IMG/germinal.svg';
import logo17 from './assets/IMG/hersilia.svg';
import logo18 from './assets/IMG/la carolina.svg';
import logo19 from './assets/IMG/la pachita.svg';
import logo20 from './assets/IMG/maray.svg';
import logo21 from './assets/IMG/la porfía.svg';
import logo22 from './assets/IMG/logo PACA jpg.svg';
import logo23 from './assets/IMG/loma brava.svg';
import logo24 from './assets/IMG/minhoca.svg';
import logo25 from './assets/IMG/monteflore.svg';
import logo26 from './assets/IMG/neike.svg';
import logo27 from './assets/IMG/newen.svg';
import logo28 from './assets/IMG/otro costal png.svg';
import logo29 from './assets/IMG/sangenarina.svg';
import logo30 from './assets/IMG/semillas del sol_.svg';
import logo31 from './assets/IMG/taku.svg';
import logo32 from './assets/IMG/trigo limpio.svg';



// Necesitamos ajustar el icono predeterminado de leaflet porque no carga correctamente en proyectos de React.
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});



const App = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    // Cargar los datos de lugares
    setPlaces(placesData.features);
  }, []);


// console.log(placesData.features)
  return (
    <div className="container-fluid">
    {/* Título elegante con Bootstrap */}
    <div className="bg-light p-4 rounded shadow text-center my-4">
      <h1 className="display-4">Mapeo de Harineros de Trigo Agroecológico en la Región Pampeana Argentina</h1>
      <p className="lead">Un análisis visual de la distribución geográfica de los harineros agroecológicos</p>
    </div>

    {/* Contenedor del mapa */}
    <div style={{ height: '80vh' }}>
      <MapContainer center={[-33.12339, -60.34837]} zoom={5} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* Usamos un condicional para asignar el icono correcto a cada marcador */}
        {places.map((place, index) => {
          console.log(place.properties.NombreH)
          // Escoge el icono basado en algún criterio, como el nombre o la posición
          let customIcon = L.icon({
            iconUrl: logo1,
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [0, -50],
          });; // icono predeterminado

          let logoPopup = logo1;

      if (place.properties.NombreH === 'La Clarita') {
        customIcon = L.icon({
          iconUrl: logo4,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo4;
       
       }
       else if (place.properties.NombreH === 'Vuelta al campo') {
        customIcon = L.icon({
          iconUrl: logo12,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo12;
       
       }else if (place.properties.NombreH === 'Trigo Limpio') {
        customIcon = L.icon({
          iconUrl: logo32,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo32;
       
       }else if (place.properties.NombreH === 'Rama Negra') {
        customIcon = L.icon({
          iconUrl: logo11,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo11;
       }else if (place.properties.NombreH === 'Otro Costal') {
        customIcon = L.icon({
          iconUrl: logo28,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo28;
       
       }else if (place.properties.NombreH === 'La Pachita') {
        customIcon = L.icon({
          iconUrl: logo19,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo19;
       
       }else if (place.properties.NombreH === 'Milpa') {
        customIcon = L.icon({
          iconUrl: logo9,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo9;
       
       }else if (place.properties.NombreH === 'Argelanda') {
        customIcon = L.icon({
          iconUrl: logo13,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo13;
       
       }else if (place.properties.NombreH === 'Fincas el Paraíso') {
        customIcon = L.icon({
          iconUrl: logo6,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo6;
       
       }else if (place.properties.NombreH === 'Monte Callado') {
        customIcon = L.icon({
          iconUrl: logo10,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo10;
       
       }else if (place.properties.NombreH === 'El huerto interior') {
       
        customIcon = L.icon({
          iconUrl: logo14,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo14;
       }else if (place.properties.NombreH === 'Germinal') {
        customIcon = L.icon({
          iconUrl: logo16,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo16;
       }else if (place.properties.NombreH === 'Maray') {
        customIcon = L.icon({
          iconUrl: logo6,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo6;
       
       }else if (place.properties.NombreH === 'Taku') {
        customIcon = L.icon({
          iconUrl: logo31,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo31;
       }else if (place.properties.NombreH === 'Minhoca') {
        customIcon = L.icon({
          iconUrl: logo24,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
       
       }else if (place.properties.NombreH === 'Semillas del Sol') {
        customIcon = L.icon({
          iconUrl: logo30,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo30;
       }else if (place.properties.NombreH === 'PACa') {
        customIcon = L.icon({
          iconUrl: logo22,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo22;
       }else if (place.properties.NombreH === 'Granja La Carolina') {
        customIcon = L.icon({
          iconUrl: logo18,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo18;
       }else if (place.properties.NombreH === 'La Porfía') {
        customIcon = L.icon({
          iconUrl: logo21,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo21;
       }else if (place.properties.NombreH === 'Neike') {
        customIcon = L.icon({
          iconUrl: logo26,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo26;
       
       }else if (place.properties.NombreH === 'Chacra Monteflore') {
        customIcon = L.icon({
          iconUrl: logo25,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo25;
       }else if (place.properties.NombreH === 'Ecocampo La Amistad') {
        customIcon = L.icon({
          iconUrl: logo7,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo7;
       
       }else if (place.properties.NombreH === 'Sangenharina') {
        customIcon = L.icon({
          iconUrl: logo29,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo29;
       }else if (place.properties.NombreH === 'Hersilia de Otro costal') {
        customIcon = L.icon({
          iconUrl: logo28,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo28;
       }else if (place.properties.NombreH === '4 Reinos') {
        customIcon = L.icon({
          iconUrl: logo1,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo1;
       }else if (place.properties.NombreH === 'Loma Brava') {
        customIcon = L.icon({
          iconUrl: logo23,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo23;
       }else if (place.properties.NombreH === 'Coliqueo ') {
        customIcon = L.icon({
          iconUrl: logo2,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo2;
       }else if (place.properties.NombreH === 'La Constancia') {
        customIcon = L.icon({
          iconUrl: logo5,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo5;
       }else if (place.properties.NombreH === 'Newen Pampeana') {
        customIcon = L.icon({
          iconUrl: logo27,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo27;
       }else if (place.properties.NombreH === 'enRonda') {
        customIcon = L.icon({
          iconUrl: logo15,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo15;
       }else if (place.properties.NombreH === 'Masabi') {
        customIcon = L.icon({
          iconUrl: logo8,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo8;
       }else if (place.properties.NombreH === 'Don Paisa') {
        customIcon = L.icon({
          iconUrl: logo3,
          iconSize: [50, 50],
          iconAnchor: [25, 50],
          popupAnchor: [0, -50],
        });
        logoPopup = logo3;
       }


          return (
            
            <Marker key={index} position={[place.geometry.coordinates[1],place.geometry.coordinates[0]]} icon={customIcon}>
              <Popup>
              <div className="popup-content">
                  <ModalTitle>{place.properties.NombreE}</ModalTitle>
                  <div className="popup-body">
                  <div className="popup-body">
                    <p><strong>Persona de Contacto:</strong> {place.properties.Contacto}</p>
                    <p><strong>Contacto:</strong> {place.properties.DatosContacto}</p>
                  </div>
                  
                    
                  </div>
                  <div className="popup-footer">
                  <img src={logoPopup} alt={place.properties.NombreE} style={{ width: '80px' }} />
                  </div>
                </div>
            </Popup>
            </Marker>
          );
        })}
        <a href="https://inta.gob.ar/" target="_blank" rel="noopener noreferrer">
        <img src={institutionalLogo} alt="Logo Institucional" className="institutional-logo" />
      </a>
      </MapContainer>
      
    </div>
    </div>
  );
};

export default App;
