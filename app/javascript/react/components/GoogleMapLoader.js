import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GoogleMapLoader = (props) => {
  const containerStyle = {
    height: "20rem",
  
  };

  const center = {
    lat: props.latitude,
    lng: props.longitude,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDhUmbHM88WHL5sJyX3Cy1rdJX-GoO1LnE">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        options={{
          streetViewControl: true,
          zoomControl: true,
          mapTypeControl: true,
          fullscreenControl: false,
        }}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapLoader;
