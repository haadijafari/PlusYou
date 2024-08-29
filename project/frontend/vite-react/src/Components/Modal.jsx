import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from "./Modal.module.css"

// آیکون Marker قرمز
const redIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MyMap = ({ data }) => {
  if (!data || data.latitude === undefined || data.longitude === undefined) {
    return <div>Error: Invalid data</div>;
  }

  const { latitude, longitude } = data;
  const center = {
    lat: latitude,
    lng: longitude,
  };

  return (
    <MapContainer 
      center={center} 
      zoom={15} 
      scrollWheelZoom={false} 
      className={styles.responsiveMap}
      // style={{ height: "400px", width: "400px" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center} icon={redIcon}>
        <Popup>
          مکان مورد نظر شما اینجاست.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;



