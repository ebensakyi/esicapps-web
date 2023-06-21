import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Map = () => {
  const coordinates = [51.505, -0.09]; // Replace with your desired coordinates

  return (
    <MapContainer center={coordinates} zoom={13} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors"
      />
      <Marker position={coordinates} />
    </MapContainer>
  );
};

export default Map;
