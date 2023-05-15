// import { useState, useEffect } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from "next/router";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';


// export function ChangeView({ coords }) {
//   const map = useMap();
//   map.setView(coords, 12);
//   return null;
// }

// const MapView = ({}) => {
//   const [geoData, setGeoData] = useState({  lat: -4.262,lng: 3.7388, });

//   const center = [geoData.lat, geoData.lng];



// //   var map = L.map('map', {
// //     minZoom: 7,
// //     maxZoom: 20,
// //     zoomControl: false,
// //     maxBounds: L.latLngBounds([3.7388, -4.262], [12.1748, 2.200]),
// //     measureControl: false,
// // }).setView([5.799, 0.40], 9);
// // var initialbasemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
// //     attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
// // }).addTo(map);


//   return (
//     <div className="row">
//       <div className="col-12">
//         <div className="row">
//           <div className="col-lg-12">
//             <h5 className="mb-3">MAP</h5>
//             <div className="card">
//               <div className="card-header align-items-center d-flex">
//                 <div className="card-body">
//                   <MapContainer
//                     center={center}
//                     zoom={12}
//                     style={{ height: "100vh" }}
//                   >
//                     <TileLayer
//                       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//                       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     />
//                     {geoData.lat && geoData.lng && (
//                       <Marker position={[geoData.lat, geoData.lng]} />
//                     )}
//                     <ChangeView coords={center} />
//                   </MapContainer>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/*end col*/}
//       </div>
//     </div>
//   );
// };

// export default MapView;
