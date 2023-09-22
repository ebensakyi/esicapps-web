// @ts-nocheck
'use client'
import { useState, useRef, Key } from "react";
import {
  GoogleMap,
  useLoadScript,
  MarkerF,
  Autocomplete,
  MarkerClusterer,
} from "@react-google-maps/api";
import { useSession } from "next-auth/react";
import { redirect, usePathname, useRouter, useSearchParams } from "next/navigation";
import { LOGIN_URL } from "@/config";


const Map = ({ data }: any) => {

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect(LOGIN_URL);
    }
  })
  const router = useRouter();
  const pathname = usePathname()
  const searchParams = useSearchParams()



  const [selectedPlace, setSelectedPlace] = useState(null);
  const [searchLngLat, setSearchLngLat] = useState(null);
  const [currentLocation, setCurrentLocation] = useState(null);
  const autocompleteRef = useRef(null);
  const [address, setAddress] = useState("");

  // laod script for google map
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading....</div>;

  // static lat and lng
  const center = { lat: 7.967, lng: -1.505 };

  // handle place change on search
  const handlePlaceChanged = () => {
    const place: any = autocompleteRef.current.getPlace();
    setSelectedPlace(place);
    setSearchLngLat({
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    });
    setCurrentLocation(null);
  };

  // get current location
  const handleGetLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setSelectedPlace(null);
          setSearchLngLat(null);
          setCurrentLocation({ lat: latitude, lng: longitude });


        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  // on map load
  const onMapLoad = (map: { controls: HTMLDivElement[][]; }) => {
    const controlDiv = document.createElement("div");
    const controlUI = document.createElement("div");
    controlUI.innerHTML = "Get Location";
    controlUI.style.backgroundColor = "white";
    controlUI.style.color = "black";
    controlUI.style.border = "2px solid #ccc";
    controlUI.style.borderRadius = "3px";
    controlUI.style.boxShadow = "0 2px 6px rgba(0,0,0,.3)";
    controlUI.style.cursor = "pointer";
    controlUI.style.marginBottom = "22px";
    controlUI.style.textAlign = "center";
    controlUI.style.width = "100%";
    controlUI.style.padding = "8px 0";
    controlUI.addEventListener("click", handleGetLocationClick);
    controlDiv.appendChild(controlUI);

    // const centerControl = new window.google.maps.ControlPosition(
    //   window.google.maps.ControlPosition.TOP_CENTER,
    //   0,
    //   10
    // );

    map.controls[window.google.maps.ControlPosition.TOP_CENTER].push(
      controlDiv
    );
  };

  const getMarkersByForm = (status: any) => {
    // let status: any = status?.current?.value
console.log("status ",status);

    router.push(
      `${pathname}?status=${status}`

    );

  }


  return (
    <main id="main" className="main">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* search component  */}


        {/* <div class="card">
          <div class="card-body"> */}
        {/* <h5 class="card-title">  */}


        {/* </h5> */}

        <div className="btn-group" role="group" aria-label="Basic example" >
          <Autocomplete
            onLoad={(autocomplete) => {
              //console.log("Autocomplete loaded:", autocomplete);
              autocompleteRef.current = autocomplete;
            }}
            onPlaceChanged={handlePlaceChanged}
            options={{ fields: ["address_components", "geometry", "name"] }}
          >
            <input type="text" className="form-control" placeholder="Search for a location" />
          </Autocomplete>
          <button type="button" className="btn btn-outline-primary" onClick={(e) => { getMarkersByForm() }}>All</button>
          <button type="button" className="btn btn-outline-danger" onClick={(e) => { getMarkersByForm(0) }}>Pending</button>
          <button type="button" className="btn btn-outline-warning" onClick={(e) => { getMarkersByForm(2) }}>In progress</button>
          <button type="button" className="btn  btn-outline-success" onClick={(e) => { getMarkersByForm(1) }}>Completed</button>


          {/* </div> 



          </div> */}
        </div>

        <GoogleMap
          zoom={currentLocation || selectedPlace ? 18 : 7.4}
          center={currentLocation || searchLngLat || center}
          mapContainerClassName="map"
          mapContainerStyle={{ height: '80vh', width: '100%', margin: "auto" }}
        //onLoad={onMapLoad}
        >

          {/* <MarkerClusterer
      onClick={props.onMarkerClustererClick}
      averageCenter
      enableRetinaIcons
      gridSize={60}
    >
      {props.markers.map(marker => (
        <Marker
          key={marker.photo_id}
          position={{ lat: marker.latitude, lng: marker.longitude }}
        />
      ))}

    </MarkerClusterer> */}



          {data?.mapData?.map((pos: any) => (
            <MarkerF
              key={pos.id}
              position={{ lat: Number(pos?.mapData?.latitude), lng: Number(pos?.mapData?.longitude) }}
              title={pos?.community}
              //label={pos?.community}
              icon={definePointIcon(pos?.totalRating, pos?.inspectionFormId)}
            />
          ))}
          {/* <Marker position={{lat: -0.009313, lng:9.445632}}/> */}



          {/* {selectedPlace && <Marker position={searchLngLat} />} */}
          {/* {currentLocation && <Marker position={currentLocation} />} */}
        </GoogleMap>
      </div>
    </main>
  );
};


function definePointIcon(status: number) {
  if (status == 0) {
    return '/assets/img/bin-red.png'
  }
  else if (status == 1) {
    return '/assets/img/bin-green.png'
  }
  else if (status == 2) {
    return '/assets/img/bin-yellow.png'
  }

}








export default Map;








