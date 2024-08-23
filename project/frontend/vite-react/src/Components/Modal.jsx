
import { useState, useRef, useMemo, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const DraggableMarker = ({ position, setPosition }) => {
  const markerRef = useRef(null);

  const eventHandlers = useMemo(() => ({
    dragend() {
      const marker = markerRef.current;
      if (marker != null) {
        setPosition(marker.getLatLng());
      }
    },
  }), [setPosition]);

  return (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
    >
      <Popup minWidth={90}>
        <span>Marker is draggable</span>
      </Popup>
    </Marker>
  );
};

const MyMap = ({ data }) => {
  if (!data || data.latitude === undefined || data.longitude === undefined) {
    return <div>Error: Invalid data</div>;
  }

  const { latitude, longitude } = data;
  const center = {
    lat: latitude,
    lng: longitude,
  };

  const [position, setPosition] = useState(center);

  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{ height: "30vh", width: "70vw" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <DraggableMarker position={position} setPosition={setPosition} />
    </MapContainer>
  );
};

export default MyMap;
