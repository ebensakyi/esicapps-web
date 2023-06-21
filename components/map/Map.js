import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  // useEffect(() => {
  //     // Initialize the map when the component mounts
  //     const map = L.map('map').setView([51.505, -0.09], 13);

  //     // Add the tile layer to the map
  //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       attribution: 'Map data &copy; OpenStreetMap contributors'
  //     }).addTo(map);

  //     // Add markers to the map
  //     L.marker([51.5, -0.09]).addTo(map);
  //   }, []);

  const coordinates = [7.967, -2.406]; // Replace with your desired coordinates

  return (
    <MapContainer
      center={coordinates}
      zoom={7}
      scrollWheelZoom={false}
      style={{ height: "800px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
      />
      <Marker position={coordinates}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
