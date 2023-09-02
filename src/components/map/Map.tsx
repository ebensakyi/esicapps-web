//// @ts-nocheck
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
  
  console.log("data==>", data);


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
    const place :any= autocompleteRef.current.getPlace();
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

  const getMarkersByForm = (formId:any) => {
    // let formId: any = formId?.current?.value
    


    router.push(
        `${pathname}?formId=${formId}`

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
          </Autocomplete><button type="button" className="btn btn-outline-primary"  onClick={(e)=>{getMarkersByForm(1)}}>Residential</button>

          <button type="button" className="btn btn-outline-primary" onClick={(e)=>{getMarkersByForm(2)}}>Eating & Drinking</button>
          <button type="button" className="btn  btn-outline-primary"  onClick={(e)=>{getMarkersByForm(4)}}>Hospitality</button>
          <button type="button" className="btn  btn-outline-primary"  onClick={(e)=>{getMarkersByForm(3)}}>Health</button>
          <button type="button" className="btn  btn-outline-primary"  onClick={(e)=>{getMarkersByForm(5)}}>Institution</button>
          <button type="button" className="btn  btn-outline-primary"  onClick={(e)=>{getMarkersByForm(6)}}>Industry</button>
          <button type="button" className="btn  btn-outline-primary"  onClick={(e)=>{getMarkersByForm(7)}}>Market</button>
          <button type="button" className="btn  btn-outline-primary" onClick={(e)=>{getMarkersByForm(8)}}>Sanitary</button>

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



          {data?.mapData?.map((pos:any) => (
            <MarkerF
              key={pos.id}
              position={{ lat: Number(pos?.BasicInfoSection?.latitude), lng: Number(pos?.BasicInfoSection?.longitude) }}
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


function definePointIcon(score: number, form: number) {
  if (scoreCalculation(score) == 'Good' && form == 2) {
    return '/assets/img/rating_img/eatery_green.png'
  }
  else if (scoreCalculation(score) == 'Average' && form == 2) {
    return '/assets/img/rating_img/eatery_yellow.png'
  }
  else if (scoreCalculation(score) == 'Poor' && form == 2) {
    return '/assets/img/rating_img/eatery_red.png'
  }
  else if (scoreCalculation(score) == 'Good' && form == 1) {
    return '/assets/img/rating_img/residential_green.png'
  }
  else if (scoreCalculation(score) == 'Average' && form == 1) {
    return '/assets/img/rating_img/residential_yellow.png'
  }
  else if (scoreCalculation(score) == 'Poor' && form == 1) {
    return '/assets/img/rating_img/residential_red.png'
  }
  else if (scoreCalculation(score) == 'Good' && form == 7) {
    return '/assets/img/rating_img/market_green.png'
  }
  else if (scoreCalculation(score) == 'Average' && form == 7) {
    return '/assets/img/rating_img/market_yellow.png'
  }
  else if (scoreCalculation(score) == 'Poor' && form == 7) {
    return '/assets/img/rating_img/market_red.png'
  }
  else if (scoreCalculation(score) == 'Good' && form == 5) {
    return '/assets/img/rating_img/school_green.png'
  }
  else if (scoreCalculation(score) == 'Average' && form == 5) {
    return '/assets/img/rating_img/school_yellow.png'
  }
  else if (scoreCalculation(score) == 'Poor' && form == 5) {
    return '/assets/img/rating_img/school_red.png'
  }
  else if (scoreCalculation(score) == 'Good' && form == 3) {
    return '/assets/img/rating_img/health_green.png'
  }
  else if (scoreCalculation(score) == 'Average' && form == 3) {
    return '/assets/img/rating_img/health_yellow.png'
  }
  else if (scoreCalculation(score) == 'Poor' && form == 3) {
    return '/assets/img/rating_img/health_red.png'
  }
  else if (scoreCalculation(score) == 'Good' && form == 6) {
    return '/assets/img/rating_img/industry_green.png'
  }
  else if (scoreCalculation(score) == 'Average' && form == 6) {
    return '/assets/img/rating_img/industry_yellow.png'
  }
  else if (scoreCalculation(score) == 'Poor' && form == 6) {
    return '/assets/img/rating_img/industry_red.png'
  }
  else if (scoreCalculation(score) == 'Good' && form == 4) {
    return '/assets/img/rating_img/hospitality_green.png'
  }
  else if (scoreCalculation(score) == 'Average' && form == 4) {
    return '/assets/img/rating_img/hospitality_yellow.png'
  }
  else if (scoreCalculation(score) == 'Poor' && form == 4) {
    return '/assets/img/rating_img/hospitality_red.png'
  } else if (scoreCalculation(score) == 'Good' && form == 8) {
    return '/assets/img/rating_img/sanitation_green.png'
  }
  else if (scoreCalculation(score) == 'Average' && form == 8) {
    return '/assets/img/rating_img/sanitation_yellow.png'
  }
  else if (scoreCalculation(score) == 'Poor' && form == 8) {
    return '/assets/img/rating_img/sanitation_red.png'
  }
  // else {
  //   return '/img/poor.png'
  // }
}


const scoreCalculation = (rating: number) => {
  try {
    if (rating >= 4) {
      return "Good"
    } else if (rating >= 3 && rating < 4) {
      return "Average"
    } else if (rating < 3) {
      return "Poor"
    } else {
      return ""
    }
  } catch (error) { }
};






export default Map;








