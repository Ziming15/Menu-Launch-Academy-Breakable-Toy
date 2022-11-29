import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapLoader = (props) => {
  const containerStyle = {
    height: "15rem",
  };

  const center = {
    lat: props.latitude,
    lng: props.longitude,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDhUmbHM88WHL5sJyX3Cy1rdJX-GoO1LnE">
      <div className="google-maps">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15}
          options={{
            streetViewControl: false,
            zoomControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
        >
          <Marker position={center} />
        </GoogleMap>
      </div>
    </LoadScript>
  );
};

export default GoogleMapLoader;
