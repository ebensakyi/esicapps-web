// @ts-nocheck
'use client'
import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = ({ data }:any) => {
    console.log(data);
    
    
  // useEffect(() => {
    

  //     // Initialize the map when the component mounts
  //     const map = L.map('map').setView([51.505, -0.09], 13);

  //     // Add the tile layer to the map
  //     L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       attribution: 'Map data &copy; OpenStreetMap contributors'
  //     }).addTo(map);

  //     // Add markers to the map
  //     L.marker([51.5, -0.09]).addTo(map);
  //  }, []);

  const position = [7.967, -1.505];
  // const coordinates = [7.967, -1.505];
  return (
    <></>
    // <MapContainer
    //   center={position}
    //   zoom={7}
    //   scrollWheelZoom={false}
    //   style={{ height: "800px" }}
    // >
    //   <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
    //   />
    //   {data?.mapData?.map((point:any, index:any) => (
    //     <Marker key={index} position={[point.latitude, point.longitude]}>
    //       <Popup>{point.electoralArea}{" | "}{point.community}{" | "}{point.respondentName}{" | "}{point.respondentPhoneNumber}{"\n"}</Popup>
    //     </Marker>
    //   ))}
    // </MapContainer>
  );
};

export default Map;