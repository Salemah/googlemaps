import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    width: '600px',
    height: '400px'
  };
  
  const center = {
    lat: 23.707310,
    lng: 90.415480
  };
  

const Maps = () => {
    return (
        <div>
            <h1>This is map</h1>
            <LoadScript
      googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={13}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
        </div>
    );
};

export default Maps;