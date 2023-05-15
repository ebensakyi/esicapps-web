// import { useState, useEffect } from "react";
// import axios from "axios";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { useRouter } from "next/router";
// import L from "leaflet";
// import "leaflet/dist/leaflet.css";

// import { MapContainer,TileLayer, Marker,Popup} from 'react-leaflet/MapContainer'

// const MapView = ({}) => {
//   useEffect(() => {
//     let current_lat = 28.625789;
//     let current_long = 77.0547899;
//     let current_zoom = 16;
//     let center_lat = current_lat;
//     let center_long = current_long;
//     let center_zoom = current_zoom;

//     // The <div id="map"> must be added to the dom before calling L.map('map')
//     let map = L.map("map", {
//       center: [center_lat, center_long],
//       zoom: center_zoom,
//     });

//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution:
//         '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }).addTo(map);
//   });

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
//                     center={[40.8054, -74.0241]}
//                     zoom={14}
//                     scrollWheelZoom={false}
//                     style={{ height: "100%", width: "100%" }}
//                   >
//                     <TileLayer
//                       url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZWJlbnNha3lpIiwiYSI6ImNsYmdvdDkzYTAwa3Ezd3M4dTlydWtwNWIifQ.oWTzvY2te7S3KfdlAgIBsg`}
//                       attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
//                     />
//                     <Marker
//                       position={[40.8054, -74.0241]}
//                       draggable={true}
//                       animate={true}
//                     >
//                       <Popup>Hey ! I live here</Popup>
//                     </Marker>
//                   </MapContainer>{" "}
//                   {/* <div id="map" className="leaflet-map"></div> */}
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
